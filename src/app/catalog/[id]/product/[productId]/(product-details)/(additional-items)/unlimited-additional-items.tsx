import { AdditionalItem } from "@/data/data-types";

import { MealPrice } from "@/app/catalog/[id]/meal-price";
import { CountButton } from "@/components/count-button";

interface UnlimitedAdditionalItemsProps {
	additionalItems: AdditionalItem[];
}

export const UnlimitedAdditionalItems = ({
	additionalItems,
}: UnlimitedAdditionalItemsProps) => {
	return (
		<>
			{additionalItems.map((additionalItem) => (
				<div
					key={additionalItem.id}
					className="flex items-center justify-between"
				>
					<div className="flex items-center gap-2">
						<CountButton quantity={1} />

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
