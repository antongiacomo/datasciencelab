interface Person {
  name: string;
  affiliation: string;
  bio: string;
  homepage?: string;
}

interface ArticleMeta {
  type?: string;
  tags?: string[];
  date: string;
  time: string;
  location?: string;
  video_link?: string;
  resources?: string[];
  people?: Person[];
  imgurl?: string;
}

interface Article {
  title: string;
  description: string;
  body: unknown;
  meta: ArticleMeta;
  date: string;
  dateFormatted: string;
  time: string;
  isPast: boolean;
  path: string;
  _resource: unknown;
}
