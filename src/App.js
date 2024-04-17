import "./App.css";
import details from "./user.json";
import TabButtons from "./tabButtons/TabButtons";
import UserDetails from "./userDetails/UserDetails";
import TabView from "./tabView/TabView";
import Photos from "./photos/Photos";
import PhotoModal from "./PhotoModal/PhotoModal";
import { useState } from "react";

const tabs = [
  "רשתות חברתיות",
  "אזכורים ברשת",
  "סטטוס משפטי",
  "מאגרי מידע",
  "סיכום",
  "עיסקי",
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[tabs.length - 1]);

  return (
    <div className="App">
      <header className="App-header">
        <p>יציאה</p>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2Yjw9nygD2OO5UVbbVq2lfHiCRA87uUTH50eUAqO4A&s"
          }
          alt="logo"
        />
        <p>שלום {details.name}</p>
      </header>
      <TabButtons
        tabs={tabs}
        handleTab={(tab) => setActiveTab(tab)}
        activeTab={activeTab}
      ></TabButtons>
      <div className="container">
        <Photos
          images={details.photos}
          handleOpen={() => setShowModal(true)}
        ></Photos>
        {showModal && (
          <PhotoModal
            image={details.photos[0]}
            handleClose={() => setShowModal(false)}
          ></PhotoModal>
        )}
        <TabView activeTab={activeTab}></TabView>
        <UserDetails details={details}></UserDetails>
      </div>
    </div>
  );
}

export default App;
