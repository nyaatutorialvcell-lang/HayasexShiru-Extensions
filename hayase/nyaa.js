import { fetchResults } from "../shared/search.js";

export default {
  search: async function (query) {
    return await fetchResults(query, "nyaa");
  },
};