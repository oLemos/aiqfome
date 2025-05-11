import { Meal } from "@/data/data-types";
import { formatCurrencyNumber } from "@/utils/formatNumber";

interface MealPriceProps {
	meal: Meal;
}

export const MealPrice = ({ meal }: MealPriceProps) => {
	const hasPromo = meal.promoPrice && meal.price;
	const hasVariations = meal.variations && meal.variations.length > 0;

	if (hasPromo) {
		return (
			<div className="flex flex-col text-right">
				<span className="font-bold text-xs text-gray-300 line-through">
					{formatCurrencyNumber(meal.price!)}
				</span>
				<span className="font-bold text-sm text-green-500">
					{formatCurrencyNumber(meal.promoPrice!)}
				</span>
			</div>
		);
	}

	if (hasVariations) {
		const cheapestPrice = Math.min(...meal.variations!.map((v) => v.price));

		return (
			<div className="flex flex-col text-right">
				<span className="font-bold text-xs text-gray-300">
					a partir de
				</span>
				<span className="font-bold text-sm text-purple-500">
					{formatCurrencyNumber(cheapestPrice)}
				</span>
			</div>
		);
	}

	if (meal.price) {
		return (
			<span className="font-bold text-sm text-purple-500 text-right">
				{formatCurrencyNumber(meal.price)}
			</span>
		);
	}

	return null;
};
