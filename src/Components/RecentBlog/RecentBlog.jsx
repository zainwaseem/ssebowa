import React from "react";
import "./RecentBlog.css";

const RecentBlog = () => {
  return (
    <div className="RecentBlogContainer">
      <div className="">
        <h1 className="">
          Recent Blog And <span style={{ color: "#4AB421" }}>Articles</span>
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
      <div className="">
        <div className="img container">
          <img
            className="recentBlogImg"
            src="https://i.ibb.co/wJWt746/bow-bridge-central-park-new-york-city-1.png"
            alt="recetnimg"
            width=" 570px"
            height="600px"
          />
        </div>
        <div
          className="flex RecentBlogCardContainer"
          style={{ width: "740px" }}
        >
          <div className="SelfCard1 selfCard  blog-info RecentBlogNewCard">
            <button class="btn-sm RecentBlogCardBtns">New </button>
            <h1 className="">
              Why Do People Suffer <br />
              From Hunger Ceries?
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="SelfCard2  selfCard  blog-info ">
            <button class="btn-sm RecentBlogCardBtns">Popular Tour</button>
            <h1 className=" text">
              Why Do People Suffer <br />
              From Hunger Ceries?{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
