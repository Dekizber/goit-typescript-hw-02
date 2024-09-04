import React from "react";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({
  urls,
  alt_description,
  handleOpenModal,
}) => {
  return (
    <div>
      <img
        onClick={() =>
          handleOpenModal({ url: urls.regular, alt: alt_description })
        }
        src={urls.small}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
