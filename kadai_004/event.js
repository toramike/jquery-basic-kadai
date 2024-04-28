$(window).on({
  // ロードされた時
  load: () => {
    console.log("loadイベントが発生しました");
  },
  // スクロールされた時
  scroll: () => {
    console.log("scrollイベントが発生しました");
  },
});
