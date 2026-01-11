import ProjectsFilters from "@/app/_components/projects/ProjectsFilters";
import ContentBox from "@/app/_components/ui/ContentBox";
import Headline from "@/app/_components/ui/Headline";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import PaginatedProjects from "@/app/_components/projects/PaginatedProjects";
import prisma from "@/db/db";
import { unstable_cache } from "next/cache";

// Generate static pages for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Force static generation - no searchParams means static page
export const dynamic = "force-static";

// Cache projects query for 1 hour
const getCachedProjects = unstable_cache(
  async () => {
    return await prisma.project.findMany({
      orderBy: {
        project_name: "asc",
      },
    });
  },
  ["projects"],
  {
    revalidate: 3600, // Cache for 1 hour
    tags: ["projects"],
  }
);

export async function generateMetadata() {
  const t = await getTranslations("PortfilioPage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

const Portfolio = async () => {
  const t = await getTranslations("PortfilioPage");

  // Fetch all projects at build time (static generation)
  const projects = await getCachedProjects();

  return (
    <>
      <Headline>{t("title")}</Headline>
      <ContentBox>
        <ProjectsFilters />
        <PaginatedProjects projects={projects} />
      </ContentBox>
    </>
  );
};

export default Portfolio;
