interface DetailSectionHeaderProps {
	mandatory?: boolean;
	title: string;
	limitedQuantity?: number | null;
}

export const DetailSectionHeader = ({
	mandatory,
	title,
	limitedQuantity,
}: DetailSectionHeaderProps) => {
	function getDescription(limitedQuantity?: number | null) {
		if (limitedQuantity) {
			if (limitedQuantity === 1) {
				return "escolha 1";
			}

			if (mandatory) {
				return `escolha de 1 até ${limitedQuantity}`;
			}

			return `escolha até ${limitedQuantity}`;
		}

		return "escolha quantos quiser";
	}

	const formattedDescription = getDescription(limitedQuantity);

	return (
		<header className="flex justify-between items-center">
			<div>
				<h1 className="font-bold">{title}</h1>
				<p className="text-xs font-bold text-gray-300">
					{formattedDescription}
				</p>
			</div>

			{mandatory && (
				<div className="bg-gray-700 px-2 py-1.5 rounded">
					<span className="text-white">obrigatório</span>
				</div>
			)}
		</header>
	);
};
