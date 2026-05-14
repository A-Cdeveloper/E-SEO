import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Inconsolata, Karla } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Sidebar from "../_components/Sidebar";
import "./globals.css";
import LangsSwitcher from "../_components/LangsSwitcher";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-karla",
});

// Generate static params for all locales at build time
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Only generate static pages for params from generateStaticParams
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={karla.variable}>
      <body className={inconsolata.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="container max-w-6xl mx-auto flex justify-between flex-wrap h-screen relative">
            <LangsSwitcher />
            <Sidebar />

            <div className="flex-1 border-l border-white/10 px-4 lg:px-10">
              {children}
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
