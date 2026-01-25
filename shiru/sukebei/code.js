export default {
  id: "sukebei",
  name: "Sukebei",
  type: "torrent",

  async search(query) {
    return {
      engine: "sukebei",
      query
    }
  }
}