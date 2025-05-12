import { create } from "zustand";

import { Meal } from "@/data/data-types";

type ProductStore = {
	activeProduct: Meal | null;
	setActiveProduct: (product: Meal) => void;
	clearActiveProduct: () => void;
};

export const useProductStore = create<ProductStore>((set) => ({
	activeProduct: null,
	setActiveProduct: (product) => set({ activeProduct: product }),
	clearActiveProduct: () => set({ activeProduct: null }),
}));
