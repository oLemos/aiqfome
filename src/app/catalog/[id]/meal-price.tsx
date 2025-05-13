import { Variation } from "@/data/data-types";
import { formatCurrencyNumber } from "@/utils/formatNumber";

interface MealPriceProps {
	price?: number | undefined;
	promoPrice?: number | null;
	variations?: Variation[] | undefined;
	direction?: "row" | "column";
	extended?: boolean;
}

export const MealPrice = ({
	direction,
	variations,
	price,
	promoPrice,
	extended,
}: MealPriceProps) => {
	const hasPromo = promoPrice && price;
	const hasVariations = variations && variations.length > 0;

	const directionClass =
		direction === "column" ? "flex-col" : "items-center gap-1";

	if (hasPromo) {
		const extendedTextClass = extended ? "" : "line-through";

		return (
			<div className={`text-right flex ${directionClass}`}>
				<span
					className={`font-bold text-xs text-gray-300 ${extendedTextClass}`}
				>
					{extended && "de "}
					{formatCurrencyNumber(price)}
				</span>
				<span className="font-bold text-sm text-green-500">
					{extended && (
						<span className="font-bold text-sm text-gray-300">
							por{" "}
						</span>
					)}

					{formatCurrencyNumber(promoPrice)}
				</span>
			</div>
		);
	}

	if (hasVariations) {
		const cheapestPrice = Math.min(
			...variations.map((v) => v.promoPrice ?? v.price)
		);

		return (
			<div className={`text-right flex ${directionClass}`}>
				<span className="font-bold text-xs text-gray-300">
					a partir de
				</span>
				<span className="font-bold text-sm text-purple-500">
					{formatCurrencyNumber(cheapestPrice)}
				</span>
			</div>
		);
	}

	if (price) {
		return (
			<span className="font-bold text-sm text-purple-500 text-right">
				{formatCurrencyNumber(price)}
			</span>
		);
	}

	return null;
};
