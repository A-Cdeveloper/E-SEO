import prisma from "@/db/db";
import { ProjectType } from "@/types/project";
import PaginatedProjects from "./PaginatedProjects";
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

const Projects = async () => {
  let projects: ProjectType[] = [];

  try {
    // Fetch all projects (no filter) - filtering happens on client side
    projects = await getCachedProjects();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message); // Safely access `message`
      throw new Error("Error fetching projects!");
    }
    throw new Error("Unknown error fetching projects!");
  }

  return <PaginatedProjects projects={projects} />;
};

export default Projects;
