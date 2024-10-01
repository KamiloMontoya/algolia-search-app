import { algoliasearch, SearchClient } from "algoliasearch";
import * as restaurantDataset from "./data/restaurants.json";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;
const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;
const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME as string;

const client: SearchClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY as string,
);

// Fetch and index objects in Algolia
const processRecords = async (): Promise<void> => {
  try {
    await client.saveObjects({
      indexName: ALGOLIA_INDEX_NAME,
      objects: restaurantDataset as Array<Record<string, any>>,
    });
    console.log("Successfully indexed objects!");
  } catch (error) {
    console.error(error);
  }
};

processRecords();
