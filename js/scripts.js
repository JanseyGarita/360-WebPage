document.addEventListener("DOMContentLoaded", function() {
  M.AutoInit();
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".scrollspy");
  var instances = M.ScrollSpy.init(elems, {
    scrollOffset: 70
  });
});
let ultimo = 1;
$(document).on("click", ".btn", function() {
  console.log(ultimo);
  let id = $(this).attr("id");
  $("#producto" + ultimo).removeClass("active");
  $("#producto" + ultimo).toggleClass("inactive");
  $("#producto" + id).toggleClass("active");
  $("#producto" + id).removeClass("inactive");
  ultimo = id;
});
/*
$(document).ready(function() {
  $("#producto1").vc3dEye({ // Hay que cambiarlo por los nombres de nuestros div
    imagePath: "images/", // the location where you’ve put the images.
    totalImages: 51, // the number of images you have.
    imageExtension: "png" // the extension of the images. Make sure all the images have same extension.
  });
});*/
