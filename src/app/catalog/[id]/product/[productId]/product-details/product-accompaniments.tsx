import { DetailSectionHeader } from "./detail-section-header";

import { Accompaniment } from "@/data/data-types";

interface ProductAccompanimentsProps {
	accompaniments: Accompaniment[];
}

// TODO: Poder ser multiplos acompanhamentos
export const ProductAccompaniments = ({
	accompaniments,
}: ProductAccompanimentsProps) => {
	return (
		<>
			<DetailSectionHeader
				mandatory
				title="acompanhamentos"
				description="escolha de 1 a 2"
			/>

			<div className="w-full flex flex-col gap-3">
				{accompaniments.map((accompaniment) => (
					<div
						key={accompaniment.id}
						className="flex items-center gap-2"
					>
						<input
							value={accompaniment.name}
							id={accompaniment.name}
							type="checkbox"
						/>

						<label
							htmlFor={accompaniment.name}
							className="text-sm text-gray-300 lowercase"
						>
							{accompaniment.name}
						</label>
					</div>
				))}
			</div>
		</>
	);
};
