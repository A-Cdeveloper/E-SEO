"use client";
import { ProjectType } from "@/types/project";
import React, { useEffect, useState, useMemo } from "react";
import SingleProject from "./SingleProject";
import PaginateBar from "./Paginate";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

const PaginatedProjects = ({ projects }: { projects: ProjectType[] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const searchParams = useSearchParams();
  const t = useTranslations("website");

  // Filter projects on client side based on searchParams
  const filter = searchParams.get("filter");
  const filteredProjects = useMemo(() => {
    if (!filter) return projects;
    return projects.filter(
      (project) =>
        project.project_platform?.toLowerCase() === filter.toLowerCase()
    );
  }, [projects, filter]);

  const itemsPerPage = 15;
  const offset = currentPage * itemsPerPage;
  const currentProjects = filteredProjects.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredProjects.length / itemsPerPage);

  // Reset page to 0 when filter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [filter]);

  // Handle page change
  const handlePageClick = (e: { selected: number }) => {
    setCurrentPage(e.selected);
  };

  return (
    <>
      <div className="text-end">
        <span className="inline-block my-3 text-sm text-white/60">
          {t("pagination.numberOfProjects")}{" "}
          <span className="text-white font-bold">
            {filteredProjects.length}
          </span>
        </span>
      </div>
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
