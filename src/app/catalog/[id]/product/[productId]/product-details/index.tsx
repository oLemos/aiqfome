import { ReactNode } from "react";

import { Meal } from "@/data/data-types";
import { VariationDetails } from "./variation-details";
import { ProductAccompaniments } from "./product-accompaniments";

const SectionContainer = ({ children }: { children: ReactNode }) => {
	return (
		<section className="bg-white p-4 gap-4 flex flex-col">
			{children}
		</section>
	);
};

interface ProductDetailsProps {
	product: Meal;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	return (
		<div className="w-full">
			{product.variations && (
				<SectionContainer>
					<VariationDetails variations={product.variations} />
				</SectionContainer>
			)}

			{product.accompaniments && (
				<SectionContainer>
					<ProductAccompaniments
						accompaniments={product.accompaniments}
					/>
				</SectionContainer>
			)}
		</div>
	);
};
