$(function() {
  $(".audio-span").each(function(i, span) {
    var $el = $(span);
    $el.find(".sep-title")
      .addClass("webaudio")
      .prepend("<i class='fa fa-play'></i>")
      .prepend("<span class='progress'></span>");

    var $audio = $el.find("audio");
    $audio.hide();

    var playing = false;
    var interval = null;
    var toggle = function() {
      playing = !playing;
      $audio.trigger(playing ? "play" : "pause");
      $el.find("i").toggleClass("fa-play").toggleClass("fa-pause");
      if (!playing) {
        clearInterval(interval);
        $audio.prop("currentTime", 0);
      } else {
        interval = setInterval(function() {
          if ($audio.prop("ended")) {
            toggle();
          }
        }, 0);
      }
    };

    $el.on("click", toggle);
  });

  $(".fourloops-strongs strong").on("click", function() {
    var $iframe = $("iframe.embed");
    $iframe.attr("src", $iframe.attr("src").split("#")[0] + "#" + $(this).text());
  });

  $("a.footnote").on("click", function() {
    var $foot = $($(this).attr("href"));
    $foot.css("backgroundColor", "lightyellow");
    setTimeout(function() {
      $foot.css("backgroundColor", "white");
    }, 2000);
  });

  if (window["hljs"]) {
    hljs.initHighlightingOnLoad();
    $("figure img").each(function() {
      $(this).wrap($("<a/>").addClass("mag-worthy").attr("href", $(this).attr("src")));
    });
    $(".mag-worthy").magnificPopup({type:'image'});
  }
});