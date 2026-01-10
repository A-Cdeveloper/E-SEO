import Card from "../_components/ui/Card";
import { getTranslations } from "next-intl/server";

// Force static generation
export const dynamic = "force-static";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex flex-col h-auto lg:h-screen justify-start lg:justify-center py-3 lg:py-0">
      <div className="grid sm:grid-cols-4 sm:grid-rows-4 gap-4 relative">
        <Card
          href="/about-us"
          bgcolor="bg-orange-normal"
          className="col-span-2 row-span-2 z-10 hover:ps-2 hover:bg-orange-normal/95"
          delay={2}
          style={{
            transform: "translateX(40%) translateY(50%) scale(0.5)",
            opacity: 0,
          }}
          animate={{
            transform: "translateX(0%) translateY(0%) scale(1)",
            opacity: 1,
          }}
        >
          {t("aboutCardTitle")}
        </Card>

        <Card
          href="/portfolio"
          bgcolor="bg-turquoise"
          className="col-span-2 row-span-2 z-20 hover:ps-2  hover:bg-turquoise/95"
          delay={3}
          style={{
            transform: "translateX(-50%) translateY(50%) scale(0.5)",
            opacity: 0,
          }}
          animate={{
            transform: "translateX(0%) translateY(0%) scale(1)",
            opacity: 1,
          }}
        >
          {t("portfolioCardTitle")}
        </Card>

        <Card
          bgcolor="bg-gray-dark"
          className=" col-span-2 row-span-2 z-40 hidden sm:block"
          delay={7}
          style={{
            transform:
              "translateX(52.5%) translateY(-52.5%) scale(0.70) rotate(45deg)",
          }}
          animate={{
            transform:
              "translateX(52.5%) translateY(-52.5%) scale(.3) rotate(0deg)",
          }}
        ></Card>

        <Card
          href="/contact"
          bgcolor="bg-dirty"
          headlineColor="text-black"
          className="col-span-2 row-span-2 z-30 hover:ps-2  hover:bg-dirty/95"
          delay={5}
          style={{
            transform: "translateX(-50%) translateY(-50%) scale(0.5)",
            opacity: 0,
          }}
          animate={{
            transform: "translateX(0%) translateY(0%) scale(1)",
            opacity: 1,
          }}
        >
          {t("contactCardTitle")}
        </Card>

        <Card
          bgcolor="bg-gray-dark"
          className="z-30 relative sm:absolute bottom-0 left-0 w-full sm:w-1/2"
          headlineColor="font-normal text-center px-10 opacity-60"
          delay={10}
          style={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          {t("moto")}
        </Card>
      </div>
    </div>
  );
}
