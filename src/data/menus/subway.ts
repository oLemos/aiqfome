import { StoreMenu } from "../data-types";

export const subwayMenu: StoreMenu = [
	{
		name: "Subs",
		hasPromo: false,
		meals: [
			{
				id: "sub-frango",
				name: "Frango Teriyaki",
				description:
					"Frango em tiras com molho teriyaki, vegetais à escolha.",
				variations: [
					{ name: "15cm", price: 17.0 },
					{ name: "30cm", price: 28.0 },
				],
				tags: ["frango", "sub", "personalizável"],
			},
			{
				id: "sub-italiano",
				name: "Italiano",
				description: "Salame, pepperoni, queijo e vegetais.",
				variations: [
					{ name: "15cm", price: 16.5 },
					{ name: "30cm", price: 27.5 },
				],
				tags: ["sub", "carne"],
			},
		],
	},
	{
		name: "Bebidas",
		hasPromo: false,
		meals: [
			{
				id: "sub-guarana",
				name: "Guaraná Antarctica",
				description: "Refrigerante gelado.",
				variations: [
					{ name: "Lata", price: 6.5 },
					{ name: "500ml", price: 8.0 },
				],
				tags: ["bebida"],
			},
		],
	},
];
