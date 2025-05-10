import { stores } from "@/data/stores";

import { CatalogHeader } from "./catalog-header";
import { StoreDetails } from "./store-details";
import { MealsList } from "./meals-list";

// TODO: Erro ao acessar parametro, verificar terminal
export default async function CatalogPage({
	params,
}: {
	params: { id: string };
}) {
	const storeId = Number(params.id);
	const store = stores.find((s) => s.id === storeId);

	if (!store) {
		return <p>Loja não encontrada</p>;
	}

	return (
		<div className="w-full">
			<CatalogHeader imageUrl={store.imageUrl} name={store.name} />

			<section className="px-4 pb-4">
				<StoreDetails store={store} />
			</section>

			<section className="bg-gray-50 flex flex-col gap-1 py-1">
				<MealsList />
			</section>

			{/* TODO: adicionar footer */}
		</div>
	);
}
