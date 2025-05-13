"use client";

import { useProductStore } from "@/store/useProductStore";
import { DetailSectionHeader } from "./detail-section-header";

interface ProductAccompanimentsProps {
	accompaniments: {
		limitedQuantity?: number | null;
		items: {
			id: string;
			name: string;
			price?: number;
		}[];
	};
}

export const ProductAccompaniments = ({
	accompaniments,
}: ProductAccompanimentsProps) => {
	const { activeProduct, updateActiveProduct } = useProductStore();

	const selectedCount =
		activeProduct?.accompaniments?.items.filter((item) => item.checked)
			.length ?? 0;

	function handleToggleAccompaniment(id: string) {
		if (!activeProduct?.accompaniments) return;

		const updatedItems = activeProduct.accompaniments.items.map((item) => {
			if (item.id === id) {
				const isChecked = item.checked ?? false;

				if (
					isChecked ||
					selectedCount < (accompaniments.limitedQuantity ?? Infinity)
				) {
					return { ...item, checked: !isChecked };
				}
			}

			return item;
		});

		updateActiveProduct({
			...activeProduct,
			accompaniments: {
				...activeProduct.accompaniments,
				items: updatedItems,
			},
		});
	}

	return (
		<>
			<DetailSectionHeader
				mandatory
				title="acompanhamentos"
				limitedQuantity={accompaniments.limitedQuantity}
			/>

			<div className="w-full flex flex-col gap-3">
				{accompaniments.items.map((accompaniment) => {
					const checked =
						activeProduct?.accompaniments?.items.find(
							(item) => item.id === accompaniment.id
						)?.checked ?? false;

					return (
						<div
							key={accompaniment.id}
							className="flex items-center gap-2"
						>
							<input
								type="checkbox"
								id={accompaniment.id}
								checked={checked}
								onChange={() =>
									handleToggleAccompaniment(accompaniment.id)
								}
							/>

							<label
								htmlFor={accompaniment.id}
								className="text-sm text-gray-300 lowercase"
							>
								{accompaniment.name}
							</label>
						</div>
					);
				})}
			</div>
		</>
	);
};
