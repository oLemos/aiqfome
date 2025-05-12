import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";

interface MinusButtonProps {
	quantity: number;
}

const MinusButton = ({ quantity }: MinusButtonProps) => {
	if (quantity <= 0) {
		return (
			<button
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
}

export const CountButton = ({ quantity }: CountButtonProps) => {
	return (
		<div className="flex gap-1.5">
			<MinusButton quantity={quantity} />

			<span>{quantity}</span>

			<button type="button" className="h-6 w-6">
				<PlusCircle className="text-teal-400" />
			</button>
		</div>
	);
};
