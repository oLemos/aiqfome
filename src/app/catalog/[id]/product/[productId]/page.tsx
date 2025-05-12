import { ProductComponent } from "./product-component";

interface ProductPageProps {
	params: Promise<{
		id: string;
		productId: string;
	}>;
}

export default async function ProductPage({ params }: ProductPageProps) {
	const { id: storeId, productId } = await params;

	return (
		<div>
			<ProductComponent productId={productId} storeId={storeId} />
		</div>
	);
}
