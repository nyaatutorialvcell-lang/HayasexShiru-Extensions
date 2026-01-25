const fs = require("fs");

const sources = [
  {
    id: "nyaa",
    name: "Nyaa",
    icon: "https://nyaa.si/static/favicon.png",
    type: "torrent",
    media: "sub",
    accuracy: "medium",
  },
  {
    id: "sukebei",
    name: "Sukebei",
    icon: "https://sukebei.nyaa.si/static/favicon.png",
    type: "torrent",
    media: "both",
    accuracy: "medium",
  },
];

// Hayase index
const hayaseIndex = sources.map((s) => ({
  id: `hayase.extension.${s.id}`,
  name: s.name,
  version: "1.0.0",
  type: s.type,
  accuracy: s.accuracy,
  ratio: 0,
  media: s.media,
  languages: ["all"],
  icon: s.icon,
  update:
    "https://raw.githubusercontent.com/ReWelp/HayasexShiru-Extensions/main/hayase/index.json",
  code: `https://raw.githubusercontent.com/ReWelp/HayasexShiru-Extensions/main/hayase/${s.id}.js`,
}));

fs.writeFileSync("./hayase/index.json", JSON.stringify(hayaseIndex, null, 2));

// Shiru index
const shiruIndex = {
  sources: sources.map((s) => ({
    id: s.id,
    name: s.name,
    version: "0.0.3",
    main: `${s.id}/code.js`,
    type: s.type,
    description: `Shiru extension for ${s.name}`,
    icon: s.icon,
    update:
      "https://raw.githubusercontent.com/ReWelp/HayasexShiru-Extensions/main/shiru/index.json",
  })),
};

fs.writeFileSync("./shiru/index.json", JSON.stringify(shiruIndex, null, 2));

console.log("Indexes generated successfully!");