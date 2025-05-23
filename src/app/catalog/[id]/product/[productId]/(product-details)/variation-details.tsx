"use client";

import Image from "next/image";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DetailSectionHeader } from "./detail-section-header";
import { MealPrice } from "../../../meal-price";
import { ActiveProduct, useProductStore } from "@/store/useProductStore";

interface VariationDetailsProps {
	product: ActiveProduct;
}

export const VariationDetails = ({ product }: VariationDetailsProps) => {
	const { updateActiveProduct } = useProductStore();

	function handleSelect(selectedName: string) {
		const newVariations = product.variations?.map((variation) => ({
			...variation,
			checked: variation.name === selectedName,
		}));

		if (!newVariations) return;

		updateActiveProduct({
			...product,
			variations: newVariations,
		});
	}

	return (
		<>
			<DetailSectionHeader
				mandatory
				title="qual tamanho?"
				limitedQuantity={1}
			/>

			<RadioGroup
				value={product.variations?.find((v) => v.checked)?.name}
				onValueChange={handleSelect}
			>
				{product.variations!.map((variation) => (
					<div
						key={variation.name}
						className="flex items-center justify-between"
					>
						<div className="flex items-center gap-1">
							<RadioGroupItem
								value={variation.name}
								id={variation.name}
							/>

							{variation.promoPrice && (
								<Image
									src="/icons/promo-icon.svg"
									alt=""
									width={24}
									height={24}
								/>
							)}

							<label
								htmlFor={variation.name}
								className="text-sm text-gray-300 lowercase"
							>
								{variation.name}
							</label>
						</div>

						<div>
							<MealPrice
								promoPrice={variation.promoPrice}
								price={variation.price}
								extended
							/>
						</div>
					</div>
				))}
			</RadioGroup>
		</>
	);
};
