"use client";

import { useProductStore } from "@/store/useProductStore";

export const ObservationField = () => {
	const { activeProduct, updateActiveProduct } = useProductStore();

	function handleObservationChange(
		e: React.ChangeEvent<HTMLTextAreaElement>
	) {
		if (!activeProduct) return;

		updateActiveProduct({
			...activeProduct,
			observation: e.target.value,
		});
	}

	return (
		<textarea
			className="bg-white w-full py-2.5 px-3 border border-gray-50 rounded placeholder:font-semibold text-sm"
			placeholder="alguma observação do item? • opcional ex: tirar algum ingrediente, ponto do prato"
			value={activeProduct?.observation || ""}
			onChange={handleObservationChange}
		/>
	);
};
