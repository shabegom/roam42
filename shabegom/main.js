/* roam42 */

async function multiSection(title, array) {
  await header(title);
  array.forEach(async block => {
    await roam42.smartBlocks.activeWorkflow.outputAdditionalBlock(block);
  });
  await unTab();
}

async function bibleVerses(block) {
  await multiSection(block[0].title, [
    block[0].original,
    block[0].verse,
    block[0].meta
  ]);
  await multiSection(block[1].title, [
    block[1].original,
    block[1].verse,
    block[1].meta
  ]);
  await multiSection(block[2].title, [
    block[2].original,
    block[2].verse,
    block[2].meta
  ]);
}

async function section(title, block) {
  await header(title);
  await roam42.smartBlocks.activeWorkflow.outputAdditionalBlock(block);
  await unTab();
}

async function tab() {
  await roam42.smartBlocks.activeWorkflow.outputAdditionalBlock("");
  await roam42.smartBlocks.outputArrayWrite();
  await roam42KeyboardLib.pressTab();
}

async function unTab() {
  await roam42.smartBlocks.activeWorkflow.outputAdditionalBlock("");
  await roam42.smartBlocks.outputArrayWrite();
  await roam42KeyboardLib.pressShiftTab();
}

async function header(title) {
  await roam42.smartBlocks.activeWorkflow.outputAdditionalBlock(title);
  await roam42.smartBlocks.activeWorkflow.outputAdditionalBlock("");
  await roam42.smartBlocks.outputArrayWrite();
  await roam42KeyboardLib.pressTab();
}

(() => {
  roam42.shabegom = {};
  roam42.shabegom.header = header;
  roam42.shabegom.section = section;
  roam42.shabegom.multiSection = multiSection;
  roam42.shabegom.tab = tab;
  roam42.shabegom.unTab = unTab;
  roam42.shabegom.bibleVerses = bibleVerses;
})();
