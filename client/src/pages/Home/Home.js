import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import InfoShow from "./InfoShow";
import styled from "styled-components";
import SelectedEvent from "./SelectedEvent";
import InfoShowNotAuth from "./InfoShowNotAuth";

const Home = () => {
  // Data for Casa + Sala
  const [showsCasa, setShowsCasa] = useState([]);
  // Data for Ritz
  const [showsRitz, setShowsRitz] = useState([]);
  const [favoriteEventData, setFavoriteEventData] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`/user/${user.email}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setFavoriteEventData(data.data);
        });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/new-user", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    fetch("/shows-casa")
      .then((res) => {
        return res.json();
      })
      .then((shows) => {
        //console.log(shows.data);
        setShowsCasa(shows.data);
      })
      .then(() => {
        fetch("/shows-ritz")
          .then((res) => res.json())
          .then((data) => {
            // console.log("here", data.data);
            setShowsRitz(data.data);
          });
      });
  }, []);

  const events = showsCasa.concat(showsRitz);

  const eventsShow = events.map((show) => {
    const showDate = show.date.split(",");
    const [, ...rest] = showDate;
    const d = new Date(Date.parse(rest.join(",").replace(/TH|ST|ND|RD/g, ",")));
    return { ...show, date: d.toDateString() };
  });

  eventsShow.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const groupedByDate = {};

  eventsShow.forEach((venue) => {
    const date = venue.date;
    if (groupedByDate.hasOwnProperty(venue.date)) {
      // the date for this venue already exists in groupedByDate obj
      // we simply add this venue info to the value of the property
      groupedByDate[date] = [...groupedByDate[date], venue];
    } else {
      // the date for this venue doesn't exist yet
      // add a new property(venue date) to the object and the value(venue info)
      groupedByDate[date] = [venue];
    }
  });

  // after this line groupedByDate is:

  // we loop through each key-value to display the info
  const groupedByDates = Object.keys(groupedByDate).map((date) => {
    // console.log(date);
    const venues = groupedByDate[date].map((venue) => venue);
    // instead of console.log venues, you simply need to deliver the JSX component
    return venues;
  });

  // const pickEvent = (event) => {
  //   setSelectedEvent(event);
  // };

  return (
    <>
      <Wrapper>
        <Header>MUSIC VENUES</Header>
      </Wrapper>
      <Block>
        <p>EVENTS CALENDAR </p>
      </Block>
      {favoriteEventData.length !== 0 &&
        eventsShow.map((show) => {
          return (
            <>
              <Global>
                <InfoShow
                  title={show.title}
                  address={show.address}
                  date={show.date}
                  venue_id={show.venue_id}
                  img={show.img}
                  ticket={show.ticket}
                  event_id={show._id}
                  favoriteEventData={favoriteEventData}
                  setFavoriteEventData={setFavoriteEventData}
                />
                {/* <SelectedEvent events={events} pickEvent={pickEvent} /> */}
              </Global>
            </>
          );
        })}
      {!isAuthenticated &&
        eventsShow.map((show) => {
          return (
            <>
              <Global>
                <InfoShowNotAuth
                  title={show.title}
                  address={show.address}
                  date={show.date}
                  img={show.img}
                  event_id={show._id}
                />
              </Global>
            </>
          );
        })}
    </>
  );
};

const Header = styled.h2`
  color: #76ff03;
  font-size: 70px;
  margin-left: 100px;
  margin-top: 70px;
`;

const Wrapper = styled.div`
  align-items: flex-start;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  height: 200px;
`;

const Global = styled.div`
  max-width: 100vh;
  margin-left: 100px;
  margin-top: 50px;
`;

const Block = styled.div`
  p {
    font-size: 30px;
    margin-left: 100px;
    font-weight: bold;
    color: white;
  }
`;
export default Home;
