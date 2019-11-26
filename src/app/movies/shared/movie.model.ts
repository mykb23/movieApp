export interface IMovie {
  favorited: any;
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: [number, number, number];
  genres: [
    {
      id: number;
      name: string;
    },
    {
      id: number;
      name: string;
    }
  ];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  runtime: number;
  spoken_languages: [
    {
      iso_639_1: string;
      name: string;
    },
    {
      iso_639_1: string;
      name: string;
    },
    {
      iso_639_1: string;
      name: string;
    },
    {
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
}
