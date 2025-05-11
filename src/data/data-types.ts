export type Store = {
	id: number;
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

export type Meal = {
	id: string;
	name: string;
	description: string;
	price?: number;
	promoPrice?: number | null;
	variations?: {
		name: string;
		price: number;
	}[];
	tags: string[];
};

export type MenuCategory = {
	name: string;
	description?: string;
	hasPromo: boolean;
	meals: Meal[];
};

export type StoreMenu = MenuCategory[];
