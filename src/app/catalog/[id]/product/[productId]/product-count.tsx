"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { useCheckoutStore } from "@/store/useCheckoutStore";
import { ActiveProduct } from "@/store/useProductStore";

import { formatCurrencyNumber } from "@/utils/formatNumber";
import { CountButton } from "@/components/count-button";
import { stores } from "@/data/stores";

interface ProductCountProps {
	product: ActiveProduct;
}

export const ProductCount = ({ product }: ProductCountProps) => {
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

	function calculateProductTotalPrice(product: ActiveProduct): number {
		let total = 0;

		if (product.variations?.length) {
			const selected = product.variations.find((v) => v.checked);

			if (selected) {
				total += selected.price;
			}
		} else if (product.price) {
			total += product.price;
		}

		if (product.accompaniments?.items) {
			for (const item of product.accompaniments.items) {
				if (item.price && item.limitedQuantity) {
					total += item.price;
				}
			}
		}

		if (product.additionalItems?.length) {
			for (const category of product.additionalItems) {
				for (const item of category.additionalItems) {
					if (item.price && item.quantity) {
						total += item.price * item.quantity;
					}
				}
			}
		}

		return total;
	}

	useEffect(() => {
		const unitPrice = calculateProductTotalPrice(product);

		if (checkoutProduct) {
			setTotalProductAmount(unitPrice * checkoutProduct.quantity);
		} else {
			setTotalProductAmount(unitPrice);
		}
	}, [product, checkoutProduct]);

	const formattedPrice = formatCurrencyNumber(totalProductAmount);

	function handleAddCheckoutItem() {
		const unitPrice = calculateProductTotalPrice(product);

		if (checkoutProduct) {
			updateItem({
				...checkoutProduct,
				quantity: checkoutProduct.quantity + 1,
			});
		} else {
			addItems([
				{
					...product,
					price: unitPrice,
				},
			]);

			if (store) {
				setCheckoutStore({
					id: store.id,
					name: store.name,
					imageUrl: store.imageUrl,
					deliveryFee: store.deliveryFee,
				});
			}
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
		? !product.variations.some((v) => v.checked)
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
