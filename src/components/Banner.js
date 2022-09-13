import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <img src="images/bg.jpg" className="bg" />
        {/* <!-- Banner content --> */}
        <div className="content">
          <img src="images/name.png" className="movieTitle" />
          <h4>
            <span>2021</span>
            <span>
              <i>12+</i>
            </span>
            <span>1h 55min</span>
            <span>Action</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo . Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat .
          </p>
          {/* <!-- Buttons --> */}
          <div className="buttons">
            <a href="#">
              <i className="fa fa-play" aria-hidden="true"></i>Play
            </a>
            <a href="#">
              <i className="fa fa-plus" aria-hidden="true"></i>My List
            </a>
          </div>
        </div>
        <a className="play">
          <img src="images/play.png" /> Watch Trailer
        </a>
      </div>
    </>
  );
};

export default Banner;
