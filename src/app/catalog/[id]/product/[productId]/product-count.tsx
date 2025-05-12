import { Meal } from "@/data/data-types";
import { formatCurrencyNumber } from "@/utils/formatNumber";

interface ProductCountProps {
	product: Meal;
}

export const ProductCount = ({ product }: ProductCountProps) => {
	const formattedPrice = formatCurrencyNumber(19.9);

	return (
		<div className="w-full flex justify-between">
			<div className="flex flex-col gap-1.5">
				<strong>quantos?</strong>
				<span className="text-sm text-gray-300">
					total{" "}
					<strong className="text-gray-950">{formattedPrice}</strong>
				</span>
			</div>

			<button
				className="bg-gray-300 text-white px-6 h-10 rounded-[8px]"
				type="button"
			>
				adicionar
			</button>
		</div>
	);
};
