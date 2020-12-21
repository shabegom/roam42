// Utility Functions
function formatDate() {
  const d = new Date();
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
}

function randomInteger(max) {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

(() => {
  roam42.shabegom.formatDate = formatDate;
  roam42.shabegom.randomInteger = randomInteger;
})();
