import { AdditionalItem } from "@/data/data-types";

import { MealPrice } from "@/app/catalog/[id]/meal-price";
import { CountButton } from "@/components/count-button";

interface UnlimitedAdditionalItemsProps {
	additionalItems: AdditionalItem[];
	categoryLabel: string;
}

export const UnlimitedAdditionalItems = ({
	additionalItems,
}: UnlimitedAdditionalItemsProps) => {
	function handleIncreaseItemQuantity() {}

	function handleDecreaseItemQuantity() {}

	return (
		<>
			{additionalItems.map((additionalItem) => (
				<div
					key={additionalItem.id}
					className="flex items-center justify-between"
				>
					<div className="flex items-center gap-2">
						<div className="flex gap-1.5">
							<CountButton
								quantity={1}
								handleDecrease={handleDecreaseItemQuantity}
								handleIncrease={handleIncreaseItemQuantity}
							/>
						</div>

						<span className="text-sm text-gray-300 lowercase">
							{additionalItem.name}
						</span>
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
