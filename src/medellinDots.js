console.log("I am running");

var main = function () {
    $('#QOL_Key_Descr').css('display', 'none');

    $('.dotsAndDescriptions g circle').click(function() {
        // $(this) element is the specific circle that was clicked, so we set it to a variable to use
        var clickedDot = $(this),
            // we set another variable for the next sibling to the dot (which is its info panel)
            description = clickedDot.next();
            // accesses the click-count attribute of the dot that was clicked and increments it by 1; the || 0 part tells
            // JS to still increment by 1 even if the click-count attribute is null (no clicks yet)
            clickCount = (clickedDot.data("click-count") || 0) + 1;

        // Sets the attribute click-count for the clicked dot to the count stored in clickCount (above)
        clickedDot.data("click-count", clickCount);

        $(clickedDot).css('r', '10.25');
        
        if (clickCount % 2 === 0) {
            $(clickedDot).css('r', '7.75');
            $(description).css('display', 'none');
        }
        else {
            $(clickedDot).css('r', '10.25');
            $(description).css('display', 'inline');
        }
        // console.log('Clicked dot is', this, 'Description is', description, 'Click Count is', clickCount);
    })

    $('.dotsAndDescriptions g circle').mouseenter(function() {
            var hoveredDot = $(this),
                description = hoveredDot.next(),
                // same as above, but does not increment by 1 because there is no click here. This is just to access the
                // click-count attribute for the dot that's being hovered over
                clickCount = (hoveredDot.data("click-count") || 0);
                console.log('Hovered In');

            // if there's been a down click but no up click, return false AKA don't allow hover functionality to work
            if (clickCount % 2 === 1) {
                return false;
            }

            $(hoveredDot).css('r', '10.25');
            $(description).css('display', 'inline');
        }) 
        
    $('.dotsAndDescriptions g circle').mouseleave(function() {
            var hoveredDot = $(this),
                description = hoveredDot.next(),
                clickCount = (hoveredDot.data("click-count") || 0);
                console.log('Hovered Out');
                console.log('Click count is: ', clickCount)

            if (clickCount % 2 === 1) {
                return false;
            }
            
            $(hoveredDot).css('r', '7.75');
            $(description).css('display', 'none');
        })

    $('#QOL_Key rect').hover(
        function() {
            $('#QOL_Key_Descr').css('display', 'inline');
        }, 
        function() {
            $('#QOL_Key_Descr').css('display', 'none');
        }
    )

    $('.closeButton').click(function() {
        $('.PopUp_Panel').fadeOut(300);
        $('.metrocableKDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
        $('.metrocableKDescription').fadeIn(275).css('display', 'inline');
    })

    $(document).bind('keydown', function(e) {
        if (e.which === 27) {
            $('.PopUp_Panel').fadeOut(300);
            $('.metrocableKDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.metrocableKDescription').fadeIn(275).css('display', 'inline');
        }
    })
};

$(document).ready(main);




