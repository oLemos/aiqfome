import { CheckoutFooter } from "./checkout-footer";
import { CheckoutHeader } from "./checkout-header";
import { CheckoutItems } from "./checkout-items";

export default function CheckoutPage() {
	return (
		<>
			<div className="w-full px-4 py-6 flex-grow">
				<CheckoutHeader />

				<section className="bg-gray-50 flex flex-col gap-1">
					<CheckoutItems />
				</section>
			</div>

			<CheckoutFooter />
		</>
	);
}
