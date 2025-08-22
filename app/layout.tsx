
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";


export const metadata = {
title: "ChiTech | Chinedu Okotu",
description: "Futuristic 3D portfolio by ChiTech",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" suppressHydrationWarning>
<body className="bg-black text-white antialiased selection:bg-purple-500/30 selection:text-white">
<Navbar />
<main className="min-h-screen pt-16">{children}</main>
<Footer />
</body>
</html>
);
}