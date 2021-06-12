$(() => {
  const $slider = $(".slider");

  let timeout = null;
  $slider.on("mousemove scroll", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      $slider.css({"overflow-y": "hidden"});
      timeout = null;
    }, 1000);

    $slider.css({"overflow-y": "auto"});
  });
});