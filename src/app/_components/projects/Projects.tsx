import prisma from "@/db/db";
import SingleProject from "./SingleProject";

const Projects = async ({ filter }: { filter: string }) => {
  //await new Promise((resolve) => setTimeout(resolve, 4000));

  //console.log(filter);

  let query = {};

  if (filter) {
    query = {
      where: {
        project_platform: {
          equals: filter,
          mode: "insensitive", // Case-insensitive filter
        },
      },
    };
  }

  const projects = await prisma.project.findMany(query);
  const numberOfProjects = projects.length;

  return (
    <>
      <span className="block my-2 text-sm">
        Number of projects: {numberOfProjects}
      </span>
      {projects?.map((project) => (
        <SingleProject key={project.project_id} project={project} />
      ))}
    </>
  );
};

export default Projects;
