import ContentBox from "@/app/_components/ui/ContentBox";
import Form from "@/app/_components/ui/Form";
import Headline from "@/app/_components/ui/Headline";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import qrcode from "../../../../images/qrcode.png";
import { routing } from "@/i18n/routing";

// Generate static pages for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Force static generation
export const dynamic = "force-static";

export async function generateMetadata() {
  const t = await getTranslations("ContactPage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

const Contact = async () => {
  const t = await getTranslations("ContactPage");
  return (
    <>
      <Headline>{t("title")}</Headline>
      <ContentBox extraClass="mb-16 grid grid-cols-1 xl:grid-cols-2">
        <>
          <p>
            {t("data.phone")} +381 63 7675989
            <br />
            {t("data.email")}:{" "}
            <a href="mailto:kontakt@e-seo.info">kontakt@e-seo.info</a>
            <br />
            <Image
              src={qrcode}
              alt="qrcode"
              width={200}
              height={200}
              className="mt-5"
            />
          </p>
        </>
        <p>
          {t("data.pib")} 107319556
          <br />
          {t("data.registration_num")}62659459
          <br />
          {t("data.business_code")}6201 (Computer Programming)
          <br />
          {t("data.authorized_person")} IT Engineer Aleksandar Cvetković
          <br />
          {t("data.bank_account")} 160-362412-16 Banka Intesa AD
          <br />
          {t("data.bank_account")} 00-514-60758 Banka Intesa AD
          <br />
          <Link
            href="/PIB.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            {t("data.tax_document")} (2 MB)
          </Link>
          <br />
          <Link
            href="/identifikacija.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            {t("data.identification_document")} (142 KB)
          </Link>
        </p>
      </ContentBox>
      <Headline level={2}>{t("secondTitle")}</Headline>
      <ContentBox>
        <Form />
      </ContentBox>
    </>
  );
};

export default Contact;
