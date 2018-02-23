const events = async (timeLength) => {
  if (timeLength < 1000) {
    timeLength = 1000;
  }
  await new Promise((reslove, reject) => {
    setTimeout(reslove, timeLength);
  });
}

export default events;