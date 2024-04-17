import "./photoModal.css";
import CloseIcon from "@mui/icons-material/Close";

export default function PhotoModal({ image, handleClose }) {
  return (
    <div className="photoModal">
      <div className="closeIcon" onClick={handleClose}>
        <CloseIcon />
      </div>
      <img src={image} alt="modalPhoto"></img>
    </div>
  );
}
