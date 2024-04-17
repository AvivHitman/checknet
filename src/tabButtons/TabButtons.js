import "./TabButtons.css";

export default function TabButtons({ tabs, handleTab, activeTab }) {
  return (
    <div className="TabButtons">
      {console.log(activeTab)}
      {tabs.map((tab) => (
        <button
          onClick={() => handleTab(tab)}
          style={{ backgroundColor: activeTab === tab && "rgb(167, 208, 206)" }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
