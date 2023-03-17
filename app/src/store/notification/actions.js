export const NOTIFICATION_ADD = 'notification/NOTIFICATION_ADD';
export const NOTIFICATION_HIDDEN = 'notification/NOTIFICATION_HIDDEN';

export function setNotification(text) {
  return {type: NOTIFICATION_ADD, data: text}
}
export function setNotificationHidden() {
  return {type: NOTIFICATION_HIDDEN}
}
