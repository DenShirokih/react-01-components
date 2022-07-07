import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from "helper"
import { Card,EventName,EventInfo,Chip } from './Event.styled';



export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <Card >
      <EventName>{name}</EventName>
      <EventInfo >
        <FaMapMarkerAlt/>
        {location}
      </EventInfo>
      <EventInfo >
        <FaUserAlt/>
        {speaker}
      </EventInfo>
      <EventInfo>
        <FaCalendarAlt/>
        {formattedStart}
      </EventInfo>
      <EventInfo>
        <FaClock/>
        {duration}
      </EventInfo>
      <Chip type={type}>{type}</Chip>
    </Card>
  );
};

// className={`${css.chip} ${css[type]}`}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};