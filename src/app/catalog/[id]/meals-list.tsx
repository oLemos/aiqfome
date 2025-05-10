import {
	Accordion,
	AccordionItem,
	AccordionContent,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { formatCurrencyNumber } from "@/utils/formatNumber";

export const MealsList = () => {
	const meals = Array.from({ length: 3 });

	const categoryExample = {
		name: "Temakis",
		description: "sushi em forma de cone com salmão e cream cheese",
	};

	// TODO: Colocar range de preços "a partir de"
	const mealsExample = [
		{
			name: "Califórnia",
			description: "kani, pepino e maçã ou manga",
			price: 13.99,
			promoPrice: null,
		},
		{
			name: "Mix",
			description:
				"Escolha 3 ingredientes: shimeji, alface americana, rúcula, pepino, tomate seco, cream cheese, maionese, goiabada, banana, requeijão, molho de maracujá, manga, maçã e morango.",
			price: 17,
			promoPrice: 13.99,
		},
	];

	return (
		<>
			{meals.map((_, index) => (
				<Accordion
					key={index}
					type="single"
					collapsible
					className="bg-white"
				>
					<AccordionItem value="item-1" className="px-4">
						<AccordionTrigger>
							<div>
								<h1 className="font-bold">
									{categoryExample.name}
								</h1>
								<p className="text-gray-300 text-xs font-semibold">
									{categoryExample.description}
								</p>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							<div className="flex flex-col gap-6">
								{mealsExample.map((meal) => (
									<div
										key={meal.name}
										className="flex justify-between pl-6 pr-4"
									>
										<div>
											<h2 className="text-gray-900 text-sm font-semibold">
												{meal.name}
											</h2>
											<p className="text-gray-300 text-xs line-clamp-2">
												{meal.description}
											</p>
										</div>

										{meal.promoPrice ? (
											<div className="flex flex-col text-right">
												<span className="font-bold text-xs text-gray-300 line-through">
													{formatCurrencyNumber(
														meal.price
													)}
												</span>

												<span className="font-bold text-sm text-green-500">
													{formatCurrencyNumber(
														meal.promoPrice
													)}
												</span>
											</div>
										) : (
											<span className="font-bold text-sm text-purple-500 text-right">
												{formatCurrencyNumber(
													meal.price
												)}
											</span>
										)}
									</div>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			))}
		</>
	);
};
