import { ReactNode } from "react";

import { Meal } from "@/data/data-types";

import { VariationDetails } from "./variation-details";
import { ProductAccompaniments } from "./product-accompaniments";
import { AdditionalItems } from "./(additional-items)";

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
		<div className="w-full flex flex-col gap-1">
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

			{product.additionalItems?.map((category) => (
				<SectionContainer key={category.label}>
					<AdditionalItems additionalItemsCategory={category} />
				</SectionContainer>
			))}
		</div>
	);
};
