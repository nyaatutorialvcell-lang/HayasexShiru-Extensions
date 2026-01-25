// shared/search.js
// Shared search logic for Nyaa/Sukebei

export async function fetchResults(query, source) {
  const url =
    source === "nyaa"
      ? `https://nyaa.si/?f=0&c=0_0&q=${encodeURIComponent(query)}`
      : `https://sukebei.nyaa.si/?f=0&c=0_0&q=${encodeURIComponent(query)}`;

  const res = await fetch(url);
  const html = await res.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const rows = [...doc.querySelectorAll("table.torrent-list tr")];

  return rows
    .map((r) => ({
      title: r.querySelector("td.torrent-name a")?.textContent,
      link: r.querySelector("td.torrent-name a")?.href,
      size: r.querySelector("td.size")?.textContent,
    }))
    .filter((x) => x.title);
}