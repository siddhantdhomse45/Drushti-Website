// import React, { useState, useEffect } from 'react';
// import styles from "./EventDetail.module.css";
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

// const EventDetail = () => {
//   const { id } = useParams();
//   const [eventDetail, setEventDetail] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       if (!id) return;

//       const dummySchedule = [
//         { time: "10:00 AM", activity: "Welcome drinks" },
//         { time: "11:00 AM", activity: "Ceremony starts" },
//         { time: "01:00 PM", activity: "Lunch / Catering" },
//         { time: "03:00 PM", activity: "Games / Entertainment" },
//         { time: "05:00 PM", activity: "Closing ceremony" },
//       ];

//       try {
//         const response = await axios.get(`https://matrimony-backend-v3.onrender.com/api/events/${id}`);
//         const eventData = { ...response.data };
//         if (!eventData.schedule) eventData.schedule = dummySchedule;
//         setEventDetail(eventData);
//       } catch (err) {
//         console.error('Error fetching event:', err);
//         setError(err.response?.data?.message || 'Event not found');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvent();
//   }, [id]);

//   if (loading) return <div className={styles.loading}>Loading event details...</div>;
//   if (error) return <div className={styles.error}>Error: {error}</div>;
//   if (!eventDetail) return <div className={styles.error}>Event not available</div>;

//   // ✅ Check if event is upcoming
//   const today = new Date();
//   const eventDate = eventDetail.date ? new Date(eventDetail.date) : null;
//   const isUpcoming = eventDate && eventDate >= today;

//   return (
//     <div className={styles.eventDetails}>
//       {/* Images with curved wrapper */}
//       <div className={styles.curvedWrapper}>
//         <svg className={styles.curveTop} viewBox="0 0 500 50" preserveAspectRatio="none">
//           <path d="M0,0 Q250,80 500,0" stroke="none" strokeWidth="2" fill="white" />
//         </svg>

//         <div className={styles.imageScroll}>
//           {eventDetail.imageScroll?.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Event ${index + 1}`}
//               className={styles.imageItem}
//               onError={(e) => (e.target.src = '/placeholder.jpg')}
//             />
//           ))}
//         </div>

//         <svg className={styles.curveBottom} viewBox="0 0 500 50" preserveAspectRatio="none">
//           <path d="M0,80 Q250,0 500,80" stroke="none" strokeWidth="2" fill="white" />
//         </svg>
//       </div>

//       {/* Event info */}
//       <div className={styles.timeContent}>
//         {eventDetail.eventInfo?.map((info, index) => (
//           <div key={index} className={styles.eventInfo}>
//             <p><strong>Date:</strong> {info.Date}</p>
//             <p><strong>Time:</strong> {info.Time}</p>
//             <p><strong>Location:</strong> {info.Location}</p>
//             <p><strong>Organizers:</strong> {info.Organizers}</p>
//           </div>
//         ))}
//       </div>

//       {/* Event content */}
//       <div className={styles.eventContent}>
//         <h1 className={styles.eventName}>{eventDetail.heading}</h1>
//         <h2 className={styles.title}>{eventDetail.title}</h2>
//         <p className={styles.description}>{eventDetail.description}</p>
//       </div>

//       {/* ✅ Only show for upcoming events */}
//       {isUpcoming && (
//         <>
//           {/* Event Highlights / Schedule */}
//           <div className={styles.scheduleSection}>
//             <h3>Event Highlights / Schedule</h3>
//             <ul>
//               {eventDetail.schedule.map((item, index) => (
//                 <li key={index}>
//                   <strong>{item.time}</strong> – {item.activity}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Tags / Event Type */}
//           <div className={styles.tagsSection}>
//             <h3>Event Type</h3>
//             <div className={styles.tags}>
//               {(eventDetail.tags && eventDetail.tags.length > 0
//                 ? eventDetail.tags
//                 : ["Wedding", "Reception"]
//               ).map((tag, index) => (
//                 <span key={index} className={styles.tag}>{tag}</span>
//               ))}
//             </div>
//           </div>

//           {/* Social Sharing */}
//           <div className={styles.socialShare}>
//             <h3>Share this event</h3>
//             <div className={styles.socialIcons}>
//               <a
//                 href={`https://wa.me/?text=Check out this event: ${eventDetail.link}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaWhatsapp />
//               </a>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default EventDetail;



import { useState, useEffect } from "react";
import styles from "./EventDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";

const EventDetail = () => {
  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!id) return;

      const dummySchedule = [
        { time: "10:00 AM", activity: "Welcome drinks" },
        { time: "11:00 AM", activity: "Ceremony starts" },
        { time: "01:00 PM", activity: "Lunch / Catering" },
        { time: "03:00 PM", activity: "Games / Entertainment" },
        { time: "05:00 PM", activity: "Closing ceremony" },
      ];

      try {
        const response = await axios.get(`https://drushti-website-backend-1.onrender.com/api/event/${id}`);
        const eventData = { ...response.data };

        // ✅ Ensure schedule exists
        if (!eventData.schedule) eventData.schedule = dummySchedule;

        // ✅ Normalize date format
        if (eventData.date) {
          eventData.date = new Date(eventData.date);
        } else if (eventData.eventInfo && eventData.eventInfo[0]?.Date) {
          eventData.date = new Date(eventData.eventInfo[0].Date);
        }

        setEventDetail(eventData);
      } catch (err) {
        console.error("Error fetching event:", err);
        setError(err.response?.data?.message || "Event not found");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <div className={styles.loading}>Loading event details...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!eventDetail) return <div className={styles.error}>Event not available</div>;

  // ✅ Determine if event is upcoming
  const today = new Date();
  const eventDate = eventDetail.date instanceof Date && !isNaN(eventDetail.date)
    ? eventDetail.date
    : null;
  const isUpcoming = eventDate ? eventDate >= today : false;

  return (
    <div className={styles.eventDetails}>
      {/* Images Section with Curves */}
      <div className={styles.curvedWrapper}>
        <svg className={styles.curveTop} viewBox="0 0 500 50" preserveAspectRatio="none">
          <path d="M0,0 Q250,80 500,0" fill="white" />
        </svg>

        <div className={styles.imageScroll}>
          {eventDetail.imageScroll?.length > 0 ? (
            eventDetail.imageScroll.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Event ${index + 1}`}
                className={styles.imageItem}
                onError={(e) => (e.target.src = "/placeholder.jpg")}
              />
            ))
          ) : (
            <img
              src="/placeholder.jpg"
              alt="Event"
              className={styles.imageItem}
            />
          )}
        </div>

        <svg className={styles.curveBottom} viewBox="0 0 500 50" preserveAspectRatio="none">
          <path d="M0,80 Q250,0 500,80" fill="white" />
        </svg>
      </div>

      {/* Event Info Section */}
      <div className={styles.timeContent}>
        {eventDetail.eventInfo?.map((info, index) => (
          <div key={index} className={styles.eventInfo}>
            <p><strong>Date:</strong> {info.Date}</p>
            <p><strong>Time:</strong> {info.Time}</p>
            <p><strong>Location:</strong> {info.Location}</p>
            <p><strong>Organizers:</strong> {info.Organizers}</p>
          </div>
        ))}
      </div>

      {/* Event Content Section */}
      <div className={styles.eventContent}>
        <h1 className={styles.eventName}>{eventDetail.heading}</h1>
        <h2 className={styles.title}>{eventDetail.title}</h2>

        {/* ✅ Fixed description rendering */}
        <p className={styles.description}>
          {eventDetail.description || eventDetail.subHeading || "No description available."}
        </p>
      </div>

      {/* ✅ Upcoming Event Details */}
      {isUpcoming && (
        <>
          <div className={styles.scheduleSection}>
            <h3>Event Highlights / Schedule</h3>
            <ul>
              {eventDetail.schedule.map((item, index) => (
                <li key={index}>
                  <strong>{item.time}</strong> – {item.activity}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.tagsSection}>
            <h3>Event Type</h3>
            <div className={styles.tags}>
              {(eventDetail.tags && eventDetail.tags.length > 0
                ? eventDetail.tags
                : [eventDetail.heading || "Event"]
              ).map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className={styles.socialShare}>
            <h3>Share this event</h3>
            <div className={styles.socialIcons}>
              <a
                href={`https://wa.me/?text=Check out this event: ${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EventDetail;
