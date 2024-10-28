import ContentBox from "@/app/_components/ui/ContentBox";
import Form from "@/app/_components/ui/Form";
import Headline from "@/app/_components/ui/Headline";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import qrcode from "../../../../images/qrcode.png";

export const metadata: Metadata = {
  title:
    "Contact | E-SEO TEAM – Expert Website Creation & Optimization Solutions",
  description:
    "Get in touch with E-SEO TEAM for expert website creation and optimization services. Contact us today to discuss your project and boost your online presence.",
};

const Contact = () => {
  return (
    <>
      <Headline>CONTACT</Headline>
      <ContentBox extraClass="mb-16 grid grid-cols-1 xl:grid-cols-2">
        <>
          <p>
            Mobile: +381 63 7675989
            <br />
            Tax ID (PIB): 107319556
            <br />
            E-mail: <a href="mailto:kontakt@e-seo.info">kontakt@e-seo.info</a>
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
          PIB: 107319556
          <br />
          Registration Num.: 62659459
          <br />
          Business Code: 6201 (Computer Programming)
          <br />
          Authorized Person: IT Engineer Aleksandar Cvetković
          <br />
          Bank Account: 160-362412-16 Banka Intesa AD
          <br />
          Bank Account: 00-514-60758 Banka Intesa AD
          <br />
          <Link
            href="/PIB.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Tax ID document (2 MB)
          </Link>
          <br />
          <Link
            href="/identifikacija.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Identification document (142 KB)
          </Link>
        </p>
      </ContentBox>
      <Headline level={2}>Write to us</Headline>
      <ContentBox>
        <Form />
      </ContentBox>
    </>
  );
};

export default Contact;
