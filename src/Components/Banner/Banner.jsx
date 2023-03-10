import BannerBg from "../../assets/Banner.png";
import searchicon from "../../assets/searchIcon.png";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      {/* <img src={BannerBg} class="img-fluid" alt="..."></img> */}
      <div className="HeaderBannerContent">
        <h1 className="header-title">
          Make The World Green Again <br /> With Your Searches
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
          do eiusmod tempor incididunt ut labore et dolore magna{" "}
        </p>
        <div className="header-Search">
          <div className="header-Search-input-icon">
            <img src={searchicon} alt="" />
            <input
              type="text"
              placeholder="Search the Web to Plant Trees"
              className="SearchInputField"
            />
          </div>
          <button className="header-banner-search-button"> Search</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
