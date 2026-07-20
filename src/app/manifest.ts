import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Namibian Hockey Union",
    short_name: "NHU",
    description:
      "The official home of the Namibian Hockey Union. Fixtures, results, clubs, national teams, and the rules of the game.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0A1A2F",
    icons: [
      {
        src: "/brand/nhu-logo-transparent.png",
        sizes: "400x400",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/nhu-logo-transparent.png",
        sizes: "400x400",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
