
(() => {};)

if (typeof window.roam42 == "undefined") {

    setTimeout(() => {
    // Load in custom Shabegom Stuff
    roam42.loader.addScriptToPage("shabegom", `https://shabegom42.glitch.me/shabegom/main.js`);
    roam42.loader.addScriptToPage("utils", `https://shabegom42.glitch.me/shabegom/utils.js`);
    roam42.loader.addScriptToPage(
      "randomWord",
      `https://shabegom42.glitch.me/shabegom/randomWord.js`
    );
    roam42.loader.addScriptToPage(
      "dataFetching",
      `https://shabegom42.glitch.me/shabegom/dataFetching.js`
    );
    roam42.loader.addScriptToPage(
      "morning",
      `https://shabegom42.glitch.me/shabegom/morning.js`
    );
    }, 2000)

} else {
    roam42.loader.addScriptToPage("shabegom", `https://shabegom42.glitch.me/shabegom/main.js`);
    roam42.loader.addScriptToPage("utils", `https://shabegom42.glitch.me/shabegom/utils.js`);
    roam42.loader.addScriptToPage(
      "randomWord",
      `https://shabegom42.glitch.me/shabegom/randomWord.js`
    );
    roam42.loader.addScriptToPage(
      "dataFetching",
      `https://shabegom42.glitch.me/shabegom/dataFetching.js`
    );
    roam42.loader.addScriptToPage(
      "morning",
      `https://shabegom42.glitch.me/shabegom/morning.js`
    );

}
