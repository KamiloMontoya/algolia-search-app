import { useState } from "react";
import { ALGOLIA_INDEX_NAME, searchClient } from "@/lib/algolia";
import { CreateRestaurantData } from "@/types/algolia";
import { toast } from "react-toastify";

const initRestaurantFormData: CreateRestaurantData = {
  name: "",
  address: "",
  area: "",
  city: "",
  country: "",
  image_url: "",
  mobile_reserve_url: "",
  payment_options: [],
  phone: "",
  postal_code: "",
  price: 0,
  reserve_url: "",
  state: "",
  food_type: "",
  stars_count: 0,
  reviews_count: 0,
  neighborhood: "",
  phone_number: "",
  price_range: "",
  dining_style: "",
};

export const AddRestaurantForm = () => {
  const [formData, setFormData] = useState<CreateRestaurantData>(
    initRestaurantFormData,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "payment_options") {
      setFormData({
        ...formData,
        payment_options: value.split(",").map((option) => option.trim()),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setFormData(initRestaurantFormData);

      await searchClient.saveObject({
        indexName: ALGOLIA_INDEX_NAME,
        body: formData,
      });
      toast.success(
        "Restaurant was created, please reload the page to see the changes",
      );
      setIsLoading(false);
    } catch (error) {
      console.error("Error creating restaurant:", error);
      toast.error("Error creating restaurant");
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="mb-4">
          <label
            htmlFor={key}
            className="block text-gray-700 font-semibold mb-2"
          >
            {key
              .replace(/_/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </label>
          <input
            type={typeof value === "number" ? "number" : "text"}
            name={key}
            value={
              key === "payment_options" ? (value as string[]).join(", ") : value
            }
            onChange={handleChange}
            placeholder={`Enter ${key.replace(/_/g, " ")}`}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min={key === "price" ? 1 : undefined}
            max={key === "price" ? 4 : undefined}
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        disabled={isLoading}
      >
        Add Restaurant
      </button>
    </form>
  );
};
