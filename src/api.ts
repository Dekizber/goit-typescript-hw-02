import axios from "axios";
import { Response } from "./api.types";

const fetchImages = async (query: string, page: number): Promise<Response> => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "G8achiIfmiTJytPDdZzLHvNc0119fFy9VYXUzCkSP80",
      page,
      query,
      orientation: "landscape",
    },
  });

  return data;
};

export default fetchImages;
