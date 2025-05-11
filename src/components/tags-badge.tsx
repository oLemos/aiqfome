import Image from "next/image";

interface TagsBadgeProps {
	tag: string;
}

const tagsIconsMapping: Record<string, string> = {
	hot: "/icons/hot-icon.svg",
	vegan: "/icons/vegan-icon.svg",
};

export const TagsBadge = ({ tag }: TagsBadgeProps) => {
	const iconSrc = tagsIconsMapping[tag];

	if (!iconSrc) return null;

	return (
		<div className="h-4 w-4">
			<Image
				src={iconSrc}
				alt={`Categoria ${tag}`}
				width={14}
				height={14}
			/>
		</div>
	);
};
