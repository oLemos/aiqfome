"use client";

import { useProductStore } from "@/store/useProductStore";

import { mealsFromStoreId } from "@/utils/meals-from-store";
import { ProductSummary } from "./product-summary";
import { ProductDetails } from "./product-details";

interface ProductComponentProps {
	productId: string;
	storeId: string;
}

export const ProductComponent = ({
	productId,
	storeId,
}: ProductComponentProps) => {
	const { getState } = useProductStore;
	const cachedProduct = getState().activeProduct;

	const product =
		cachedProduct?.id === productId
			? cachedProduct
			: mealsFromStoreId(storeId).find((meal) => meal.id === productId);

	if (!product) {
		return <p>Produto não encontrado</p>;
	}

	return (
		<div className="w-full">
			<ProductSummary product={product} />

			<section className="w-full bg-gray-50 py-1">
				<ProductDetails product={product} />
			</section>
		</div>
	);
};
