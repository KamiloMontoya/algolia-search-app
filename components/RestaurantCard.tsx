import { Restaurant } from "@/types/algolia";
import { Hit } from "algoliasearch";
import Image from "next/image";
import React from "react";

interface RestaurantItemProps {
  restaurant: Hit<Restaurant>;
  onDelete: (id: string) => void;
}

const RestaurantCard: React.FC<RestaurantItemProps> = ({
  restaurant,
  onDelete,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg flex mb-6 overflow-hidden transition-transform transform hover:scale-105">
      <Image
        src={restaurant.image_url}
        width={100}
        height={100}
        alt={restaurant.name}
        className="w-1/4 h-auto object-cover"
      />
      <div className="p-4 w-2/3">
        <h2 className="text-lg font-bold text-gray-800">{restaurant.name}</h2>
        <p className="text-gray-600">
          {restaurant.address}, {restaurant.city}, {restaurant.state}
        </p>
        <p className="text-gray-600">
          Food Type:{" "}
          <span className="font-semibold">{restaurant.food_type}</span>
        </p>
        <p className="text-gray-600">
          Price Range:{" "}
          <span className="font-semibold">{restaurant.price_range}</span>
        </p>
        <p className="text-gray-600">
          Dining Style:{" "}
          <span className="font-semibold">{restaurant.dining_style}</span>
        </p>
        <p className="text-gray-600">
          Phone:{" "}
          <a
            href={`tel:${restaurant.phone}`}
            className="text-blue-500 hover:underline"
          >
            {restaurant.phone}
          </a>
        </p>
        <p className="text-gray-600">
          Payment Options:{" "}
          <span className="font-semibold">
            {restaurant.payment_options.join(", ")}
          </span>
        </p>
        <p className="text-gray-600">
          Stars:{" "}
          <span className="font-semibold">{restaurant.stars_count} ⭐</span> (
          {restaurant.reviews_count} Reviews)
        </p>
        <p className="text-gray-600">
          Neighborhood:{" "}
          <span className="font-semibold">{restaurant.neighborhood}</span>
        </p>
        <div className="mt-4 flex justify-between items-center">
          <a
            href={restaurant.reserve_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          >
            Reserve Now
          </a>
          <button
            onClick={() => onDelete(restaurant.objectID)}
            className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
