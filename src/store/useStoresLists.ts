import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Store as StoreType } from "@/data/data-types";
import { stores as storesMock } from "@/data/stores";

interface StoreListState {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	stores: StoreType[];
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
