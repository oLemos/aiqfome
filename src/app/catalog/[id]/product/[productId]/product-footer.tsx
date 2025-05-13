"use client";

import { useRouter } from "next/navigation";

import { useCheckoutStore } from "@/store/useCheckoutStore";

import { Footer } from "@/components/footer";

export const ProductFooter = () => {
	const router = useRouter();

	const checkoutItems = useCheckoutStore((state) => state.items);

	function handleCheckout() {
		router.push("/checkout");
	}

	return (
		<>
			{checkoutItems.length ? (
				<>
					<footer className="w-full bg-gray-50 px-4 py-6">
						<p className="text-purple-700 font-bold text-sm text-center">
							feito com 💜 em maringá-PR
						</p>

						<button
							type="button"
							className="mt-3 bg-purple-500 text-white w-full py-3 rounded"
							onClick={handleCheckout}
						>
							ver ticket
						</button>
					</footer>
				</>
			) : (
				<Footer />
			)}
		</>
	);
};
