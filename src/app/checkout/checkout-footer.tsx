"use client";

import { useCheckoutStore } from "@/store/useCheckoutStore";
import { formatCurrencyNumber } from "@/utils/formatNumber";

export const CheckoutFooter = () => {
	const checkoutItems = useCheckoutStore((state) => state.items);

	const totalAmount = checkoutItems.reduce((acc, item) => {
		const additionalAmount = item.additional?.reduce((acc, add) => {
			if (add.price) {
				acc += add.price;
			}

			return acc;
		}, 0);

		return ((additionalAmount ?? 0) + item.price) * item.quantity;
	}, 0);

	const formattedAmount = formatCurrencyNumber(totalAmount);

	return (
		<footer className="w-full flex items-center px-8 py-4 justify-between shadow-[-2px_-2px_4px_rgba(0,0,0,0.1)]">
			<div className="flex flex-col">
				<span className="font-bold">subtotal</span>
				<span className="text-purple-500 font-bold text-xl">
					{formattedAmount}
				</span>
			</div>

			<button
				type="button"
				className="py-3.5 px-10 bg-purple-500 rounded text-white"
			>
				ir para o pagamento
			</button>
		</footer>
	);
};
