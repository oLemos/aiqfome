"use client";

import { StoreCard } from "./store-card";
import { Store } from "@/data/stores";

import { useStoresLists } from "@/store/useStoresLists";

interface StoresListProps {
	onlyOpens: boolean;
}

export const StoresList = ({ onlyOpens }: StoresListProps) => {
	const { stores, searchTerm } = useStoresLists();

	const filteredStores = stores.filter((store) => {
		const lowerSearch = searchTerm.toLowerCase();

		const matchesName = store.name
			.toLowerCase()
			.includes(searchTerm.toLowerCase());

		const matchesCulinary = store.culinary?.some((type) =>
			type.toLowerCase().includes(lowerSearch)
		);

		if (store.isOpen === onlyOpens) {
			return matchesName || matchesCulinary;
		}

		return false;
	});

	return (
		<div className="w-full flex flex-col gap-4">
			{filteredStores.map((store: Store) => (
				<StoreCard key={store.id} store={store} />
			))}
		</div>
	);
};
