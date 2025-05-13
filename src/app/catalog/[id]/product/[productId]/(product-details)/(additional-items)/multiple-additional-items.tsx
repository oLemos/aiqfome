import { AdditionalItem } from "@/data/data-types";

import { MealPrice } from "@/app/catalog/[id]/meal-price";

interface MultipleAdditionalItemsProps {
	additionalItems: AdditionalItem[];
	categoryLabel: string;
	limitedQuantity: number;
}

export const MultipleAdditionalItems = ({
	additionalItems,
}: MultipleAdditionalItemsProps) => {
	return (
		<>
			{additionalItems.map((additionalItem) => (
				<div
					key={additionalItem.id}
					className="flex items-center justify-between"
				>
					<div className="flex items-center gap-2">
						<input
							value={additionalItem.name}
							id={additionalItem.name}
							type="checkbox"
						/>

						<label
							htmlFor={additionalItem.name}
							className="text-sm text-gray-300 lowercase"
						>
							{additionalItem.name}
						</label>
					</div>

					{additionalItem.price ? (
						<div>
							<span className="font-bold text-sm text-purple-500">
								+
							</span>
							<MealPrice price={additionalItem.price} />
						</div>
					) : (
						""
					)}
				</div>
			))}
		</>
	);
};
