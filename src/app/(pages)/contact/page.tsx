import Form from "@/app/_components/Form";

const Contact = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4 pt-8 md:pt-36">
        <span>&lt;</span>CONTACT <span>/&gt;</span>
      </h1>
      <div className="ps-7 mb-10 pe-7 md:pe-0 grid grid-cols-1 xl:grid-cols-2">
        <p>
          Mobile: +381 63 7675989
          <br />
          Tax ID (PIB): 107319556
          <br />
          E-mail: <a href="mailto:kontakt@e-seo.info">kontakt@e-seo.info</a>
          <br />
        </p>
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
          Tax ID (2 MB) <br />
          Identification (142 KB)
        </p>
      </div>
      <h2 className="text-5xl mb-4">
        <span>&lt;</span>Write to us <span>/&gt;</span>
      </h2>
      <div className="ps-7">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
