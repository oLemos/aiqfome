import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ActiveProduct } from "./useProductStore";

type Store = {
	id: string;
	name: string;
	deliveryFee: number;
	imageUrl: string;
};

type CheckoutStore = {
	store: Store | null;
	items: ActiveProduct[];
	addItems: (products: ActiveProduct[]) => void;
	removeItem: (id: string) => void;
	updateItem: (updated: ActiveProduct) => void;
	clearItems: () => void;
	setCheckoutStore: (store: Store) => void;
};

export const useCheckoutStore = create<CheckoutStore>()(
	devtools(
		persist(
			(set, get) => ({
				store: null,

				items: [],

				addItems: (products) =>
					set({ items: [...get().items, ...products] }),

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
			}),
			{ name: "CheckoutStore" }
		)
	)
);
