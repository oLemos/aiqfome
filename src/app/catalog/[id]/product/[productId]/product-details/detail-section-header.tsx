interface DetailSectionHeaderProps {
	mandatory?: boolean;
	title: string;
	description: string;
}

export const DetailSectionHeader = ({
	mandatory,
	title,
	description,
}: DetailSectionHeaderProps) => {
	return (
		<header className="flex justify-between items-center">
			<div>
				<h1 className="font-bold">{title}</h1>
				<p className="text-xs font-bold text-gray-300">{description}</p>
			</div>

			{mandatory && (
				<div className="bg-gray-700 px-2 py-1.5 rounded">
					<span className="text-white">obrigatório</span>
				</div>
			)}
		</header>
	);
};
