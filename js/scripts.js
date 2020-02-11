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
