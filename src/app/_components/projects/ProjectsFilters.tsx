import FilterLink from "./FilterLink";

const ProjectsFilters = () => {
  return (
    <div className="flex justify-between items-start border-b border-t border-white/30 py-2 px-2 my-3">
      <span>
        <span>
          <FilterLink href="portfolio">All</FilterLink>
        </span>
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