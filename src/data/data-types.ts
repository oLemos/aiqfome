export type Store = {
	id: string;
	name: string;
	isOpen: boolean;
	deliveryFee: number;
	rating: number;
	imageUrl: string;
	culinary: string[];
	closingTime: string;
	distanceInKm: number;
	estimatedDeliveryTime: {
		min: number;
		max: number;
	};
	freeDeliveryTicket: number;
	minimumTicket: number;
};

export type Variation = {
	name: string;
	price: number;
	promoPrice?: number | null;
};

export type Accompaniment = {
	limitedQuantity?: number | null;
	items: {
		id: string;
		name: string;
		price?: number;
		limitedQuantity?: number | null;
	}[];
};

export type AdditionalItem = {
	id: string;
	name: string;
	price: number;
};

export type AdditionalItemsCategory = {
	label: string;
	description: string;
	additionalItems: AdditionalItem[];
	limitedQuantity?: number | null;
};

export type Meal = {
	id: string;
	name: string;
	description: string;
	price?: number;
	promoPrice?: number | null;
	variations?: Variation[];
	tags: string[];
	accompaniments?: Accompaniment;
	additionalItems?: AdditionalItemsCategory[];
};

export type MenuCategory = {
	name: string;
	description?: string;
	hasPromo: boolean;
	meals: Meal[];
};

export type StoreMenu = MenuCategory[];
