"use client";

import { useProductStore } from "@/store/useProductStore";

import { ProductSummary } from "./product-summary";
import { ProductDetails } from "./(product-details)";
import { ObservationField } from "./(product-details)/observation-field";
import { ProductFooter } from "./product-footer";

interface ProductComponentProps {
	productId: string;
	storeId: string;
}

export const ProductComponent = ({}: ProductComponentProps) => {
	const cachedProduct = useProductStore((state) => state.activeProduct);

	if (!cachedProduct) {
		return <p>Produto não encontrado</p>;
	}

	return (
		<>
			<div className="w-full flex flex-col flex-grow">
				<ProductSummary product={cachedProduct} />

				<section className="w-full bg-gray-50 py-1">
					<ProductDetails product={cachedProduct} />
				</section>

				<section className="w-full py-1">
					<div className="w-full py-6 px-4">
						<ObservationField />
					</div>
				</section>
			</div>

			<ProductFooter />
		</>
	);
};
