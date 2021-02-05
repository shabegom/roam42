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
const collectQuotes = async (quotes, page, maxPages, baseUrl) => {
  if (page > maxPages) {
    return quotes;
  }
  const currentPage = `?page=${page}`;
  const response = await fetch(baseUrl + currentPage)
    .then((res) => res.json())
    .catch((e) => {
      throw error;
    });
  const newMaxPages = response.total_pages <= 5 ? response.total_pages : 5;
  const nextPage = response.current_page + 1;
  quotes = quotes.concat(response.quotes);
  return collectQuotes(quotes, nextPage, maxPages, baseUrl);
};

(() => {
  roam42.shabegom.formatDate = formatDate;
  roam42.shabegom.randomInteger = randomInteger;
  roam42.shabegom.collectQuotes = collectQuotes;
})();
