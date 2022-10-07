import React, { useEffect, useState } from 'react';
import Text from '../UI/Text';

const formatDate = (date) => {
  return Intl.DateTimeFormat('en-US', { hourCycle: 'h24' }).format(date);
};
const formatTime = (time) => {
  return time.toLocaleTimeString('en-US', {
    hourCycle: 'h24',
  });
};
const init = {
  time: formatTime(new Date()),
  date: formatDate(new Date()),
};
const DateTime = () => {
  const [time, setTime] = useState(init.time);
  const [date, setDate] = useState(init.date);

  const updateDateTime = () => {
    const now = new Date();
    setTime(formatTime(now));
    setDate(formatDate(now));
  };

  useEffect(() => {
    setInterval(updateDateTime, 1000);
  }, []);
  return (
    <div>
      <Text size="md" mode="dark">
        {date}
      </Text>
      <Text size="lg" mode="dark">
        {time}
      </Text>
    </div>
  );
};

export default DateTime;
