import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Store, stores as storesMock } from "@/data/stores";

interface StoreListState {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	stores: Store[];
}

export const useStoresLists = create<StoreListState>()(
	devtools(
		(set) => ({
			searchTerm: "",
			setSearchTerm: (term) => set({ searchTerm: term }),
			stores: storesMock,
		}),
		{ name: "StoresLists" }
	)
);
