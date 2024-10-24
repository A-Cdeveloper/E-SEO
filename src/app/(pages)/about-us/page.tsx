import ContentBox from "@/app/_components/ui/ContentBox";
import Headline from "@/app/_components/ui/Headline";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "About us | E-SEO TEAM – Expert Website Creation & Optimization Solutions",
  description:
    "We specialize in creating cutting-edge websites and delivering top SEO services for businesses.",
};

const AboutUs = () => {
  return (
    <>
      <Headline>ABOUT US</Headline>
      <ContentBox extraClass="mb-16">
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
      </ContentBox>

      <Headline level={2}>Tech stack</Headline>
      <ContentBox>
        <p>
          Frontend: HTML5 | CSS3/SCSS | Bootstrap | Tailwind CSS | MUI X |
          JavaScript (ES6+) | React | React Native | Next.js | Redux <br />
          CMS: Wordpress | Woocommerce <br />
          Backend: Node.js, Express | Php <br />
          Databases: MySQL | SQLite | MongoDB | PostgreSQL
        </p>
      </ContentBox>
    </>
  );
};

export default AboutUs;
