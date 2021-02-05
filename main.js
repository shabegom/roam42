const addElementToPage = (element, tagId, typeT) => {
  try {
    document.getElementById(tagId).remove();
  } catch (e) {} //Delete any existing reference
  Object.assign(element, { type: typeT, async: false, tagId: tagId });
  document.getElementsByTagName("head")[0].appendChild(element);
};

const addScriptToPage = (tagId, script) => {
  addElementToPage(
    Object.assign(document.createElement("script"), { src: script }),
    tagId,
    "text/javascript"
  );
};
(async () => {
  window.shabegom = {};

  addScriptToPage("shabegom", `https://shabegom42.glitch.me/shabegom/main.js`);
  addScriptToPage("utils", `https://shabegom42.glitch.me/shabegom/utils.js`);
  addScriptToPage(
    "randomWord",
    `https://shabegom42.glitch.me/shabegom/randomWord.js`
  );
  addScriptToPage(
    "dataFetching",
    `https://shabegom42.glitch.me/shabegom/dataFetching.js`
  );
  addScriptToPage(
    "morning",
    `https://shabegom42.glitch.me/shabegom/morning.js`
  );
})();
