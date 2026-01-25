export default {
  id: "nyaa",
  name: "Nyaa",
  type: "torrent",

  async search(query) {
    const url =
      "https://torrent-search-api-livid.vercel.app/api/nyaasi/" +
      encodeURIComponent(query)

    const res = await fetch(url)
    if (!res.ok) return []

    const data = await res.json()
    if (!Array.isArray(data)) return []

    return data.map(item => ({
      title: item.Name,
      magnet: item.Magnet,
      seeders: Number(item.Seeders || 0),
      leechers: Number(item.Leechers || 0),
      size: 0,
      date: new Date(item.DateUploaded)
    }))
  }
}