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
      { image: require("../../assets/images/mammals/deer/toanthan1.png") },
      { image: require("../../assets/images/mammals/deer/toanthan2.png") },
      { image: require("../../assets/images/mammals/deer/toanthan3.png") },
    ],
    weight: "68 kg (150 lb)",
    length: "85 – 150 cm",
    lifespan: "6 years",
    speed: "60 – 80 km/h",
    climateZone:
      "They live in wetlands, deciduous forests, grasslands, rain forests, arid scrublands and mountains. Sometimes, when human civilizations get too close to home, deer will even make themselves comfortable in urban settings.",
    biome:
      "Deer can be found in 5 different biomes around the world, which are the temperate, tundra, taiga, desert, and tropical biomes. The main deer species found in these biomes will be either White-tailed Deer, Reindeer/Caribou, Moose, Mule Deer, or Marsh Deer",
    facts: [
      "- Deer is a wild animal that belongs to the Cervidae family.",
      "- It is in the order of Artiodactyla, which means mammals with even toe hooves with each one of their foot having two small and two large hooves",
      "- Deers have about 50 species such as the reindeer, red deer, elk, white-tailed deer, and moose among others.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/deer/toanthan1.png"),
        title: "Diet",
        summary:
          "Grasses, sedges, the leaves and shoots of trees and other woody plants are all on the menu. Fruit and berries are sometimes eaten too, while tree bark is taken when other food is scarce",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/deer/toanthan2.png"),
        title: "Habitat",
        summary:
          "Deer are found in many different ecosystems. They live in wetlands, deciduous forests, grasslands, rain forests, arid scrublands and mountains.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/deer/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Deer reproduce sexually and there is internal fertilization. A deer's gestation period is 200 to 205 days, most of the fawns being born in the latter part of May or the first part of June.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  cheetah: {
    slide: [
      { image: require("../../assets/images/mammals/cheetah/toanthan1.png") },
      { image: require("../../assets/images/mammals/cheetah/toanthan2.png") },
      { image: require("../../assets/images/mammals/cheetah/toanthan3.png") },
    ],
    weight: "21 – 72 kg",
    length: "67 – 94 cm",
    lifespan: "8 - 10 years",
    speed: "80 – 130 km/h",
    climateZone:
      "Cheetahs prefer dry, hot climates, but aren't fond of deserts or tropical areas – although there is a small population of cheetahs that can be found in the Sahara desert. Certain areas in southern Africa – namely Namibia, Botswana and South Africa — tick all the right boxes and this is where cheetahs are most common",
    biome:
      "The cheetah's habitat is a open country or biome. They live in grasslands,savannahs, areas dense vegetation, in an open biotope,and thick brush",
    facts: [
      "- When they do stir, cheetahs can accelerate faster than most sports cars",
      "- The name cheetah comes from a Hindi word, chita, meaning 'spotted one'",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/cheetah/toanthan1.png"),
        title: "Diet",
        summary:
          "These carnivores eat small antelope, including springbok, steenbok, duikers, impala and gazelles, as well as the young of larger animals, such as warthogs, kudu, hartebeest, oryx, roan and sable.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/cheetah/toanthan2.png"),
        title: "Habitat",
        summary:
          "Hunting is the major activity of cheetahs throughout the day, with peaks during dawn and dusk. Groups rest in grassy clearings after dusk.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/cheetah/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "It has been noted that the females can mate with several different males in the span of a couple of days.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  "blue whale": {
    slide: [
      { image: require("../../assets/images/mammals/blue_whale/toanthan1.png") },
      { image: require("../../assets/images/mammals/blue_whale/toanthan2.png") },
      { image: require("../../assets/images/mammals/blue_whale/toanthan3.png") },
    ],
    weight: "30,000 – 150,000 kg",
    length: "24 m",
    lifespan: "80 – 90 years",
    speed: "5 - 20 miles/h",
    climateZone:
      "Blue whales are found in all oceans except the Arctic. They generally migrate seasonally between summer feeding grounds and winter breeding grounds, but some evidence suggests that individuals in certain areas might not migrate at all",
    biome:
      "The blue whale lives in every ocean in the world, this means it inhabits every aquatic habitat. They have been found in the Arctic, Tropical, Subtropical, and Temperate seas.",
    facts: [
      "- Blue whales are the largest animals ever known to have lived on Earth.",
      "- These magnificent marine mammals rule the oceans at up to 100 feet long and upwards of 200 tons.",
      "- Their tongues alone can weigh as much as an elephant.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/blue_whale/toanthan1.png"),
        title: "Diet",
        summary:
          "Blue whales eat krill - tiny, shrimp-like crustaceans that live throughout Earth's oceans. The huge whales can eat up to four tonnes of krill every day. ",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/blue_whale/toanthan2.png"),
        title: "Habitat",
        summary:
          "Blue whales are found in all oceans except the Arctic. They generally migrate seasonally between summer feeding grounds and winter breeding grounds.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/blue_whale/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Baleen whales give birth to a single calf. In most species, a female may bear a calf every two to four years. If twins are conceived, they are unlikely to survive to full term.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  bear: {
    slide: [
      { image: require("../../assets/images/mammals/bear/toanthan1.png") },
      { image: require("../../assets/images/mammals/bear/toanthan2.png") },
      { image: require("../../assets/images/mammals/bear/toanthan3.png") },
    ],
    weight: "80 – 600 kg",
    length: "70 – 150 cm",
    lifespan: "20 – 30 years",
    speed: "56 km/h",
    climateZone:
      "Polar bears are only found in the Arctic. The most important habitats for polar bears are the edges of pack ice where currents and wind interact, forming a continually melting and refreezing matrix of ice patches and leads (open spaces in the sea ice).",
    biome:
      "dense evergreen needle-leafed forest Typical plants include white spruce, black spruce, and jack pine. Typical animals include moose, black bears, wolves, and migrant birds. Cold winters with deep snow, but longer growing season than tundra.",
    facts: [
      "Adult grizzly bears can run up to an incredible 40mph — the same pace as a greyhound — and would break the speed limit on many roads in the US! Polar bears, the largest of all bear species, can weigh between 900-1500 pounds and grow approximately 6-10 feet long",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/mammals/bear/toanthan1.png"),
        title: "Diet",
        summary:
          "The bear is omnivorous. Its diet consists of berries, grain, fish, insects, birds and mammals. The bear will hunt deer and moose and also feed on carcasses.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/bear/toanthan2.png"),
        title: "Habitat",
        summary:
          "Bears, a small group of mostly large omnivorous mammals, can be found all over the world; they live in forests, mountains, tundra, deserts and grassy areas",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/mammals/bear/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Adult females give birth in dens to baby bears called cubs. Cubs are born in January and weigh between 8 ounces and 16 ounces.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  turtle: {
    slide: [
      { image: require("../../assets/images/reptile/turtle/toanthan1.png") },
      { image: require("../../assets/images/reptile/turtle/toanthan2.png") },
      { image: require("../../assets/images/reptile/turtle/toanthan3.png") },
    ],
    weight: "550 - 2,000lbs",
    length: "6 cm to 6 ft",
    lifespan: "2 - 50 years",
    speed: "3 mph",
    climateZone:
      "most sea turtles stay in the epipelagic zone",
    biome:
      "tropical and temperate oceans",
    facts: [
      "- Some species of aquatic turtles can get up to 70 percent of their oxygen through their butt.",
      "- Most sea turtles abandon their eggs on the shore, allowing them to hatch on their own before making their way to the ocean.",
      "- The average pet turtle has a lifespan of nearly 80 years with the right care.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/reptile/turtle/toanthan1.png"),
        title: "Diet",
        summary:
          "Omnivore",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/turtle/toanthan2.png"),
        title: "Habitat",
        summary:
          "Aquatic, muddy, swampy areas, dry land for sun basking",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/turtle/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "The way that sea turtles and land-based turtles mate is a bit different. However, land-based turtles vary in their approach. Since turtles are reptiles, they release eggs.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  tortoise: {
    slide: [
      { image: require("../../assets/images/reptile/tortoise/toanthan1.png") },
      { image: require("../../assets/images/reptile/tortoise/toanthan2.png") },
      { image: require("../../assets/images/reptile/tortoise/toanthan3.png") },
    ],
    weight: "0.1 - 300kg",
    length: "10 – 18 inches",
    lifespan: "30-150 years",
    speed: "0.3 mph",
    climateZone:
      "most active when ambient temperatures range from 60 to 70 degrees F (15-21 degrees C)",
    biome:
      "is found on all continents except for Australia and Antarctica",
    facts: [
      "- Tortoises can survive for extended periods of time without consuming any water or food",
      "- Like all turtles, tortoises move very slowly. On arid islands, tortoises lick dew off of boulders, leaving half-sphere depressions in the rock.",
      "- Adwaita, an Aldabra giant tortoise, purportedly lived to the age of 255 years. There are several other examples of tortoises living well past the age of 150 years",
      "- Turtles and tortoises are believed to have first appeared around 220 million years ago"
    ],
    bodyParts: [
      {
        image: require("../../assets/images/reptile/tortoise/toanthan1.png"),
        title: "Diet",
        summary:
          "Grass, Weeds, Leafy greens",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/tortoise/toanthan2.png"),
        title: "Habitat",
        summary:
          "Sandy soil close to water",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/tortoise/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Female tortoises use their hind limbs to dig nests. They lay their eggs at night and cover the clutch with soil, sand, and organic material.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'sulcata tortoise': {
    slide: [
      { image: require("../../assets/images/reptile/sulcata/toanthan1.png") },
      { image: require("../../assets/images/reptile/sulcata/toanthan2.png") },
      { image: require("../../assets/images/reptile/sulcata/toanthan3.png") },
    ],
    weight: "79 to 200 pounds",
    length: "30 inches",
    lifespan: "More than 70 years",
    speed: "0.3 mph",
    climateZone:
      "Hot and dry",
    biome:
      "In the Saharan desert such as Mauritania, Mali, Sudan, and Ethiopia.",
    facts: [
      "- Like many reptiles, the sex of a hatchling is probably determined by the temperature it was exposed to in the egg and not by chromosomes",
      "- Females seem to be a bit more protective of their nests than other turtles. They will try to see off an invader, usually by trying to ram them with the edge of their carapace. But other than this, she provides no care for eggs or hatchlings.",
      "- The tortoise is a symbol of happiness and fertility in some Senegalese societies.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/reptile/sulcata/toanthan1.png"),
        title: "Diet",
        summary:
          "Plant materials as grasses and succulents.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/sulcata/toanthan2.png"),
        title: "Habitat",
        summary:
          "Desert, dry savanna",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/sulcata/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "After mating, the female will be gravid for about 60 days before she looks for a place to lay her eggs. She lays her eggs in a nest scooped out of the ground",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  snake: {
    slide: [
      { image: require("../../assets/images/reptile/snake/toanthan1.png") },
      { image: require("../../assets/images/reptile/snake/toanthan2.png") },
      { image: require("../../assets/images/reptile/snake/toanthan3.png") },
    ],
    weight: "4 or 5 pounds",
    length: "1 m (3.3 ft)",
    lifespan: "2-8 years",
    speed: "29 km/h",
    climateZone:
      "Live in the desert and in the forest, whether it is tropical or temperate",
    biome:
      "They’re found everywhere except in Antarctica, Iceland, Ireland, Greenland, and New Zealand.",
    facts: [
      "- There are 3,789 snake species, making them the second largest group of reptiles after lizards",
      "- They are “solar-powered” and rely fully on external heat or light sources",
      "- While approximately 70% of snakes lay eggs, others don’t. Snakes living in especially colder climates have live births because the eggs wouldn’t survive outside",
      "- Snakes do have nostrils, but they don’t use them to smell. Instead they have evolved to smell with their tongue and by using their Jacobson’s organ in the roof of their mouth"
    ],
    bodyParts: [
      {
        image: require("../../assets/images/reptile/snake/toanthan1.png"),
        title: "Diet",
        summary:
          "Eat a wide variety of animals, including rodents, insects, birds' eggs and young birds",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/snake/toanthan2.png"),
        title: "Habitat",
        summary:
          "A wide variety of habitats including forests, swamps, grasslands, deserts and in both fresh and saltwater",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/snake/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Snakes reproduce by internal fertilization and either give birth to live young or lay eggs, depending on the species.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  lizard: {
    slide: [
      { image: require("../../assets/images/reptile/lizard/toanthan1.png") },
      { image: require("../../assets/images/reptile/lizard/toanthan2.png") },
      { image: require("../../assets/images/reptile/lizard/toanthan3.png") },
    ],
    weight: "0.5 gram - 150 kg",
    length: "2 cm to 3 meters",
    lifespan: "3-5 years",
    speed: "20 km/h",
    climateZone:
      "Tropical forests, subtropical zones or even deserts.",
    biome:
      "The lizards can be found in any ecosystem except in those with cold climates",
    facts: [
      "- Apart from Antarctica, Lizards are found on every other continent! Lizards have a variety of natural habitats including marshes, rocky mountainsides and forests.",
      "- Some species of desert dwelling lizard are thought to be able to go their entire life without drinking water.",
      "- Some species of lizard, such as the Chameleon or the Anole can change color at will. It is not know what factors cause this color change, but it is believed to be heavily influenced by their environment",
      "- As a last-ditch attempt to escape from a predator, a lizard may choose to detach their tail from their body."
    ],
    bodyParts: [
      {
        image: require("../../assets/images/reptile/lizard/toanthan1.png"),
        title: "Diet",
        summary:
          "Mealworms, crickets, Dubia roaches, butterworms, hornworms, Phoenix worms, earthworms, silkworms, superworms, and waxworms",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/lizard/toanthan2.png"),
        title: "Habitat",
        summary:
          "Deserts, forests, prairies, marshes, and rocky areas.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/lizard/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "In some small species, the number of eggs is rather uniform for each laying or clutch. For example, all anoles (Anolis) lay but a single egg at a time, many geckos lay one or two eggs",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'leopard gecko': {
    slide: [
      { image: require("../../assets/images/reptile/leopard/toanthan1.png") },
      { image: require("../../assets/images/reptile/leopard/toanthan2.png") },
      { image: require("../../assets/images/reptile/leopard/toanthan3.png") },
    ],
    weight: "50 to 80 grams",
    length: "7 to 11 inches",
    lifespan: "8 to 15 years",
    speed: "3 feet per second",
    climateZone:
      "Arid and warm to hot",
    biome:
      "Dry, hot deserts and scrublands throughout the Middle East",
    facts: [
      "- Leopard geckos are possibly the most popular and most widely domesticated pet reptile in the world!",
      "- Leopard geckos, unlike the majority of gecko species, are terrestrial rather than arboreal. This means they prefer staying low to the ground and aren’t very strong climbers.",
      "- Unlike most gecko species, leopard geckos have fully-functional eyelids",
      "- While most geckos are able to easily climb up walls and other flat surfaces with ease, leopard geckos have claws rather than microscopic setae."
    ],
    bodyParts: [
      {
        image: require("../../assets/images/reptile/leopard/toanthan1.png"),
        title: "Diet",
        summary:
          "Small insects",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/leopard/toanthan2.png"),
        title: "Habitat",
        summary:
          "Arid, rocky deserts and scrublands throughout the Middle East; countries include India, Afghanistan, Pakistan, Nepal, and Iran",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/leopard/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Leopard geckos reach sexual maturity at around 18 to 24 months old. Males will often compete and fight over female mates, and they display typical courtship behaviors towards females",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  iguana: {
    slide: [
      { image: require("../../assets/images/reptile/iguana/toanthan1.png") },
      { image: require("../../assets/images/reptile/iguana/toanthan2.png") },
      { image: require("../../assets/images/reptile/iguana/toanthan3.png") },
    ],
    weight: "4 - 8kg",
    length: "30 – 42 cm",
    lifespan: "15 - 20 years",
    speed: "21 mph",
    climateZone:
      "Tropical and subtropical forests, deserts and coastlines",
    biome:
      "Rain forests of northern Mexico, Central America, the Caribbean Islands, and southern Brazil",
    facts: [
      "- Uses visual signals to communicate",
      "- They have a keen sense of eyesight, which allows them to navigate with ease. They also communicate with other iguanas with their eyes.",
      "- These animals can shed part of their tail when threatened by predators, allowing them to escape.",
      "- Iguanas also have a photopigment called parapinopsin that is sensitive to the difference between day and night.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/reptile/iguana/toanthan1.png"),
        title: "Diet",
        summary:
          "Insects, Fruit, Leaves",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/iguana/toanthan2.png"),
        title: "Habitat",
        summary:
          "Lowland tropical rainforest near water",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/iguana/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "These animals exhibit a promiscuous mating style. Courtship occurs during the dry season, with females controlling large territories where they make several nests",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  crocodile: {
    slide: [
      { image: require("../../assets/images/reptile/crocodile/toanthan1.png") },
      { image: require("../../assets/images/reptile/crocodile/toanthan2.png") },
      { image: require("../../assets/images/reptile/crocodile/toanthan3.png") },
    ],
    weight: "over 1,000 kg",
    length: "6 meters",
    lifespan: "70 years",
    speed: "24 - 35 km/h",
    climateZone:
      "Crocodiles are found in tropical regions of Africa, Asia, Australia and the Americas",
    biome:
      "Crocodiles are found mainly in the lowland, humid tropics, the Northern and Southern hemispheres",
    facts: [
      "- Cros were around before the dinosaurs; and while they might not be as big as a T-Rex, they have lasted a lot longer",
      "- Crocodiles produce tears when they eat their prey. However, it doesn't mean they actually cry",
      "- The saltwater crocodile has an average lifespan of 70 years. The Nile crocodile can live up to 100 years. But over the years, some crocodiles have broken those records",
      "- Crocodiles' jaws can't move sideways, meaning these reptiles can't grind food down in a traditional chewing motion",
      "- Crocodiles can hold their breath underwater for at least one hour without coming up for a breath of air as they can reduce their heart rate to 2-3 beats per minute",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/reptile/crocodile/toanthan1.png"),
        title: "Diet",
        summary:
          "Insects, fish, small frogs, lizards, crustaceans and small mammals",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/crocodile/toanthan2.png"),
        title: "Habitat",
        summary:
          "Crocodiles are inhabitants of swamps, lakes, and rivers, although some species make",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/crocodile/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Crocodiles are sexually dimorphic, and adult males are larger than females. All crocodiles lay hard-shelled eggs, which may weigh 50–160 grams (0.1–0.4 pound) each",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  chameleon: {
    slide: [
      { image: require("../../assets/images/reptile/chameleon/toanthan1.png") },
      { image: require("../../assets/images/reptile/chameleon/toanthan2.png") },
      { image: require("../../assets/images/reptile/chameleon/toanthan3.png") },
    ],
    weight: "0.01 - 2 kg",
    length: "2.8 - 68.5 cm",
    lifespan: "4 - 8 years",
    speed: "21 mph",
    climateZone:
      "Mostly live in the rain forests and deserts of Africa.",
    biome:
      "Africa, Asia",
    facts: [
      "- They can focus their eyes relatively well, meaning they can judge distances and spot prey between 5 and 10 meters",
      "- Excluding their tail, some chameleons’ tongues can be twice the length of their body. Their tongues consist of both muscles and bones, and can bend round to grab their prey",
      "- They can move their eyes separately, with each eye having a field of 180 degrees. This means they can see 360 degrees if they need to",
      "- Chameleons actually change their color due to a number of different factors, including their mood, changes in light or temperature, or the humidity of their environment.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/reptile/chameleon/toanthan1.png"),
        title: "Diet",
        summary:
          "Insects, Snails, Leaves",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/chameleon/toanthan2.png"),
        title: "Habitat",
        summary:
          "Tropical forests and desert",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/chameleon/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "The oviparous species lay eggs three to six weeks after copulation. The female will dig a hole—from 10–30 cm (4–12 in), deep depending on the species—and deposit her eggs.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  caiman: {
    slide: [
      { image: require("../../assets/images/reptile/caiman/toanthan1.png") },
      { image: require("../../assets/images/reptile/caiman/toanthan2.png") },
      { image: require("../../assets/images/reptile/caiman/toanthan3.png") },
    ],
    weight: "6 - 300 kg",
    length: "1.5 - 6 m",
    lifespan: "30 - 40 years",
    speed: "25 mph",
    climateZone:
      "Tropical rainforest",
    biome:
      "Central and South America",
    facts: [
      "- When they hear the hatchlings calling, the female caimans then help their young to the water by carrying them in their mouths",
      "- Like other crocodilian species, caimans have a third transparent eyelid which helps to protect their eyes when they are in the water without compromising their sight",
      "- They also have flaps over the external parts of their ears and nose that close to prevent water from entering them and a special flap at the back of their throat",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/reptile/caiman/toanthan1.png"),
        title: "Diet",
        summary:
          "Carnivore",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/caiman/toanthan2.png"),
        title: "Habitat",
        summary:
          "Rivers, lakes and swampland",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/reptile/caiman/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "The timing of the breeding season is also species dependent: spectacled caimans breed during the wet season in May and June, where black caimans breed during the dry season",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  mosquitoes: {
    slide: [
      { image: require("../../assets/images/insects/mosquitoes/toanthan1.png") },
      { image: require("../../assets/images/insects/mosquitoes/toanthan2.png") },
      { image: require("../../assets/images/insects/mosquitoes/toanthan3.png") },
    ],
    weight: "0.000088 ounces",
    length: "0.125 - 0.75 inches",
    lifespan: "2 weeks - 6 months",
    speed: "1.6 – 2.4 km/h",
    climateZone:
      "These mosquitoes are often found in temperate climate zones and are known to be vectors for several arboviruses",
    biome:
      "Mosquito fauna in the northeast semiarid region of Brazil, Caatinga biome, are poorly known.",
    facts: [
      "- The scientific name culicidae comes from the Latin words 'culex' and 'culicis', which mean 'gnat'",
      "- Even though there often are larger numbers of mosquitoes, there are actually a very small number of different species. Only one mosquito species overwinters as an adult",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/insects/mosquitoes/toanthan1.png"),
        title: "Diet",
        summary:
          "Carnivore",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/mosquitoes/toanthan2.png"),
        title: "Habitat",
        summary:
          "Some mosquitoes like living near people, while others prefer forests, marshes, or tall grasses. All mosquitoes like water because mosquito larvae and pupae live in the water with little or no flow. ",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/mosquitoes/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Eggs are ready to hatch from a few days to several months after being laid. Eggs hatch when submerged in water Larvae are aquatic and develop into pupae in as little as 5 days.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  ladybug: {
    slide: [
      { image: require("../../assets/images/insects/ladybug/toanthan1.png") },
      { image: require("../../assets/images/insects/ladybug/toanthan2.png") },
      { image: require("../../assets/images/insects/ladybug/toanthan3.png") },
    ],
    weight: "0.02 grams",
    length: "8 - 10 mm",
    lifespan: "4 weeks",
    speed: "37mph",
    climateZone:
      "Ladybugs are found more frequently in warmer climates",
    biome:
      "They can be found in grasslands, meadows, urban parks and gardens, forests, wetlands, and more. They will hide from predators in shrubs, grasses, trees, and more.",
    facts: [
      "- One ladybug can eat up to 5,000 insects in its lifetime!",
      "- Most ladybugs have oval, dome-shaped bodies with six short legs.",
      "- Depending on the species, they can have spots, stripes, or no markings at all",
      "- Seven-spotted ladybugs are red or orange with three spots on each side and one in the middle",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/insects/ladybug/toanthan1.png"),
        title: "Diet",
        summary:
          "Most ladybugs voraciously consume plant-eating insects, such as aphids, and in doing so they help to protect crops",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/ladybug/toanthan2.png"),
        title: "Habitat",
        summary:
          "Ladybugs can be found in many different habitats including forests, grasslands, rivers, and in cities and suburbs. These beetles mainly live in shrubs, trees, fields, gardens, and sometimes within homes",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/ladybug/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "In ladybirds, reproduction is exclusively sexual, a new zygote resulting from the fertilisation of an egg by a sperm.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'harvester ants': {
    slide: [
      { image: require("../../assets/images/insects/ants/toanthan1.png") },
      { image: require("../../assets/images/insects/ants/toanthan2.png") },
      { image: require("../../assets/images/insects/ants/toanthan3.png") },
    ],
    weight: "5 - 10 milligrams",
    length: "5 - 7 mm",
    lifespan: "14 – 50 years",
    speed: "2 inches per second",
    climateZone:
      "Prefer wooded environments, open grasslands, especially areas with clay loam soils. They are common along the edges of dirt roads. Red harvester ants are most active during hot, dry conditions",
    biome:
      "Harvester ants construct their nests in dry, sandy to hard soils. The entrance to the nest is often marked by a crater or a cone in the center of a slight mound, usually surrounded by a pile of small stones",
    facts: [
      "- Harvester ants have six jointed legs each and hard exoskeletons that protect their bodies",
      "- Harvester ants are larger than many ants",
      "- Queen harvester ants are at least a half-inch long while workers are about half that size",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/insects/ants/toanthan1.png"),
        title: "Diet",
        summary:
          "The main food source for red harvester ants usually consists of seeds, which they hoard in great numbers",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/ants/toanthan2.png"),
        title: "Habitat",
        summary:
          "Prefer arid chaparral habitats and are native to the Southwestern United States.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/ants/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "In harvester ants, mated reproductive females, called ‘queens’, produce new male reproductives and female reproductives, called ‘gynes’.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  fly: {
    slide: [
      { image: require("../../assets/images/insects/fly/toanthan1.png") },
      { image: require("../../assets/images/insects/fly/toanthan2.png") },
      { image: require("../../assets/images/insects/fly/toanthan3.png") },
    ],
    weight: "11.5 - 17.5 mg",
    length: "1 mm - 7 cm",
    lifespan: "28 days",
    speed: "7 km/h",
    climateZone:
      "Warmer climates bring more insects, and those insects can bring illnesses.",
    biome:
      "True Flies can be found almost anywhere. Adults of many species are strong fliers, which helps them locate supplies of food for their larvae. Fly larvae are most common in damp habitats, and flies populations are largest in humid places with lots of moisture",
    facts: [
      "- Flies are more than just a nuisance",
      "- These buzzing insects also play important roles in nature, including pollinating plants, breaking down organic material, and serving as food for other bugs and animals",
      "- Find more fun fly facts below and then learn how to help keep them away.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/insects/fly/toanthan1.png"),
        title: "Diet",
        summary:
          "Adult flies feed and harvest their larvae on organic decaying material. This includes, fruit, vegetables, meat, animal, plant secretions and human feces. Both male and female flies suck nectar from flowers as well.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/fly/toanthan2.png"),
        title: "Habitat",
        summary:
          "A single fruit fly can lay around 500 eggs in her lifetime and the entire life cycle from egg to adult only takes about a week. Not to be outdone, a single female house fly can lay up to 500 eggs over the span of just three to four days",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/fly/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "The life cycle of a fly consists of four stages: egg, larva, pupa, and adult. Since larval forms, always morphologically distinct from adults, also occupy different habitats.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  flea: {
    slide: [
      { image: require("../../assets/images/insects/flea/toanthan1.png") },
      { image: require("../../assets/images/insects/flea/toanthan2.png") },
      { image: require("../../assets/images/insects/flea/toanthan3.png") },
    ],
    weight: "5 - 1 mg",
    length: "0.1 - 0.32 cm",
    lifespan: "60 - 100 days",
    speed: "1.9 meters per second",
    climateZone:
      "Fleas tend to prefer a temperature that is 70°F or greater, but ticks and fleas can still survive cold weather in the winter. Fleas thrive in warm temperatures and high humidity—perfect parameters for both their activity and their reproduction",
    biome:
      "Outdoors, fleas prefer moist, shady, cool places. They especially like shrubs, leaves, and trees, and don't fare well in sunny areas or open grass. By trimming back shrubs, raking out leaves, and, in effect, limiting the amount of areas where fleas thrive, you can help prevent infestations out of doors",
    facts: [
      "- Fleas Are Infamous for Their Role in Transmitting the Black Death",
      "- Fleas Lay Their Eggs on Other Animals, Not in Your Carpet",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/insects/flea/toanthan1.png"),
        title: "Diet",
        summary:
          "A flea eats blood from humans, blood from pets, feces, and decaying plant or animal matter. They are best known for being hematophagic, or a creature that dines on blood more than any other food source.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/flea/toanthan2.png"),
        title: "Habitat",
        summary:
          "Fleas thrive in many climates but prefer moist, humid, and shady areas. The area underneath a porch or deck can turn into an overwintering site. Areas with tall grass, leaf litter, weeds, wood piles, gravelly areas.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/flea/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "After finding an animal or human host and taking a blood meal, adult fleas will mate and begin laying eggs in the fur and surroundings of the host.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  dragonfly: {
    slide: [
      { image: require("../../assets/images/insects/dragonfly/toanthan1.png") },
      { image: require("../../assets/images/insects/dragonfly/toanthan2.png") },
      { image: require("../../assets/images/insects/dragonfly/toanthan3.png") },
    ],
    weight: "600 mg - 1 g",
    length: "1 - 4 inches",
    lifespan: "5 years",
    speed: "36 – 54 km/h",
    climateZone:
      "They are most abundant an diverse in slow-moving freshwater that has no fish (small streams and ponds) but can be found in many shallow freshwater habitats. Adult dragonflies often stay near water, but sometimes travel away from water while hunting or on migration",
    biome:
      "Immature dragonflies live in freshwater. They are most abundant an diverse in slow-moving freshwater that has no fish (small streams and ponds) but can be found in many shallow freshwater habitats",
    facts: [
      "- Dragonflies or odonates, are among the most ancient insects and were some of the first winged insects to evolve, about 300 million years ago",
      "- While modern dragonflies have wingspans of about two to five inches, fossil dragonflies have been found with wingspans of up to two feet",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/insects/dragonfly/toanthan1.png"),
        title: "Diet",
        summary:
          "Dragonflies eat flies, mosquitos, butterflies, and tadpoles. Dragonflies are almost exclusively carnivorous, meaning that they eat other animal matter",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/dragonfly/toanthan2.png"),
        title: "Habitat",
        summary:
          "Dult Dragonflies and Damselflies can be seen rapidly flying about marshes, ponds, lakes, rivers, streams, etc. Immature Odonata (called nymphs) live submerged in lowland streams and ponds",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/dragonfly/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "When dragonflies breed, the male will attach the back of his abdomen to the female's head and in this position they fly together. They will then find a perch to land on and the male and female mate",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  cricket: {
    slide: [
      { image: require("../../assets/images/insects/cricket/toanthan1.png") },
      { image: require("../../assets/images/insects/cricket/toanthan2.png") },
      { image: require("../../assets/images/insects/cricket/toanthan3.png") },
    ],
    weight: "0.2 - 0.8 g",
    length: "0.12 - 2 inches",
    lifespan: "90 days",
    speed: "3.5 mph",
    climateZone:
      "Cricket will survive at room temperature, but they will be considerably more active and reproduce better at temperatures 80°-85° F is about right. Field crickets are commonly found in fields, pastures, along roadsides and in yards where they feed on a variety of plants. They also are known to feed on dead or weakened insects, including other crickets. Field crickets are strongly attracted to light",
    biome:
      "Crickets live in almost any environment—forests, grasslands, wetlands, caves, beaches, and underground. Crickets, like other animals, will make their home wherever they can find food, water, air, shelter, and space.",
    facts: [
      "- Crickets don't have lungs and can't breathe through their mouths or nostrils.",
      "- Instead, they take air in through a series of small holes on the sides of their bodies called spiracles.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/insects/cricket/toanthan1.png"),
        title: "Diet",
        summary:
          "A natural cricket diet consists of plants and meat and includes protein, grains, and produce. In the wild, crickets will consume a wide-ranging diet including insect larvae, aphids, flowers, seeds, leaves, fruit, and grasses",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/cricket/toanthan2.png"),
        title: "Habitat",
        summary:
          "Crickets are found on the soil, hiding under dead plants or on live plants. They only occur where there is plant material to eat, and they are most diverse and abundant in humid areas with lots of plants",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/cricket/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Most crickets lay their eggs in the soil or inside the stems of plants, and to do this, female crickets have a long, needle-like or sabre-like egg-laying organ called an ovipositor.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  cicadas: {
    slide: [
      { image: require("../../assets/images/insects/cicada/toanthan1.png") },
      { image: require("../../assets/images/insects/cicada/toanthan2.png") },
      { image: require("../../assets/images/insects/cicada/toanthan3.png") },
    ],
    weight: "2 g",
    length: "1 - 1.5 inches",
    lifespan: "2 - 5 years",
    speed: "9 mph",
    climateZone:
      "Tropical rainforests, Desert scrub, Temperate seasonal forests",
    biome:
      "Within the region of the world located north of Mexico there are about 170 different cicada species that include both the annual, dog-day cicadas and the periodical cicadas that have a 13 or 17-year life cycle",
    facts: [
      "- The 13 - 17 year lifespan of periodical cicadas is one of the longest of any insect, but only a tiny fraction of that time is spent above ground.",
      "- The rest of a periodical cicada’s life is spent underground as a nymph feeding on liquid sucked from plant roots.",
      "- Over their many years beneath the soil, the nymphs shed their exoskeletons, a process known as molting, five times",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/insects/cicada/toanthan1.png"),
        title: "Diet",
        summary:
          "Cicadas are herbivores meaning they primarily feed on vegetation. The young ones (nymph) use their modified mouthparts to feed on includes juices and sap obtained from plant roots while the molting cicadas eat twigs",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/cicada/toanthan2.png"),
        title: "Habitat",
        summary:
          "Adult cicada habitats are the crown, trunk and small twigs of trees and woody shrubs. Cicada adults fly, come together to mate and the females cut small slits in the tender twigs",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/cicada/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "The first instar (instar is the particular life stage of the insect) nymphs that hatched from the eggs drop to the ground where they burrow to about one inch beneath the soil surface",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'bumble bees': {
    slide: [
      { image: require("../../assets/images/insects/bumble/toanthan1.png") },
      { image: require("../../assets/images/insects/bumble/toanthan2.png") },
      { image: require("../../assets/images/insects/bumble/toanthan3.png") },
    ],
    weight: "150 - 200 milligrams",
    length: "0.4 - 1.6 inches",
    lifespan: "1 week - 1 year",
    speed: "3.0 - 4.5 metres per second",
    climateZone:
      "Live mostly in temperate climates in the Northern Hemisphere.",
    biome:
      "Bumble bees live all over the United States and in every grassland you could find, but Bombus bimaculatus is native to the state of Iowa. In the summer they make their homes in abandoned underground nests of mice or other small creatures",
    facts: [
      "- There are more than 250 species of bumblebees, belonging to the genus Bombus (honeybees belong to the genus Apis.)",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/insects/bumble/toanthan1.png"),
        title: "Diet",
        summary:
          "Herbivore",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/bumble/toanthan2.png"),
        title: "Habitat",
        summary:
          "Nest in hives in underground holes made by larger animals, while some nest above ground in abandoned bird nests, grass tussocks or cavities such as hollow logs or spaces beneath rocks",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/bumble/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Queens emerge from hibernation underground in the spring and find a nest site, which can often be an old rodent burrow.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  beetle: {
    slide: [
      { image: require("../../assets/images/insects/beetle/toanthan1.png") },
      { image: require("../../assets/images/insects/beetle/toanthan2.png") },
      { image: require("../../assets/images/insects/beetle/toanthan3.png") },
    ],
    weight: "70 – 100 g",
    length: "11 cm",
    lifespan: "30 years",
    speed: "5.5 mph",
    climateZone:
      "More than fifty carabid beetle species occur in areas with appreciably lower air temperatures",
    biome:
      "Beetles are found in nearly all habitats, including freshwater and coastal habitats, wherever vegetative foliage is found, from trees and their bark to flowers, leaves, and underground near roots - even inside plants in galls, in every plant tissue, including dead or decaying ones",
    facts: [
      "- One out of Every Four Animals on Earth Is a Beetle",
      "- Beetles are the largest group of living organisms known to science, bar none",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/insects/beetle/toanthan1.png"),
        title: "Diet",
        summary:
          "Most beetles are herbivores, eating only plants. This includes roots, stems, leaves, seeds, nectar, fruits or even the wood of the plant itself. This subcategory includes weevils, leaf beetles and some species of Longhorned beetles",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/beetle/toanthan2.png"),
        title: "Habitat",
        summary:
          "Beetles have lived on Earth for about 300 million years and can be found almost everywhere, from deserts to lakes, rainforests to polar ice caps. Most beetles live on land. ",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/insects/beetle/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Female beetles usually lay dozens or hundreds of eggs. Reproduction is often timed to match the time of most available food.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'goura victoria': {
    slide: [
      { image: require("../../assets/images/feathered/goura_victoria/toanthan1.png") },
      { image: require("../../assets/images/feathered/goura_victoria/toanthan2.png") },
      { image: require("../../assets/images/feathered/goura_victoria/toanthan3.png") },
    ],
    weight: "4.5 pounds",
    length: "24 – 28 inches",
    lifespan: "20 - 25 years",
    speed: "",
    climateZone:
      "Are native to a tropical climate and will do best in warm, humid regions.",
    biome:
      "Pigeons and doves include about 316 species of birds in the family Columbidae. Most species are found in forests of various types, with fewer species occurring in more open habitats. By far the greatest richness of species of pigeons and doves occurs in moist tropical and subtropical forests",
    facts: [
      "- The Victoria crowned pigeon is the largest species of pigeon in the world",
      "- This species was named in honor of the British monarch, Queen Victoria",
      "- The Victoria crowned pigeon is closely related to the extinct ground-dwelling pigeon, dodo",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/feathered/goura_victoria/toanthan1.png"),
        title: "Diet",
        summary:
          "Like all pigeons, Victoria crowned pigeons feed on the ground. In the wild, their diet consists mainly of fallen fruits, seeds, grains, and small invertebrates. They're particularly fond of figs.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/goura_victoria/toanthan2.png"),
        title: "Habitat", 
        summary:
          "The wild pigeon is found in coastal area sand the feral pigeon is found almost exclusively in areas of human habitation. Distribution: Worldwide except Sahara Desert, Antarctica and the high Arctic",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/goura_victoria/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "The Victoria crowned pigeon builds a rather solid platform nest of sticks and leaves in which a single egg is laid. Both parents incubate the egg (about 30 days) and care for the chick.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  toucans: {
    slide: [
      { image: require("../../assets/images/feathered/toucans/toanthan1.png") },
      { image: require("../../assets/images/feathered/toucans/toanthan2.png") },
      { image: require("../../assets/images/feathered/toucans/toanthan3.png") },
    ],
    weight: "2 pounds",
    length: "25 inches",
    lifespan: "20 years",
    speed: "64 km/h",
    climateZone:
      "Most Tropical Rain forest",
    biome:
      "Toucans are native to the Neotropics, from Southern Mexico, through Central America, into South America south to northern Argentina. They mostly live in the lowland tropics, but the mountain species from the genus Andigena reach temperate climates at high altitudes in the Andes and can be found up to the tree line",
    facts: [
      "- Toucans Make Many Noises",
      "- They Come From a Big Family",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/feathered/toucans/toanthan1.png"),
        title: "Diet",
        summary:
          "Toucans are omnivorous. In the wild, they eat a variety of foods including a multitude of fruits and berries plus lizards, rodents, small birds, and an assortment of insects",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/toucans/toanthan2.png"),
        title: "Habitat",
        summary:
          "Toucans can be found high in the rainforest canopies, and they rarely make trips to the forest floor. They typically create their nests in hollowed-out tree cavities",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/toucans/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Reproduction. Male toucans use their bills to attract mates for breeding season. They bring the female with whom they wish to mate a piece of food.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'resplendent quetzal': {
    slide: [
      { image: require("../../assets/images/feathered/resplendent_quetzals/toanthan1.png") },
      { image: require("../../assets/images/feathered/resplendent_quetzals/toanthan2.png") },
      { image: require("../../assets/images/feathered/resplendent_quetzals/toanthan3.png") },
    ],
    weight: "210 g",
    length: "36 cm",
    lifespan: "20 – 25 years",
    speed: "none",
    climateZone:
      "The Resplendent Quetzal lives in cloud forests from southern Mexico to Panama, anywhere between about 4 to 7,000 feet elevation in these really moist, cloud-laden, very biologically rich forests",
    biome:
      "The resplendent quetzal can be found from southern Mexico (southernmost Oaxaca and Chiapas) to western Panama (Chiriquí). The ranges of the two subspecies differ: P. m. mocinno is found in southern Mexico, northern El Salvador, and northwestern Nicaragua, Guatemala and Honduras, while P.",
    facts: [
      "- Resplendent quetzals are beautiful birds well known for their colorful plumage",
      "- They have a green body (showing iridescence from green-gold to blue-violet) and red breasts",
      "- Depending on the light, quetzal feathers can shine in a variant of colors: green, cobalt, lime, yellow, to ultramarine",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/feathered/resplendent_quetzals/toanthan1.png"),
        title: "Diet",
        summary:
          "Resplendent quetzals are considered specialized fruit-eaters, feeding on 41 to 43 species, although they also feed on insects (primarily wasps, ants, and larvae), frogs, lizards, and snails",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/resplendent_quetzals/toanthan2.png"),
        title: "Habitat",
        summary:
          "Quetzals are found from southern Mexico to Bolivia. The resplendent quetzal and the golden-headed quetzal are the only species found in Central America.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/resplendent_quetzals/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Resplendent quetzal pairs use their powerful beaks to hollow hole nests in rotted trees or stumps.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  peacocks: {
    slide: [
      { image: require("../../assets/images/feathered/peacock/toanthan1.png") },
      { image: require("../../assets/images/feathered/peacock/toanthan2.png") },
      { image: require("../../assets/images/feathered/peacock/toanthan3.png") },
    ],
    weight: "8.8 – 13 pounds",
    length: "6 inches",
    lifespan: "10 – 25 years",
    speed: "16 km/h",
    climateZone:
      "Peafowl prefer warm climates. Their ideal habitat is an open tropical seasonal forest with trees for roosting. They usually settle near all-season water sources such as rivers and creeks. They also like living within a convenient distance of vegetable gardens and fruit orchards, but not too close to humans",
    biome:
      "There are two familiar peacock species. The blue peacock lives in India and Sri Lanka, while the green peacock is found in Java and Myanmar (Burma). A more distinct and little-known species, the Congo peacock, inhabits African rain forests",
    facts: [
      "- None",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/feathered/peacock/toanthan1.png"),
        title: "Diet",
        summary:
          "Peacocks are non-fussy omnivores and will eat most plant foods such as seeds, grains, berries, vegetables and fruits as well as insects, arthropods, small lizards, snakes, frogs and rodents",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/peacock/toanthan2.png"),
        title: "Habitat",
        summary:
          "Both the blue peacock and green peacock inhabit open lowland forests, as well as farms and agricultural fields. They can be found in both tropical and dry habitats.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/peacock/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "During sex, the male peacock mounts the peahen and aligns his tail with hers, which in turn, aligns the sexual organs, known cloacas. Both peacocks and peahens have cloacas. ",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  parrots: {
    slide: [
      { image: require("../../assets/images/feathered/parrots/toanthan1.png") },
      { image: require("../../assets/images/feathered/parrots/toanthan2.png") },
      { image: require("../../assets/images/feathered/parrots/toanthan3.png") },
    ],
    weight: "64 g - 1.6 kg",
    length: "8.7 - 100 cm",
    lifespan: "10 - 30 years",
    speed: "81 - 200 mph",
    climateZone:
      "The ideal temperature for birds is between 18 to 22 degrees Celsius. Although parrots can withstand anything up to 29 degrees. Anything under 4 degrees Celsius might be harmful to your bird. Plumper birds might experience heat stress above 30 degrees Celsius",
    biome:
      "Parrots spawn in jungle biomes, and can also be spawned using parrot spawn eggs (only in Creative). They can be red, green, blue, cyan, or gray in color. They move around by flying, but will always eventually land",
    facts: [
      "- None",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/feathered/parrots/toanthan1.png"),
        title: "Diet",
        summary:
          "Parrots eat plants, flowers, grains, nuts, seeds, and insects for much of their diet. Parrots are omnivores in most cases, enjoying a mix of plant and animal foods.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/parrots/toanthan2.png"),
        title: "Habitat",
        summary:
          "Some of the different types of habitats that these birds live in include woodlands, rainforests, palm forests, savannas, grasslands, desert edges, scrubland, and more. ",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/parrots/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "All birds reproduce by laying eggs. Eggs are produced inside the female and then deposited in a nest. In captive female birds, egg laying, which is actually the equivalent of ovulation in mammals",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'mute swans': {
    slide: [
      { image: require("../../assets/images/feathered/mute_swan/toanthan1.png") },
      { image: require("../../assets/images/feathered/mute_swan/toanthan2.png") },
      { image: require("../../assets/images/feathered/mute_swan/toanthan3.png") },
    ],
    weight: "25 - 30 pounds",
    length: "140 - 160 cm",
    lifespan: "20 - 30 years",
    speed: "80 km/h)",
    climateZone:
      "The swans inhabiting cold areas migrate south for wintering. Other swans stay in breeding areas or join up with other wintering flocks",
    biome:
      "Swans living on fresh water will typically eat pondweed, stonewort and wigeon grass, as well as tadpoles and insects such as milfoil. Swans living on salt water will typically eat sea arrow grass, salt marsh grass, eel grass, club rush and green algae, as well as insects and molluscs",
    facts: [
      "- As the name implies, they are the least vocal of swans, but by no means mute",
      "- They utter short grunts and hisses",
      "-  During the breeding period they make short, loud snorts, but do not make the honking flight calls of other species. The only sound is the beating of the wings",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/feathered/mute_swan/toanthan1.png"),
        title: "Diet",
        summary:
          "What mute swans eat. Swans eat aquatic vegetation, which their long necks equip them to take from the riverbed. They take the molluscs which cling to the vegetation and also eat small fish, frogs and worms",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/mute_swan/toanthan2.png"),
        title: "Habitat",
        summary:
          "The adaptable Mute Swan can be found in aquatic habitats ranging from urban lakes and farm ponds to coastal estuaries. ",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/mute_swan/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Male and female pairs may mate for many years. The female lays 5-6 eggs in a cup-shaped depression lined with down on a large mound of vegetation. ",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'mandarin ducks': {
    slide: [
      { image: require("../../assets/images/feathered/mandarin_duck/toanthan1.png") },
      { image: require("../../assets/images/feathered/mandarin_duck/toanthan2.png") },
      { image: require("../../assets/images/feathered/mandarin_duck/toanthan3.png") },
    ],
    weight: "0.63 kg",
    length: "41–49 cm",
    lifespan: "10 years",
    speed: "none",
    climateZone:
      "Mandarin ducks prefer to breed in the dense, shrubby forested edges of rivers and lakes. In winter, they may occur in marshes, flooded fields, and open rivers",
    biome:
      "The main population of mandarin ducks is in south, central and eastern England, but small numbers occur in Wales, Northern England and Scotland. These birds like lakes with plenty of overhanging trees and bushes",
    facts: [
      "- Mandarin ducks are highly social, flying in large flocks during winter.",
      "- Their pair bonds are very strong and they will return to the same mate if they survive",
      "- Females initiate courtship using enticing behavior to attract a preferred male.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/feathered/mandarin_duck/toanthan1.png"),
        title: "Diet",
        summary:
          "Mandarin ducks feed on mostly on plants and seeds, but will eat small fish, insects, and molluscs. They eat mostly at dawn and dusk. ",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/mandarin_duck/toanthan2.png"),
        title: "Habitat",
        summary:
          "The Mandarin lives in the forests of China and Japan. They prefer wooded ponds and fast flowing rocky streams to swim, wade, and feed in",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/mandarin_duck/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Breeding. In the wild, mandarin ducks breed in densely wooded areas near shallow lakes, marshes or ponds.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  macaws: {
    slide: [
      { image: require("../../assets/images/feathered/macaw/toanthan1.png") },
      { image: require("../../assets/images/feathered/macaw/toanthan2.png") },
      { image: require("../../assets/images/feathered/macaw/toanthan3.png") },
    ],
    weight: "900 g",
    length: "102 cm",
    lifespan: "50 years",
    speed: "35 mph",
    climateZone:
      "Macaws are native to South and Central America, found anywhere between Southern Mexico and Northern Argentina. They prefer rainforests, but can also be found in other types of forests as well as woodland and savannah-like habitats",
    biome:
      "The scarlet macaw can be found from southern Mexico to Peru, as well as Bolivia, eastern Brazil and the island of Trinidad. They prefer to spend their time in tall, deciduous trees in forests and near rivers, usually in large, noisy groups",
    facts: [
      "- Macaws fall in love and stay that way",
      "- Unlike the vast majority of animals, once macaws find a mate, they tend to stay together for the rest of their lives.",
      "- They raise their babies together, groom one another and can be seen flying so close to one another it’s as if they are holding hands…we mean, wing",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/feathered/macaw/toanthan1.png"),
        title: "Diet",
        summary:
          "Macaws eat a variety of seeds, nuts, fruits, berries and vegetation such as leaf buds in the wild. A higher level of fat seems to be specifically important for certain macaws such as the Hyacinth Macaw",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/macaw/toanthan2.png"),
        title: "Habitat",
        summary:
          "Sleep in the trees at night, and in the morning they may fly long distances to feed on fruit, nuts, insects, and snails. Some species also eat damp soil, which may help to neutralize chemicals in their fruity diet and ease their stomachs",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/macaw/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Like other parrots, macaws start out inside of an egg, usually in a clutch of two or three. It can take up to three weeks for the eggs to hatch",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'gouldian finches': {
    slide: [
      { image: require("../../assets/images/feathered/gouldian_finches/toanthan1.png") },
      { image: require("../../assets/images/feathered/gouldian_finches/toanthan2.png") },
      { image: require("../../assets/images/feathered/gouldian_finches/toanthan3.png") },
    ],
    weight: "14 – 15 g",
    length: "4.7 – 5.9 inches",
    lifespan: "5 years",
    speed: "none",
    climateZone:
      "Gouldian finches should be kept at a temperature of approximately 70 degrees fahrenheit or more with a humidity level at or above 50 percent. Cold or drafty locations should be avoided. Gouldians need natural sun- light as well as shade",
    biome:
      "Gouldian Finches live in tropical savanna woodland amongst the grassy understorey that contains a mixture of their preferred annual and perennial grass species.",
    facts: [
      "- Gouldian Finches are Australia's most spectacularly coloured grassfinches, and are perhaps the most spectacularly coloured of all Australian birds.",
      "- They are small birds, with a bright green back, yellow belly and a purple breast",
      "- The facial colour is usually black, and is found in about 75% of the birds.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/feathered/gouldian_finches/toanthan1.png"),
        title: "Diet",
        summary:
          "For most of the year Gouldian Finches feed mostly on ripe or half-ripe grass seeds. During the breeding season, however, the diet consists almost entirely of insects.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/gouldian_finches/toanthan2.png"),
        title: "Habitat",
        summary:
          "Gouldian Finches live in tropical savanna woodlandamongst the grassy understorey that contains a mixture of their preferred annual and perennial grass species",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/gouldian_finches/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "In many species, the hen will sit in a “mating position”, lifting and vibrating her tail. The male will then proceed to mount her and impregnate her with a “cloacal kiss”.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  flamingos: {
    slide: [
      { image: require("../../assets/images/feathered/flamingos/toanthan1.png") },
      { image: require("../../assets/images/feathered/flamingos/toanthan2.png") },
      { image: require("../../assets/images/feathered/flamingos/toanthan3.png") },
    ],
    weight: "7.7 pounds",
    length: "1.2 - 1.4 m",
    lifespan: "20 to 30 years",
    speed: "60 km/h",
    climateZone:
      "All flamingos are found in tropical and subtropical areas. Populations of Chilean flamingos are found in central Peru, both coasts of southern South America (mainly in the winter), Argentina, Uruguay, Paraguay, Peru, Bolivia, and southern Brazil",
    biome:
      "These famous pink birds can be found in warm, watery regions on many continents. They favor environments like estuaries and saline or alkaline lakes. Considering their appearance, flamingos are surprisingly fluid swimmers, but really thrive on the extensive mud flats where they breed and feed",
    facts: [
      "- Flamingos really are what they eat. Many plants produce natural red, yellow or orange pigments, called carotenoids",
      "- Carotenoids give carrots their orange color or turn ripe tomatoes red",
      "- They are also found in the microscopic algae that brine shrimp eat",
      "- As a flamingo dines on algae and brine shrimp, its body metabolizes the pigments — turning its feathers pink"
    ],
    bodyParts: [
      {
        image: require("../../assets/images/feathered/flamingos/toanthan1.png"),
        title: "Diet",
        summary:
          "They eat algae, small seeds, tiny crustaceans (like brine shrimp), fly larvae, and other plants and animals that live in shallow waters. When it's time to eat, a flamingo will place its head upside down in the water with its bill pointed at its feet",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/flamingos/toanthan2.png"),
        title: "Habitat",
        summary:
          "The flamingo's most characteristic habitats are large alkaline or saline lakes or estuarine lagoons that usually lack vegetation. Lakes may be far inland or near the sea.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/feathered/flamingos/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Mating occurs in the water. The male jumps onto the female's back from behind, firmly planting his feet on her wing joints. After mating, the male stands on the female's back, then jumps off over her head.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'tiger prawn': {
    slide: [
      { image: require("../../assets/images/crustacean/tiger_prawn/toanthan1.png") },
      { image: require("../../assets/images/crustacean/tiger_prawn/toanthan2.png") },
      { image: require("../../assets/images/crustacean/tiger_prawn/toanthan3.png") },
    ],
    weight: "35 - 50g",
    length: "9 - 11 inches",
    lifespan: "3 - 4 years",
    speed: "none",
    climateZone:
      "Water Temperature 70-78°F (22-25°C)",
    biome:
      "The northern areas of Australia",
    facts: [
      "- They can eat anything. They spend most of the time at the bottom of the aquarium, consuming anything that comes down",
      "- Tiger Shrimps carry the eggs on the body’s underside. A Tiger Shrimp carrying eggs is called Berried shrimp. The tail fans the eggs to offer sufficient oxygen",
      "- Tiger Shrimps will work hard to keep the tank clean. They don’t just eat the dead livestock but also consume algae",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/crustacean/tiger_prawn/toanthan1.png"),
        title: "Diet",
        summary:
          "Arrion and plankton, which are microorganisms. They also eat the smallest shellfish, worms and any organic matter that is decayed",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/tiger_prawn/toanthan2.png"),
        title: "Habitat",
        summary:
          "Tiger Shrimp is native to the Asian continent and is fairly distributed in Asian countries",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/tiger_prawn/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Tiger prawns reproduce via internal fertilization. After mating, females release hundreds of thousands of fertilized eggs, which quickly hatch",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  lobster: {
    slide: [
      { image: require("../../assets/images/crustacean/lobster/toanthan1.png") },
      { image: require("../../assets/images/crustacean/lobster/toanthan2.png") },
      { image: require("../../assets/images/crustacean/lobster/toanthan3.png") },
    ],
    weight: "680 - 910 g",
    length: "230 mm",
    lifespan: "10-40 years",
    speed: "none",
    climateZone:
      "Lobsters can remain happy and healthy in waters up to 20°C (68°F)",
    biome:
      "Northern Atlantic Ocean, Gulf of Mexico, the Caribbean Sea and off the coast of Florida in the Atlantic Ocean",
    facts: [
      "- They Come in Many Different Colors",
      "- Lobsters Communicate Through Their Urine",
      "- They Have Eyes, But Their Antennae Provide More Information",
      "- They Can Be Cannibalistic"
    ],
    bodyParts: [
      {
        image: require("../../assets/images/crustacean/lobster/toanthan1.png"),
        title: "Diet",
        summary:
          "They feed primarily on fish and mollusks, but will consume algae and other plant life",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/lobster/toanthan2.png"),
        title: "Habitat",
        summary:
          "The bottom-dwelling American lobster flourishes in cold, rocky waters off the Atlantic coast of North America. But lobsters can be found in all of the world’s oceans, as well as brackish environments and even freshwater",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/lobster/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "A lobster reproduces by laying eggs that a female carries until they are ready to hatch. Depending on the warmth of the water, a female lobster carries the eggs for about a year in its swimmerets",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'hermit crab': {
    slide: [
      { image: require("../../assets/images/crustacean/hermit_crab/toanthan1.png") },
      { image: require("../../assets/images/crustacean/hermit_crab/toanthan2.png") },
      { image: require("../../assets/images/crustacean/hermit_crab/toanthan3.png") },
    ],
    weight: "1.3 ounces - 11 pounds",
    length: "12.5-foot leg span",
    lifespan: "40 years",
    speed: "none",
    climateZone:
      "75-85 degrees Fahrenh (23-29 Celsius) during the day and 65-75 degrees F (18-24 C) at night",
    biome:
      "Indo Pacific ocean",
    facts: [
      "- There are over 800 species of hermit crabs worldwide, and almost all are ocean dwellers",
      "- Hermit crabs are opportunistic scavengers, feeding on anything they can find",
      "- They have tough pincers but a soft body which they coil up inside their borrowed shell, using their hooked tail to help them to grip on.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/crustacean/hermit_crab/toanthan1.png"),
        title: "Diet",
        summary:
          "Omnivore",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/hermit_crab/toanthan2.png"),
        title: "Habitat",
        summary:
          "These crabs spend most of their lives underwater as aquatic animals, living in depths of saltwater that range from shallow reefs and shorelines to deep sea bottoms",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/hermit_crab/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Hermit crabs mate in seawater. Before mating, the male holds the female with one claw, and then taps or strokes her with the other or pulls her back and forth.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'ghost crab': {
    slide: [
      { image: require("../../assets/images/crustacean/ghost_crab/toanthan1.png") },
      { image: require("../../assets/images/crustacean/ghost_crab/toanthan2.png") },
      { image: require("../../assets/images/crustacean/ghost_crab/toanthan3.png") },
    ],
    weight: "0.53 – 2.5 ounces",
    length: "2 - 3 inches",
    lifespan: "3 years",
    speed: "10 mph",
    climateZone:
      "none",
    biome:
      "Indo-Pacific region, Mediterranean, the Pacific coast of North America, and on storefronts along the Atlantic Ocean from Massachusetts down to Florida and further south to Brazil.",
    facts: [
      "- Their eyestalks, which are sometimes horned, can swivel 360 degrees",
      "- Ghost crabs are only semi terrestrial. Though they lay eggs in water and need to keep their gills wet, they will drown if they stay in water too long.",
      "- Ghost cabs can make sounds that include bubbling, stridulation and thumping",
      "- They can change color to blend in with the sand, one of the adaptations that helps them avoid predators",
      "- Though they’re small crabs, their larva are among the largest of the crab larvae during the final larval, or megalopa stage",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/crustacean/ghost_crab/toanthan1.png"),
        title: "Diet",
        summary:
          "Smaller crabs, other marine arthropods, and insects",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/ghost_crab/toanthan2.png"),
        title: "Habitat",
        summary:
          "Sand and mud",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/ghost_crab/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Fertilization is internal and mating usually happens near the male’s burrow. The sperm comes in a fluid that hardens and forms a plug in the female to make sure her eggs are not fertilized by a rival crab",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'cray fish': {
    slide: [
      { image: require("../../assets/images/crustacean/cray_fish/toanthan1.png") },
      { image: require("../../assets/images/crustacean/cray_fish/toanthan2.png") },
      { image: require("../../assets/images/crustacean/cray_fish/toanthan3.png") },
    ],
    weight: "10 g",
    length: "7.5 cm",
    lifespan: "2 - 3 years",
    speed: "none",
    climateZone:
      "18 to 25º C",
    biome:
      "North America",
    facts: [
      "- Crayfish actually have brilliant eyesight. Their eyes can move independently from one another and are referred to as compound eyes.",
      "- There are seven species of crayfish currently known to be present in the wild in the UK.",
      "- White-clawed crayfish require water-bodies to be alkaline, calcium-rich, clean and well oxygenated",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/crustacean/cray_fish/toanthan1.png"),
        title: "Diet",
        summary:
          "They feed largely on snails, insect larvae, worms, and amphibian tadpoles; some eat vegetation",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/cray_fish/toanthan2.png"),
        title: "Habitat",
        summary:
          "Lakes, streams, ponds, swamps, and rivers",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/cray_fish/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Crayfish mate in the autumn and lay eggs in the spring. The eggs, attached to the female’s abdomen, hatch in five to eight weeks.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'coconut crab': {
    slide: [
      { image: require("../../assets/images/crustacean/coconut_crab/toanthan1.png") },
      { image: require("../../assets/images/crustacean/coconut_crab/toanthan2.png") },
      { image: require("../../assets/images/crustacean/coconut_crab/toanthan3.png") },
    ],
    weight: "4.5 kg",
    length: "1 m",
    lifespan: "60 years",
    speed: "none",
    climateZone:
      "none",
    biome:
      " Coconut crabs are found across the Indo-Pacific, from islands off the coast of Africa near Zanzibar to the Gambier Islands in the Eastern Pacific Ocean",
    facts: [
      "- Coconut crabs are a type of hermit crab and are the world’s largest terrestrial arthropod (up to 3 feet across!).",
      "- Unlike most other hermit crabs, only juveniles use shells to protect their abdomens; older coconut crabs develop a hard skin",
      "- They have large muscular claws to help open coconuts",
      "- They cannot swim, and will drown if immersed in water for long."
    ],
    bodyParts: [
      {
        image: require("../../assets/images/crustacean/coconut_crab/toanthan1.png"),
        title: "Diet",
        summary:
          "Coconut meat, fruit, nuts, seeds, and carrion.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/coconut_crab/toanthan2.png"),
        title: "Habitat",
        summary:
          "They are found across the Indo-Pacific, from islands off the coast of Africa near Zanzibar to the Gambier Islands in the Eastern Pacific Ocean",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/coconut_crab/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "The female releases her ripe eggs in the sea, and they immediately hatch as microscopic swimming zoeas. Coconut crab eggs hatch in the ocean, and the larvae float in the sea for up to 28 days",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'gecarcoidea natalis': {
    slide: [
      { image: require("../../assets/images/crustacean/Gecarcoidea_natalis/toanthan1.png") },
      { image: require("../../assets/images/crustacean/Gecarcoidea_natalis/toanthan2.png") },
      { image: require("../../assets/images/crustacean/Gecarcoidea_natalis/toanthan3.png") },
    ],
    weight: "17 ounces",
    length: "4.6 inches",
    lifespan: "20 - 30 years",
    speed: "none",
    climateZone:
      "The environment of the burrow is moist",
    biome:
      "Is found only on Christmas and Cocos Islands, which are now owned by Australia.",
    facts: [
      "- During the breeding season, roads can be dangerous for cars as well as the crab. Their shells are so hard they can puncture tires",
      "- The Christmas Island Red Crab is a land crab, but it still breathes through its gills and needs to stay moist. It will die if it dries out.",
      "- They are endemic to Christmas Island and Cocos Island. Endemic means they are naturally found nowhere else in the world.",
      "- In order to keep migrating crabs from being run over and tires from being punctured, the Australian government has built bridges and tunnels for the crabs to cross in safety. In other places, cars are simply not allowed to be on the road during the crab’s migration."
    ],
    bodyParts: [
      {
        image: require("../../assets/images/crustacean/Gecarcoidea_natalis/toanthan1.png"),
        title: "Diet",
        summary:
          "Omnivore",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/Gecarcoidea_natalis/toanthan2.png"),
        title: "Habitat",
        summary:
          "Rainforest",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/Gecarcoidea_natalis/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "When the eggs hatch, the larvae join the clouds of plankton in the ocean. If they’re not eaten, it takes about a month for them to develop into tiny megalopae, then very tiny crabs",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'blue crab': {
    slide: [
      { image: require("../../assets/images/crustacean/blue_crab/toanthan1.png") },
      { image: require("../../assets/images/crustacean/blue_crab/toanthan2.png") },
      { image: require("../../assets/images/crustacean/blue_crab/toanthan3.png") },
    ],
    weight: "1 - 2 pounds",
    length: "4 - 9 inches",
    lifespan: "1 - 3 years",
    speed: "15.5 m/h",
    climateZone:
      "Blue crabs will grow at temperatures of 50 degrees Fahrenheit",
    biome:
      "Underwater grasses and oyster reefs, and they range from shallow, brackish waters to deeper, saltier waters",
    facts: [
      "- The blue crab’s shell—called the “carapace”—is a blue to olive green",
      "- Shells can reach up to 9 inches across",
      "- Blue crab claws are bright blue, and mature females have red tips on their claws too",
      "- They have three pairs of walking legs and rear swimming legs that look like paddles",
      "- Blue crabs have an “apron” that covers their abdomen. Males’ aprons are thin; females’ are wider"
    ],
    bodyParts: [
      {
        image: require("../../assets/images/crustacean/blue_crab/toanthan1.png"),
        title: "Diet",
        summary:
          "These crabs are predaceous and scavenge for food. They have been known to eat other crustaceans (including their own species), recently dead fish, plant materials, clams, oysters, worms, insects, and mussels.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/blue_crab/toanthan2.png"),
        title: "Habitat",
        summary:
          "Blue crabs are found in brackish coastal lagoons and estuaries from Nova Scotia, through the Gulf of Mexico, and as far south as Uruguay",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/blue_crab/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "The blue crab's mating season occurs between May and October. A male will mate with a female after she has completed her final molt, and she has a soft shell",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'antarctic krill': {
    slide: [
      { image: require("../../assets/images/crustacean/antarctic_krill/toanthan1.png") },
      { image: require("../../assets/images/crustacean/antarctic_krill/toanthan2.png") },
      { image: require("../../assets/images/crustacean/antarctic_krill/toanthan3.png") },
    ],
    weight: "0.035 ounces",
    length: "2.4 inches",
    lifespan: "10 years",
    speed: "0.6 m/s",
    climateZone:
      "Antarctic krill are an ecologically and commercially valuable stenothermal crustacean species in the Southern Ocean where they inhabit a temperature range of −2.0°C to 4.0°C",
    biome:
      "Antarctic waters of the Southern Ocean",
    facts: [
      "- Based on their size and sheer abundance, these hundreds of millions of krill could wrap around the earth a million times and are estimated to weigh more than 400 million tonnes - that’s about the same collective weight of all the people on the planet",
      "- Antarctic krill form super-swarms that can be tens of kilometers wide and over one hundred meters deep. This amazing spectacle can be seen from space",
      "- Antarctic krill are a key species, supporting populations of penguins, seals, whales and other marine life",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/crustacean/antarctic_krill/toanthan1.png"),
        title: "Diet",
        summary:
          "Krill feed on phytoplankton, microscopic, single-celled plants that drift near the ocean’s surface and live off carbon dioxide and the sun’s rays.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/antarctic_krill/toanthan2.png"),
        title: "Habitat",
        summary:
          "Southern Ocean, south of the Antarctic convergence",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/crustacean/antarctic_krill/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "During the mating season, which varies by species and climate, the male deposits a sperm sack at the female's genital opening. The females can carry several thousand eggs in their ovary.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'wyoming toad': {
    slide: [
      { image: require("../../assets/images/amphibia/wyoming_toad/toanthan1.png") },
      { image: require("../../assets/images/amphibia/wyoming_toad/toanthan2.png") },
      { image: require("../../assets/images/amphibia/wyoming_toad/toanthan3.png") },
    ],
    weight: "20 - 80g",
    length: "19 - 33cm",
    lifespan: "8 years",
    speed: "none",
    climateZone:
      "Temperate",
    biome:
      "Wetlands, grassland, freshwater",
    facts: [
      "- A Wyoming toad is terrestrial (lives on the land)",
      "- This toad is extinct in the wild",
      "- Efforts are being made by zoos to breed these toads and slowly introduce them back into the wild",
      "- The female Wyoming toad is a little bit larger than the male",
      "- Wyoming toads release poison from a gland in their neck as a defense against predators",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/amphibia/wyoming_toad/toanthan1.png"),
        title: "Diet",
        summary:
          "Adult toads are carnivores, so they eat beetles, ants, spiders and worms. In short, this toad eats the small insects that are most plentiful in its environment",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/wyoming_toad/toanthan2.png"),
        title: "Habitat",
        summary:
          "The Wyoming toad lives in North America, more specifically in Albany county located in the state of Wyoming in the United States.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/wyoming_toad/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "In the month of May, after Wyoming toads come out of hibernation, they move to a nearby pond or lake for breeding. The males chirp and croak to attract female toads in the area.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'oak toad': {
    slide: [
      { image: require("../../assets/images/amphibia/oak_toad/toanthan1.png") },
      { image: require("../../assets/images/amphibia/oak_toad/toanthan2.png") },
      { image: require("../../assets/images/amphibia/oak_toad/toanthan3.png") },
    ],
    weight: "20 - 80g",
    length: "19 - 33cm",
    lifespan: "2 - 4 years",
    speed: "none",
    climateZone:
      "Temperate",
    biome:
      "Wetlands, river, grassland, temporary pool, anthropogenic, shrubland",
    facts: [
      "- Oak toads are the smallest of the toad species in North America, easily identified by a mid-dorsal, light stripe with variable black and brown spots. They have proportionally large parotid glands",
      "- The species uses a series of high-pitched calls to communicate. They can warn other oak toads of predators or call out for mates.",
      "- Toads prefer to crawl rather than hop",
      "- Oak toads taste bad. Or rather the poisonous fluid they secrete does. That’s how they chase away predators.",
      "- The oak toad doesn’t ribbit. It has its call, which is more sing-song than anything",
      "- The creatures, like all toads, shed their external skin regularly. Once peeled, the toad places the substance under its tongue and proceeds to eat it.",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/amphibia/oak_toad/toanthan1.png"),
        title: "Diet",
        summary:
          "Adult toads are insectivorous. Their fave meal is ants, but the toads have no problem munching on aphids, beetles, orthopterans, spiders, dipterans, centipedes and mollusks.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/oak_toad/toanthan2.png"),
        title: "Habitat",
        summary:
          "Oak toads love open canopied oak as well as pine forests with ditches and temporary ponds. For the most part, you won’t find oak toads in areas with permanent water and drained soils.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/oak_toad/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Oak toads breed only once a year and seasonally. Mating begins with warmer temperatures and seasonal thunderstorms. The ovulation interval takes place between late May and mid-August.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'eastern newt': {
    slide: [
      { image: require("../../assets/images/amphibia/eastern_newt/toanthan1.png") },
      { image: require("../../assets/images/amphibia/eastern_newt/toanthan2.png") },
      { image: require("../../assets/images/amphibia/eastern_newt/toanthan3.png") },
    ],
    weight: "5 - 11g",
    length: "7 - 13 cm",
    lifespan: "12 - 15 years",
    speed: "none",
    climateZone:
      "Eastern North America",
    biome:
      "coniferous and deciduous forests, wet marshlands",
    facts: [
      "- Eastern newts are native to the U.S",
      "- They have yellow or green-brown skin with red dots that signal their slight toxicity",
      "- The eastern newt's appearance evolves throughout its three distinct life stages: larvae, juvenile (or eft) and adult",
      "- Its primary habitat shifts between water and land, depending on its life stage"
    ],
    bodyParts: [
      {
        image: require("../../assets/images/amphibia/eastern_newt/toanthan1.png"),
        title: "Diet",
        summary:
          "Eastern newts eat a variety of prey, such as insects, small mollusks and crustaceans, young amphibians, worms, and frog eggs. They also eat a lot of snails, beetles, ants, and mosquito larvae",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/eastern_newt/toanthan2.png"),
        title: "Habitat",
        summary:
          "Eastern newts home using magnetic orientation. Their magnetoreception system seems to be a hybrid of polarity-based inclination and a sun-dependent compass.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/eastern_newt/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "The breeding season begins in late winter and lasts until early spring. Females are attracted by a male's spots, which he uses to lure a female towards him.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'grass frog': {
    slide: [
      { image: require("../../assets/images/amphibia/grass_frog/toanthan1.png") },
      { image: require("../../assets/images/amphibia/grass_frog/toanthan2.png") },
      { image: require("../../assets/images/amphibia/grass_frog/toanthan3.png") },
    ],
    weight: "22,7g",
    length: "6 - 9cm",
    lifespan: "7 - 8 years",
    speed: "none",
    climateZone:
      "Cold climate",
    biome:
      "Terrestrial Biomes (taiga, forest, mountains), Aquatic Biomes (lakes and ponds rivers and stream)",
    facts: [
      "- Life stages of grass frog include three life stages: aquatic larva, terrestrial juvenile, and adult",
      "- Common frogs are often confused with the common toad Bufo bufo, but frogs can easily be distinguished as they have longer legs, hop, and have a moist skin, whereas toads crawl and have a dry 'warty' skin",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/amphibia/grass_frog/toanthan1.png"),
        title: "Diet",
        summary:
          "Carnivore. Common frogs eat insects, their larvae, wood lice, spiders, snails and worms. They are able to detect worms by smell. Eating habits are greatly influenced by the time of year",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/grass_frog/toanthan2.png"),
        title: "Habitat",
        summary:
          "Great Britain, Europe and northwestern Asia. Outside the breeding season, common frogs live a solitary life in damp places near ponds or marshes or in long grass. ",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/grass_frog/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Rana temporaria breeds in warmer lowlands in February & March and in the north and at high altitudes as late as June.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'glass frog': {
    slide: [
      { image: require("../../assets/images/amphibia/glass_frog/toanthan1.png") },
      { image: require("../../assets/images/amphibia/glass_frog/toanthan2.png") },
      { image: require("../../assets/images/amphibia/glass_frog/toanthan3.png") },
    ],
    weight: "5 - 14 g",
    length: "3cm",
    lifespan: "10 - 14 years",
    speed: "20 feet/jump",
    climateZone:
      "Tropical",
    biome:
      "Humid montane forests",
    facts: [
      "- The glass frog lives high in the trees above mountainous streams during the dry season. When the rainy season comes, it climbs down to the stream level to mate",
      "- The male frog guards the females’ fertilized eggs placed on leaves until they hatch and the tadpoles fall into the water",
      "- The translucent skin of some species permits an observer to see the frog’s beating heart",
      "- Glass frogs live up to 14 years"
    ],
    bodyParts: [
      {
        image: require("../../assets/images/amphibia/glass_frog/toanthan1.png"),
        title: "Diet",
        summary:
          "Carnivore.",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/glass_frog/toanthan2.png"),
        title: "Habitat",
        summary:
          "Southern Mexico, Colombia, Costa Rica, and Ecuador",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/glass_frog/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "For glass frogs, mating and egg-laying happen above a stream. As a female lays her eggs on the underside of a leaf, the male fertilizes them.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'cane toad': {
    slide: [
      { image: require("../../assets/images/amphibia/cane_toad/toanthan1.png") },
      { image: require("../../assets/images/amphibia/cane_toad/toanthan2.png") },
      { image: require("../../assets/images/amphibia/cane_toad/toanthan3.png") },
    ],
    weight: "1 - 2 kg",
    length: "10 - 15 cm",
    lifespan: "10 - 15 years",
    speed: "none",
    climateZone:
      "none",
    biome:
      "Closed scrub, grassland, low open forest, low shrubland, open forest, open woodland, woodland",
    facts: [
      "- The cane toad is the largest toad in the world",
      "- Like other members of the family Bufonidae, the cane toad secretes a potent toxin, which acts as a hallucinogen and cardiotoxin",
      "- Cane toads will eat anything they swallow - both dead and living. This includes pet food, carrion and household scraps, but mostly they exist on a diet of living insects.",
      "- Once fertilized, female cane toads lay anywhere between 8,000 to 30,000 eggs - twice a year! These eggs hatch within 1-3 days and tiny tadpoles emerge"
    ],
    bodyParts: [
      {
        image: require("../../assets/images/amphibia/cane_toad/toanthan1.png"),
        title: "Diet",
        summary:
          "Omnivores",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/cane_toad/toanthan2.png"),
        title: "Habitat",
        summary:
          "The cane toad is native to the Americas, from southern Texas to southern Peru, the Amazon, Trinidad, and Tobago. Despite its name, the toad isn't actually a marine species. ",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/cane_toad/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Cane toads can reproduce year-round if temperatures are high enough. In subtropical regions, breeding occurs during the wet season when temperatures are warm.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  caecilian: {
    slide: [
      { image: require("../../assets/images/amphibia/caecilian/toanthan1.png") },
      { image: require("../../assets/images/amphibia/caecilian/toanthan2.png") },
      { image: require("../../assets/images/amphibia/caecilian/toanthan3.png") },
    ],
    weight: "1 kg",
    length: "8 - 152 cm",
    lifespan: "13.8 years",
    speed: "none",
    climateZone:
      "Neotropical, Tropical",
    biome:
      "Anthropogenic biome, forest, savana",
    facts: [
      "- While the amphibians possess no arms or legs, they are powerful diggers, using a strong skull and muscles that run the length of their body to drive through dirt and mud like a piston in a car engine",
      "- Caecilian heads are built for burrowing. A hard, thick skull with a pointy snout helps them move effectively through dirt or mud",
      "- Some caecilians are born with short, blunt teeth, used to peel off the outer layer of the mother’s thick skin for food. This behavior is called",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/amphibia/caecilian/toanthan1.png"),
        title: "Diet",
        summary:
          "Carnivore. Most species spend a majority of their lives underground or lying in the waters of shallow streams. Caecilians can be found in tropical and neotropical areas around the world",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/caecilian/toanthan2.png"),
        title: "Habitat",
        summary:
          "Most species spend a majority of their lives underground or lying in the waters of shallow streams. Caecilians can be found in tropical and neotropical areas around the world",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/caecilian/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "As amphibians, some caecilians lay their eggs in water or moist soil, similar to frog and salamander reproduction",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'bullfrog': {
    slide: [
      { image: require("../../assets/images/amphibia/bullfrog/toanthan1.png") },
      { image: require("../../assets/images/amphibia/bullfrog/toanthan2.png") },
      { image: require("../../assets/images/amphibia/bullfrog/toanthan3.png") },
    ],
    weight: "5 - 175 g",
    length: "9 - 15 cm",
    lifespan: "7 - 10 years",
    speed: "2 - 3 feet/jump",
    climateZone:
      "Temperate",
    biome:
      "Lakes, ponds, swamps, marshes, brackish waters, streams, rivers, ditches, and canals",
    facts: [
      "- Bullfrogs are typically green or gray-brown with brown spots and have easily identifiable circular eardrums, or tympanum, on either side of their heads",
      "- Males are highly territorial and will aggressively guard their land. Females are slightly larger than males",
      "- Life Cycle: Eggs are laid as a jelly-like mass floating on the surface of the water. Around 12,000-20,000 eggs can be laid in each mass. They usually spend 2 winters as tadpoles and live around 8 years",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/amphibia/bullfrog/toanthan1.png"),
        title: "Diet",
        summary:
          "They like to eat crayfish, water beetles, snails and dragonfly larvae. The also eat fish, small turtles, young water birds, and even other frogs",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/bullfrog/toanthan2.png"),
        title: "Habitat",
        summary:
          "Nova Scotia, Canada, the continental United States, Mexico and Cuba",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/bullfrog/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "Males stake out territories with good egg-laying sites and defend them, calling loudly to attract females and chasing away rival males.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
  'clawed frog': {
    slide: [
      { image: require("../../assets/images/amphibia/african_clawed_frog/toanthan1.png") },
      { image: require("../../assets/images/amphibia/african_clawed_frog/toanthan2.png") },
      { image: require("../../assets/images/amphibia/african_clawed_frog/toanthan3.png") },
    ],
    weight: "60 - 200g",
    length: "5 - 13 cm",
    lifespan: "10 - 15 years",
    speed: "5 mph",
    climateZone:
      "Temperate, tropical",
    biome:
      "Freshwater, Lake, river, anthropogenic, forest, grassland, savanna, shrubland, wetland.",
    facts: [
      "- The African clawed frog is named for its three short claws on their hind feet",
      "- The African clawed frog is the only amphibian in the world that can climb and shred its food",
      "- When food and water is scarce, the African clawed frog will burrow itself in the mud and remain dormant for up to a year",
    ],
    bodyParts: [
      {
        image: require("../../assets/images/amphibia/african_clawed_frog/toanthan1.png"),
        title: "Diet",
        summary:
          "Scavengers",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/african_clawed_frog/toanthan2.png"),
        title: "Habitat",
        summary:
          "North America, Europe, Asia, Africa",
        icon: require("../../assets/images/vecter.png"),
      },

      {
        image: require("../../assets/images/amphibia/african_clawed_frog/toanthan3.png"),
        title: "Reproduction and Offspring",
        summary:
          "African Clawed frogs sexually mature after 12 months. They mate four times a year, usually during early spring to summer, depending on the location.",
        icon: require("../../assets/images/vecter.png"),
      },
    ],
  },
};
