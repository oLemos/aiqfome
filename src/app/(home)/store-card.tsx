import Image from "next/image";

import { Store as StoreType } from "@/data/stores";

interface StoreCardProps {
	store: StoreType;
}

export const StoreCard = ({
	store: { imageUrl, name, deliveryFee, rating, isOpen },
}: StoreCardProps) => {
	const formattedDeliveryFee = new Intl.NumberFormat("pt-br", {
		style: "currency",
		currency: "BRL",
	}).format(deliveryFee);

	const isFreeDelivery = deliveryFee === 0;

	return (
		<div className="w-full flex bg-gray-100">
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
									? "/icons/free-delivery-fee-icon.svg"
									: "/icons/delivery-fee-icon.svg"
							}
							alt={
								isFreeDelivery
									? "Ícone de entrega grátis"
									: "Ícone de taxa de entrega"
							}
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
		</div>
	);
};
