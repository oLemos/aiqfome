import { stores } from "@/data/stores";

import { CatalogHeader } from "./catalog-header";
import { StoreDetails } from "./store-details";
import { MealsList } from "./meals-list";
import { Footer } from "@/components/footer";

interface CatalogPageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function CatalogPage({ params }: CatalogPageProps) {
	const { id: storeId } = await params;

	const store = stores.find((s) => s.id === storeId);

	if (!store) {
		return <p>Loja não encontrada</p>;
	}

	return (
		<>
			<div className="w-full flex flex-col flex-grow">
				<CatalogHeader imageUrl={store.imageUrl} name={store.name} />

				<section className="px-4 pb-4">
					<StoreDetails store={store} />
				</section>

				<section className="bg-gray-50 flex flex-col gap-1 py-1 flex-grow">
					<MealsList store={store} />
				</section>
			</div>

			<Footer />
		</>
	);
}
