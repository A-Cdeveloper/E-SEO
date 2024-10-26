"use client";
import { ProjectType } from "@/types/project";
import React, { useState } from "react";
import SingleProject from "./SingleProject";
import PaginateBar from "./Paginate";

const PaginatedProjects = ({ projects }: { projects: ProjectType[] }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const currentProjects = projects.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(projects.length / itemsPerPage);

  // Handle page change
  const handlePageClick = (e: { selected: number }) => {
    setCurrentPage(e.selected);
  };

  console.log(pageCount);

  return (
    <>
      {currentProjects?.map((project) => (
        <SingleProject key={project.project_id} project={project} />
      ))}
      {pageCount > 1 && (
        <PaginateBar pageCount={pageCount} handlePageClick={handlePageClick} />
      )}
    </>
  );
};

export default PaginatedProjects;
