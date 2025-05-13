"use client";

import { useProductStore } from "@/store/useProductStore";
import { MealPrice } from "@/app/catalog/[id]/meal-price";
import { CountButton } from "@/components/count-button";
import { AdditionalItem } from "@/data/data-types";

interface UnlimitedAdditionalItemsProps {
	additionalItems: AdditionalItem[];
	categoryLabel: string;
}

export const UnlimitedAdditionalItems = ({
	additionalItems,
	categoryLabel,
}: UnlimitedAdditionalItemsProps) => {
	const { activeProduct, updateActiveProduct } = useProductStore();

	const getItemQuantity = (itemId: string) => {
		return (
			activeProduct?.additionalItems
				?.find((cat) => cat.label === categoryLabel)
				?.additionalItems.find((item) => item.id === itemId)
				?.quantity ?? 0
		);
	};

	const updateItemQuantity = (itemId: string, delta: number) => {
		if (!activeProduct) {
			return;
		}

		const updatedCategories = activeProduct.additionalItems?.map((cat) => {
			if (cat.label !== categoryLabel) {
				return cat;
			}

			return {
				...cat,
				additionalItems: cat.additionalItems.map((item) => {
					if (item.id !== itemId) {
						return item;
					}

					const newQuantity = Math.max(
						0,
						(item.quantity ?? 0) + delta
					);

					return {
						...item,
						quantity: newQuantity,
					};
				}),
			};
		});

		updateActiveProduct({
			...activeProduct,
			additionalItems: updatedCategories,
		});
	};

	return (
		<>
			{additionalItems.map((item) => {
				const quantity = getItemQuantity(item.id);

				return (
					<div
						key={item.id}
						className="flex items-center justify-between"
					>
						<div className="flex items-center gap-2">
							<div className="flex gap-1.5">
								<CountButton
									quantity={quantity}
									handleIncrease={() =>
										updateItemQuantity(item.id, 1)
									}
									handleDecrease={() =>
										updateItemQuantity(item.id, -1)
									}
								/>
							</div>

							<span className="text-sm text-gray-300 lowercase">
								{item.name}
							</span>
						</div>

						{item.price ? (
							<div className="text-purple-500 text-sm font-bold">
								+ <MealPrice price={item.price} />
							</div>
						) : null}
					</div>
				);
			})}
		</>
	);
};
