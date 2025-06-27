// pages/_app.js
import { useEffect } from 'react';
import { requestNotificationPermission } from '../utils/notifications';
import { initDB } from '../utils/db';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize DB and request notifications on app load
    initDB();
    requestNotificationPermission();
    
    // Register service worker
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;