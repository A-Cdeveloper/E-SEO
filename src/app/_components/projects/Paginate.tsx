"use client";
import { useTranslations } from "next-intl";
import ReactPaginate from "react-paginate";

const PaginateBar = ({
  pageCount,
  handlePageClick,
  currentPage,
}: {
  pageCount: number;
  currentPage: number;
  handlePageClick: (e: { selected: number }) => void;
}) => {
  const t = useTranslations("website");

  return (
    <ReactPaginate
      previousLabel={t("pagination.previous")}
      nextLabel={t("pagination.next")}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      forcePage={currentPage}
      activeClassName={"active"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
    />
  );
};

export default PaginateBar;
