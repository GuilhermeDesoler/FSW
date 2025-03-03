"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  const router = useRouter();

  const handleBack = () => router.back();

  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="z-58 absolute left-4 top-4 rounded-full"
        onClick={handleBack}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
      <Button
        variant="secondary"
        size="icon"
        className="z-58 absolute right-4 top-4 rounded-full"
        onClick={handleBack}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default RestaurantHeader;
