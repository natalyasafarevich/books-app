export const NOTIFICATION_ADD = 'notification/NOTIFICATION_ADD';
export const NOTIFICATION_REMOVE = 'notification/NOTIFICATION_REMOVE';


export function setNotificationAdd(text) {
  return {type: NOTIFICATION_ADD, data: text}
}

export function setNotificationRemove(text) {
    return {type: NOTIFICATION_REMOVE, data: text}
  }
