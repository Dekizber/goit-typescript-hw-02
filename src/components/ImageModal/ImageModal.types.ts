export type ModalImg = {
  url: string;
  alt: string;
};

export type ImageModalProps = {
  modalImage: ModalImg;
  isModalOpen: boolean;
  handleCloseModal: () => void;
};
