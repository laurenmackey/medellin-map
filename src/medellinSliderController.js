var MedellinSliderController = (function(d3) {
    var my = {},
        places = null,
        neighborhoods = null,
        placeIndex = 0,
        highlightedPlace = null;

    my.init = function () {
        // hides all dots and names
        sites = d3.selectAll('svg #Dots, circle, #infoPanels, g')
            .style('visibility', 'hidden');

        // hides all neighborhood colorings
        neighborhoods = d3.selectAll('svg #Neighborhood_Outlines, g')
            .style('visibility', 'hidden');

        // extrapolates all variables from the full data.js file and sets them equal to vars to be
        // used in this js file
        places = PLACES;
        for (var i = 0; i < places.length; i++) {
            places[i].startDate = new Date(places[i].startDate);
            places[i].endDate = new Date(places[i].endDate);
            places[i].site = d3.selectAll(places[i].id);
            if (places[i].incomingLines) {
                for (var j = 0; j < places[i].incomingLines.length; j++) {
                    places[i].incomingLines[j] = d3.selectAll(places[i].incomingLines[j]);
                }
            }
        }

        console.log('sliderController:: init: places', places, 'neighborhoods', neighborhoods);
    }

    // toggleHighlight either highlights or removes a highlight from a place
    // Inputs: place object, and bool (true | false)
    // ToDo: add additional code to add and delete additional info panel (transport icon and 
    // info about place)

    function toggleHighlight (place, bool) {
        // argument checking
        if (place === null || place.site === null || place.site.size(0) === 0 || typeof bool !== 'boolean') {
            return null;
        }
        var site = place.site,
            siteCircle = site.select('circle'),
            siteText = site.select('g');

        siteCircle.classed('highlighted', bool);

        // COND ? first option (COND == true) : second option (COND == false)
        // our actual statement is equivalent to:
        // if (bool) {
        //    siteText.style('visibility': 'visible');
        // } else {
        //    siteText.style('visibility': null);
        // }
        // NOTE: setting a style to null removes it from the DOM
        siteText.style('visibility', bool ? 'visible': null);
    }

    function showPlace (place) {
        for(var i = 0; i < place.incomingLines.length; i++) {
            place.incomingLines[i].style('visibility', 'visible');
        }

        place.site.style('visibility', 'visible');
    }

    function hidePlace (place) {
        for(var i = 0; i < place.incomingLines.length; i++) {
            place.incomingLines[i].style('visibility', 'hidden');
        }

        place.site.style('visibility', 'hidden');
    }
    
    my.update = function () {
        // get the date from the slider
        var date = brush.extent()[0];

        // edge conditions
        if (placeIndex === -1) {
            placeIndex++;

            // unhighlight last place
            toggleHighlight(highlightedPlace, false);

            // reset highlightedPlace
            highlightedPlace = null;
        }
        else if (placeIndex === places.length) {
            placeIndex--;
        }

        function checkForward () {
            for (; placeIndex < places.length && date > places[placeIndex].startDate; placeIndex++) {
 
                //console.log('sliderController:: update: moving forward', places[placeIndex]);
 
                // unhighlight last place
                toggleHighlight(highlightedPlace, false);
 
                // show site and lines
                showPlace(places[placeIndex]);
 
                // highlight new place
                highlightedPlace = places[placeIndex];
                toggleHighlight(highlightedPlace, true);
            }
        } 


        function checkBackward () {
            for (; placeIndex >= 0 && date < places[placeIndex].endDate; placeIndex--) {
 
                //console.log('sliderController:: update: moving backward', places[placeIndex]);
 
                // unhighlight last place
                toggleHighlight(highlightedPlace, false);
 
                // hide last site and lines
                hidePlace(highlightedPlace);
 
                // highlight new place
                highlightedPlace = places[placeIndex];
                toggleHighlight(highlightedPlace, true);
            }
        }
    
        console.log('sliderController:: update:', date, 'placeIndex', placeIndex, places[placeIndex]);

        // to start it off
        if (highlightedPlace === null) {
            checkForward();
        }

        // if date is before the start date of the current place
        else if (date < highlightedPlace.startDate) {
            checkBackward();
        }

        // else if the date is after the end date of the current place
        else if (date > highlightedPlace.endDate) {
            checkForward();
        }
    }

    return my;
}(d3));

