
declare type Character = {
    powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
        total: number;
    };
    appearance: {
        gender: string;
        race: string | null;
        height: [string, string];
        weight: [string, string];
        eyeColor: string;
        hairColor: string;
        age: string;
    };
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: string[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: string;
        alignment: string;
    };
    work: {
        occupation: string;
        base: string;
    };
    connections: {
        groupAffiliation: string[];
        relatives: string;
    };
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        // mdi?: string;
        // md2?: string;
        [key: string]: string
    };
    _id: string;
    id: number;
    name: string;
    slug: string;
    comics?: string[];
    powers: (string | number)[]
}

declare type CharacterWithJoinTeamUniversePower = {
    powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
        total: number;
    };
    appearance: {
        gender: string;
        race: string | null;
        height: [string, string];
        weight: [string, string];
        eyeColor: string;
        hairColor: string;
        age: string;
    };
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: string[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: Omit<Universe, "teams">;
        alignment: string;
    };
    work: {
        occupation: string;
        base: string;
    };
    connections: {
        groupAffiliation: Omit<Team, "universe">[];
        relatives: string;
    };
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        // mdi?: string;
        // md2?: string;
        [key: string]: string
    };
    _id: string;
    id: number;
    name: string;
    slug: string;
    comics?: string[];
    powers: Power[]
}

declare type Team = {
    id: number;
    name: string,
    value: string,
    description: string,
    universe: { name: string, value: string }, // OLD
    logo: string,
    comics: string[]
}

declare type TeamWithJoinCharacterUniverse = {
    id: number
    name: string,
    value: string,
    description: string,
    members: Omit<Character, "comics" | "slug" | "powerstats" | "appearance" | "biography" | "work" | "connections" | "powers">[],
    universe: Omit<Universe, "teams" | "comics">
    logo: string,
    comics: string[]
}

declare type Universe = {
    id: number;
    name: string,
    value: string,
    teams: number[]
    logo: string,
    comics?: string[]
}

declare type UniverseWithJoinTeams = {
    id: number;
    name: string,
    value: string,
    teams: Omit<Team, "universe" | "comics">[]
    logo: string,
    comics?: string[]
}

declare type Power = {
    id: number;
    name: string,
    value: string,
    img: string,
}

declare type QueryOptions = {
    name?: RegExp /* | RegExp[]  *//* { "$or": RegExp[] } */;
    "biography.fullName"?: RegExp /* | RegExp[] *//* { "$or": RegExp[] }; */
    "biography.alignment"?: string;
    "biography.publisher.value"?: string;
    "connections.groupAffiliation.value"?: string | RegExp;
    "appearance.gender"?: string;
    "appearance.race"?: string | RegExp;
    "powers.value"?: string | RegExp;
};
/* {
    [key: string]: any;
  } */


declare type CharacterInfo = {
    // name: string;
    // id: string;
    link: string
} & Character

declare type CharacterAttributes = {
    'connections.groupAffiliation': string,
    'biography.alignment': string,
    'appearance.gender': string,
    'appearance.race': string,
    'biography.publisher': string
}

declare type RandomImage = { selectedRandomImage: { key: string, value: string }/* , blurSelectedRandomImage: string */ }

// declare type UniversesWithItsTeams = {
//     info: {
//         name: string;
//         value: string;
//     };
//     logo: string;
//     teams: { name: string; value: string; img: string }[];
// };