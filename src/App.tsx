import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchImages from "./api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Photo } from "./api.types";
import { ModalImg } from "./components/ImageModal/ImageModal.types";

const App = () => {
  const [images, setImages] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalImg>({ url: "", alt: "" });

  const handleMorePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleChangeQuery = (newQuery: string) => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  };

  useEffect(() => {
    if (query.trim() === "") return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setShowLoadMore(
          data.total > 10 && page < Math.ceil(data.total / data.total_pages)
        );
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleOpenModal = (modalImage: ModalImg) => {
    setModalImage(modalImage);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalImage({ url: "", alt: "" });
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} handleOpenModal={handleOpenModal} />
      )}

      <ImageModal
        modalImage={modalImage}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {showLoadMore && <LoadMoreBtn handleMorePage={handleMorePage} />}
    </div>
  );
};

export default App;
