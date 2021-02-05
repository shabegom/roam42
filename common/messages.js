/*   globals roam42, iziToast, getRoamNavigator_IsEnabled, logo2HC,
     getRoamLivePreviewState, getAutoComplete_IsEnabled
*/

// roam42.help
(() => {
  roam42.help = {};
  roam42.help.displayMessage = (sMessage, delayTime) => {
    iziToast.show({
      message: sMessage,
      theme: "dark",
      progressBar: true,
      animateInside: true,
      close: false,
      timeout: delayTime,
      closeOnClick: true,
      maxWidth: "300px",
      displayMode: 2
    });
  };
})();
