import { useProductStore } from "@/store/useProductStore";
import { MealPrice } from "@/app/catalog/[id]/meal-price";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AdditionalItem } from "@/data/data-types";

interface SingleAdditionalItemsProps {
	additionalItems: AdditionalItem[];
	categoryLabel: string;
	limitedQuantity: number;
}

export const SingleAdditionalItems = ({
	additionalItems,
	categoryLabel,
}: SingleAdditionalItemsProps) => {
	const { activeProduct, updateActiveProduct } = useProductStore();

	const selectedId = activeProduct?.additionalItems
		?.find((cat) => cat.label === categoryLabel)
		?.additionalItems.find((item) => item.quantity === 1)?.id;

	function handleSelect(id: string) {
		if (!activeProduct) {
			return;
		}

		const updatedCategories = activeProduct.additionalItems?.map((cat) => {
			if (cat.label !== categoryLabel) return cat;

			return {
				...cat,
				additionalItems: cat.additionalItems.map((item) => ({
					...item,
					quantity: item.id === id ? 1 : 0,
				})),
			};
		});

		updateActiveProduct({
			...activeProduct,
			additionalItems: updatedCategories,
		});
	}

	return (
		<RadioGroup value={selectedId} onValueChange={handleSelect}>
			{additionalItems.map((item) => (
				<div
					key={item.id}
					className="flex items-center justify-between"
				>
					<div className="flex items-center gap-1">
						<RadioGroupItem value={item.id} id={item.id} />
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
			))}
		</RadioGroup>
	);
};
