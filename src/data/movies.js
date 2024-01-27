const data = [
  {
    id: crypto.randomUUID(),
    cover: "once-in-ho.jpg",
    title: "Once Upon a Time... in Hollywood",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
    isComingSoon: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "marriage-strory.jpg",
    title: "Marriage Story",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Comedy/Drama",
    rating: 3,
    price: 90,
  },
  {
    id: crypto.randomUUID(),
    cover: "pain-and-gain.jpg",
    title: "Pain & Gain",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action/Comedy/Crime/Drama",
    rating: 4,
    price: 100,
    isTrending: true,
    isFavorite: false,

    isNewRelease: false,
    addedToWatchLater: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: "Parasite",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy, Drama, Thriller",
    rating: 4,
    price: 250,
    isTrending: true,
    isFavorite: true,

    isNewRelease: false,
    addedToWatchLater: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: "Iron Man",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 100,
    isTrending: true,
    isFavorite: false,

    isNewRelease: false,
    addedToWatchLater: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "inception.jpg",
    title: "Inception",
    description:
      "A skilled thief who enters the dreams of others to steal their deepest secrets is hired to perform an impossible task: plant an idea in someone's mind.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 120,
    isTrending: true,
    isFavorite: true,

    isNewRelease: false,
    addedToWatchLater: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "shawshank-redemption.jpg",
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genre: "Drama",
    rating: 5,
    price: 150,
    isTrending: true,
    isFavorite: true,

    isNewRelease: false,
    addedToWatchLater: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "forrest-gump.jpg",
    title: "Forrest Gump",
    description:
      "The life journey of a man with low intelligence who inadvertently influences many historical events in the 20th century.",
    genre: "Drama/Romance",
    rating: 4,
    price: 110,
    isTrending: true,
    isFavorite: true,

    isNewRelease: false,
    addedToWatchLater: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "dark-knight.jpg",
    title: "The Dark Knight",
    description:
      "When the Joker wreaks havoc on Gotham, Batman must confront his own demons and make a choice between justice and chaos.",
    genre: "Action/Crime/Drama",
    rating: 5,
    price: 130,
    isTrending: true,
    isFavorite: true,

    isNewRelease: false,
    addedToWatchLater: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "et.jpg",
    title: "E.T. the Extra-Terrestrial",
    description:
      "A young boy befriends a stranded alien and helps him return to his home planet while trying to keep it a secret from the government.",
    genre: "Family/Sci-fi",
    rating: 4,
    price: 95,
    isComingSoon: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "matrix.jpg",
    title: "The Matrix",
    description:
      "A computer hacker learns about the true nature of his reality and his role in the war against the controllers of a simulated world.",
    genre: "Action/Sci-fi",
    rating: 4,
    price: 110,
    isTrending: true,
    isFavorite: true,

    isNewRelease: false,
    addedToWatchLater: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "frozen.jpg",
    title: "Frozen",
    description:
      "Two sisters, Elsa and Anna, navigate the challenges of Elsa's magical ice powers and the bond of sisterhood in the kingdom of Arendelle.",
    genre: "Animation/Adventure/Comedy",
    rating: 4,
    price: 80,
    isTrending: true,
    isFavorite: true,
    isNewRelease: true,
    addedToWatchLater: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "godfather.jpg",
    title: "The Godfather",
    description:
      "The patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    genre: "Crime/Drama",
    rating: 5,
    price: 160,
    isTrending: true,
    isFavorite: true,
    isNewRelease: false,
    addedToWatchLater: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "avatar.jpg",
    title: "Avatar",
    description:
      "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting an alien civilization.",
    genre: "Action/Adventure/Fantasy",
    rating: 4,
    price: 140,
    isTrending: false,
    isFavorite: true,

    isNewRelease: true,
    addedToWatchLater: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "interstellar.jpg",
    title: "Interstellar",
    description:
      "A group of explorers embarks on a journey through a wormhole in space to ensure humanity's survival as Earth faces a catastrophic environmental collapse.",
    genre: "Adventure/Drama/Sci-fi",
    rating: 5,
    price: 145,
    isComingSoon: true,
  },
];

function getAllMovies() {
  return data;
}

export { getAllMovies };
