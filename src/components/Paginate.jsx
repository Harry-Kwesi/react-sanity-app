import { IconButton } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { useNavigate, useLocation } from "react-router-dom";

const Paginate = ({ page, setPage, lastPage }) => {
  const navigateTo = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const handleNext = () => {
    const newPage = page === lastPage ? lastPage : page + 1;
    setPage(newPage);
    navigateTo(`${pathName}?page=${newPage}`);
  };

  const handleLast = () => {
    setPage(lastPage);
    navigateTo(`${pathName}?page=${lastPage}`);
  };

  const handlePrev = () => {
    const newPage = page === 1 ? 1 : page - 1;
    setPage(newPage);
    navigateTo(`${pathName}?page=${newPage}`);
  };

  const handleFirst = () => {
    setPage(1);
    navigateTo(`${pathName}?page=1`);
  };
  return (
    <div className="paginate">
      <IconButton onClick={handleFirst} disabled={page === 1}>
        <SkipPreviousIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={handlePrev} disabled={page === 1}>
        <NavigateBeforeIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={handleNext} disabled={page === lastPage}>
        <NavigateNextIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={handleLast} disabled={page === lastPage}>
        <SkipNextIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Paginate;
