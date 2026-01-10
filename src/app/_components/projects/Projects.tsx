import prisma from "@/db/db";
import { ProjectType } from "@/types/project";
import PaginatedProjects from "./PaginatedProjects";
import { getTranslations } from "next-intl/server";
import { unstable_cache } from "next/cache";

// Cache projects query for 1 hour
const getCachedProjects = unstable_cache(
  async (filterKey?: string) => {
    if (filterKey) {
      return await prisma.project.findMany({
        where: {
          project_platform: {
            equals: filterKey,
            mode: "insensitive", // Case-insensitive filter
          },
        },
        orderBy: {
          project_name: "asc",
        },
      });
    } else {
      return await prisma.project.findMany({
        orderBy: {
          project_name: "asc",
        },
      });
    }
  },
  ["projects"], // Base cache key
  {
    revalidate: 3600, // Cache for 1 hour
    tags: ["projects"],
  }
);

const Projects = async ({ filter }: { filter: string }) => {
  const t = await getTranslations("website");

  let projects: ProjectType[] = [];

  try {
    // Use filter as part of the cache by calling with different parameter
    // Note: unstable_cache will cache based on the function call parameters
    projects = await getCachedProjects(filter);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message); // Safely access `message`
      throw new Error("Error fetching projects!");
    }
    throw new Error("Unknown error fetching projects!");
  }
  const numberOfProjects = projects.length;

  return (
    <>
      <div className="text-end">
        <span className="inline-block my-3 text-sm text-white/60">
          {t("pagination.numberOfProjects")}{" "}
          <span className="text-white font-bold">{numberOfProjects}</span>
        </span>
      </div>
      <PaginatedProjects projects={projects} />
    </>
  );
};

export default Projects;
