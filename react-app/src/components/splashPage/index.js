import React, { useEffect } from "react";
import "./splashpage.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllBookings } from "../../store/booking";

const SplashPage = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state?.allBookings);

  useEffect(() => {
    dispatch(getAllBookings(bookings));
  }, [bookings]);

  return (
    <div className="entireBackGround">
      <div className="blackBar">
        {/* <div className="searchBarContainer">
          <form action="/" method="get">
            <div className="searchBarItems">
              <div className="locationContainer">
                <div className="location"> Location </div>
                <input
                  className="searchItems"
                  type="text"
                  placeholder="Where are you going?"
                  name="search"
                />
              </div>
              <div className="checkinContainer">
                <div className="checkIn"> Check In </div>
                <input
                  className="searchItems"
                  type="text"
                  placeholder="Add Dates"
                  name="search"
                />
              </div>
              <div className="checkoutContainer">
                <div className="checkOut"> Check Out </div>
                <input
                  className="searchItems"
                  type="text"
                  placeholder="Add Dates"
                  name="search"
                />
              </div>
              <div className="guestContainer">
                <div className="guests"> Guests </div>
                <input
                  className="searchItems"
                  type="text"
                  placeholder="Add Guests"
                  name="search"
                />
              </div>
              <div className="searchContainer">
                <button className="search" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div> */}
        <div className="landingPage">
          <img
            alt="capitalBackGroundPhoto"
            src="https://wallpapercave.com/wp/wp4204392.jpg"
          />
        </div>
        <div className="middleText">
          <div className="madePossible"> Made possible by Hosts</div>
        </div>
        <div className="fourImageContainer">
          <div className="stayAnywhere">Stay anywhere</div>
          <div className="fourCenterImages">
            <div className="differentCapitalBuildings">
              <img alt="" src="https://wallpapercave.com/wp/wp4204401.jpg" />
              <h2>Different State</h2>
            </div>
            <div className="differentCapitalBuildings">
              <img alt="" src="https://wallpapercave.com/wp/wp4064278.jpg" />
              <h2>Different Capital</h2>
            </div>
            <div className="differentCapitalBuildings">
              <img alt="" src="https://wallpapercave.com/wp/wp4204405.jpg" />
              <h2>One Nation</h2>
            </div>
            <div className="differentCapitalBuildings">
              <img alt="" src="https://wallpapercave.com/wp/wp4204408.jpg" />
              <h2>One Country</h2>
            </div>
          </div>
        </div>
        <div className="becomeAHostContainer">
          <img
            alt="bottomHostImage"
            src="https://wallpapercave.com/wp/wp4204425.jpg"
          />
          <div className="becomeAHostContainerText">
            <h1>Your state capital is worth sharing</h1>
            <h4>
              Turn your extra
              <span> space </span>
              into your next
              <span> opportunity.</span>
            </h4>
            {/* <button>Become a Host</button> */}
          </div>
        </div>
        <div className="footerContainer">
          <div className="footerInformation">
            <div className="footers">
              <section className="footers">
                {" "}
                <ul className="contactList">
                  Want to get in contact with me?
                  <a href="https://www.linkedin.com/in/danielpark0503/">
                    LinkedIn
                  </a>
                  <a href="https://angel.co/u/daniel-park-70">Angellist</a>
                  <a href="https://github.com/dpxrk">Github</a>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
