const events = async (timeLength) => {
  if (timeLength < 1000) {
    timeLength = 1000;
  }
  return new Promise((reslove, reject) => {
    setTimeout(reslove, timeLength);
  });
}

export default events;