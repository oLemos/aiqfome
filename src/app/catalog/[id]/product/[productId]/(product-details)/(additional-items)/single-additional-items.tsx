import { AdditionalItem } from "@/data/data-types";

import { MealPrice } from "@/app/catalog/[id]/meal-price";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface SingleAdditionalItemsProps {
	additionalItems: AdditionalItem[];
}

export const SingleAdditionalItems = ({
	additionalItems,
}: SingleAdditionalItemsProps) => {
	return (
		<RadioGroup>
			{additionalItems.map((additionalItem) => (
				<div
					key={additionalItem.id}
					className="flex items-center justify-between"
				>
					<div className="flex items-center gap-1">
						<RadioGroupItem
							value={additionalItem.name}
							id={additionalItem.name}
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
		</RadioGroup>
	);
};
