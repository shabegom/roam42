/* roam42 */

async function multiSection(title, array) {
  await header(title);
  array.forEach(async block => {
    await roam42.smartBlocks.activeWorkflow.outputAdditionalBlock(block);
  });
  await unTab();
}

async function bibleVerses(items) {
  items.forEach(async block => {
    await multiSection(block.title, [block.original, block.verse, block.meta]);
  });
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
