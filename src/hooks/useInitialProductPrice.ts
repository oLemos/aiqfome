import { ActiveProduct } from "@/store/useProductStore";

export function useInitialProductPrice(product: ActiveProduct): number {
	const { variations, price, promoPrice } = product;

	if (promoPrice) {
		return promoPrice;
	}

	if (variations?.length) {
		return Math.min(...variations.map((v) => v.promoPrice ?? v.price));
	}

	return price ?? 0;
}
