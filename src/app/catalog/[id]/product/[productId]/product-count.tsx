"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { useCheckoutStore } from "@/store/useCheckoutStore";

import { formatCurrencyNumber } from "@/utils/formatNumber";
import { ActiveProduct } from "@/store/useProductStore";
import { CountButton } from "@/components/count-button";
import { stores } from "@/data/stores";

interface ProductCountProps {
	product: ActiveProduct;
}

export const ProductCount = ({ product }: ProductCountProps) => {
	const router = useRouter();
	const params = useParams();

	const storeId = params.id as string;

	const store = stores.find((store) => store.id === storeId);

	const {
		updateItem,
		addItems,
		items: checkoutItems,
		removeItem,
		setCheckoutStore,
	} = useCheckoutStore();

	const checkoutProduct = checkoutItems.find((p) => p.id === product.id);

	const [totalProductAmount, setTotalProductAmount] = useState<number>(0);

	useEffect(() => {
		if (checkoutProduct) {
			setTotalProductAmount(
				checkoutProduct.price * checkoutProduct.quantity
			);
		}
	}, [checkoutProduct]);

	const formattedPrice = formatCurrencyNumber(totalProductAmount!);

	function handleAddCheckoutItem() {
		if (checkoutProduct) {
			updateItem({
				...checkoutProduct,
				quantity: checkoutProduct.quantity + 1,
			});
		} else {
			// TODO: habilitar a adicao caso tenha variantes, apenas se uma variante estiver selecionada
			addItems([
				{
					id: product.id,
					price: totalProductAmount,
					name: product.name,
					quantity: 1,
					// TODO: adicionar adicionais
				},
			]);
		}

		handleCheckout();
	}

	function handleCheckout() {
		console.log({ store });
		if (store) {
			setCheckoutStore({
				id: store?.id,
				deliveryFee: store?.deliveryFee,
				imageUrl: store?.imageUrl,
				name: store?.name,
			});
			router.push("/checkout");
		}
	}

	function handleRemoveCheckoutItem() {
		if (!checkoutProduct) {
			return;
		}

		if (checkoutProduct.quantity > 1) {
			updateItem({
				...checkoutProduct,
				quantity: checkoutProduct.quantity - 1,
			});
		} else {
			removeItem(product.id);
		}
	}

	const isAddButtonDisabled = product.variations
		? product.variations.some((v) => v.checked)
		: false;

	return (
		<div className="w-full flex justify-between items-center">
			<div className="flex flex-col gap-1.5">
				<strong>quantos?</strong>
				<span className="text-sm text-gray-300">
					total{" "}
					<strong className="text-gray-950">{formattedPrice}</strong>
				</span>
			</div>

			{checkoutProduct ? (
				<div className="flex gap-4">
					<CountButton
						quantity={checkoutProduct.quantity}
						handleIncrease={handleAddCheckoutItem}
						handleDecrease={handleRemoveCheckoutItem}
					/>
				</div>
			) : (
				<button
					className="bg-gray-300 text-white px-6 h-10 rounded-[8px] cursor-pointer"
					type="button"
					onClick={handleAddCheckoutItem}
					disabled={isAddButtonDisabled}
				>
					adicionar
				</button>
			)}
		</div>
	);
};
