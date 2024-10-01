import { algoliasearch, SearchClient } from "algoliasearch";

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;
const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;

export const ALGOLIA_INDEX_NAME = process.env
  .NEXT_PUBLIC_ALGOLIA_INDEX_NAME as string;

export const searchClient: SearchClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
);
