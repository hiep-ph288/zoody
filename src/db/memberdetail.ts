import { MemberImageProps } from "../components/MemberImage";

export interface MemberDetailData {
    [key: string]: {
        slide: MemberImageProps[];
        title: string;
        icon: string[];
        text: string[];
        climateZone: string;
        textClimateZone: string;
        biome: string;
        textBiome: string;
        facts: string[];
    }
}

export const memberDetailData: MemberDetailData = {
    zebra: {
        slide: [
            {image: require('../../assets/images/tiger-memberdetail.png')},
            {image: require('../../assets/images/tiger-memberdetail.png')},
            {image: require('../../assets/images/tiger-memberdetail.png')},
            {image: require('../../assets/images/tiger-memberdetail.png')},
            {image: require('../../assets/images/tiger-memberdetail.png')},
        ],
        title: 'Physical characteristic',
        icon: [
            require('../../assets/images/weight.png'),
            require('../../assets/images/lenght.png'),
            require('../../assets/images/time.png'),
            require('../../assets/images/Group.png'),
        ],
        text: [
            '90 - 310 kg',
            '2,5 – 3,9 m',
            '8 – 10 years',
            '96 km/h',
        ],
        climateZone: 'Climate zones',
        textClimateZone: 'Tropical temperate',
        biome: 'Biome',
        textBiome: 'Forest, rainforest, montane forest, riparian, shrubland, grass land',
        facts: [
            'The tiger is the national animal of India, Bangladesh, Malaysia, and South Korea.',
            'Did you know that a tiger"s coat pattern is still visible when it is shaved. This is not due to skin pigmentation but to the stubble and hair follicles embedded in the skin.',
        ],

    }
}