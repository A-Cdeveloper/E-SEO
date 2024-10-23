import Card from "./_components/Card";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-start lg:justify-center">
      <div className="grid sm:grid-cols-4 sm:grid-rows-4 gap-4">
        <Card
          href="/about-us"
          bgcolor="bg-orange-normal"
          className="col-span-2 row-span-2 z-10"
          delay={2}
          style={{
            transform: "translateX(40%) translateY(50%) scale(0.5)",
          }}
          animate={{
            transform: "translateX(0%) translateY(0%) scale(1)",
          }}
        >
          ABOUT US
        </Card>

        <Card
          href="/portfolio"
          bgcolor="bg-yellow"
          className="col-span-2 row-span-2 z-20"
          delay={3}
          style={{
            transform: "translateX(-50%) translateY(50%) scale(0.5)",
          }}
          animate={{
            transform: "translateX(0%) translateY(0%) scale(1)",
          }}
        >
          portfolio
        </Card>

        <Card
          bgcolor="bg-gray-dark"
          className=" col-span-2 row-span-2 z-40"
          delay={6}
          style={{
            transform: "translateX(50%) translateY(-50%) scale(0.95)",
          }}
          animate={{
            transform: "translateX(53%) translateY(-53%) scale(.3)",
            //borderRadius: "50%",
          }}
        ></Card>

        <Card
          href="/contact"
          bgcolor="bg-white"
          headlineColor="text-black"
          className="col-span-2 row-span-2 z-30"
          delay={5}
          style={{
            transform: "translateX(-50%) translateY(-50%) scale(0.5)",
          }}
          animate={{
            transform: "translateX(0%) translateY(0%) scale(1)",
          }}
        >
          CONTACT
        </Card>
      </div>
    </div>
  );
}
