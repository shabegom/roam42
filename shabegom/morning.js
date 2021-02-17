(() => {
  // MY MORNING PAGES
  shabegom.morning = async () => {
    // Data Fetching
    await roam42.help.displayMessage("Fetching Data", 2000);

    // Readwise Output
    try {
      const readwise = await shabegom.fetchReadwise();
      await roam42.help.displayMessage("Readwise Fetched", 2000);
      await shabegom.multiSection("#Readwise", readwise);
    } catch (e) {
      console.log("readwise failed");
    }

    // Moon
    try {
      const moon = await shabegom.getMoon();
      await shabegom.multiSection("Moon 🌝", [moon.phase, moon.url]);
    } catch (e) {
      console.log("moon failed");
    }

    // Horoscope
    try {
      const horoscope = await shabegom.horoscope();
      await roam42.help.displayMessage("Horoscope Fetched", 2000);
      await shabegom.multiSection("#Horoscope 🐐", [
        `> ${horoscope.summary}`,
        `**Do:** ${horoscope.todo.join(", ")}`
      ]);
    } catch (e) {
      console.log("horoscope failed");
    }
    try {
      const pattern = await shabegom.pattern();
      await roam42.help.displayMessage("Pattern Fetched", 2000);
      await shabegom.section("#Pattern", `> ${pattern.summary}`);
    } catch (e) {
      console.log("pattern failed");
    }
    // Shakespeare
    try {
      const shakespeare = await shabegom.shakespeare();
      await roam42.help.displayMessage("Shakespeare Fetched", 2000);
      await shabegom.section("#Shakespeare", shakespeare);
    } catch (e) {
      console.log("shakespeare failed");
    }

    // Quotes Start
    const untetheredQuote = await roam42.common.getRandomBlockFromPage(
      "The Untethered Soul"
    );
    await shabegom.section(
      "[[The Untethered Soul]]",
      `> ((${untetheredQuote}))\n - [[Michael Singer]]`
    );
    try {
      const stoic = await shabegom.stoic();
      await roam42.help.displayMessage("Stoic Fetched", 2000);
      await shabegom.section("Stoic", stoic);
    } catch (e) {
      console.log("stoic failed");
    }

    try {
      const buddha = await shabegom.quote("author", "gautama+buddha");
      await roam42.help.displayMessage("Buddha Fetched", 2000);
      await shabegom.section(
        "Buddha",
        `> ${buddha.quote} \n ${buddha.source} `
      );
    } catch (e) {
      console.log("buddha failed");
    }

    try {
      const quote = await shabegom.quote("title", shabegom.word());
      await roam42.help.displayMessage("Quote Fetched", 2000);
      await shabegom.section("Quote", `> ${quote.quote} \n ${quote.source} `);
    } catch (e) {
      console.log("random quote failed");
    }

    // Religion
    try {
      const religion = await shabegom.religion();
      await roam42.help.displayMessage("Religion Fetched", 2000);
      await shabegom.bibleVerses(religion);
    } catch (e) {
      console.log("religion failed");
    }

    // Wiki
    try {
      const wiki = await shabegom.randomWiki();
      await roam42.help.displayMessage("Wiki Fetched", 2000);
      if (wiki.thumbnail) {
        await shabegom.multiSection(wiki.title, [
          wiki.thumbnail,
          wiki.excerpt,
          wiki.url
        ]);
      } else {
        await shabegom.multiSection(wiki.title, [wiki.excerpt, wiki.url]);
      }
    } catch (e) {
      console.log("wiki failed");
    }

    // Poem
    try {
      const poem = await shabegom.poem();
      await roam42.help.displayMessage("Poem Fetched", 2000);
      await shabegom.section(poem.title, poem.poemContent);
    } catch (e) {
      console.log("poem failed");
    }

    // Read Later Link
    const ref = await roam42.smartBlocks.getRandomBlocksMention("readlater");
    const page = await roam42.common.getPageNamesFromBlockUidList([ref]);
    await shabegom.multiSection("Read Me!", [
      `[[${page[0][1].title}]]`,
      `{{next:42SmartBlock:Read Later}}`
    ]);

    // Pinboard
    try {
      const pinboard = await shabegom.pinboard(1);
      await roam42.help.displayMessage("Pinboard Fetched", 2000);
      await shabegom.header("#pinboard");
      await roam42.smartBlocks.activeWorkflow.outputAdditionalBlock(
        pinboard[0].page
      );
      await roam42.smartBlocks.activeWorkflow.outputAdditionalBlock(
        `{{next link:42SmartBlock:Latest Pinboard Link}}`
      );
      await roam42.smartBlocks.outputArrayWrite();
      await roam42.common.sleep(1000);
      // Indent the block below
      await roam42.common.navigateUiTo(pinboard[0].rawPage);
      await roam42.common.sleep(1000);
      if (document.getElementById("block-input-ghost")) {
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
        await roam42.common.sleep(1000);
        await history.go(-1);
      } else {
        await history.go(-1);
      }
    } catch (e) {
      console.log("pinboard failed");
    }
    await roam42.help.displayMessage("Data Fetch Complete", 2000);
  };
})();
