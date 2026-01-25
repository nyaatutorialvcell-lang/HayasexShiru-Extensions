import { fetchResults } from "../../shared/search.js";

export default async function search(query) {
  return await fetchResults(query, "nyaa");
}