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
      `https://shabegom-roam-helpers.glitch.me/pinboard/?num=${num}`
    ).then(res => res.json());

  roam42.shabegom.getMoon = async () => {
    const moon = await fetch(
      "https://shabegom-roam-helpers.glitch.me/moon"
    ).then(res => res.json());
    return { url: `{{iframe:${moon.url}}}`, phase: `**${moon.phase}**` };
  };

  roam42.shabegom.getArticle = async url =>
    await fetch(
      `https://shaebgom-roam-helpers.glitch.me/article?url=${url}`
    ).then(res => res.json());
})();
