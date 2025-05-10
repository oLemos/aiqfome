import Image from "next/image";

import { SearchBar } from "./search-bar";
import { StoresList } from "./stores-list";

import { stores } from "@/data/stores";

import { Footer } from "@/components/footer";

export default function Home() {
	const { openedStores, closedStores } = stores.reduce(
		(acc, store) => {
			if (store.isOpen) {
				acc.openedStores.push(store);
			} else {
				acc.closedStores.push(store);
			}
			return acc;
		},
		{ openedStores: [], closedStores: [] } as {
			openedStores: typeof stores;
			closedStores: typeof stores;
		}
	);

	return (
		<>
			<SearchBar />

			<figure className="w-full relative h-32 lg:h-64 mt-0.25">
				<Image
					src="/images/aiq-promo-banner.png"
					alt=""
					fill
					className="object-cover"
					priority
					quality={100}
				/>
			</figure>

			<section className="w-full px-4 py-3 mt-3">
				<h1 className="text-purple-500 text-xl font-extrabold mb-4">
					abertos
				</h1>

				<StoresList stores={openedStores} />
			</section>

			<section className="w-full px-4 py-3 mb-3">
				<h1 className="text-purple-500 text-xl font-extrabold mb-4">
					fechados
				</h1>

				<StoresList stores={closedStores} />
			</section>

			<Footer />
		</>
	);
}
