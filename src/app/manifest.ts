import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cien Portfolio",
    short_name: "Cien",
    description: "Social Media & Creator Operations Lead",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F7F5",
    theme_color: "#B83A4B",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
