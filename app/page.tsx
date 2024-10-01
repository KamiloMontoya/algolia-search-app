"use client";
import { InstantSearch } from "react-instantsearch";
import AlgoliaRestaurantsSearch from "@/components/AlgoliaRestaurantsSearch";
import { ALGOLIA_INDEX_NAME, searchClient } from "@/lib/algolia";
import { AddRestaurantForm } from "@/components/AddRestaurantForm";
import { Modal } from "@/components/Modal";

export const fetchCache = "force-no-store";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Algolia Restaurant Search Page
      </h1>
      <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX_NAME}>
        <Modal openButtonText="Add new restaurant">
          <AddRestaurantForm />
        </Modal>
        <AlgoliaRestaurantsSearch />
      </InstantSearch>
    </div>
  );
}
