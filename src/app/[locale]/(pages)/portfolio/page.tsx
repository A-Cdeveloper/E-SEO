import ProjectsFilters from "@/app/_components/projects/ProjectsFilters";
import Projects from "@/app/_components/projects/Projects";
import { Suspense } from "react";
import Headline from "@/app/_components/ui/Headline";
import ContentBox from "@/app/_components/ui/ContentBox";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title:
    "Portfolio | E-SEO TEAM – Expert Website Creation & Optimization Solutions",
  description:
    "Explore E-SEO TEAM's portfolio of custom website designs and successful optimization projects. See how we've helped businesses grow their online presence with cutting-edge solutions.",
};

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
