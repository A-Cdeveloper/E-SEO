import prisma from "@/db/db";
import SingleProject from "./SingleProject";
import { ProjectType } from "@/types/project";

const Projects = async ({ filter }: { filter: string }) => {
  let query = {};

  if (filter) {
    query = {
      where: {
        project_platform: {
          equals: filter,
          mode: "insensitive", // Case-insensitive filter
        },
      },
      orderBy: {
        project_name: "asc",
      },
    };
  }

  let projects: ProjectType[] = [];

  try {
    projects = await prisma.project.findMany(query);
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
          Number of projects:{" "}
          <span className="text-white font-bold">{numberOfProjects}</span>
        </span>
      </div>
      {projects?.map((project) => (
        <SingleProject key={project.project_id} project={project} />
      ))}
    </>
  );
};

export default Projects;
