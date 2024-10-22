import {
  Html,
  Heading,
  Text,
  Link,
  Tailwind,
  Container,
  Body,
} from "@react-email/components";

type emaildataType = {
  fullname: string;
  email: string;
  phone: string;
  message: string;
};

const EmailTemplate = ({ fullname, email, phone, message }: emaildataType) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#2D2E2EFF",
            },
          },
        },
      }}
    >
      <Html lang="en" className="bg-brand">
        <Container className="text-white p-4">
          <Heading as="h1">New Message from E-SEO Website</Heading>

          <Text style={text}>Name: {fullname}</Text>
          <Text style={text}>
            Email: <Link href={`mailto:${email}`}>{email}</Link>
          </Text>
          <Text style={text}>Phone: {phone}</Text>
          <Text style={text}>Message: {message}</Text>
        </Container>
      </Html>
    </Tailwind>
  );
};

const text = {
  marginBottom: "0px",
};

export default EmailTemplate;
