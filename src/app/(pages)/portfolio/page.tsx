//import prisma from "@/db/db";

const Portfolio = async () => {
  //const projects = await prisma.project.findMany();

  //console.log(projects);

  return (
    <div>
      <h1 className="text-6xl mb-4 pt-8 md:pt-28">
        <span>&lt;</span>Portfolio <span>/&gt;</span>
      </h1>
      <div className="ps-11 mt-10">portfolio</div>
    </div>
  );
};

export default Portfolio;
