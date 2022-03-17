const notificationTypes = ['Email', 'Phone', 'Console']

export const progressNotification = (message: string, type: string): void => {
  if (!notificationTypes.includes(type)) {
    console.log('Invalid type');
    return;
  }

  console.log(`${type}: ${message}`);
};

progressNotification('oi', 'Email');