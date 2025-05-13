"use client";

import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";

interface MinusButtonProps {
	quantity: number;
	handleDecrease: () => void;
}

const MinusButton = ({ quantity, handleDecrease }: MinusButtonProps) => {
	if (quantity <= 0) {
		return (
			<button
				onClick={handleDecrease}
				disabled
				type="button"
				className="h-6 w-6"
				aria-label="botão bloqueado"
			>
				<MinusCircle className="text-gray-50" />
			</button>
		);
	}

	if (quantity === 1) {
		return (
			<button
				onClick={handleDecrease}
				type="button"
				className="h-6 w-6"
				aria-label="botão para remover item"
			>
				<Trash2 className="text-teal-400" />
			</button>
		);
	}

	if (quantity > 1) {
		return (
			<button
				onClick={handleDecrease}
				type="button"
				className="h-6 w-6"
				aria-label="botão para remover um item"
			>
				<MinusCircle className="text-teal-400" />
			</button>
		);
	}
};

interface CountButtonProps {
	quantity: number;
	handleIncrease: () => void;
	handleDecrease: () => void;
}

export const CountButton = ({
	quantity,
	handleDecrease,
	handleIncrease,
}: CountButtonProps) => {
	return (
		<>
			<MinusButton quantity={quantity} handleDecrease={handleDecrease} />

			<span>{quantity}</span>

			<button type="button" className="h-6 w-6" onClick={handleIncrease}>
				<PlusCircle className="text-teal-400" />
			</button>
		</>
	);
};
