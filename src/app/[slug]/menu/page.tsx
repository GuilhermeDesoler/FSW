import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantCategories from "./components/categories";
import RestaurantHeader from "./components/header";

interface RestauranteMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKE_AWAY"].includes(consumptionMethod);
};

const RestauranteMenuPage = async ({
  params,
  searchParams,
}: RestauranteMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;

  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    include: {
      menuCategory: {
        include: {
          products: true,
        },
      },
    },
  });

  if (!isConsumptionMethodValid(consumptionMethod) || !restaurant) {
    return notFound();
  }

  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
      <RestaurantCategories restaurant={restaurant} />
    </div>
  );
};

export default RestauranteMenuPage;
