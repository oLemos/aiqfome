"use client";

import { useProductStore } from "@/store/useProductStore";
import { MealPrice } from "@/app/catalog/[id]/meal-price";
import { AdditionalItem } from "@/data/data-types";

interface MultipleAdditionalItemsProps {
	additionalItems: AdditionalItem[];
	categoryLabel: string;
	limitedQuantity: number;
}

export const MultipleAdditionalItems = ({
	additionalItems,
	categoryLabel,
	limitedQuantity,
}: MultipleAdditionalItemsProps) => {
	const { activeProduct, updateActiveProduct } = useProductStore();

	const selectedItems =
		activeProduct?.additionalItems
			?.find((cat) => cat.label === categoryLabel)
			?.additionalItems.filter((item) => item.quantity === 1) ?? [];

	const selectedIds = selectedItems.map((item) => item.id);

	const handleToggle = (id: string) => {
		if (!activeProduct) {
			return;
		}

		const currentCategory = activeProduct.additionalItems?.find(
			(cat) => cat.label === categoryLabel
		);

		if (!currentCategory) {
			return;
		}

		const isSelected = selectedIds.includes(id);
		const currentlySelectedCount = selectedIds.length;

		if (!isSelected && currentlySelectedCount >= limitedQuantity) {
			return;
		}

		const updatedCategories = activeProduct.additionalItems?.map((cat) => {
			if (cat.label !== categoryLabel) return cat;

			return {
				...cat,
				additionalItems: cat.additionalItems.map((item) => {
					if (item.id !== id) return item;

					return {
						...item,
						quantity: isSelected ? 0 : 1,
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
				const checked = selectedIds.includes(item.id);

				return (
					<div
						key={item.id}
						className="flex items-center justify-between"
					>
						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								id={item.id}
								checked={checked}
								onChange={() => handleToggle(item.id)}
							/>

							<label
								htmlFor={item.id}
								className="text-sm text-gray-300 lowercase"
							>
								{item.name}
							</label>
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
