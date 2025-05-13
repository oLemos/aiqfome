import { AdditionalItem } from "@/data/data-types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface CheckoutItem {
	id: string;
	name: string;
	quantity: number;
	price: number;
	additional?: AdditionalItem[];
}

type Store = {
	id: string;
	name: string;
	deliveryFee: number;
	imageUrl: string;
};

type CheckoutStore = {
	store: Store;
	items: CheckoutItem[];
	addItems: (products: CheckoutItem[]) => void;
	removeItem: (id: string) => void;
	updateItem: (updated: CheckoutItem) => void;
	clearItems: () => void;
	setCheckoutStore: (store: Store) => void;
};

export const useCheckoutStore = create<CheckoutStore>()(
	devtools((set, get) => ({
		store: null,

		items: [],

		addItems: (products) => set({ items: [...get().items, ...products] }),

		removeItem: (id) =>
			set({
				items: get().items.filter((item) => item.id !== id),
			}),

		updateItem: (updated) =>
			set({
				items: get().items.map((item) =>
					item.id === updated.id ? updated : item
				),
			}),

		clearItems: () => set({ items: [] }),

		setCheckoutStore: (store) => set({ store }),
	}))
);
