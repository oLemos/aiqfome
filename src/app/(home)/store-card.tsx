import Image from "next/image";

import { Store as StoreType } from "@/data/stores";
import Link from "next/link";

interface StoreCardProps {
	store: StoreType;
}

export const StoreCard = ({
	store: { imageUrl, name, deliveryFee, rating, isOpen, id },
}: StoreCardProps) => {
	const formattedDeliveryFee = new Intl.NumberFormat("pt-br", {
		style: "currency",
		currency: "BRL",
	}).format(deliveryFee);

	const isFreeDelivery = deliveryFee === 0;

	return (
		<Link
			href={`/catalog/${id}`}
			className="w-full flex bg-gray-100 no-underline rounded-xl"
		>
			<Image
				src={imageUrl}
				alt={name}
				width={72}
				height={72}
				className={isOpen ? "" : "opacity-40"}
			/>

			<div className="flex flex-col flex-1 px-3 py-2.5 gap-1">
				<p className="font-bold">{name}</p>

				<div className="flex gap-2">
					<div className="flex items-center">
						<Image
							src={
								isFreeDelivery
									? "/icons/motorcycle-green-icon.svg"
									: "/icons/delivery-fee-icon.svg"
							}
							alt=""
							width={24}
							height={24}
							quality={100}
						/>

						<p
							className={`font-bold text-sm ${
								isFreeDelivery
									? "text-teal-600"
									: "text-purple-500"
							}`}
						>
							{isFreeDelivery ? "grátis" : formattedDeliveryFee}
						</p>
					</div>

					<div className="flex items-center">
						<Image
							src="/icons/rating-icon.svg"
							alt=""
							width={24}
							height={24}
						/>

						<p className="font-bold text-gray-300 text-sm">
							{rating}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};
