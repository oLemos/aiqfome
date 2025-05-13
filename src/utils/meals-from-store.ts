import { stores } from "@/data/stores";
import { storeMenuMap } from "@/data/menus/menus";
import { ActiveProduct } from "@/store/useProductStore";

function extractMenuKey(storeName: string): string | undefined {
	const keys = Object.keys(storeMenuMap);

	return keys.find((key) => storeName.includes(key));
}

export function mealsFromStoreId(storeId: string): ActiveProduct[] {
	const store = stores.find((s) => s.id === storeId);

	if (!store) {
		return [];
	}

	const menuKey = extractMenuKey(store.name);

	if (!menuKey) {
		return [];
	}

	const storeMenu = storeMenuMap[menuKey];

	const allMeals = storeMenu.flatMap((category) => category.meals);

	return allMeals.map((meal) => ({
		...meal,
		quantity: 0,
		currentPrice: 0,
		variations: meal.variations?.map((variation) => ({
			...variation,
			checked: false,
		})),
	}));
}
