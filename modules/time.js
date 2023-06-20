const addTime = () => {
  // eslint-disable-next-line no-undef
  document.getElementById('date').innerHTML = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS);
};

export default addTime;