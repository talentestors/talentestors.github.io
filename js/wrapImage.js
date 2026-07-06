$(document).ready(function () {
  if (window.location.pathname === "/") {
    return; // 如果是首页，则不运行这段代码
  }

  $("article img")
    .not("#gitalk-container img")
    .not(".links img")
    .each(function () {
      if ($(this).parent().hasClass("fancybox")) return;
      if ($(this).hasClass("nofancybox")) return;
      if ($(this).hasClass("is-fancybox")) return; // 检查是否已经处理过

      var alt = this.alt || "yuhiri"; // 如果 alt 为空，则默认为 'yuhiri'
      var imgSrc = $(this).attr("src");
      var dataSrc = $(this).attr("data-src") || imgSrc;
      // 处理 alt 内容
      var fancybox = alt;
      var caption = alt;
      if (alt.includes("-")) {
        var parts = alt.split("-");
        fancybox = parts[0];
        caption = parts[1];
      }
      var fancyboxLink = `<a data-fancybox="${fancybox}" data-caption="${caption}" href="${dataSrc}">
                          <img src="${imgSrc}" alt="${alt}" class="is-fancybox"/>
                        </a>`;
      $(this).replaceWith(fancyboxLink);
    });

  $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']")
    .attr("rel", "gallery")
    .fancybox({
      helpers: {
        title: { type: "inside" },
      },
    });
});
