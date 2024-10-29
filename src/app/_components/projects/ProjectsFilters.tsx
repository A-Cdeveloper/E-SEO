import FilterLink from "./FilterLink";

const ProjectsFilters = () => {
  return (
    <div
      className="flex justify-start md:justify-between items-start flex-wrap border-b border-t border-white/30 py-2 px-2 gap-x-4 mt-10
     leading-1"
    >
      <span>
        <FilterLink href="portfolio">All</FilterLink>
      </span>

      <span>
        <FilterLink href="wordpress">Wordpress</FilterLink>
      </span>
      <span>
        <FilterLink href="Woocommerce">Woocommerce</FilterLink>
      </span>

      <span>
        <FilterLink href="phpMysql">PhpMysql</FilterLink>
      </span>
      <span>
        <FilterLink href="nextreact">Next/React</FilterLink>
      </span>
    </div>
  );
};

export default ProjectsFilters;
