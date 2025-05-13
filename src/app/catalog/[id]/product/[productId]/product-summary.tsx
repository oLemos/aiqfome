import Image from "next/image";

import { MealPrice } from "../../meal-price";
import { TagsBadge } from "@/components/tags-badge";
import { ProductCount } from "./product-count";

import { ActiveProduct } from "@/store/useProductStore";

interface ProductSummaryProps {
	product: ActiveProduct;
}

export const ProductSummary = ({ product }: ProductSummaryProps) => {
	return (
		<header className="w-full">
			<figure className="w-full relative h-48 lg:h-72">
				<Image
					src="/images/ceviche-image.png"
					alt={product.name}
					fill
					className="object-cover"
					priority
					quality={100}
				/>
			</figure>

			<section className="flex flex-col gap-1.5 items-start p-4">
				<div className="flex items-center gap-2">
					<h1 className="text-xl font-extrabold">{product.name}</h1>

					{product.tags.map((tag) => (
						<TagsBadge key={tag} tag={tag} />
					))}
				</div>

				<MealPrice
					variations={product.variations}
					promoPrice={product.promoPrice}
					price={product.price}
				/>

				<p className="text-gray-300 text-sm font-semibold">
					{product.description}
				</p>

				<div className="w-full mt-2.5">
					<ProductCount product={product} />
				</div>
			</section>
		</header>
	);
};
