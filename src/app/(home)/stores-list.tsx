import { Store } from "@/data/stores";

import { StoreCard } from "./store-card";

interface StoresListProps {
	stores: Store[];
}

export const StoresList = ({ stores }: StoresListProps) => {
	return (
		<div className="w-full flex flex-col gap-4">
			{stores.map((store) => (
				<div key={store.id}>
					<StoreCard store={store} />
				</div>
			))}
		</div>
	);
};
