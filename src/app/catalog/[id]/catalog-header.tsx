import Image from "next/image";

import { ChevronRight, Heart, Share2 } from "lucide-react";

interface CatalogHeaderProps {
	imageUrl: string;
	name: string;
}

export const CatalogHeader = ({ imageUrl, name }: CatalogHeaderProps) => {
	return (
		<header className="py-6 px-4">
			<div className="flex items-center gap-2">
				<Image src={imageUrl} alt="" width={36} height={36} />
				<h1 className="text-xl font-extrabold">{name}</h1>
			</div>

			<div className="flex items-center mt-4 justify-between">
				<div className="flex gap-6">
					<Share2
						size={24}
						className="text-purple-700 transform scale-x-[-1]"
					/>

					<Heart size={24} className="text-purple-700" />
				</div>

				<div className="flex items-center gap-1">
					<span className="text-teal-400 font-bold text-xs">
						mais infos
					</span>

					<ChevronRight size={8} className="text-teal-400" />
				</div>
			</div>
		</header>
	);
};
