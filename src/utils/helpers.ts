export const mostRecentMessage = (messages) => {
  const mappedArr = messages.map((obj) => {
    return { ...obj, createdAt: new Date(obj.createdAt) };
  });
  const sortedMessages = mappedArr.sort((a, b) => {
    return b.createdAt.getTime() - a.createdAt.getTime();
  });
  return sortedMessages[0];
};
