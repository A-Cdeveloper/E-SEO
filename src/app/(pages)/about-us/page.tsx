import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4 pt-8 md:pt-36">
        <span>&lt;</span>ABOUT US <span>/&gt;</span>
      </h1>
      <div className="ps-7 mb-10 pe-7 md:pe-0">
        <p>
          We specialize in creating cutting-edge websites and delivering top SEO
          services for businesses. With a passionate team of developers,
          designers, and digital marketing experts, we craft tailored solutions
          that boost online visibility, improve user experience, and drive
          results.
        </p>
        <p>
          <strong>Our mission</strong> is simple: to help local and
          international businesses grow through innovative web solutions and
          data-driven SEO strategies.
        </p>
        <p>
          We stay ahead of the curve with the latest trends, ensuring your
          business ranks higher and stands out in the crowded digital landscape.
        </p>
        <p>
          Whether you need a brand-new website, a redesign, or an SEO overhaul,
          we&apos;re here to make your vision a reality.
        </p>
      </div>
      <h2 className="text-5xl mb-4">
        <span>&lt;</span>Tech stack <span>/&gt;</span>
      </h2>
      <div className="ps-7">
        <p>
          Frontend: HTML5 | CSS3/SCSS | Bootstrap | Tailwind CSS | MUI X |
          JavaScript (ES6+) | React | React Native | Next.js | Redux <br />
          CMS: Wordpress | Woocommerce <br />
          Backend: Node.js, Express | Php <br />
          Databases: MySQL | SQLite | MongoDB | PostgreSQL
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
