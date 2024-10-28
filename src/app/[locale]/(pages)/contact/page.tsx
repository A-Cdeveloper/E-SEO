import ContentBox from "@/app/_components/ui/ContentBox";
import Form from "@/app/_components/ui/Form";
import Headline from "@/app/_components/ui/Headline";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import qrcode from "../../../../images/qrcode.png";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title:
    "Contact | E-SEO TEAM – Expert Website Creation & Optimization Solutions",
  description:
    "Get in touch with E-SEO TEAM for expert website creation and optimization services. Contact us today to discuss your project and boost your online presence.",
};

const Contact = () => {
  const t = useTranslations("ContactPage");
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
