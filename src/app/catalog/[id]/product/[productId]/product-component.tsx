"use client";

import { useProductStore } from "@/store/useProductStore";

import { mealsFromStoreId } from "@/utils/meals-from-store";

import { ProductSummary } from "./product-summary";
import { ProductDetails } from "./(product-details)";
import { Footer } from "@/components/footer";
import { ObservationField } from "./(product-details)/observation-field";

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
		<>
			<div className="w-full flex flex-col flex-grow">
				<ProductSummary product={product} />

				<section className="w-full bg-gray-50 py-1">
					<ProductDetails product={product} />
				</section>

				<section className="w-full py-1">
					<div className="w-full py-6 px-4">
						<ObservationField />
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
};
