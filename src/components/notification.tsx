import React, { useEffect, useState } from 'react';

interface notificationProps {
  message: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  duration?: number;
}

export default function Notification({ message, duration = 3000, setShow }: notificationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setShow(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="flex top-20 right-4 w-64 p-4 bg-blue-500 text-white rounded shadow-lg transition-opacity duration-300 ease-in-out">
      {message}
    </div>
  );
}
