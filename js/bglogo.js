  $(document).ready(function() {
    var videobackground = new $.backgroundVideo($('.header'), {
      "align": "centerXY",
      "width": 1280,
      "height": 720,
      "path": "video/",
      "filename": "shutterstock",
      "types": ["mp4","ogg","webm"],
      "preload": true,
      "autoplay": true,
      "loop": true,
    });
  });