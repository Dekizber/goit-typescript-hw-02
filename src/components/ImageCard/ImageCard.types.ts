import { Urls } from "../../api.types";
import { ModalImg } from "../ImageModal/ImageModal.types";

export type ImageCardProps = {
  urls: Urls;
  alt_description: string;
  handleOpenModal: (modalImage: ModalImg) => void;
};
