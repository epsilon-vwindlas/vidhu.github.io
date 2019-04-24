
var getMenuItem = function(data) {
  $.each(data, function(index, item) {
    var html = "";
    html += "<div class='sub-menu'><ul>";
    $.each(item, function(key, val) {
      html +=
        "<li><strong class='blue'>" + val["title"] + "</strong><span>" + val["sub-title"] + "</span></li>";
    });
    html += "<div>";
    html += "</ul>";
    $(".stripe-menu ul ."+index).append(html);
  });
  
};

var $menu = $(".test");
$.getJSON(
  "https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4",
  function(data) {
    // console.log(data); // this will show the info it in firebug console
    var data = data;
    getMenuItem(data);
  }
);
var $menu = $(".stripe-menu");
var $menubg = $(".menubg", $menu);
var $footerbg = $(".footerbg", $menu);
var fadeOut;
$("> ul > li", $menu)
  .on("mouseover", function() {
    //console.log("tets");
    clearTimeout(fadeOut);
    var menubox = $(".sub-menu", this)
      .get(0)
      .getBoundingClientRect();
    $menubg.css({
      opacity: 1,
      transform: "translateY(0)",
      top: menubox.top + "px",
      left: menubox.left + "px",
      width: menubox.width + "px",
      height: menubox.height + "px"
    });
    var footerbox = $(".footer", this)
      .get(0)
      .getBoundingClientRect();
    $footerbg.css({
      opacity: 1,
      transform: "translateY(0)",
      top: footerbox.top + "px",
      left: footerbox.left + "px",
      width: footerbox.width + "px",
      height: footerbox.height + "px"
    });
  })
  .on("mouseout", function() {
    fadeOut = setTimeout(function() {
      $menubg.css({
        opacity: 0,
        transform: "translateY(-10px)"
      });
      $footerbg.css({
        opacity: 0,
        transform: "translateY(-10px)"
      });
    }, 200);
  });
