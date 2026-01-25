export default {
  id: "nyaa",
  name: "Nyaa",
  type: "torrent",

  async search(query) {
    return {
      engine: "nyaa",
      query
    }
  }
}