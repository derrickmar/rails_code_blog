(function($, window, document) {
    $(window).load(function() {
        tips.onReady($('.question'));
        var sidebar = new Sidebar($('.sidebar'))
        sidebar.onReady();
        causesHover.onReady();
    });

    var causesHover = {
        onReady: function() {
            causesHover.fadeInOutTitle($('.posts-holder'))
            .hoverDirectionAware($('.da-thumbs-2 > li'))
        },
        fadeInOutTitle: function(el) {
                // hover functionality but using event delegation strategy
                // event handler only attached to causes-holder
                // event bubbling means you can add extra li's dynamically and funciton will still work
                el.on('mouseenter', 'li', function() {
                    // TODO - setTimeout to 100 as in hoverDelay
                    $(this).find('.all-causes-title').fadeOut(250);
                }).on('mouseleave', 'li', function() {
                    $(this).find('.all-causes-title').fadeIn(250); // repetition!!
                });
                return causesHover;
            },
            hoverDirectionAware: function(el) {
                el.each(function() {
                    $(this).hoverdir({
                        speed: 300,
                        hoverDelay: 100
                    });
                });
                return causesHover;
            }
        }

        var tips = {
            onReady: function(box) {
                box.on("click", function() {
                    $(this).siblings('.box-description').toggleClass('hidden');
                    var arrow = $(this).find('.expanding-arrow');
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
            $window = $(window);
            var slideDownCurr;

            this.onReady = function() {

                var sections = $('.content-box').children('h1, h2, h4');
                var sidebar_sections = sidebar.find("a");

                for (i = 0; i < sections.length; i++) {
                    var distance = $(sections[i]).offset().top;
                    distances[distance] = $(sections[i]);
                }

                distances_keys = Object.keys(distances).sort(function(a, b){return a - b});
            // sort distances_keys?

            $(sidebar_sections).on("click", function() {
                obj.changeSelected($(this));
            });


            $window.scroll(function() {
                var scrollTop = $window.scrollTop();
                var pos = obj.returnPosition(scrollTop)
                    var name = "#" + $(distances[pos][0]).children("a").attr("name");
                // if ($('a[href=' + name + ']'))
                var sidebar_tab = $('a[href=' + name + ']');
                if (!sidebar_tab.hasClass('selected')) {
                    obj.changeSelected($('a[href=' + name + ']'));
                }
            })
        };

        /* Changes the selected sidebar tab based on the positiion of blog
        headers. Also slides down nested-two if it is in that section */
        this.changeSelected = function(el) {
            if (slideDownCurr != undefined) {
                obj.checkSlideUp(el);
            }
            var parent = el.parent();
            var siblHasClassNestedTwo = el.siblings('.nested-two');
            if (parent.hasClass('nested-two') && parent.css('display') == "none") {
                parent.slideDown();
                slideDownCurr = parent.parent();
                slideDownCurr.addClass('nested-two-focused');
                // might error out if siblNestedTwo has not elements
            } else if (siblHasClassNestedTwo.length == 1 && $(siblHasClassNestedTwo[0]).css('display') == "none") {
                var nestedTwo = $(siblHasClassNestedTwo[0])
                nestedTwo.slideDown();
                slideDownCurr = nestedTwo.parent(); // .nested-two-container
                slideDownCurr.addClass('nested-two-focused');
            }
            sidebar.find('.selected').removeClass('selected');
            el.addClass('selected');
        };

        /* Checks if the nested-two div must slide up if you are in a different
        section */
        this.checkSlideUp = function(el) {
            if (!$.contains(slideDownCurr[0], el[0])) {
                slideDownCurr.removeClass('nested-two-focused');
                slideDownCurr.find('.nested-two').slideUp();
            }
        };

        this.returnPosition = function(scrollTop) {
            for (i = 0; i < distances_keys.length; i++) {
                if (distances_keys[i] > scrollTop + header_height + 15) {
                    var position = Math.max(i - 1, 0)
                        return distances_keys[position]
                    }
                }
                return distances_keys[distances_keys.length - 1];
            }
        }

}(window.jQuery, window, document)); // The global jQuery object is passed as a parameter


// var list = $("ul#longlist");
// list.on("mouseenter", "li", function(){
//   $(this).text("Click me!");
// });

// list.on("click", "li", function() {
//   $(this).text("Why did you click me?!");
// });
