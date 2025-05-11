import { StoreMenu } from "../data-types";

import { subwayMenu } from "./subway";
import { mcDonaldsMenu } from "./mc-donalds";
import { burgerKingMenu } from "./burger-king";
import { matsuriMenu } from "./matsuri-concept";

const storeMenuMap: Record<string, StoreMenu> = {
	"Matsuri Concept": matsuriMenu,
	"Burger King": burgerKingMenu,
	"McDonald's": mcDonaldsMenu,
	Subway: subwayMenu,
};

export function getMenuByStoreName(storeName: string): StoreMenu | null {
	const storeMenu = Object.keys(storeMenuMap).find((brandName) =>
		storeName.includes(brandName)
	);

	if (storeMenu) {
		return storeMenuMap[storeMenu];
	}

	return null;
}
