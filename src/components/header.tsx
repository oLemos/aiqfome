import Image from "next/image";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="w-full bg-purple-500 flex p-4 gap-6 items-center">
			<Link href="/">
				<Image
					src="/icons/aiq-icon.svg"
					alt="Aiqfome"
					width={32}
					height={32}
					aria-label="Home"
					className="cursor-pointer"
				/>
			</Link>

			<div className="flex gap-2.5 flex-1 items-center">
				<Image
					src="/icons/map-pin-icon.svg"
					alt=""
					width={24}
					height={24}
				/>

				<div className="cursor-pointer">
					<p className="text-purple-200 font-bold text-sm">
						entregando em
					</p>

					<div className="flex gap-1">
						<p className="text-white font-bold text-base">
							Rua Mandaguari, 198
						</p>

						<Image
							src="/icons/arrow-right-icon.svg"
							alt=""
							width={16}
							height={16}
						/>
					</div>
				</div>
			</div>

			<Image src="/icons/user-icon.svg" alt="" width={24} height={24} />
		</header>
	);
};
