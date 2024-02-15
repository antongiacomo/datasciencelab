interface People {
  name: String;
  affiliation: String;
  bio: String;
}
interface Article {
  _path: String;
  title: String;
  tags: Object;
  date: String;
  time: String;
  author: String;
  location: String;
  future: Boolean;
  people: Array<People>;
  video_link: String;
}
