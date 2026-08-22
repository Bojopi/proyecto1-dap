import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Taskflow",
  description: "Gestión de proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-purple-50 dark:bg-gray-900">
        <Header />
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4">
          <div className="w-full max-w-3xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}