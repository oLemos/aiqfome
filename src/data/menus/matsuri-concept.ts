import { StoreMenu } from "../data-types";

export const matsuriMenu: StoreMenu = [
	{
		name: "Niguiris",
		description: "Bolinhos de arroz cobertos com fatias de peixe cru.",
		hasPromo: false,
		meals: [
			{
				id: "nig01",
				name: "Niguiri de Salmão",
				description:
					"Arroz temperado coberto com fatia de salmão fresco.",
				price: 8,
				promoPrice: null,
				tags: [],
			},
			{
				id: "nig02",
				name: "Niguiri de Atum",
				description: "Atum fresco sobre bolinho de arroz temperado.",
				price: 9,
				promoPrice: null,
				tags: [],
			},
			{
				id: "nig03",
				name: "Niguiri de Camarão",
				description: "Camarão cozido sobre arroz japonês.",
				price: 10,
				promoPrice: null,
				tags: [],
			},
		],
	},
	{
		name: "Ceviches",
		description: "Cubos de peixe marinado com limão e temperos orientais.",
		hasPromo: true,
		meals: [
			{
				id: "cev01",
				name: "Ceviche de Salmão",
				description:
					"Cubos de salmão marinados com limão, cebola roxa e coentro.",
				price: 25,
				promoPrice: 21.99,
				tags: ["hot"],
			},
			{
				id: "cev02",
				name: "Ceviche de Tilápia",
				description: "Tilápia ao molho cítrico, cebola e pimenta.",
				price: 22,
				promoPrice: null,
				tags: [],
			},
			{
				id: "ceviche-tropical",
				name: "Ceviche Tropical",
				description:
					"Cubos de peixe branco marinados no limão com manga, coentro e pimenta dedo-de-moça.",
				tags: ["ceviche", "frutos do mar", "refrescante"],
				variations: [
					{
						name: "Médio",
						price: 28.0,
						promoPrice: 24.5,
					},
					{
						name: "Grande",
						price: 38.0,
					},
				],
				accompaniments: [
					{ id: "no-sides", name: "Sem acompanhamentos" },
					{ id: "shoyu", name: "Shoyu" },
					{ id: "gengibre", name: "Gengibre" },
					{ id: "wasabi", name: "Wasabi" },
				],
			},
		],
	},
	{
		name: "Temakis",
		description: "Cone de alga recheado com arroz e recheios variados.",
		hasPromo: true,
		meals: [
			{
				id: "tem01",
				name: "Temaki Califórnia",
				description: "Kani, manga, pepino, arroz e cream cheese.",
				price: 17,
				promoPrice: 14.5,
				tags: ["vegan"],
			},
			{
				id: "tem02",
				name: "Temaki Salmão",
				description: "Salmão fresco, arroz, cebolinha e cream cheese.",
				price: 19,
				promoPrice: null,
				tags: [],
			},
			{
				id: "tem03",
				name: "Temaki Salmão Picante",
				description: "Salmão picado, pimenta sriracha e cebolinha.",
				price: 20,
				promoPrice: null,
				tags: ["hot"],
			},
		],
	},
	{
		name: "Bebidas",
		description: "Bebidas tradicionais e refrigerantes.",
		hasPromo: false,
		meals: [
			{
				id: "beb01",
				name: "Refrigerante Lata",
				description: "Coca-Cola, Guaraná, Fanta ou Sprite (350ml).",
				variations: [
					{ name: "Coca-Cola", price: 6 },
					{ name: "Guaraná", price: 5.5 },
					{ name: "Sprite", price: 5.5 },
				],
				tags: [],
			},
			{
				id: "beb02",
				name: "Água Mineral",
				description: "Com ou sem gás.",
				variations: [
					{ name: "Sem gás", price: 3 },
					{ name: "Com gás", price: 3.5 },
				],
				tags: [],
			},
			{
				id: "beb03",
				name: "Sake Importado",
				description: "Dose de saquê premium japonês.",
				price: 12,
				promoPrice: null,
				tags: [],
			},
		],
	},
	{
		name: "Sobremesas",
		description: "Doces japoneses e opções tradicionais.",
		hasPromo: true,
		meals: [
			{
				id: "sob01",
				name: "Hot Roll de Banana",
				description: "Banana empanada com açúcar e canela.",
				price: 9.5,
				promoPrice: 7.99,
				tags: [],
			},
			{
				id: "sob02",
				name: "Tempurá de Sorvete",
				description: "Bola de sorvete empanada com calda de chocolate.",
				price: 15,
				promoPrice: null,
				tags: [],
			},
		],
	},
];
