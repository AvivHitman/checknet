import Grid from "@mui/material/Grid";
import "./Photos.css";

export default function Photos({ images, handleOpen }) {
  return (
    <div className="photos" onClick={handleOpen}>
      <p>תמונות רקע שנמצאו</p>

      <Grid container>
        {images.slice(0, 9).map((image) => (
          <Grid item xs={4} sm={4}>
            <img src={image} alt="foundPhoto"></img>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
