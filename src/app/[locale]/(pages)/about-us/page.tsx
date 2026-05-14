import ContentBox from "@/app/_components/ui/ContentBox";
import Headline from "@/app/_components/ui/Headline";

import { getTranslations, setRequestLocale } from "next-intl/server";

type TechStackSection = { label: string; technologies: string };

export const dynamic = "force-static";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

const AboutUs = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");
  const techStack = t.raw("techStack") as TechStackSection[];

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
        <div className="space-y-4">
          {techStack.map((section) => (
            <p key={section.label}>
              <strong className="text-white">{section.label}:</strong>{" "}
              {section.technologies}
            </p>
          ))}
        </div>
      </ContentBox>
    </>
  );
};

export default AboutUs;
