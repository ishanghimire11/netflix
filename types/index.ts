export interface NavLinkProps {
  name: string;
  href: string;
}

export interface Movie {
  id: number;
  imageUrl: string;
  title: string;
  age: number;
  duration: number;
  overview: string;
  releaseDate: number;
  source: string;
  category: string;
  youtube: string;
  watchLists?: WatchList[];
  createdAt: Date;
}

export interface WatchList {
  id: string;
  userId: string;
  movieId?: number | null;
  movie?: Movie | null;
}

export interface MovieCardProp
  extends Pick<
    Movie,
    "id" | "duration" | "watchLists" | "youtube" | "overview" | "title"
  > {}

export interface MovieCardProps {
  id: number;
  title: string;
  duration: number;
  overview: string;
  watchListId: string;
  youtube: string;
  watchLists: boolean;
  age: number;
  releaseDate: number;
}

export interface VideoModelProps {
  id: number;
  title: string;
  overview: string;
  youtube: string;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export interface MovieButtonsProps {
  id: number;
  title: string;
  overview: string;
  youtube: string;
}
