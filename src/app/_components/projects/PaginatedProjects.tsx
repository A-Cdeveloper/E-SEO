import { ProjectType } from "@/types/project";
import React from "react";
import SingleProject from "./SingleProject";

const PaginatedProjects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <>
      {projects?.map((project) => (
        <SingleProject key={project.project_id} project={project} />
      ))}
    </>
  );
};

export default PaginatedProjects;
