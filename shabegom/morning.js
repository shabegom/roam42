(() => {
  // MY MORNING PAGES
  roam42.shabegom.morning = async () => {
    // Data Fetching
    await roam42.help.displayMessage("Fetching Data", 2000);
    const readwise = await roam42.shabegom.fetchReadwise();
    const horoscope = await roam42.shabegom.horoscope();
    const shakespeare = await roam42.shabegom.shakespeare();
    const stoic = await roam42.shabegom.stoic();
    const religion = await roam42.shabegom.religion();
    const wiki = await roam42.shabegom.randomWiki();
    const poem = await roam42.shabegom.poem();
    const buddha = await roam42.shabegom.quote("author", "gautama+buddha");
    const quote = await roam42.shabegom.quote("title", roam42.shabegom.word());
    const pinboard = await roam42.shabegom.pinboard(1);
    const moon = await roam42.shabegom.getMoon();
    const untetheredQuote = await roam42.common.getRandomBlockFromPage(
      "The Untethered Soul"
    );
    await roam42.help.displayMessage("Data Fetch Complete", 2000);

    // Readwise Output
    await roam42.shabegom.multiSection("#Readwise", readwise);

    // Moon
    await roam42.shabegom.section("Moon 🌝", moon);

    // Horoscope
    await roam42.shabegom.multiSection("#Horoscope 🐐", [
      `> ${horoscope.summary}`,
      `**Do:** ${horoscope.todo.join(", ")}`
    ]);
    // Shakespeare
    await roam42.shabegom.section("#Shakespeare", shakespeare);

    // Quotes Start
    await roam42.shabegom.multiSection("#Quotes", [
      `> ((${untetheredQuote}))\n - [[Michael Singer]]`,
      stoic,
      `> ${buddha.quote} \n ${buddha.source} `,
      `> ${quote.quote} \n ${quote.source} `
    ]);

    // Religion
    await roam42.shabegom.bibleVerses(religion);

    // Wiki
    if (wiki.thumbnail) {
      await roam42.shabegom.multiSection(wiki.title, [
        wiki.thumbnail,
        wiki.excerpt,
        wiki.url
      ]);
    } else {
      await roam42.shabegom.multiSection(wiki.title, [wiki.excerpt, wiki.url]);
    }

    // Poem
    await roam42.shabegom.section(poem.title, poem.poemContent);

    // Read Later Link
    const ref = await roam42.smartBlocks.getRandomBlocksMention("readlater");
    const page = await roam42.common.getPageNamesFromBlockUidList([ref]);
    await roam42.shabegom.section("Read Me!", `[[${page[0][1].title}]]`);

    // Pinboard
    await roam42.shabegom.header("#pinboard");
    await roam42.smartBlocks.activeWorkflow.outputAdditionalBlock(
      pinboard[0].page
    );
    await roam42.smartBlocks.outputArrayWrite();
    await roam42.common.sleep(1000);
    // Indent the block below
    await roam42.common.navigateUiTo(pinboard[0].rawPage);
    await roam42.common.sleep(1000);
    await roam42.common.simulateMouseClick(
      document.getElementById("block-input-ghost")
    );
    await roam42.common.sleep(1000);
    await roam42.smartBlocks.activeWorkflow.outputAdditionalBlock(
      pinboard[0].link
    );
    await roam42.smartBlocks.outputArrayWrite();
    await roam42.common.sleep(1000);
    await roam42KeyboardLib.pressEsc();
    await history.go(-1);
  };
})();
