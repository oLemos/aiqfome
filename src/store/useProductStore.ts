import { create } from "zustand";

import { Meal, Variation } from "@/data/data-types";
import { devtools, persist } from "zustand/middleware";

export interface ActiveProductVariation extends Variation {
	checked: boolean;
}

export interface ActiveProduct extends Meal {
	quantity: number;
	currentPrice: number;
	variations?: ActiveProductVariation[];
}

type ProductStore = {
	activeProduct: ActiveProduct | null;
	setActiveProduct: (product: ActiveProduct) => void;
	updateActiveProduct: (updated: ActiveProduct) => void;
	clearActiveProduct: () => void;
};

export const useProductStore = create<ProductStore>()(
	devtools(
		persist(
			(set, get) => ({
				activeProduct: null,

				setActiveProduct: (product) => set({ activeProduct: product }),

				clearActiveProduct: () => set({ activeProduct: null }),

				updateActiveProduct: (updated) => {
					const activeProduct = get().activeProduct;

					set({
						activeProduct: activeProduct
							? { ...activeProduct, ...updated }
							: null,
					});
				},
			}),
			{ name: "ActiveProduct" }
		)
	)
);
