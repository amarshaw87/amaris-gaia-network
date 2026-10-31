export interface Species {
  name: string;
  scientificName: string;
  route: string;
  distance: string;
  velocity: string;
  coordinates: string;
  description: string;
}

export interface TelemetryTrack {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  theme: string;
  speciesList: Species[];
}

export const telemetryData: TelemetryTrack[] = [
  {
    id: 'airborne',
    title: 'Airborne Matrix',
    subtitle: 'Neon-Green trails (Arctic Tern, Siberian Crane, Peregrine Falcon)',
    icon: '🦅',
    theme: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-400',
    speciesList: [
      {
        name: 'Arctic Tern',
        scientificName: 'Sterna paradisaea',
        route: 'Arctic Circle to Antarctica & Back',
        distance: 'approx. 70,000 km / year',
        velocity: '40 - 50 km/h cruising speed',
        coordinates: '71.7069° N, 12.5414° E (Svalbard Sector)',
        description: 'Experiences two summers each year, undertaking the longest regular migration of any known animal.'
      },
      {
        name: 'Peregrine Falcon',
        scientificName: 'Falco peregrinus',
        route: 'Tundra breeding grounds to Southern wintering sites',
        distance: '3,000 to 10,000 km migration path',
        velocity: 'Dive velocity exceeding 320 km/h (Aerodynamic Dive)',
        coordinates: '68.0000° N, 29.0000° E (Sub-Arctic Flightway)',
        description: 'The fastest member of the animal kingdom, executing high-speed aerial dives to hunt prey.'
      },
      {
        name: 'Bar-headed Goose',
        scientificName: 'Anser indicus',
        route: 'Central Asia over the Himalayas to Indian wetlands',
        distance: 'approx. 5,000 km cross-continental path',
        velocity: '60 km/h level flight at extreme altitude',
        coordinates: '27.9881° N, 86.9250° E (Himalayan Altitude Corridor)',
        description: 'Flies over the peaks of the Himalayas, tolerating extremely low oxygen levels at high altitudes.'
      }
    ]
  },
  {
    id: 'insect',
    title: 'Insect Grid (Tiny Travelers)',
    subtitle: 'Neon-Purple trails (Monarch Butterfly, Globe Skimmer, Desert Locust)',
    icon: '🦋',
    theme: 'border-purple-500/40 bg-purple-950/20 text-purple-400',
    speciesList: [
      {
        name: 'Monarch Butterfly',
        scientificName: 'Danaus plexippus',
        route: 'Canada & Northern US to Central Mexican Oyamel Fir Forests',
        distance: 'approx. 4,000 km multi-generational migration',
        velocity: '15 - 20 km/h sustained flight',
        coordinates: '19.5987° N, 100.2736° W (Michoacán Sanctuary)',
        description: 'Iconic long-distance multi-generational migration navigating complex atmospheric wind currents.'
      },
      {
        name: 'Globe Skimmer Dragonfly',
        scientificName: 'Pantala flavescens',
        route: 'India across the Indian Ocean to East Africa & back',
        distance: 'approx. 14,000 to 18,000 km round trip',
        velocity: '35 - 45 km/h high-wind transit',
        coordinates: '8.7330° N, 77.7127° E (Southern India Coastal Vector)',
        description: 'Holds the record for the longest open-ocean migration of any insect, riding monsoon winds.'
      },
      {
        name: 'Desert Locust (Swarm Mode)',
        scientificName: 'Schistocerca gregaria',
        route: 'Sahel and East Africa across Arabian Peninsula to South Asia',
        distance: '2,000 to 4,500 km active swarm movement',
        velocity: '16 - 20 km/h synchronized swarm drift',
        coordinates: '23.8859° N, 45.0792° E (Arabian Desert Corridor)',
        description: 'Forms massive high-density swarms that travel across regions, consuming vegetation.'
      }
    ]
  },
  {
    id: 'oceanic',
    title: 'Oceanic Grid (Marine Life)',
    subtitle: 'Cyan/Neon-Blue trails (Blue Whale, Great White Shark, Manta Ray)',
    icon: '🐋',
    theme: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-400',
    speciesList: [
      {
        name: 'Blue Whale',
        scientificName: 'Balaenoptera musculus',
        route: 'Antarctic feeding grounds to Tropical breeding waters',
        distance: 'approx. 8,000 to 10,000 km oceanic transit',
        velocity: '20 - 25 km/h majestic cruising speed',
        coordinates: '64.2008° S, 64.0500° W (Antarctic Polar Front)',
        description: 'The largest animal ever known to have lived, communicating via low-frequency underwater sonar songs.'
      },
      {
        name: 'Great White Shark',
        scientificName: 'Carcharodon carcharias',
        route: 'California Coast across Pacific Open Ocean to Hawaii (Shark Cafe)',
        distance: 'approx. 4,000 km trans-oceanic navigation',
        velocity: '35 - 40 km/h burst hunting velocity',
        coordinates: '22.3964° N, 160.1956° W (Central Pacific Basin)',
        description: 'Apex marine predator utilizing geomagnetism and ocean currents for precise deep-water navigation.'
      },
      {
        name: 'Loggerhead Sea Turtle',
        scientificName: 'Caretta caretta',
        route: 'Florida Nesting Beaches across the North Atlantic Gyre to Europe',
        distance: 'approx. 12,000 km oceanic loop',
        velocity: '3 - 8 km/h current-assisted drift',
        coordinates: '32.7765° N, 79.9311° W (Atlantic Gyre Stream)',
        description: 'Navigates entire ocean basins using Earths magnetic field as a natural compass.'
      }
    ]
  },
  {
    id: 'terrestrial',
    title: 'Terrestrial Network (Land Safari)',
    subtitle: 'Amber/Neon-Orange vectors (Wildebeest, Elephant, Gray Wolf)',
    icon: '🐅',
    theme: 'border-amber-500/40 bg-amber-950/20 text-amber-400',
    speciesList: [
      {
        name: 'Blue Wildebeest',
        scientificName: 'Connochaetes taurinus',
        route: 'Serengeti Ecosystem (Tanzania) to Masai Mara (Kenya)',
        distance: 'approx. 800 km annual circular trek',
        velocity: '40 - 50 km/h herd galloping speed',
        coordinates: '2.3333° S, 34.8333° E (Serengeti Mara River Crossing)',
        description: 'Part of the legendary Great Migration involving millions of ungulates crossing crocodile-infested rivers.'
      },
      {
        name: 'African Bush Elephant',
        scientificName: 'Loxodonta africana',
        route: 'Zambezi River Basin across Kalahari dry-season corridors',
        distance: '500 to 1,500 km generational memory tracks',
        velocity: '10 - 15 km/h steady herd march',
        coordinates: '18.0137° S, 26.6728° E (Zambezi Waterhole Route)',
        description: 'Leads family herds across vast terrain using ancestral geographic memory to locate hidden water sources.'
      },
      {
        name: 'Gray Wolf',
        scientificName: 'Canis lupus',
        route: 'Alaska Interior through Canadian Boreal Forest territory',
        distance: '1,000 to 3,000 km pack hunting range',
        velocity: '10 - 65 km/h stealth tracking & pursuit',
        coordinates: '64.2008° N, 149.4937° W (Yukon-Alaska Taiga)',
        description: 'Resilient pack hunters navigating rugged snowy terrain with chilling vocalizations and sharp territorial instincts.'
      }
    ]
  }
];

