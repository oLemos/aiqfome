"use client";

import { Pencil } from "lucide-react";

import { CountButton } from "@/components/count-button";

import { formatCurrencyNumber } from "@/utils/formatNumber";
import { useCheckoutStore } from "@/store/useCheckoutStore";

const Divider = () => {
	return (
		<span className="mx-1 w-1 h-1 bg-gray-400 rounded-full inline-block align-middle" />
	);
};

export const CheckoutItems = () => {
	const checkoutItems = useCheckoutStore((state) => state.items);

	function handleIncreaseItemQuantity() {}

	function handleDecreaseItemQuantity() {}

	return (
		<>
			{checkoutItems.map((item) => (
				<div
					key={item.id}
					className="w-full flex flex-col gap-1.5 bg-white"
				>
					<header className="flex items-center justify-between">
						<span className="font-bold text-sm">{item.name}</span>

						<div className="flex flex-col gap-1.5">
							<span className="text-purple-500 font-bold text-right">
								{formatCurrencyNumber(item.price)}
							</span>

							<div className="flex gap-6">
								<div className="flex gap-1 items-center">
									<Pencil className="text-teal-400 h-4 w-4" />

									<span className="text-teal-400 font-bold">
										editar
									</span>
								</div>

								<CountButton
									quantity={item.quantity}
									handleDecrease={handleDecreaseItemQuantity}
									handleIncrease={handleIncreaseItemQuantity}
								/>
							</div>
						</div>
					</header>

					{item.additional &&
						item.additional.map((add) => (
							<div key={add.id}>
								<span className="text-xs text-gray-300 font-bold">
									{add.itemCategoryLabel}
								</span>

								<div>
									<div className="flex items-center gap-1">
										<Divider />
										<span className="text-xs text-gray-300">
											{add.name}
										</span>
									</div>

									{add.price && (
										<span className="text-teal-400 font-bold text-xs">
											{formatCurrencyNumber(add.price)}
										</span>
									)}
								</div>
							</div>
						))}
				</div>
			))}
		</>
	);
};
