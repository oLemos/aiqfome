"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useStoresLists } from "@/store/useStoresLists";

export const SearchBar = () => {
	const searchTerm = useStoresLists((state) => state.searchTerm);
	const setSearchTerm = useStoresLists((state) => state.setSearchTerm);

	return (
		<div className="w-full bg-purple-500 p-4">
			<div className="relative w-full">
				<Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-200" />
				<Input
					type="text"
					className="bg-white h-10 pl-10 placeholder:text-gray-300 placeholder:font-semibold placeholder:opacity-70"
					placeholder="busque pela loja ou culinária"
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
			</div>
		</div>
	);
};
