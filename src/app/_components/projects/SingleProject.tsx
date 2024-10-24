import { removeHttps } from "@/lib/helper";
import { ProjectType } from "@/types/project";
import Link from "next/link";
import React from "react";

const SingleProject = ({ project }: { project: ProjectType }) => {
  return (
    <div key={project.project_id}>
      <Link
        href={`${project.project_url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-between items-center border-t border-white/10 no-underline leading-8"
      >
        {project.project_name} - {removeHttps(project.project_url)}
      </Link>
    </div>
  );
};

export default SingleProject;
