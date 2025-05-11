import { StoreMenu } from "../data-types";

export const mcDonaldsMenu: StoreMenu = [
	{
		name: "Clássicos",
		hasPromo: true,
		meals: [
			{
				id: "mc-bicmac",
				name: "Big Mac",
				description:
					"Dois hambúrgueres, alface, queijo, molho especial e pão com gergelim.",
				price: 28.5,
				promoPrice: 24.9,
				tags: ["carne", "combo"],
			},
			{
				id: "mc-quarter",
				name: "Quarterão com Queijo",
				description: "Hambúrguer 100% carne bovina com queijo.",
				price: 26.5,
				tags: ["hambúrguer", "carne"],
			},
		],
	},
	{
		name: "Sobremesas",
		hasPromo: false,
		meals: [
			{
				id: "mc-sundae",
				name: "Sundae de Chocolate",
				description: "Sorvete com calda de chocolate.",
				price: 9.0,
				tags: ["sobremesa", "sorvete"],
			},
		],
	},
];
