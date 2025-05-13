"use client";

import { MealPrice } from "./meal-price";
import { TagsBadge } from "@/components/tags-badge";

import { Meal as MealType } from "@/data/data-types";
import { useProductStore } from "@/store/useProductStore";
import { useRouter } from "next/navigation";

interface MealContentProps {
	meal: MealType;
	storeId: string;
}

export const MealContent = ({ storeId, meal }: MealContentProps) => {
	const router = useRouter();

	const { setActiveProduct } = useProductStore();

	function handleClick() {
		setActiveProduct({
			...meal,
			quantity: 1,
			currentPrice: 0,
			variations: meal.variations?.map((variation) => ({
				...variation,
				checked: false,
			})),
		});

		router.push(`/catalog/${storeId}/product/${meal.id}`);
	}

	return (
		<div
			className="flex justify-between pl-6 pr-4 gap-4"
			onClick={handleClick}
		>
			<div>
				<div className="flex items-center gap-1">
					<h2 className="text-gray-900 text-sm font-semibold">
						{meal.name}
					</h2>

					{meal.tags.map((tag) => (
						<TagsBadge key={tag} tag={tag} />
					))}
				</div>

				<p className="text-gray-300 text-xs line-clamp-2">
					{meal.description}
				</p>
			</div>

			<MealPrice
				variations={meal.variations}
				promoPrice={meal.promoPrice}
				price={meal.price}
				direction="column"
			/>
		</div>
	);
};
