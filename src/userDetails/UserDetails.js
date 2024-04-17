import "./userDetails.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function UserDetails({ details }) {
  const check = details.check === "" ? "לא סופק" : details.report_target;

  return (
    <div className="userDetails">
      <img src={details.profile_photo} alt="profile" />
      <h1>{details.name}</h1>
      {details.role}
      <h3>
        {details.country} | {details.id}
      </h3>

      <div className="report_container">
        <p>
          <span>{details.report_target}</span> :מטרת הדוח
        </p>
        <p>
          <span>{check}</span> :מיקוד בדיקה
        </p>
      </div>

      <div className="email_phone_container">
        {details.emails.map((email) => (
          <p>
            {email}
            <EmailIcon color="grey" sx={{ width: "10px", margin: "3px" }} />
          </p>
        ))}
        {details.phones.map((phone) => (
          <p>
            {phone} <PhoneIcon sx={{ width: "10px", margin: "3px" }} />
          </p>
        ))}
      </div>

      <div className="social_container">
        <p>
          <a href={details.youtube}> יוטיוב </a>
          <YouTubeIcon sx={{ width: "10px", margin: "3px" }} />
        </p>
        <p>
          <a href={details.facebook}>פייסבוק</a>
          <FacebookIcon sx={{ width: "10px", margin: "3px" }} />
        </p>
        <p>
          <a href={details.instagram}>אינסטגרם</a>
          <InstagramIcon sx={{ width: "10px", margin: "3px" }} />
        </p>

        <p>
          <a href={details.twitter}>טוויטר</a>
          <TwitterIcon sx={{ width: "10px", margin: "3px" }} />
        </p>
      </div>
      <div className="hobbis_education_container">
        <p>
          <span> {details.education}</span> :השכלה
        </p>
        <p>
          <span> {details.nicknames.join(",")}</span> :כינויים
        </p>
      </div>
    </div>
  );
}
