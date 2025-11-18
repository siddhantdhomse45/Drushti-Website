
import  { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './EventList.module.css';
import EventCard from '../eventCard/EventCard'

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/event');
        let eventData = Array.isArray(response.data) ? response.data : [];
        setEvents(eventData);
      } catch (err) {
        const errorMessage =
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          'Failed to load events';
        console.error('Error fetching events:', err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div className={styles.loading}>Loading events...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      {/* Pass the full events array into EventCard */}
      <EventCard events={events} />
    </div>
  );
};

export default EventList;
