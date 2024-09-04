import s from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  handleMorePage: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleMorePage }) => {
  return (
    <div className={s.btnContainer}>
      <button onClick={handleMorePage} type="button">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
