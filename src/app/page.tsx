import Card from "./_components/Card";

export default function Home() {
  return (
    <div className="flex-1 flex justify-between flex-wrap gap-2 md:gap-1 lg:gap-2 xl:gap-4 pt-5 md:pt-24 px-5 md:px-3">
      <Card href="/about-us" bgcolor="bg-orange-normal">
        ABOUT US
      </Card>

      <Card href="/portfolio" bgcolor="bg-yellow">
        portfolio
      </Card>

      <Card></Card>

      <Card href="/contact" bgcolor="bg-white" headlineColor="text-black">
        CONTACT
      </Card>
    </div>
  );
}
