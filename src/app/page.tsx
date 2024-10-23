import Card from "./_components/Card";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-start lg:justify-center">
      <div className="grid sm:grid-cols-4 sm:grid-rows-4 gap-4">
        <Card
          href="/about-us"
          bgcolor="bg-orange-normal"
          // className="col-span-4 row-span-4 rotate-45 translate-x-[50%] translate-y-[50%]"
          className="col-span-2 row-span-2"
        >
          ABOUT US
        </Card>

        <Card
          href="/portfolio"
          bgcolor="bg-yellow"
          // className="col-span-4 row-span-4 -rotate-45 -translate-x-[50%] translate-y-[50%]"
          className="col-span-2 row-span-2"
        >
          portfolio
        </Card>

        <Card bgcolor="bg-gray-dark" className="col-span-2 row-span-2"></Card>

        <Card
          href="/contact"
          bgcolor="bg-white"
          headlineColor="text-black"
          //className="col-span-4 row-span-4 -rotate-45 -translate-x-[50%] -translate-y-[50%]"
          className="col-span-2 row-span-2"
        >
          CONTACT
        </Card>
      </div>
    </div>
  );
}
