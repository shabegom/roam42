// data fetching functions
(() => {
  roam42.shabegom.fetchReadwise = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/readwise")
      .then(res => res.json())
      .catch(e => {
        alert(e);
      });

  roam42.shabegom.horoscope = async () =>
    await fetch(`https://shabegom-roam-helpers.glitch.me/horoscope`).then(res =>
      res.json()
    );

  roam42.shabegom.shakespeare = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/shakespeare").then(
      res => res.json()
    );

  roam42.shabegom.stoic = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/stoic")
      .then(r => r.json())
      .catch(e => `There was an error... ${e}`);

  roam42.shabegom.religion = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/religion").then(res =>
      res.json()
    );

  roam42.shabegom.randomWiki = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/random-wiki").then(
      res => res.json()
    );

  roam42.shabegom.poem = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/poem")
      .then(r => r.json())
      .catch(e => alert(e));

  roam42.shabegom.quote = async (type, searchTerm) =>
    await fetch(
      `https://shabegom-roam-helpers.glitch.me/quote/?type=${type}&searchTerm=${searchTerm}`
    ).then(res => res.json());

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
