import ProjectsFilters from "@/app/_components/projects/ProjectsFilters";
import Projects from "@/app/_components/projects/Projects";
import { Suspense } from "react";

const Portfolio = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const { filter } = await searchParams;

  // console.log(filter);
  return (
    <div>
      <h1 className="text-6xl mb-4 pt-8 md:pt-28">
        <span>&lt;</span>Portfolio <span>/&gt;</span>
      </h1>
      <div className="ps-7 my-10">
        <ProjectsFilters />
        <Suspense fallback={<div>Loading...</div>}>
          <Projects filter={filter} />
        </Suspense>
      </div>
    </div>
  );
};

export default Portfolio;
