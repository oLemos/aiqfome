import { StoreMenu } from "../data-types";

export const burgerKingMenu: StoreMenu = [
	{
		name: "Sanduíches",
		hasPromo: true,
		meals: [
			{
				id: "bk-whopper",
				name: "Whopper",
				description:
					"Pão com gergelim, carne grelhada, alface, tomate, maionese e ketchup.",
				price: 26.9,
				promoPrice: 22.9,
				tags: ["carne", "sanduíche"],
			},
			{
				id: "bk-cheeseburger",
				name: "Cheeseburger",
				description: "Hambúrguer, queijo, ketchup e picles.",
				price: 14.9,
				tags: ["sanduíche", "lanche rápido"],
			},
		],
	},
	{
		name: "Bebidas",
		hasPromo: false,
		meals: [
			{
				id: "bk-coca",
				name: "Coca-Cola",
				description: "Refrigerante gelado.",
				variations: [
					{ name: "300ml", price: 6.0 },
					{ name: "500ml", price: 8.5 },
				],
				tags: ["bebida", "refrigerante"],
			},
		],
	},
];
