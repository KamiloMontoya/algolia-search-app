import { RefinementList, Configure, InfiniteHits } from "react-instantsearch";
import { Hit } from "algoliasearch";
import { Restaurant } from "@/types/algolia";
import { ALGOLIA_INDEX_NAME, searchClient } from "@/lib/algolia";
import SearchBoxWithURL from "./SearchBoxWhitUrl";
import RestaurantCard from "./RestaurantCard";
import { toast } from "react-toastify";

const handleDeleteRestaurant = async (objectID: string) => {
  try {
    await searchClient.deleteObject({
      indexName: ALGOLIA_INDEX_NAME,
      objectID,
    });

    const element = document.getElementById(`restaurant-card-${objectID}`);
    if (element) {
      element.classList.add("hidden");
    }

    toast.success("Restaurant was deleted");
  } catch (error) {
    console.error("Error deleting restaurant:", error);
    toast.error("Error deleting restaurant");
  }
};

const AlgoliaRestaurantsSearch = () => (
  <>
    <div className="flex justify-between">
      <SearchBoxWithURL />
      <RefinementList attribute="name" />
    </div>
    <Configure hitsPerPage={10} />
    <InfiniteHits
      showPrevious={false}
      hitComponent={({ hit }) => (
        <RestaurantCard
          restaurant={hit as unknown as Hit<Restaurant>}
          onDelete={handleDeleteRestaurant}
        />
      )}
      classNames={{
        loadMore:
          "mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200",
      }}
    />
  </>
);

export default AlgoliaRestaurantsSearch;
