import Projects from "@/app/_components/projects/Projects";
import ProjectsFilters from "@/app/_components/projects/ProjectsFilters";
import ContentBox from "@/app/_components/ui/ContentBox";
import Headline from "@/app/_components/ui/Headline";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { routing } from "@/i18n/routing";

// Generate static pages for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Force static generation - no searchParams means static page
export const dynamic = "force-static";

export async function generateMetadata() {
  const t = await getTranslations("PortfilioPage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

const Portfolio = async () => {
  const t = await getTranslations("PortfilioPage");

  return (
    <>
      <Headline>{t("title")}</Headline>
      <ContentBox>
        <ProjectsFilters />
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
      </ContentBox>
    </>
  );
};

export default Portfolio;
