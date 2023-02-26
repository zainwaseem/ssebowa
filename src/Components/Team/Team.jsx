import "./Team.css";
import TeamSlider from "./TeamSlider";

const Team = () => {
  return (
    <>
      <div className="team-main-container">
        <h2 className="team-main-container-title">
          Meet Our Team Of Digital Champions
        </h2>
        <p className="team-main-container-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="team-main-slider">
          <TeamSlider />
        </div>
      </div>
    </>
  );
};

export default Team;
