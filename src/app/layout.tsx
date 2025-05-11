import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header";

const nunito = Nunito({
	variable: "--font-nunito",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Aiqfome",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${nunito.variable} antialiased font-[family-name:var(--font-nunito)] min-h-screen flex flex-col`}
			>
				<Header />

				<main className="flex flex-col flex-grow">{children}</main>
			</body>
		</html>
	);
}
