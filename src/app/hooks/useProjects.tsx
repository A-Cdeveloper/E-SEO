import prisma from "@/db/db";

const useProjects = async () => {
  const projects = await prisma.project.findMany({
    where: {
      project_platform: {
        equals: "woocommerce",
        mode: "insensitive", // Case-insensitive filter
      },
    },
  });
  const numberOfProjects = projects.length;

  return {
    projects,
    numberOfProjects,
  };
};

export default useProjects;
