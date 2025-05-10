import Image from "next/image";

import { ChevronRight } from "lucide-react";

import { Store } from "@/data/stores";
import { formatCurrencyNumber } from "@/utils/formatNumber";

const Divider = () => {
	return (
		<span className="mx-1 w-1 h-1 bg-gray-400 rounded-full inline-block align-middle" />
	);
};

interface StoreDetailsProps {
	store: Store;
}

export const StoreDetails = ({ store }: StoreDetailsProps) => {
	const isFreeDelivery = store.deliveryFee === 0;

	const formattedDeliveryFee = formatCurrencyNumber(store.deliveryFee);
	const formattedMinimumTicket = formatCurrencyNumber(store.minimumTicket);
	const formattedFreeDeliveryTicket = formatCurrencyNumber(
		store.freeDeliveryTicket
	);

	return (
		<div className="w-full">
			<div className="flex items-center gap-1">
				<div className="flex items-center gap-1">
					{isFreeDelivery ? (
						<>
							<Image
								src="/icons/motorcycle-green-icon.svg"
								alt=""
								width={24}
								height={24}
							/>

							<span className="font-bold text-sm text-teal-600">
								grátis
							</span>
						</>
					) : (
						<>
							<Image
								src="/icons/motorcycle-purple-icon.svg"
								alt=""
								width={24}
								height={24}
							/>

							<span className="font-bold text-sm text-purple-500">
								{formattedDeliveryFee}
							</span>
						</>
					)}

					<ChevronRight
						size={8}
						className={
							isFreeDelivery ? "text-teal-600" : "text-purple-500"
						}
					/>
				</div>

				<Divider />

				<span className="font-bold text-xs text-gray-300">
					hoje, {store.estimatedDeliveryTime.min}-
					{store.estimatedDeliveryTime.max}
				</span>

				<Divider />

				<span className="font-bold text-xs text-gray-300">
					{store.distanceInKm}km
				</span>
			</div>

			<div className="pt-2 flex flex-col gap-2">
				<div>
					<span className="font-bold text-xs text-teal-600 bg-teal-50 py-1.5 px-2 rounded">
						entrega grátis acima de {formattedFreeDeliveryTicket}
					</span>
				</div>

				<div className="flex gap-1 items-center">
					<div className="flex gap-1 items-center">
						<Image
							src="/icons/rating-icon.svg"
							alt=""
							width={16}
							height={16}
						/>

						<span className="text-xs font-bold text-gray-300">
							{store.rating} de 5
						</span>

						<ChevronRight size={8} className="text-gray-300" />
					</div>

					<Divider />

					<span className="font-bold text-xs text-green-500">
						fecha às {store.closingTime}
					</span>
				</div>

				<p className="text-xs font-bold text-gray-300">
					pedido mínimo {formattedMinimumTicket}
				</p>
			</div>
		</div>
	);
};
