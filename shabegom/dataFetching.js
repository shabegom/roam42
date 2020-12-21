// data fetching functions
(() => {
  roam42.shabegom.fetchReadwise = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/readwise")
      .then(res => res.json())
      .then(data =>
        data.map(
          highlight =>
            `${highlight.text} ([[${highlight.author}]], [[${highlight.title}]])`
        )
      )
      .catch(e => {
        alert(e);
      });

  roam42.shabegom.horoscope = async () => {
    const sign = "taurus";
    return await fetch(
      `https://shbgm-cors.glitch.me/https://horoscope-api.herokuapp.com/horoscope/today/${sign}`
    )
      .then(res => res.json())
      .then(data => `> ${data.horoscope}`);
  };

  roam42.shabegom.shakespeare = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/shakespeare")
      .then(res => res.json())
      .then(
        data => `> ${data.quote} 
\t— [[${data.play}]]`
      );

  roam42.shabegom.stoic = async () =>
    await fetch(
      "https://shbgm-cors.glitch.me/" + "https://stoic-quotes.com/api/quote"
    )
      .then(r => r.json())
      .then(data => `> ${data.text} - [[${data.author}]]`)
      .catch(e => `There was an error... ${e}`);

  roam42.shabegom.religion = async () => {
    const date = formatDate();
    let json = await fetch(
      `https://shbgm-cors.glitch.me/https://devotionalium.com/api/v2/?date=${date}`
    ).then(res => res.json());
    let arr = [];
    for (i in json) {
      arr.push(json[i]);
    }
    let books = ["[[Torah]]", "[[Bible]]", "[[Quran]]"];
    return arr
      .map((item, i) => {
        if (item.book) {
          return {
            title: books[i],
            original: `${item.textOriginal}`,
            verse: `> ${item.text}`,
            meta: `#[[${item.book}]] #${item.chapter}:${item.startVerse}-${item.endVerse} #[[${item.version.name}]]`
          };
        }
      })
      .filter(el => el !== undefined);
  };

  roam42.shabegom.randomWiki = async () =>
    await fetch(
      "https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=0&origin=*&rnlimit=1"
    )
      .then(res => res.json())
      .then(data => data.query.random[0].title)
      .then(
        async title =>
          await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURI(
              title
            )}`
          ).then(res => res.json())
      );

  roam42.shabegom.poem = async () =>
    await fetch("https://www.poemist.com/api/v1/randompoems")
      .then(r => r.json())
      .catch(e => alert(e));

  roam42.shabegom.quote = async (type, searchTerm) => {
    const baseUrl = `https://goodquotesapi.herokuapp.com/${type}/${searchTerm}`;
    const quotes = await collectQuotes([], 1, 5, baseUrl);
    const quote = quotes[randomInteger(quotes.length - 1)];
    let source;
    if (quote.publication) {
      source = `- [[${quote.publication}]] – [[${quote.author}]]`;
    } else {
      source = `- [[${quote.author}]]`;
    }
    return { quote: quote.quote, source };
  };

  roam42.shabegom.pinboard = async (num = 1) =>
    await fetch(
      "https://shbgm-cors.glitch.me/https://api.pinboard.in/v1/posts/recent?auth_token=sbgood:ee4aaf2efcd6c712c5f4&count=1&format=json&toread=yes"
    )
      .then(res => res.json())
      .then(async data => {
        const readLink = `https://cors-anywhere.herokuapp.com/https://api.pinboard.in/v1/posts/add?url=${data.posts[0].href}&description=${data.posts[0].description}&auth_token=sbgood:ee4aaf2efcd6c712c5f4`;
        await fetch(readLink)
          .then(res => {
            roam42.help.displayMessage("Marked Read", 2000);
          })
          .catch(e => {
            roam42.help.displayMessage(`Error!${e}`, 2000);
          });
        const page = `[[${data.posts[0].description}]]`;
        const link = `[${data.posts[0].description}](${data.posts[0].href}) #readlater`;
        const rawPage = data.posts[0].description;
        return { page, link, rawPage };
      });

  roam42.shabegom.pbMarkRead = async () => {
    const link = `https://shbgm-cors.glitch.me/https://api.pinboard.in/v1/posts/add?url=${shabegom.pb.url}&description=${shabegom.pb.title}&auth_token=sbgood:ee4aaf2efcd6c712c5f4`;
    await fetch(link)
      .then(res => {
        roam42.help.displayMessage("Marked Read", 2000);
      })
      .catch(e => {
        roam42.help.displayMessage(`Error!${e}`, 2000);
      });
  };
  roam42.shabegom.getMoon = async () => {
    const url = await fetch(
      "https://shabegom-roam-helpers.glitch.me/moon"
    ).then(res => res.text());
    return `{{iframe:${url}}}`;
  };
})();
