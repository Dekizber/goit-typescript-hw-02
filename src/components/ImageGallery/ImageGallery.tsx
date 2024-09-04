import React from "react";
import { Photo } from "../../api.types";
import ImageCard from "../ImageCard/ImageCard";
import { ModalImg } from "../ImageModal/ImageModal.types";
import s from "./ImageGallery.module.css";

type ImageGalleryProps = {
  images: Photo[];
  handleOpenModal: (modalImage: ModalImg) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  handleOpenModal,
}) => {
  return (
    <ul className={s.list}>
      {images.map((item) => {
        return (
          <li className={s.item} key={item.id}>
            <ImageCard {...item} handleOpenModal={handleOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
