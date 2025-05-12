import Image from "next/image";

import {
	Accordion,
	AccordionItem,
	AccordionContent,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { Store } from "@/data/data-types";
import { getMenuByStoreName } from "@/data/menus/menus";
import { MealContent } from "./meal-content";

interface MealsListProps {
	store: Store;
}

export const MealsList = ({ store }: MealsListProps) => {
	const menu = getMenuByStoreName(store.name);

	if (!menu) {
		return <p>Menu não encontrado</p>;
	}

	return (
		<>
			{menu.map((category) => (
				<Accordion
					key={category.name}
					type="single"
					collapsible
					className="bg-white"
				>
					<AccordionItem value="item-1" className="px-4">
						<AccordionTrigger>
							<div>
								<div className="flex items-center gap-1">
									<h1 className="font-bold">
										{category.name}
									</h1>

									{category.hasPromo && (
										<Image
											src="/icons/promo-icon.svg"
											alt=""
											width={24}
											height={24}
										/>
									)}
								</div>
								<p className="text-gray-300 text-xs font-semibold">
									{category.description}
								</p>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							<div className="flex flex-col gap-6">
								{category.meals.map((meal) => (
									<MealContent
										key={meal.id}
										meal={meal}
										storeId={store.id}
									/>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			))}
		</>
	);
};
