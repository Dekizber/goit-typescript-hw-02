export type Urls = {
  small: string;
  regular: string;
};

export type Photo = {
  alt_description: string;
  urls: Urls;
};

export type Response = {
  total: number;
  total_pages: number;
  results: Photo[];
};
