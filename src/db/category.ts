import { CategoryInfoProps } from "../components/CategoryInfo";
import { MemberItemProps } from "../components/MemberItem";

// Use in Home
export const categoriesData: CategoryInfoProps[] = [
  {
    image: require("../../assets/images/category/elephants-home.png"),
    quantity: "5488 species",
    title: "Mammals",
    summary:
      "Mammals include humans and all other animals that are warm-blooded vertebrates (vertebrates have backbones) with hair. They feed their young with milk and have a more well-developed brain than other types of animals.",
  },

  {
    image: require("../../assets/images/category/salamander-home.png"),
    quantity: "8225 species",
    title: "Reptile",
    summary:
      "Reptiles are cold-blooded vertebrates. (Vertebrates have backbones.) They have dry skin covered with scales or bony plates and usually lay soft-shelled eggs.",
  },

  {
    image: require("../../assets/images/category/bird-home.png"),
    quantity: "6 - 10 million species",
    title: "Insect",
    summary:
      "Any member of the largest class of the phylum Arthropoda, which is itself the largest of the animal phyla. Insects have segmented bodies, jointed legs, and external skeletons.",
  },

  {
    image: require("../../assets/images/category/elephants-home.png"),
    quantity: "2 species",
    title: "Feathered",
    summary:
      "Feathered Species are warm-blooded vertebrates (vertebrates have backbones) and are the only animals with feathers. Although all birds have wings, a few species can't fly.",
  },

  {
    image: require("../../assets/images/category/salamander-home.png"),
    quantity: "44000 species",
    title: "Crustacean",
    summary:
      "Crustaceans make up a very large group of the Arthropods which include the crabs, lobsters, crayfish, shrimp, krill,... Crustaceans are found in a wide range of habitats - most are free-living freshwater or marine animals, but some are terrestrial, some are parasitic and some do not move.",
  },

  {
    image: require("../../assets/images/category/bird-home.png"),
    quantity: "7000 species",
    title: "Amphibians",
    summary:
      "Amphibians are cold-blooded vertebrates (vertebrates have backbones) that don’t have scales. They live part of their lives in water and part on land.",
  },
];

export const mammalItems: MemberItemProps[] = [
  { image: require("../../assets/images/mammals/wolf/wolf-item.png"), name: 'Wolf' },
  { image: require("../../assets/images/mammals/tiger/tiger-item.png"), name: 'Tiger' },
  { image: require("../../assets/images/mammals/otter/Portrait.jpg"), name: 'Otter' },
  { image: require("../../assets/images/mammals/orca/Portrait.jpg"), name: 'Orca' },
  { image: require("../../assets/images/mammals/jaguar/Portrait.jpg"), name: 'Jaguar' },
  { image: require("../../assets/images/mammals/elephant/Portrait.jpg"), name: 'Elephants' },
  { image: require("../../assets/images/mammals/deer/Portrait.jpg"), name: 'Deer' },
  { image: require("../../assets/images/mammals/cheetah/Cheetah.jpg"), name: 'Cheetah' },
  { image: require("../../assets/images/mammals/blue-whale/Portrait.jpg"), name: 'Blue Whale' },
  { image: require("../../assets/images/mammals/bear/Portrait.jpg"), name: 'Bear' },
];

export const reptileItems: MemberItemProps[] = [
  { image: require("../../assets/images/reptile/turtle/Turtle.jpeg"), name: 'Turtle' },
  { image: require("../../assets/images/reptile/tortoise/Portrait.jpg"), name: 'Tortoise' },
  { image: require("../../assets/images/reptile/sulcata-tortoise/Portrait.jpg"), name: 'Sulcata Tortoise' },
  { image: require("../../assets/images/reptile/snake/Portrait.jpg"), name: 'Snake' },
  { image: require("../../assets/images/reptile/lizard/Portrait.jpg"), name: 'Lizard' },
  { image: require("../../assets/images/reptile/leopard-gecko/Portrait.jpg"), name: 'Leopard Gecko' },
  { image: require("../../assets/images/reptile/iguana/Portrait.jpg"), name: 'Iguana' },
  { image: require("../../assets/images/reptile/crocodile/Portrait.jpg"), name: 'Crocodile' },
  { image: require("../../assets/images/reptile/chameleon/Portrait.jpg"), name: 'Chameleon' },
  { image: require("../../assets/images/reptile/caiman/Portrait.jpg"), name: 'Caiman' },
];

export const insectItems: MemberItemProps[] = [
  { image: require("../../assets/images/insects/mosquitoes/Mosquitoes.jpg"), name: 'Mosquitoes' },
  { image: require("../../assets/images/insects/ladybug/Ladybug.jpg"), name: 'Ladybug' },
  { image: require("../../assets/images/insects/havester-ants/harvester-ants.jpg"), name: 'Harvester Ants' },
  { image: require("../../assets/images/insects/fly/Fly.jpg"), name: 'Fly' },
  { image: require("../../assets/images/insects/flea/flea.jpg"), name: 'Flea' },
  { image: require("../../assets/images/insects/dragonfly/Dragonfly.jpeg"), name: 'Dragonfly' },
  { image: require("../../assets/images/insects/cricket/Cricket.jpg"), name: 'Cricket' },
  { image: require("../../assets/images/insects/cicada/Cicada.jpg"), name: 'Cicadas' },
  { image: require("../../assets/images/insects/bumble-bee/Bumble-Bee.jpg"), name: 'Bumble Bees' },
  { image: require("../../assets/images/insects/beetle/Beetle.jpg"), name: 'Beetle' },
];

export const featheredItems: MemberItemProps[] = [
  { image: require("../../assets/images/feathered/victoria-crowned-pigeons/Victoria-Crowned-Pigeons.jpg"), name: 'Goura Victoria' },
  { image: require("../../assets/images/feathered/toucans/Toucans.jpg"), name: 'Toucans' },
  { image: require("../../assets/images/feathered/resplendent-quetzals/Resplendent-Quetzals.jpg"), name: 'Resplendent Quetzal' },
  { image: require("../../assets/images/feathered/peacock/Peacock.jpg"), name: 'Peacocks' },
  { image: require("../../assets/images/feathered/parrots/Portrait.jpg"), name: 'Parrots' },
  { image: require("../../assets/images/feathered/mute-swan/Mute-Swan.jpg"), name: 'Mute Swans' },
  { image: require("../../assets/images/feathered/mandarin-duck/Mandarin-Ducks.jpg"), name: 'Mandarin Ducks' },
  { image: require("../../assets/images/feathered/macaw/Toanthan.jpg"), name: 'Macaws' },
  { image: require("../../assets/images/feathered/gouldian-finches/Gouldian-Finches.jpg"), name: 'Gouldian Finches' },
  { image: require("../../assets/images/feathered/flamingos/Flamingos.jpg"), name: 'Flamingos' },
];

export const crustaceanItems: MemberItemProps[] = [
  { image: require("../../assets/images/crustacean/tiger-prawn/Tiger-Prawn.jpg"), name: 'Tiger Prawn' },
  { image: require("../../assets/images/crustacean/sand-crab/Sand-Crab.jpeg"), name: 'Sand Crab' },
  { image: require("../../assets/images/crustacean/lobster/Lobster.jpg"), name: 'Lobster' },
  { image: require("../../assets/images/crustacean/hermit-crab/hermit-crab.jpg"), name: 'Hermit Crab' },
  { image: require("../../assets/images/crustacean/ghost-crab/ghost-crab.png"), name: 'Ghost Crab' },
  { image: require("../../assets/images/crustacean/cray-fish/Crayfish.jpg"), name: 'Cray Fish' },
  { image: require("../../assets/images/crustacean/coconut-crab/coconut-crab.jpg"), name: 'Coconut Crab' },
  { image: require("../../assets/images/crustacean/christmas-island-red-crab/Christmas-Island-Red-Crab.jpg"), name: 'Gecarcoidea natalis' },
  { image: require("../../assets/images/crustacean/blue-crab/Blue-Crab.jpg"), name: 'Blue Crab' },
  { image: require("../../assets/images/crustacean/antarctic-krill/Antarctic-Krill.jpg"), name: 'Antarctic Krill' },
];

export const amphibiansItems: MemberItemProps[] = [
  { image: require("../../assets/images/amphibia/wyoming-toad/Wyoming-toad.jpg"), name: 'Wyoming toad' },
  { image: require("../../assets/images/amphibia/salamander/Salamander.jpg"), name: 'Salamanders' },
  { image: require("../../assets/images/amphibia/oak-toad/Oak-toad.jpg"), name: 'Oak Toad' },
  { image: require("../../assets/images/amphibia/notophthalmus-viridescens/Portrait.jpg"), name: 'Eastern Newt' },
  { image: require("../../assets/images/amphibia/grass-frog/Grass-frog.jpg"), name: 'Grass Frog' },
  { image: require("../../assets/images/amphibia/glass-frog/Portrait.jpg"), name: 'Glass Frog' },
  { image: require("../../assets/images/amphibia/cane-toad/Portrait.jpg"), name: 'Cane Toad' },
  { image: require("../../assets/images/amphibia/caecilian/Portrait.jpg"), name: 'Caecilian' },
  { image: require("../../assets/images/amphibia/american-bullfrog/Portrait.jpg"), name: 'Bullfrog' },
  { image: require("../../assets/images/amphibia/african-clawed-frog/Portrait.jpg"), name: 'Clawed Frog' },
];