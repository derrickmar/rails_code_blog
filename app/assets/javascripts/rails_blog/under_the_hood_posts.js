(function($, window, document) {
  $("document").ready(function() {
      tips.onReady($('.question'));
      var sidebar = new Sidebar($('.sidebar'))
      sidebar.onReady();


      var tips = {
          onReady: function(box) {
              box.on("click", function() {
                  console.log('clicked question!');
                  $(this).siblings('.box-description').toggleClass('hidden');
                  var arrow = $(this).find('.expanding-arrow');
                  console.log(arrow);
                  if (arrow.hasClass('glyphicon-chevron-down')) {
                      arrow.removeClass('glyphicon-chevron-down');
                      arrow.addClass('glyphicon-chevron-up');
                  } else {
                      arrow.removeClass('glyphicon-chevron-up');
                      arrow.addClass('glyphicon-chevron-down');
                  }
              });
          }
      }

      function Sidebar(el) {
          var sidebar = el;
          var obj = this;
          var distances = {};
          var distances_keys;
          var header_height = 50;
          var initializeOnce = true;

          $window = $(window);

          this.onReady = function() {

              var sections = $('.content-box').children('h1, h2, h4');
              var sidebar_sections = sidebar.find("a");

              $(sidebar_sections).on("click", function() {
                  obj.changeSelected($(this));
              });


              $window.scroll(function() {
                  if (initializeOnce) {
                      obj.initializeDistances(sections);
                  }
                  var scrollTop = $window.scrollTop();
                  var pos = obj.returnPosition(scrollTop)
                      // console.log("position: ", pos);
                  var name = "#" + $(distances[pos][0]).children("a").attr("name");
                  // console.log($('a[href=' + name + ']'));
                  // if ($('a[href=' + name + ']'))
                  var sidebar_tab = $('a[href=' + name + ']');
                  if (!sidebar_tab.hasClass('selected')) {
                      console.log('scrollTop', scrollTop);
                      obj.changeSelected($('a[href=' + name + ']'));
                  }
              })
          };

          this.initializeDistances = function(sections) {
              initializeOnce = false;
              for (i = 0; i < sections.length; i++) {
                  var distance = $(sections[i]).offset().top;
                  console.log("distance", distance);
                  distances[distance] = $(sections[i]);
              }
              console.log(distances);
              distances_keys = Object.keys(distances);
              console.log(distances_keys);
          };

          this.changeSelected = function(el) {
              console.log('change selected!');
              sidebar.find('.selected').removeClass('selected');
              el.addClass('selected');
          };

          this.returnPosition = function(scrollTop) {
              for (i = 0; i < distances_keys.length; i++) {
                  if (distances_keys[i] > scrollTop + header_height + 10) {
                      var position = Math.max(i - 1, 0)
                          // console.log('position', position);
                      return distances_keys[position]
                  }
              }
              return distances_keys[distances_keys.length - 1];
          }
      }
  });

}(window.jQuery, window, document)); // The global jQuery object is passed as a parameter


// var list = $("ul#longlist");
// list.on("mouseenter", "li", function(){
//   $(this).text("Click me!");
// });

// list.on("click", "li", function() {
//   $(this).text("Why did you click me?!");
// });