import Projects from "@/app/_components/projects/Projects";
import ProjectsFilters from "@/app/_components/projects/ProjectsFilters";
import ContentBox from "@/app/_components/ui/ContentBox";
import Headline from "@/app/_components/ui/Headline";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

export async function generateMetadata() {
  const t = await getTranslations("PortfilioPage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

const Portfolio = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const { filter } = await searchParams;
  const t = await getTranslations("PortfilioPage");
  // console.log(filter);
  return (
    <>
      <Headline>{t("title")}</Headline>
      <ContentBox>
        <ProjectsFilters />
        <Suspense fallback={<div>Loading...</div>}>
          <Projects filter={filter} />
        </Suspense>
      </ContentBox>
    </>
  );
};

export default Portfolio;
