// data fetching functions
(() => {
  shabegom.fetchReadwise = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/readwise")
      .then(res => res.json())
      .catch(e => {
        alert(e);
      });

  shabegom.horoscope = async () =>
    await fetch(`https://shabegom-roam-helpers.glitch.me/horoscope`).then(res =>
      res.json()
    );

  shabegom.pattern = async () =>
    await fetch(`https://shabegom-roam-helpers.glitch.me/pattern`).then(res =>
      res.json()
    );

  shabegom.shakespeare = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/shakespeare").then(
      res => res.json()
    );

  shabegom.stoic = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/stoic")
      .then(r => r.json())
      .catch(e => `There was an error... ${e}`);

  shabegom.religion = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/religion").then(res =>
      res.json()
    );

  shabegom.randomWiki = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/random-wiki").then(
      res => res.json()
    );

  shabegom.poem = async () =>
    await fetch("https://shabegom-roam-helpers.glitch.me/poem")
      .then(r => r.json())
      .catch(e => alert(e));

  shabegom.quote = async (type, searchTerm) =>
    await fetch(
      `https://shabegom-roam-helpers.glitch.me/quote/?type=${type}&searchTerm=${searchTerm}`
    ).then(res => res.json());

  shabegom.pinboard = async (num = 1) =>
    await fetch(
      `https://shabegom-roam-helpers.glitch.me/pinboard/?num=${num}`
    ).then(res => res.json());

  shabegom.getMoon = async () => {
    const moon = await fetch(
      "https://shabegom-roam-helpers.glitch.me/moon"
    ).then(res => res.json());
    return { url: `{{iframe:${moon.url}}}`, phase: `**${moon.phase}**` };
  };

  shabegom.getArticle = async url =>
    await fetch(
      `https://shabegom-roam-helpers.glitch.me/article?url=${url}`
    ).then(res => res.json());

  shabegom.roamcult = async id =>
    await fetch(
      `https://shabegom-roam-helpers.glitch.me/roamcult?id=${id}`
    ).then(res => res.json());
})();
