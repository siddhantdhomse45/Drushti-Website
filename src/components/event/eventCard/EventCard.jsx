// import React, { useEffect, useState } from "react";
// import styles from "./EventCard.module.css";
// import { FaArrowRight } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useSearch } from "../../../../SearchContext";

// // Utility function to split upcoming and past based on date
// const splitEvents = (events) => {
//   const today = new Date();
//   const upcoming = [];
//   const past = [];

//   events.forEach((event) => {
//     const eventDate = new Date(event.date);
//     if (eventDate >= today) {
//       upcoming.push(event);
//     } else {
//       past.push(event);
//     }
//   });

//   return { upcoming, past };
// };

// const EventCard = ({ events }) => {
//   const navigate = useNavigate();
//   const { searchQuery } = useSearch();
//   const eventsPerPage = 8;

//   const [upcomingPage, setUpcomingPage] = useState(1);
//   const [pastPage, setPastPage] = useState(1);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [upcomingPage, pastPage]);

//   if (!events || events.length === 0) {
//     return <p className={styles.empty}>No events available</p>;
//   }

//   const filteredEvents = events.filter(
//     (event) =>
//       event.heading?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       event.subHeading?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       event.date?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const { upcoming, past } = splitEvents(filteredEvents);

//   const paginateEvents = (eventsArray, currentPage) => {
//     const indexOfLast = currentPage * eventsPerPage;
//     const indexOfFirst = indexOfLast - eventsPerPage;
//     return eventsArray.slice(indexOfFirst, indexOfLast);
//   };

//   const handleNavigate = (event) => {
//     if (!event?._id) return;
//     navigate(`/event/${event._id}`);
//   };

//   const renderCard = (event) => {
//     const dateParts = event.date ? event.date.split(" ") : ["", ""];
//     const day = dateParts[0];
//     const monthYear = dateParts.slice(1).join(" ");
//     const truncateSubHeading = (text, wordLimit = 25) => {
//       if (!text) return "";
//       const words = text.split(" ");
//       return words.length > wordLimit
//         ? words.slice(0, wordLimit).join(" ") + " . . ."
//         : text;
//     };

//     return (
//       <div key={event._id} className={styles.card}>
//         <div className={styles.cardContent}>
//           <h3 className={styles.cardHeading}>{event.heading}</h3>
//           <p className={styles.cardSub}>{truncateSubHeading(event.subHeading)}</p>
//           <div className={styles.dateButton}>
//             <p className={styles.cardDate}>
//               <span className={styles.day}>{day}</span>
//               <br />
//               <span className={styles.monthYear}>{monthYear}</span>
//             </p>
//             <button className={styles.cardButton} onClick={() => handleNavigate(event)}>
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//         <img src={event.img} className={styles.cardImg} alt={event.heading} />
//       </div>
//     );
//   };

//   // Paginated events
//   const currentUpcoming = paginateEvents(upcoming, upcomingPage);
//   const currentPast = paginateEvents(past, pastPage);

//   // Total pages
//   const upcomingTotalPages = Math.ceil(upcoming.length / eventsPerPage);
//   const pastTotalPages = Math.ceil(past.length / eventsPerPage);

//   return (
//     <div className={styles.services}>
//       {/* Intro Section */}
//       <div className={styles.servicesContainer}>
//         <div className={styles.leftContent}>
//           <div>Events</div>
//           <h3>"Where Hearts Meet Happily!"</h3>
//           <p>
//             "Join our exclusive matchmaking events - A beautiful blend of
//             tradition and modern connections. Your next chapter could begin
//             here!"
//           </p>
//         </div>
//         <div className={styles.rightContent}>Events</div>
//       </div>

//       {/* Upcoming Events */}
//       <div className={styles.upcoming}>
//         <h3>Upcoming Events</h3>
//         <div className={styles.upcomingCard}>
//           {currentUpcoming.length > 0
//             ? currentUpcoming.map(renderCard)
//             : <p className={styles.empty}>No upcoming events</p>}
//         </div>
//         <div className={styles.pagination}>
//           <button
//             className={styles.pageBtn}
//             onClick={() => setUpcomingPage(upcomingPage - 1 < 1 ? 1 : upcomingPage - 1)}
//           >
//             prev
//           </button>
//           {Array.from({ length: upcomingTotalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               className={`${styles.pageBtn} ${upcomingPage === i + 1 ? styles.activePage : ""}`}
//               onClick={() => setUpcomingPage(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             className={styles.pageBtn}
//             onClick={() =>
//               setUpcomingPage(upcomingPage + 1 > upcomingTotalPages ? upcomingTotalPages : upcomingPage + 1)
//             }
//           >
//             next
//           </button>
//         </div>
//       </div>

//       {/* Past Events */}
//       <div className={styles.services1}>
//         <h3>Past Events</h3>
//         <div className={styles.pastCard}>
//           {currentPast.length > 0
//             ? currentPast.map(renderCard)
//             : <p className={styles.empty}>No past events</p>}
//         </div>
//         <div className={styles.pagination}>
//           <button
//             className={styles.pageBtn}
//             onClick={() => setPastPage(pastPage - 1 < 1 ? 1 : pastPage - 1)}
//           >
//             prev
//           </button>
//           {Array.from({ length: pastTotalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               className={`${styles.pageBtn} ${pastPage === i + 1 ? styles.activePage : ""}`}
//               onClick={() => setPastPage(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             className={styles.pageBtn}
//             onClick={() =>
//               setPastPage(pastPage + 1 > pastTotalPages ? pastTotalPages : pastPage + 1)
//             }
//           >
//             next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;






import React, { useEffect, useState } from "react";
import styles from "./EventCard.module.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Utility function to split upcoming and past based on date
const splitEvents = (events) => {
  const today = new Date();
  const upcoming = [];
  const past = [];

  events.forEach((event) => {
    const eventDate = new Date(event.date);
    if (eventDate >= today) {
      upcoming.push(event);
    } else {
      past.push(event);
    }
  });

  return { upcoming, past };
};

const EventCard = ({ events }) => {
  const navigate = useNavigate();
  const eventsPerPage = 8;

  const [upcomingPage, setUpcomingPage] = useState(1);
  const [pastPage, setPastPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [upcomingPage, pastPage]);

  if (!events || events.length === 0) {
    return <p className={styles.empty}>No events available</p>;
  }

  const { upcoming, past } = splitEvents(events);

  const paginateEvents = (eventsArray, currentPage) => {
    const indexOfLast = currentPage * eventsPerPage;
    const indexOfFirst = indexOfLast - eventsPerPage;
    return eventsArray.slice(indexOfFirst, indexOfLast);
  };

  const handleNavigate = (event) => {
    if (!event?._id) return;
    navigate(`/event/${event._id}`);
  };

  const renderCard = (event) => {
    const dateParts = event.date ? event.date.split(" ") : ["", ""];
    const day = dateParts[0];
    const monthYear = dateParts.slice(1).join(" ");
    const truncateSubHeading = (text, wordLimit = 25) => {
      if (!text) return "";
      const words = text.split(" ");
      return words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + " . . ."
        : text;
    };

    return (
      <div key={event._id} className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className={styles.cardHeading}>{event.heading}</h3>
          <p className={styles.cardSub}>{truncateSubHeading(event.subHeading)}</p>
          <div className={styles.dateButton}>
            <p className={styles.cardDate}>
              <span className={styles.day}>{day}</span>
              <br />
              <span className={styles.monthYear}>{monthYear}</span>
            </p>
            <button className={styles.cardButton} onClick={() => handleNavigate(event)}>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <img src={event.img} className={styles.cardImg} alt={event.heading} />
      </div>
    );
  };

  // Paginated events
  const currentUpcoming = paginateEvents(upcoming, upcomingPage);
  const currentPast = paginateEvents(past, pastPage);

  // Total pages
  const upcomingTotalPages = Math.ceil(upcoming.length / eventsPerPage);
  const pastTotalPages = Math.ceil(past.length / eventsPerPage);

  return (
    <div className={styles.services}>
      {/* Intro Section */}
      <div className={styles.servicesContainer}>
        <div className={styles.leftContent}>
          <div>Events</div>
          <h3>"Where Hearts Meet Happily!"</h3>
          <p>
            "Join our exclusive matchmaking events - A beautiful blend of
            tradition and modern connections. Your next chapter could begin
            here!"
          </p>
        </div>
        <div className={styles.rightContent}>Events</div>
      </div>

      {/* Upcoming Events */}
      <div className={styles.upcoming}>
        <h3>Upcoming Events</h3>
        <div className={styles.upcomingCard}>
          {currentUpcoming.length > 0
            ? currentUpcoming.map(renderCard)
            : <p className={styles.empty}>No upcoming events</p>}
        </div>
        <div className={styles.pagination}>
          <button
            className={styles.pageBtn}
            onClick={() => setUpcomingPage(upcomingPage - 1 < 1 ? 1 : upcomingPage - 1)}
          >
            prev
          </button>
          {Array.from({ length: upcomingTotalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`${styles.pageBtn} ${upcomingPage === i + 1 ? styles.activePage : ""}`}
              onClick={() => setUpcomingPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={styles.pageBtn}
            onClick={() =>
              setUpcomingPage(upcomingPage + 1 > upcomingTotalPages ? upcomingTotalPages : upcomingPage + 1)
            }
          >
            next
          </button>
        </div>
      </div>

      {/* Past Events */}
      <div className={styles.services1}>
        <h3>Past Events</h3>
        <div className={styles.pastCard}>
          {currentPast.length > 0
            ? currentPast.map(renderCard)
            : <p className={styles.empty}>No past events</p>}
        </div>
        <div className={styles.pagination}>
          <button
            className={styles.pageBtn}
            onClick={() => setPastPage(pastPage - 1 < 1 ? 1 : pastPage - 1)}
          >
            prev
          </button>
          {Array.from({ length: pastTotalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`${styles.pageBtn} ${pastPage === i + 1 ? styles.activePage : ""}`}
              onClick={() => setPastPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={styles.pageBtn}
            onClick={() =>
              setPastPage(pastPage + 1 > pastTotalPages ? pastTotalPages : pastPage + 1)
            }
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
