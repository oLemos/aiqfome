import { stores } from "@/data/stores";
import { Meal } from "@/data/data-types";
import { storeMenuMap } from "@/data/menus/menus";

function extractMenuKey(storeName: string): string | undefined {
	const keys = Object.keys(storeMenuMap);

	return keys.find((key) => storeName.includes(key));
}

export function mealsFromStoreId(storeId: string): Meal[] {
	const store = stores.find((s) => s.id === storeId);

	if (!store) {
		return [];
	}

	const menuKey = extractMenuKey(store.name);

	if (!menuKey) {
		return [];
	}

	const storeMenu = storeMenuMap[menuKey];

	return storeMenu.flatMap((category) => category.meals);
}
