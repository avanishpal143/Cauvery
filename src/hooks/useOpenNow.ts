import { useState, useEffect } from 'react';

export interface OpenStatus {
  isOpen: boolean;
  statusText: string;
  nextChange: string;
  currentTimeString: string;
}

export function useOpenNow(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>({
    isOpen: true,
    statusText: 'Open Now',
    nextChange: 'Closes at 11:00 PM',
    currentTimeString: ''
  });

  useEffect(() => {
    function calculateStatus() {
      // Calculate IST time (UTC + 5:30)
      const now = new Date();
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istDate = new Date(utcTime + (3600000 * 5.5));
      
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const currentMinuteOfDay = hours * 60 + minutes;

      const openMinute = 7 * 60; // 7:00 AM
      const closeMinute = 23 * 60; // 11:00 PM

      const isOpen = currentMinuteOfDay >= openMinute && currentMinuteOfDay < closeMinute;

      const timeFormatter = new Intl.DateTimeFormat('en-IN', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      });

      const currentTimeString = timeFormatter.format(now);

      setStatus({
        isOpen,
        statusText: isOpen ? 'Open Now' : 'Closed for the Night',
        nextChange: isOpen ? 'Open till 11:00 PM' : 'Opens tomorrow at 7:00 AM',
        currentTimeString
      });
    }

    calculateStatus();
    const interval = setInterval(calculateStatus, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, []);

  return status;
}
