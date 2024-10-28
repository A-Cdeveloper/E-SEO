import { Metadata } from "next";
import ContentBox from "../_components/ui/ContentBox";
import Headline from "../_components/ui/Headline";

export const metadata: Metadata = {
  title:
    "Not Found | E-SEO TEAM – Expert Website Creation & Optimization Solutions",
  description: "",
};

export default function NotFound() {
  return (
    <div className="pt-8 lg:pt-32">
      <Headline>Not Found</Headline>
      <ContentBox extraClass="mb-16">
        <p>Could not find requested page.</p>
      </ContentBox>
    </div>
  );
}
