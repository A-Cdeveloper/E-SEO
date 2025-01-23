import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
//import Sidebar from "../_components/Sidebar";
import "./globals.css";
//import LangsSwitcher from "../_components/LangsSwitcher";

export async function generateMetadata() {
  const t = await getTranslations("HomePage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="container max-w-6xl mx-auto flex justify-between flex-wrap h-screen relative">
            {/* <LangsSwitcher /> */}
            {/* <Sidebar /> */}

            <div className="flex-1 border-l border-white/10 px-4 lg:px-10">
              {children}
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
