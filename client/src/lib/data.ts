export interface ProductDetail {
  title: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  features: string[];
  details?: ProductDetail[];
}

export const products: Product[] = [
  {
    id: "emerald-001",
    name: "Emerald Gemstone",
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
      "Rich green emerald known for clarity and brilliance."
    ],
    details: [
      {
        title: "Historical Significance",
        description: "Emeralds have been treasured since ancient times, particularly by Egyptian royalty who associated them with fertility and rebirth. Cleopatra was known for her love of emeralds and claimed all emerald mines as her own.",
        image: "/assets/emerald.webp"
      },
      {
        title: "Healing Properties",
        description: "Traditionally believed to enhance unity, love, and domestic bliss. Many cultures have used emeralds to promote healing of the heart and eyes, as well as to increase psychic abilities.",
        image: "/assets/emerald.webp"
      },
      {
        title: "Mining Locations",
        description: "The finest emeralds are found in Colombia, Zambia, and Brazil. Colombian emeralds are renowned for their intense color and clarity, making them the most valuable in the world.",
        image: "/assets/emerald.webp"
      }
    ]
  },
  {
    id: "ruby-001",
    name: "Ruby Gemstone",
    category: "Ruby",
    description: "Premium quality rubies sourced from Burma, Mozambique, and Sri Lanka. Known for passion, power, and protection, rubies are among the most valued precious gemstones.",
    image: "/assets/ruby.webp",
    images: ["/assets/ruby.webp", "/assets/ruby-1.svg", "/assets/ruby-2.svg"],
    features: [
      "Authenticity Guaranteed",
      "Free Shipping",
      "Lifetime Warranty",
      "30-Day Returns",
      "Deep red ruby gemstones with exceptional brilliance."
    ],
    details: [
      {
        title: "Symbol of Passion",
        description: "Rubies are often called the 'King of Gems' and have been treasured throughout history. Their name comes from the Latin word 'ruber' meaning red, symbolizing love, passion, and vitality.",
        image: "/assets/ruby.webp"
      },
      {
        title: "Royal Heritage",
        description: "Rubies have adorned royal regalia across many cultures. The British Crown Jewels contain some of the world's most famous rubies, including the Black Prince's Ruby worn by King Henry V.",
        image: "/assets/ruby-3.png"
      },
      {
        title: "Exceptional Durability",
        description: "With a hardness of 9 on the Mohs scale, rubies are second only to diamonds in toughness. This makes them excellent for everyday wear in jewelry pieces.",
        image: "/assets/ruby.webp"
      }
    ]
  },
  {
    id: "sapphire-001",
    name: "Sapphire Gemstone",
    category: "Sapphire",
    description: "Sapphires are admired for their durability and stunning color range. Kashmiri sapphires are especially prized for their rich blue hue and rarity.",
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
      "Blue, yellow, pink, and Kashmiri sapphires."
    ],
    details: [
      {
        title: "Celestial Symbolism",
        description: "Ancient Persians believed the earth rested on a giant sapphire, and its reflection colored the sky blue. Throughout history, sapphires have been associated with divine favor and celestial protection.",
        image: "/assets/sapphire.webp"
      },
      {
        title: "Kashmir Legacy",
        description: "The Kashmir region produced the finest sapphires in the world, known for their distinctive cornflower blue color. These mines were exhausted in the early 20th century, making Kashmir sapphires extremely rare and valuable.",
        image: "/assets/sapphire.webp"
      },
      {
        title: "Color Varieties",
        description: "While blue is the most famous color, sapphires occur in almost every color including pink, yellow, orange, purple, and the rare padparadscha (peachy-pink). Colorless sapphires are also found.",
        image: "/assets/sapphire-4.svg"
      }
    ]
  },
  {
    id: "turquoise-001",
    name: "Turquoise Gemstone",
    category: "Turquoise",
    description: "Natural turquoise gemstones in shades of blue, teal, and green. Features spiderweb and patchy matrix patterns, perfect for statement jewelry.",
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
      "Sky blue turquoise with natural matrix patterns."
    ],
    details: [
      {
        title: "Ancient Protection",
        description: "Native American tribes considered turquoise sacred, believing it brought protection and strength. Ancient Egyptians used turquoise in amulets and burial masks, associating it with the gods Horus and Ra.",
        image: "/assets/turquoise-6.svg"
      },
      {
        title: "Matrix Patterns",
        description: "The matrix in turquoise, the brown or black veins running through the stone, creates unique patterns. Stones with attractive matrix patterns are often more valuable than solid-colored stones.",
        image: "/assets/turquoise-7.svg"
      },
      {
        title: "Color Changes",
        description: "Turquoise can change color based on its environment and the wearer's skin oils. Pure turquoise may become darker or lighter over time, which some collectors see as a sign of the stone's responsiveness.",
        image: "/assets/turquoise-6.svg"
      }
    ]
  },
  {
    id: "tourmaline-001",
    name: "Tourmaline Gemstone",
    category: "Tourmaline",
    description: "Tourmaline gemstones are admired for their vivid colors and rarity. Paraiba tourmaline is among the most valuable due to its electric hue.",
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
      "Rare Paraiba tourmaline with neon blue-green glow."
    ],
    details: [
      {
        title: "Electric Properties",
        description: "Tourmaline is naturally piezoelectric, meaning it generates an electrical charge when heated or pressed. This property led to its use in scientific instruments and gave it the nickname 'electric stone'.",
        image: "/assets/tourmaline.webp"
      },
      {
        title: "Rainbow Stone",
        description: "Tourmaline occurs in virtually every color of the spectrum. Some crystals show multiple colors in one stone, creating beautiful gradient effects. The name comes from the Sinhalese word for 'mixed gems'.",
        image: "/assets/tourmaline-1.svg"
      },
      {
        title: "Paraiba Rarity",
        description: "Paraiba tourmalines were discovered in the 1980s in Brazil and are incredibly rare. They exhibit an intense blue-green color caused by copper and manganese, making them among the most expensive tourmalines.",
        image: "/assets/tourmaline-2.svg"
      }
    ]
  },
  {
    id: "tanzanite-001",
    name: "Tanzanite Gemstone",
    category: "Tanzanite",
    description: "Tanzanite is a rare gemstone found only in Tanzania, prized for its blue-violet hues and elegance in fine jewelry.",
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
      "Rare violet-blue tanzanite gemstone."
    ],
    details: [
      {
        title: "Unique Origin",
        description: "Tanzanite is found exclusively in the Merelani Hills of Tanzania near Mount Kilimanjaro. This makes it one of the rarest gemstones on Earth, occurring in only one location worldwide.",
        image: "/assets/tanzanite-2.svg"
      },
      {
        title: "Trichroic Wonder",
        description: "Tanzanite displays three different colors when viewed from different angles - blue, purple, and bronze. This trichroic property creates a mesmerizing effect as light interacts with the stone.",
        image: "/assets/tanzanite-3.svg"
      },
      {
        title: "Recent Discovery",
        description: "Tanzanite was discovered in 1967 and introduced to the market by Tiffany & Co. in 1968. Despite being relatively new to the gem world, it has quickly become one of the most popular colored gemstones.",
        image: "/assets/tanzanite-4.png"
      }
    ]
  },
  {
    id: "aquamarine-001",
    name: "Aquamarine Gemstone",
    category: "Aquamarine",
    description: "Aquamarine is known for its calming sea-blue color and clarity, symbolizing peace and harmony.",
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
      "Light blue aquamarine gemstone."
    ],
    details: [
      {
        title: "Ocean's Gift",
        description: "Aquamarine gets its name from the Latin words for water ('aqua') and sea ('marina'). Its blue color perfectly captures the essence of the ocean, ranging from pale blue to deep azure.",
        image: "/assets/aquamarine-2.svg"
      },
      {
        title: "Sailor's Protection",
        description: "Ancient sailors believed aquamarine could calm the seas and protect them from dangers. The stone was thought to be a treasure from mermaids and was carried as a talisman by seafarers.",
        image: "/assets/aquamarine-1.svg"
      },
      {
        title: "Beryl Family",
        description: "Aquamarine belongs to the beryl family, sharing lineage with emerald, morganite, and heliodor. Its clarity and durability make it a popular choice for jewelry that lasts generations.",
        image: "/assets/aquamarine-3.png"
      }
    ]
  },
  {
    id: "coral-001",
    name: "Coral Gemstone",
    category: "Coral",
    description: "Natural coral gemstones are valued for their organic origin and vibrant red color, often used in traditional jewelry.",
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
      "Organic red coral gemstone."
    ],
    details: [
      {
        title: "Living Jewelry",
        description: "Coral is an organic gem formed by marine invertebrates in warm ocean waters. Each piece represents centuries of growth, making coral jewelry truly a living piece of art.",
        image: "/assets/coral.webp"
      },
      {
        title: "Cultural Significance",
        description: "Coral has been used in jewelry and religious artifacts for thousands of years. In many cultures, it symbolizes life force, protection, and good fortune for children and newlyweds.",
        image: "/assets/coral-2.svg"
      },
      {
        title: "Conservation Concerns",
        description: "Due to overharvesting and climate change impacts, sustainable coral sourcing is crucial. Ethical coral jewelry ensures preservation of coral reefs for future generations.",
        image: "/assets/coral-1.png"
      }
    ]
  },
  {
    id: "opal-001",
    name: "Opal Gemstone",
    category: "Opal",
    description: "Opals are known for their unique color play and mystical beauty, making each gemstone truly one of a kind.",
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
      "Opal with natural play of colors."
    ],
    details: [
      {
        title: "Play of Color",
        description: "Opals display a phenomenon called 'play-of-color' where diffracted light creates flashes of rainbow colors. This occurs due to the arrangement of silica spheres within the stone that scatter light differently.",
        image: "/assets/opal.webp"
      },
      {
        title: "Mystical Beliefs",
        description: "Ancient Romans believed opals contained the virtues of all gems because they displayed all colors. Arabs believed opals fell from heaven as lightning strikes, while Australians consider them sacred stones of creation.",
        image: "/assets/opal-1.svg"
      },
      {
        title: "Australian Treasure",
        description: "Australia produces 95% of the world's precious opals, with deposits found in Queensland, South Australia, and New South Wales. Black opals from Lightning Ridge are the most valuable type of opal.",
        image: "/assets/opal-2.svg"
      }
    ]
  },
];

export const categories = [
  { name: "Emerald", image: "/assets/emerald.webp", slug: "emerald" },
  { name: "Ruby", image: "/assets/ruby.webp", slug: "ruby" },
  { name: "Sapphire", image: "/assets/sapphire.webp", slug: "sapphire" },
  { name: "Turquoise", image: "/assets/turquoise.webp", slug: "turquoise" },
];
