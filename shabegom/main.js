(() => {
  roam42.shabegom = {};

  roam42.shabegom.helloWorld = () => 'hello world';
  roam42.loader.addScriptToPage(
    'randomWord',
    `${roam42.host}shabegom/randomWord.js`,
  );
})();
