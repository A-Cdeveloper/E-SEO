"use client";
import { ProjectType } from "@/types/project";
import React, { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import PaginateBar from "./Paginate";
import { useSearchParams } from "next/navigation";

const PaginatedProjects = ({ projects }: { projects: ProjectType[] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const searchParams = useSearchParams();

  const itemsPerPage = 15;
  const offset = currentPage * itemsPerPage;
  const currentProjects = projects.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(projects.length / itemsPerPage);

  // Reset page to 0 when searchParams change
  useEffect(() => {
    setCurrentPage(0);
  }, [searchParams]);

  // Handle page change
  const handlePageClick = (e: { selected: number }) => {
    setCurrentPage(e.selected);
  };

  return (
    <>
      {currentProjects?.map((project) => (
        <SingleProject key={project.project_id} project={project} />
      ))}
      {pageCount > 1 && (
        <PaginateBar
          pageCount={pageCount}
          handlePageClick={handlePageClick}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default PaginatedProjects;
