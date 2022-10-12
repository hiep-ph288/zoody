import { MemberImageProps } from "../components/MemberImage";
import { PartSummaryProps } from "../components/PartSummary";

export interface MemberDetailData {
  [key: string]: {
    slide: MemberImageProps[];
    climateZone: string;
    biome: string;
    facts: string[];
    weight: string;
    speed: string;
    lifespan: string;
    length: string;
    bodyParts: PartSummaryProps[];
  };
}

export const memberDetailData: MemberDetailData = {
  wolf: {
    slide: [
      { image: require("../../assets/images/mammals/wolf/toanthan2.jpg") },
      { image: require("../../assets/images/mammals/wolf/toanthan3.jpg") },
      { image: require("../../assets/images/mammals/wolf/Wolf.jpg") },
    ],
    weight: "30 - 80 kg",
    length: "80 - 85 cm",
    lifespan: "6 - 8 years",
    speed: "5 miles/h",
    climateZone:
      "They tend to live in the remote wilderness, though red wolves prefer to live in swamps, coastal prairies and forests. Many people think wolves live only in colder climates, but wolves can live in temperatures that range from minus 70 to 120 degrees F (minus 50 to 48.8 degrees C), according to the San Diego Zoo",
    biome:
      "wolves are habitat generalists, so this means that they're actually found in different biomes. However, wolves mainly thrive in the Siberian Taiga biome. You will also find Arctic wolves in the tundra, Arabian wolves in the deserts, and Eurasian wolves in the grassland biome",
    facts: [
      "- Most wolves stand at 26 to 32 inches at the shoulder.",
      "- Females weight 60 to 80 pounds. Males weight 70 to 110 pounds.",
      "- A wolf footprint will measure 4 inches wide by 5 inches long.",
      "- Wolves can live up to 13 years in the wild.",
      "- Wolves have 42 teeth.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/wolf/toanthan1.jpg"),
        title: "Diet",
        summary:
          "Wolves are carnivores—they prefer to eat large hoofed mammals such as deer, elk, bison, and moose. They also hunt smaller mammals such as beavers, rodents, and hares.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/wolf/toanthan2.jpg"),
        title: "Habitat",
        summary:
          "Wolves can thrive in a diversity of habitats from the tundra to woodlands, forests, grasslands and deserts. Wolves are carnivores—they prefer to eat large hoofed mammals such as deer, elk, bison, and moose.s",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/wolf/toanthan3.jpg"),
        title: "Reproduction and Offspring",
        summary:
          "Young wolves are called pups. The leader of the pack and his female mate are usually the only ones in a pack that will have offspring. They mate in late winter.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  tiger: {
    slide: [
      { image: require("../../assets/images/mammals/tiger/toanthan1.png") },
      { image: require("../../assets/images/mammals/tiger/toanthan2.png") },
      { image: require("../../assets/images/mammals/tiger/toanthan3.png") },
    ],
    weight: "90 - 310 kg",
    length: "2,5 - 3,9 m",
    lifespan: "8 - 10 years",
    speed: "96 km/h",
    climateZone: "Tropical temperate",
    biome:
      "Forest, rainforest, montane forest, riparian, shrubland, grass land",
    facts: [
      "The tiger is the national animal of India, Bangladesh, Malaysia, and South Korea.",
      'Did you know that a tiger"s coat pattern is still visible when it is shaved. This is not due to skin pigmentation but to the stubble and hair follicles embedded in the skin.',
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/tiger/toanthan1.png"),
        title: "Diet",
        summary:
          "Tigers are carnivores. They are nocturnal hunters that feed on large prey such as deer, cattle, wild pigs, rhinoceroses, and elephants.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/tiger/toanthan2.png"),
        title: "Habitat",
        summary:
          "Tigers inhabit a wide range of habitats such as lowland evergreen forests, taiga, grasslands, tropical forests, and mangrove swamps. ",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/tiger/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Tigers reproduce sexually. Tiger cubs generally leave their den with their mother at about 8 weeks old and are independent at 18 months.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  otter: {
    slide: [
      { image: require("../../assets/images/mammals/otter/toanthan1.png") },
      { image: require("../../assets/images/mammals/otter/toanthan2.png") },
      { image: require("../../assets/images/mammals/otter/toanthan3.png") },
    ],
    weight: "45-90 pounds",
    length: "100 - 153 cm",
    lifespan: "10 - 15 years",
    speed: "47 kph (29 mph)",
    climateZone:
      "Sea otters naturally inhabit offshore areas with an abundance of food and kelp canopy. They tend to live in ocean depths shallower than 130 feet (40 m) with water temperatures ranging between 35°F and 60°F",
    biome:
      "They can live in freshwater and coastal marine habitats, including rivers, lakes, marshes, swamps, and estuaries. River otters can tolerate a variety of environments, including cold and warmer latitudes and high elevations",
    facts: [
      "- Their fur contains between 600,000 to 1,000,000 hair follicles per square inch.",
      "- Unlike most other marine mammals, otters lack a blubber layer.",
      "- Instead, they depend on their dense, water-resistant fur to provide insulation.",
      "- To keep warm, sea otters spend a large portion of their days grooming and conditioning their fur.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/otter/toanthan1.png"),
        title: "Diet",
        summary:
          "River otters eat a variety of aquatic wildlife, such as fish, crayfish, crabs, frogs, birds' eggs, birds and reptiles such as turtles.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/otter/toanthan2.png"),
        title: "Habitat",
        summary:
          "They can thrive in any water habitat, such as ponds, marshes, lakes, rivers, and estuaries—in cold, warm, or even high-elevation areas—as long as the habitat provides adequate food",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/otter/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "River otters mate in late winter or early spring, usually March or April, shortly after the female bears her annual litter. Mating may take place on land, but is more likely to occur in the water.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  orca: {
    slide: [
      { image: require("../../assets/images/mammals/orca/toanthan1.png") },
      { image: require("../../assets/images/mammals/orca/toanthan2.png") },
      { image: require("../../assets/images/mammals/orca/toanthan3.png") },
    ],
    weight: "3,000 - 4,000 kg",
    length: "6 - 8 m",
    lifespan: "10 - 45 years",
    speed: "56 km/h",
    climateZone:
      "Orcas live in all of the world oceans and belong to the most widely spread mammals of the world. However, they prefer the cold, polar regions to sub tropical waters.",
    biome:
      "Killer whales may be seen in all types of marine ecosystems but prefer cooler temperate and polar regions. Although sometimes spotted in deep water, they are usually partial to coastal areas.",
    facts: [
      "- That’s 30 times longer than humans!",
      "- However, over the past 200 years, human activities have contributed to several orca populations becoming endangered.",
      "- Orcas are especially threatened by food shortages, chemical pollution, and increasing noise in the ocean.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/orca/toanthan1.png"),
        title: "Diet",
        summary:
          "They're at the top of the food chain and have very diverse diets, feasting on fish, penguins, and marine mammals such as seals, sea lions, and even whales, employing teeth that can be four inches long.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/orca/toanthan2.png"),
        title: "Habitat",
        summary:
          "Killer whales inhabit all oceans of the world. Next to humans and perhaps the brown rat (Rattus norvegicus), killer whales are the most widely distributed mammal.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/orca/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "On average, females may have four estrous cycles during one polyestrus period. This period is highly variable, as is the period of noncycling, both for one whale over time, and between whales.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  jaguar: {
    slide: [
      { image: require("../../assets/images/mammals/jaguar/toanthan1.png") },
      { image: require("../../assets/images/mammals/jaguar/toanthan2.png") },
      { image: require("../../assets/images/mammals/jaguar/toanthan3.png") },
    ],
    weight: "56 – 96 kg",
    length: "63 – 76 cm",
    lifespan: "12 - 15 years",
    speed: "80 km/h",
    climateZone:
      "Jaguars live in a range of habitats, including arid scrubland, thick tropical forests, swamps, coastal mangroves, lowland river valleys, grasslands, and mixed-conifer forests. They gravitate toward areas near rivers and streams",
    biome:
      "They're typically found in tropical rainforests but also live in savannas and grasslands.",
    facts: [
      "Jaguars Have the Strongest Bite of the Cat Kingdom (Relative to Size) These majestic cats have a stocky, heavy build with robust canines and a massive head, allowing them a more powerful bite than any other large cat relative to its size",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/jaguar/toanthan1.png"),
        title: "Diet",
        summary:
          "Capybaras, deer, tortoises, iguanas, armadillos, fish, birds and monkeys are just some of the prey that jaguars eat. They can even tackle South America's largest animal, the tapir, and huge predators like caiman.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/jaguar/toanthan2.png"),
        title: "Habitat",
        summary:
          "Jaguars often live in tropical low-lying habitats close to lakes, rivers and inland wetlands. In the past, jaguars could be found from the south-western USA to the scrub grasslands of Argentina.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/jaguar/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Jaguars have no defined breeding season and will mate any time of year. After a gestation period of 100 days, a female will give birth to a litter of two to four cubs.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  elephants: {
    slide: [
      { image: require("../../assets/images/mammals/elephant/toanthan1.png") },
      { image: require("../../assets/images/mammals/elephant/toanthan2.png") },
      { image: require("../../assets/images/mammals/elephant/toanthan3.png") },
    ],
    weight: "7 tons",
    length: "3.2 m",
    lifespan: "60 – 70 years",
    speed: "40 km/h",
    climateZone:
      "The climate where Asian elephants live is tropical, although in some parts the temperature is slightly colder than typical of tropical climates. A tropical climate is typically defined as a non-arid climate with low temperatures remaining over 64 degrees.",
    biome:
      "African savanna elephants are found in 23 countries and live in a variety of habitats, from open and wooded savannas to even some deserts and forests. The largest populations are in Southern and Eastern African countries, including Botswana, Zimbabwe, Tanzania, Kenya, Namibia, Zambia, and South Africa.",
    facts: [
      "- THEIR TRUNKS HAVE MAD SKILLS",
      "- Elephants have around 150,000 muscle units in their trunk.Their trunks are perhaps the most sensitive organ found in any mammal - Asian elephants have been seen to pick up a peanut, shell it, blow the shell out and eat the nut",
      "- Elephants use their trunks to suck up water to drink – it can contain up to 8 litres of water. They also use their trunks as a snorkel when swimming",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/elephant/toanthan1.png"),
        title: "Diet",
        summary:
          "Elephants are big vegetarians. In the wild, they eat a wide variety of plants, from savannah grasses, shrubs, and herbs, to woody trees, bark, and fruits. Their diet depends on what's available in their habitat in a given season",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/elephant/toanthan2.png"),
        title: "Habitat",
        summary:
          "They are found most often in savannas, grasslands, and forests, but they occupy a wide range of habitats, including deserts, swamps, and highlands in tropical and subtropical regions of Africa and Asia.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/elephant/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Elephants mature slowly, and have a long reproductive lifetime.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  deer: {
    slide: [
      { image: require("../../assets/images/mammals/jaguar/toanthan1.png") },
      { image: require("../../assets/images/mammals/jaguar/toanthan2.png") },
      { image: require("../../assets/images/mammals/jaguar/toanthan3.png") },
    ],
    weight: "30 - 80 kg",
    length: "80 - 85 cm",
    lifespan: "6 - 8 years",
    speed: "5 miles/h",
    climateZone:
      "They tend to live in the remote wilderness, though red wolves prefer to live in swamps, coastal prairies and forests. Many people think wolves live only in colder climates, but wolves can live in temperatures that range from minus 70 to 120 degrees F (minus 50 to 48.8 degrees C), according to the San Diego Zoo",
    biome:
      "wolves are habitat generalists, so this means that they're actually found in different biomes. However, wolves mainly thrive in the Siberian Taiga biome. You will also find Arctic wolves in the tundra, Arabian wolves in the deserts, and Eurasian wolves in the grassland biome",
    facts: [
      "- Most wolves stand at 26 to 32 inches at the shoulder.",
      "- Females weight 60 to 80 pounds. Males weight 70 to 110 pounds.",
      "- A wolf footprint will measure 4 inches wide by 5 inches long.",
      "- Wolves can live up to 13 years in the wild.",
      "- Wolves have 42 teeth.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/wolf/toanthan1.jpg"),
        title: "Diet",
        summary:
          "Wolves are carnivores—they prefer to eat large hoofed mammals such as deer, elk, bison, and moose. They also hunt smaller mammals such as beavers, rodents, and hares.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/wolf/toanthan2.jpg"),
        title: "Habitat",
        summary:
          "Wolves can thrive in a diversity of habitats from the tundra to woodlands, forests, grasslands and deserts. Wolves are carnivores—they prefer to eat large hoofed mammals such as deer, elk, bison, and moose.s",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/wolf/toanthan3.jpg"),
        title: "Reproduction and Offspring",
        summary:
          "Young wolves are called pups. The leader of the pack and his female mate are usually the only ones in a pack that will have offspring. They mate in late winter.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  cheetah: {
    slide: [
      { image: require("../../assets/images/mammals/jaguar/toanthan1.png") },
      { image: require("../../assets/images/mammals/jaguar/toanthan2.png") },
      { image: require("../../assets/images/mammals/jaguar/toanthan3.png") },
    ],
    weight: "30 - 80 kg",
    length: "80 - 85 cm",
    lifespan: "6 - 8 years",
    speed: "5 miles/h",
    climateZone:
      "They tend to live in the remote wilderness, though red wolves prefer to live in swamps, coastal prairies and forests. Many people think wolves live only in colder climates, but wolves can live in temperatures that range from minus 70 to 120 degrees F (minus 50 to 48.8 degrees C), according to the San Diego Zoo",
    biome:
      "wolves are habitat generalists, so this means that they're actually found in different biomes. However, wolves mainly thrive in the Siberian Taiga biome. You will also find Arctic wolves in the tundra, Arabian wolves in the deserts, and Eurasian wolves in the grassland biome",
    facts: [
      "- Most wolves stand at 26 to 32 inches at the shoulder.",
      "- Females weight 60 to 80 pounds. Males weight 70 to 110 pounds.",
      "- A wolf footprint will measure 4 inches wide by 5 inches long.",
      "- Wolves can live up to 13 years in the wild.",
      "- Wolves have 42 teeth.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/wolf/toanthan1.jpg"),
        title: "Diet",
        summary:
          "Wolves are carnivores—they prefer to eat large hoofed mammals such as deer, elk, bison, and moose. They also hunt smaller mammals such as beavers, rodents, and hares.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/wolf/toanthan2.jpg"),
        title: "Habitat",
        summary:
          "Wolves can thrive in a diversity of habitats from the tundra to woodlands, forests, grasslands and deserts. Wolves are carnivores—they prefer to eat large hoofed mammals such as deer, elk, bison, and moose.s",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/wolf/toanthan3.jpg"),
        title: "Reproduction and Offspring",
        summary:
          "Young wolves are called pups. The leader of the pack and his female mate are usually the only ones in a pack that will have offspring. They mate in late winter.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  "blue whale": {
    slide: [
      { image: require("../../assets/images/mammals/jaguar/toanthan1.png") },
      { image: require("../../assets/images/mammals/jaguar/toanthan2.png") },
      { image: require("../../assets/images/mammals/jaguar/toanthan3.png") },
    ],
    weight: "30 - 80 kg",
    length: "80 - 85 cm",
    lifespan: "6 - 8 years",
    speed: "5 miles/h",
    climateZone:
      "They tend to live in the remote wilderness, though red wolves prefer to live in swamps, coastal prairies and forests. Many people think wolves live only in colder climates, but wolves can live in temperatures that range from minus 70 to 120 degrees F (minus 50 to 48.8 degrees C), according to the San Diego Zoo",
    biome:
      "wolves are habitat generalists, so this means that they're actually found in different biomes. However, wolves mainly thrive in the Siberian Taiga biome. You will also find Arctic wolves in the tundra, Arabian wolves in the deserts, and Eurasian wolves in the grassland biome",
    facts: [
      "- Most wolves stand at 26 to 32 inches at the shoulder.",
      "- Females weight 60 to 80 pounds. Males weight 70 to 110 pounds.",
      "- A wolf footprint will measure 4 inches wide by 5 inches long.",
      "- Wolves can live up to 13 years in the wild.",
      "- Wolves have 42 teeth.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/wolf/toanthan1.jpg"),
        title: "Diet",
        summary:
          "Wolves are carnivores—they prefer to eat large hoofed mammals such as deer, elk, bison, and moose. They also hunt smaller mammals such as beavers, rodents, and hares.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/wolf/toanthan2.jpg"),
        title: "Habitat",
        summary:
          "Wolves can thrive in a diversity of habitats from the tundra to woodlands, forests, grasslands and deserts. Wolves are carnivores—they prefer to eat large hoofed mammals such as deer, elk, bison, and moose.s",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/wolf/toanthan3.jpg"),
        title: "Reproduction and Offspring",
        summary:
          "Young wolves are called pups. The leader of the pack and his female mate are usually the only ones in a pack that will have offspring. They mate in late winter.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  bear: {
    slide: [
      { image: require("../../assets/images/mammals/jaguar/toanthan1.png") },
      { image: require("../../assets/images/mammals/jaguar/toanthan2.png") },
      { image: require("../../assets/images/mammals/jaguar/toanthan3.png") },
    ],
    weight: "30 - 80 kg",
    length: "80 - 85 cm",
    lifespan: "6 - 8 years",
    speed: "5 miles/h",
    climateZone:
      "They tend to live in the remote wilderness, though red wolves prefer to live in swamps, coastal prairies and forests. Many people think wolves live only in colder climates, but wolves can live in temperatures that range from minus 70 to 120 degrees F (minus 50 to 48.8 degrees C), according to the San Diego Zoo",
    biome:
      "wolves are habitat generalists, so this means that they're actually found in different biomes. However, wolves mainly thrive in the Siberian Taiga biome. You will also find Arctic wolves in the tundra, Arabian wolves in the deserts, and Eurasian wolves in the grassland biome",
    facts: [
      "- Most wolves stand at 26 to 32 inches at the shoulder.",
      "- Females weight 60 to 80 pounds. Males weight 70 to 110 pounds.",
      "- A wolf footprint will measure 4 inches wide by 5 inches long.",
      "- Wolves can live up to 13 years in the wild.",
      "- Wolves have 42 teeth.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/wolf/toanthan1.jpg"),
        title: "Diet",
        summary:
          "Wolves are carnivores—they prefer to eat large hoofed mammals such as deer, elk, bison, and moose. They also hunt smaller mammals such as beavers, rodents, and hares.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/wolf/toanthan2.jpg"),
        title: "Habitat",
        summary:
          "Wolves can thrive in a diversity of habitats from the tundra to woodlands, forests, grasslands and deserts. Wolves are carnivores—they prefer to eat large hoofed mammals such as deer, elk, bison, and moose.s",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/wolf/toanthan3.jpg"),
        title: "Reproduction and Offspring",
        summary:
          "Young wolves are called pups. The leader of the pack and his female mate are usually the only ones in a pack that will have offspring. They mate in late winter.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
};
