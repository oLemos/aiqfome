import { AdditionalItemsCategory as AdditionalItemsCategoryType } from "@/data/data-types";

import { DetailSectionHeader } from "../detail-section-header";
import { SingleAdditionalItems } from "./single-additional-items";
import { UnlimitedAdditionalItems } from "./unlimited-additional-items";
import { MultipleAdditionalItems } from "./multiple-additional-items";

interface AdditionalItemsProps {
	additionalItemsCategory: AdditionalItemsCategoryType;
}

export const AdditionalItems = ({
	additionalItemsCategory,
}: AdditionalItemsProps) => {
	return (
		<>
			<DetailSectionHeader
				title={additionalItemsCategory.label}
				limitedQuantity={additionalItemsCategory.limitedQuantity}
			/>

			<div className="w-full flex flex-col gap-3">
				{!additionalItemsCategory.limitedQuantity ? (
					<UnlimitedAdditionalItems
						additionalItems={
							additionalItemsCategory.additionalItems
						}
						categoryLabel={additionalItemsCategory.label}
					/>
				) : additionalItemsCategory.limitedQuantity === 1 ? (
					<SingleAdditionalItems
						additionalItems={
							additionalItemsCategory.additionalItems
						}
						categoryLabel={additionalItemsCategory.label}
						limitedQuantity={
							additionalItemsCategory.limitedQuantity
						}
					/>
				) : (
					<MultipleAdditionalItems
						additionalItems={
							additionalItemsCategory.additionalItems
						}
						categoryLabel={additionalItemsCategory.label}
						limitedQuantity={
							additionalItemsCategory.limitedQuantity
						}
					/>
				)}
			</div>
		</>
	);
};
