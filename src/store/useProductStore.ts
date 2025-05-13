import { create } from "zustand";

import { Accompaniment, Variation } from "@/data/data-types";
import { devtools, persist } from "zustand/middleware";

export interface ActiveProductVariation extends Variation {
	checked: boolean;
}

export interface ActiveAccompanimentItem {
	id: string;
	name: string;
	price?: number;
	checked: boolean;
}

export interface ActiveAdditionalItem {
	id: string;
	name: string;
	price?: number;
	quantity: number;
}

export interface ActiveAdditionalCategory {
	label: string;
	limitedQuantity?: number | null;
	additionalItems: ActiveAdditionalItem[];
}

export interface ActiveProduct {
	id: string;
	name: string;
	description: string;
	image: string;
	price?: number;
	promoPrice?: number | null;
	tags: string[];
	quantity: number;
	currentPrice: number;
	variations?: ActiveProductVariation[];
	accompaniments?: Accompaniment;
	additionalItems?: ActiveAdditionalCategory[];
	observation?: string;
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

				setActiveProduct: (product) => {
					const accompanimentsWithChecked = product.accompaniments
						? {
								...product.accompaniments,
								items: product.accompaniments.items.map(
									(item) => ({
										...item,
										checked: false,
									})
								),
						  }
						: undefined;

					const preparedAdditionalItems =
						product.additionalItems?.map((category) => ({
							...category,
							additionalItems: category.additionalItems.map(
								(item) => ({
									...item,
									quantity: 0,
								})
							),
						}));

					set({
						activeProduct: {
							...product,
							accompaniments: accompanimentsWithChecked,
							additionalItems: preparedAdditionalItems,
						},
					});
				},

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
