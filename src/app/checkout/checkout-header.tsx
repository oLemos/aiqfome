"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useCheckoutStore } from "@/store/useCheckoutStore";

export const CheckoutHeader = () => {
	const router = useRouter();

	const store = useCheckoutStore((state) => state.store);

	useEffect(() => {
		if (!store) {
			router.push("/");
		}
	}, [router, store]);

	return (
		<header className="flex gap-2 items-center">
			<Image
				src={store.imageUrl}
				width={32}
				height={32}
				alt={store.name}
			/>

			<div className="flex flex-col gap-1">
				<p className="text-gray-300 font-bold text-sm">seus itens em</p>

				<h1 className="text-gray-900 font-bold">{store.name}</h1>
			</div>
		</header>
	);
};
