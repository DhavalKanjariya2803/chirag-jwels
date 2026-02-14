export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  features: string[];
}

export const products: Product[] = [
  {
    id: "emerald-001",
    name: "Natural Emerald Gemstone",
    category: "Emerald",
    description:
      "A natural emerald valued for its vibrant green color and high transparency. This gemstone is associated with love, wisdom, and emotional balance, making it ideal for fine jewelry.",
    image: "/assets/emerald.webp",
    images: [
      "/assets/emerald.webp",
      "/assets/emerald-1.svg",
      "/assets/emerald-2.png",
      "/assets/emerald-3.svg",
    ],
    features: [
      "Authenticity Guaranteed",
      "Free Shipping",
      "Lifetime Warranty",
      "30-Day Returns",
    ],
  },
  {
    id: "ruby-001",
    name: "Natural Ruby Gemstone",
    category: "Ruby",
    description: "Deep red ruby gemstones with exceptional brilliance.",
    image: "/assets/ruby.webp",
    images: ["/assets/ruby.webp", "/assets/ruby-1.svg", "/assets/ruby-2.svg"],
    features: [
      "Authenticity Guaranteed",
      "Free Shipping",
      "Lifetime Warranty",
      "30-Day Returns",
    ],
  },
  {
    id: "sapphire-001",
    name: "Natural Sapphire Gemstone",
    category: "Sapphire",
    description: "Blue, yellow, pink, and Kashmiri sapphires.",
    image: "/assets/sapphire.webp",
    images: [
      "/assets/sapphire.webp",
      "/assets/sapphire-1.png",
      "/assets/sapphire-2.png",
      "/assets/sapphire-3.svg",
      "/assets/sapphire-4.svg",
    ],
    features: [
      "Authenticity Guaranteed",
      "Free Shipping",
      "Lifetime Warranty",
      "30-Day Returns",
    ],
  },
  {
    id: "turquoise-001",
    name: "Natural Turquoise Gemstone",
    category: "Turquoise",
    description: "Sky blue turquoise with natural matrix patterns.",
    image: "/assets/turquoise.webp",
    images: [
      "/assets/turquoise.webp",
      "/assets/turquoise-1.png",
      "/assets/turquoise-2.png",
      "/assets/turquoise-3.png",
      "/assets/turquoise-4.png",
      "/assets/turquoise-5.png",
      "/assets/turquoise-6.svg",
      "/assets/turquoise-7.svg",
      "/assets/turquoise-8.png",
      "/assets/turquoise-9.png",
    ],
    features: [
      "Authenticity Guaranteed",
      "Free Shipping",
      "Lifetime Warranty",
      "30-Day Returns",
    ],
  },
  {
    id: "tourmaline-001",
    name: "Natural Tourmaline Gemstone",
    category: "Tourmaline",
    description: "Rare Paraiba tourmaline with neon blue-green glow.",
    image: "/assets/tourmaline.webp",
    images: [
      "/assets/tourmaline.webp",
      "/assets/tourmaline-1.svg",
      "/assets/tourmaline-2.svg",
    ],
    features: [
      "Authenticity Guaranteed",
      "Free Shipping",
      "Lifetime Warranty",
      "30-Day Returns",
    ],
  },
  {
    id: "tanzanite-001",
    name: "Natural Tanzanite Gemstone",
    category: "Tanzanite",
    description: "Rare violet-blue tanzanite gemstone.",
    image: "/assets/tanzanite.webp",
    images: [
      "/assets/tanzanite.webp",
      "/assets/tanzanite-1.png",
      "/assets/tanzanite-2.svg",
      "/assets/tanzanite-3.svg",
      "/assets/tanzanite-4.png",
    ],
    features: [
      "Authenticity Guaranteed",
      "Free Shipping",
      "Lifetime Warranty",
      "30-Day Returns",
    ],
  },
  {
    id: "aquamarine-001",
    name: "Natural Aquamarine Gemstone",
    category: "Aquamarine",
    description: "Light blue aquamarine gemstone.",
    image: "/assets/aquamarine.webp",
    images: [
      "/assets/aquamarine.webp",
      "/assets/aquamarine-1.svg",
      "/assets/aquamarine-2.svg",
    ],
    features: [
      "Authenticity Guaranteed",
      "Free Shipping",
      "Lifetime Warranty",
      "30-Day Returns",
    ],
  },
  {
    id: "coral-001",
    name: "Natural Coral Gemstone",
    category: "Coral",
    description: "Organic red coral gemstone.",
    image: "/assets/coral.webp",
    images: [
      "/assets/coral.webp",
      "/assets/coral-1.png",
      "/assets/coral-2.svg",
    ],
    features: [
      "Authenticity Guaranteed",
      "Free Shipping",
      "Lifetime Warranty",
      "30-Day Returns",
    ],
  },
  {
    id: "opal-001",
    name: "Natural Opal Gemstone",
    category: "Opal",
    description: "Opal with natural play of colors.",
    image: "/assets/opal.webp",
    images: [
      "/assets/opal.webp",
      "/assets/opal-1.svg",
      "/assets/opal-2.svg",
    ],
    features: [
      "Authenticity Guaranteed",
      "Free Shipping",
      "Lifetime Warranty",
      "30-Day Returns",
    ],
  },
];

export const categories = [
  { name: "Emerald", image: "/assets/emerald.webp", slug: "emerald" },
  { name: "Ruby", image: "/assets/ruby.webp", slug: "ruby" },
  { name: "Sapphire", image: "/assets/sapphire.webp", slug: "sapphire" },
  { name: "Turquoise", image: "/assets/turquoise.webp", slug: "turquoise" },
];
