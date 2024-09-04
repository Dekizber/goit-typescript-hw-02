const ImageCard = ({ urls, alt_description, handleOpenModal }) => {
  return (
    <div>
      <img
        onClick={() => handleOpenModal({ url: urls.regular, alt_description })}
        src={urls.small}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
