// utils/notifications.js
export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  const permission = await Notification.requestPermission();
  return permission === 'granted';
}

export function showNotification(title, options) {
  if (Notification.permission === 'granted') {
    new Notification(title, options);
  }
}