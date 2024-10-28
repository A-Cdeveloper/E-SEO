import ContentBox from "@/app/_components/ui/ContentBox";
import Headline from "@/app/_components/ui/Headline";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";

export const metadata: Metadata = {
  title:
    "About us | E-SEO TEAM – Expert Website Creation & Optimization Solutions",
  description:
    "We specialize in creating cutting-edge websites and delivering top SEO services for businesses.",
};

const AboutUs = () => {
  const t = useTranslations("AboutPage");

  const paragraphs = [
    t("textContent.paragraph1"),
    t("textContent.paragraph2"),
    t("textContent.paragraph3"),
    t("textContent.paragraph4"),
  ];

  return (
    <>
      <Headline>{t("title")}</Headline>
      <ContentBox extraClass="mb-16">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>
            {index === 1 ? <strong>{paragraph}</strong> : paragraph}
          </p>
        ))}
      </ContentBox>

      <Headline level={2}>{t("secondTitle")}</Headline>
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
