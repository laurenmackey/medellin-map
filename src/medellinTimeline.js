console.log("I, medellinTimelineNew am running");

var hideNeighborhoods = function() {
    $('#_x32_005').css('display', 'none');
    $('#_x32_006').css('display', 'none');
    $('#_x32_007').css('display', 'none');
    $('#_x32_008').css('display', 'none');
    $('#_x32_009').css('display', 'none');
    $('#_x32_010').css('display', 'none');
    $('#_x32_011').css('display', 'none');
    $('#_x32_012').css('display', 'none');
    $('#_x32_013').css('display', 'none');
    $('#_x32_014').css('display', 'none');
}

var hide2004Neighborhood = function() {
    $('#_x32_004').css('display', 'none');
}

var reduce2004Dots = function() {
    $('.metrocableKDot').css('display', 'inline').css('r', '7.75');
    $('.metrocableKDescription').css('display', 'none');
}

var reduce2006Dots = function() {
    $('.caraboboDot').css('display', 'inline').css('r', '7.75');
    $('.lb_SanJavierDot').css('display', 'inline').css('r', '7.75');
    $('.caraboboDescription').css('display', 'none');
    $('.lb_SanJavierDescription').css('display', 'none');
}

var reduce2007Dots = function() {
    $('.lb_EspanaDot').css('display', 'inline').css('r', '7.75');
    $('.lb_LaderaDot').css('display', 'inline').css('r', '7.75');
    $('.lb_LaQuintanaDot').css('display', 'inline').css('r', '7.75');
    $('.puenteDot').css('display', 'inline').css('r', '7.75');
    $('.granizalDot').css('display', 'inline').css('r', '7.75');
    $('.lb_EspanaDescription').css('display', 'none');
    $('.lb_LaderaDescription').css('display', 'none');
    $('.lb_LaQuintanaDescription').css('display', 'none');
    $('.puenteDescription').css('display', 'none');
    $('.granizalDescription').css('display', 'none');
}

var reduce2008Dots = function() {
    $('.metrocableJDot').css('display', 'inline').css('r', '7.75');
    $('.lb_BelenDot').css('display', 'inline').css('r', '7.75');
    $('.cultCenterDot').css('display', 'inline').css('r', '7.75');
    $('.colegioDot').css('display', 'inline').css('r', '7.75');
    $('.metrocableJDescription').css('display', 'none');
    $('.lb_BelenDescription').css('display', 'none');
    $('.cultCenterDescription').css('display', 'none');
    $('.colegioDescription').css('display', 'none');
}

var reduce2009Dots = function() {
    $('.infantilDot').css('display', 'inline').css('r', '7.75');
    $('.infantilDescription').css('display', 'none');
}

var reduce2010Dots = function() {
    $('.moraDot').css('display', 'inline').css('r', '7.75');
    $('.moraDescription').css('display', 'none');
}

var reduce2012Dots = function() {
    $('.lb_ManuelDot').css('display', 'inline').css('r', '7.75');
    $('.comuna_13Dot').css('display', 'inline').css('r', '7.75');
    $('.lb_ManuelDescription').css('display', 'none');
    $('.comuna_13Description').css('display', 'none');
}

var reduce2014Dots = function() {
    $('.exploraDot').css('display', 'inline').css('r', '7.75');
    $('.exploraDescription').css('display', 'none');
}

var hide2004Dots = function() {
    $('.metrocableKDot').css('display', 'none');
    $('.metrocableKDescription').css('display', 'none');
}

var hide2006Dots = function() {
    $('.caraboboDot').css('display', 'none');
    $('.lb_SanJavierDot').css('display', 'none');
    $('.caraboboDescription').css('display', 'none');
    $('.lb_SanJavierDescription').css('display', 'none');
}

var hide2007Dots = function() {
    $('.lb_EspanaDot').css('display', 'none');
    $('.lb_LaderaDot').css('display', 'none');
    $('.lb_LaQuintanaDot').css('display', 'none');
    $('.puenteDot').css('display', 'none');
    $('.granizalDot').css('display', 'none');
    $('.lb_EspanaDescription').css('display', 'none');
    $('.lb_LaderaDescription').css('display', 'none');
    $('.lb_LaQuintanaDescription').css('display', 'none');
    $('.puenteDescription').css('display', 'none');
    $('.granizalDescription').css('display', 'none');
}

var hide2008Dots = function() {
    $('.metrocableJDot').css('display', 'none');
    $('.lb_BelenDot').css('display', 'none');
    $('.cultCenterDot').css('display', 'none');
    $('.colegioDot').css('display', 'none');
    $('.metrocableJDescription').css('display', 'none');
    $('.lb_BelenDescription').css('display', 'none');
    $('.cultCenterDescription').css('display', 'none');
    $('.colegioDescription').css('display', 'none');
}

var hide2009Dots = function() {
    $('.infantilDot').css('display', 'none');
    $('.infantilDescription').css('display', 'none');
}

var hide2010Dots = function() {
    $('.moraDot').css('display', 'none');
    $('.moraDescription').css('display', 'none');
}

var hide2012Dots = function() {
    $('.lb_ManuelDot').css('display', 'none');
    $('.comuna_13Dot').css('display', 'none');
    $('.lb_ManuelDescription').css('display', 'none');
    $('.comuna_13Description').css('display', 'none');
}

var hide2014Dots = function() {
    $('.exploraDot').css('display', 'none');
    $('.exploraDescription').css('display', 'none');
}

var main = function() {

    $('#2004').css('fill', '#0092D0').css('stroke', '#0092D0');
    $('.metrocableKDot').data('click-count', 1);

    $('.timelineCircles circle').click(function() {
        var clickedCircle = $(this);
        var unselected = clickedCircle.siblings();
        var clickedID = $(clickedCircle).attr('id');
        $('.PopUp_Panel').hide();
        $('.dotsAndDescriptions g circle').data('click-count', 0);

        $(clickedCircle).css('fill', '#0092D0').css('stroke', '#0092D0');
        $(unselected).css('fill', '#FFFFFF').css('stroke', '#474747');

        if (clickedID === "2004") {
            hideNeighborhoods();
            $('#_x32_004').css('display', 'inline');
            hide2006Dots();
            hide2007Dots();
            hide2008Dots();
            hide2009Dots();
            hide2010Dots();
            hide2012Dots();
            hide2014Dots();
            $('.metrocableKDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.metrocableKDot').data('click-count', 1);
            $('.metrocableKDescription').fadeIn(275).css('display', 'inline');
        }

        else if (clickedID === "2005") {
            hideNeighborhoods();
            hide2004Neighborhood();
            $('#_x32_005').css('display', 'inline');
            reduce2004Dots();
            hide2006Dots();
            hide2007Dots();
            hide2008Dots();
            hide2009Dots();
            hide2010Dots();
            hide2012Dots();
            hide2014Dots();
        }

        else if (clickedID === "2006") {
            hideNeighborhoods();
            hide2004Neighborhood();
            $('#_x32_006').css('display', 'inline');
            reduce2004Dots();
            hide2007Dots();
            hide2008Dots();
            hide2009Dots();
            hide2010Dots();
            hide2012Dots();
            hide2014Dots();
            $('.caraboboDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.caraboboDot').data('click-count', 1);
            $('.lb_SanJavierDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.lb_SanJavierDot').data('click-count', 1);
            $('.caraboboDescription').fadeIn(275).css('display', 'inline');
            $('.lb_SanJavierDescription').fadeIn(275).css('display', 'inline');
        }

        else if (clickedID === "2007") {
            hideNeighborhoods();
            hide2004Neighborhood();
            $('#_x32_007').css('display', 'inline');
            reduce2004Dots();
            reduce2006Dots();
            hide2008Dots();
            hide2009Dots();
            hide2010Dots();
            hide2012Dots();
            hide2014Dots();
            $('.lb_EspanaDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.lb_EspanaDot').data('click-count', 1);
            $('.lb_LaderaDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.lb_LaderaDot').data('click-count', 1);
            $('.lb_LaQuintanaDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.lb_LaQuintanaDot').data('click-count', 1);
            $('.puenteDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.puenteDot').data('click-count', 1);
            $('.granizalDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.granizalDot').data('click-count', 1);
            $('.lb_EspanaDescription').fadeIn(275).css('display', 'inline');
            $('.lb_LaderaDescription').fadeIn(275).css('display', 'inline');
            $('.lb_LaQuintanaDescription').fadeIn(275).css('display', 'inline');
            $('.puenteDescription').fadeIn(275).css('display', 'inline');
            $('.granizalDescription').fadeIn(275).css('display', 'inline');
        }

        else if (clickedID === "2008") {
            hideNeighborhoods();
            hide2004Neighborhood();
            $('#_x32_008').css('display', 'inline');
            reduce2004Dots();
            reduce2006Dots();
            reduce2007Dots();
            hide2009Dots();
            hide2010Dots();
            hide2012Dots();
            hide2014Dots();
            $('.metrocableJDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.metrocableJDot').data('click-count', 1);
            $('.lb_BelenDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.lb_BelenDot').data('click-count', 1);
            $('.cultCenterDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.cultCenterDot').data('click-count', 1);
            $('.colegioDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.colegioDot').data('click-count', 1);
            $('.metrocableJDescription').fadeIn(275).css('display', 'inline');
            $('.lb_BelenDescription').fadeIn(275).css('display', 'inline');
            $('.cultCenterDescription').fadeIn(275).css('display', 'inline');
            $('.colegioDescription').fadeIn(275).css('display', 'inline');
        }

        else if (clickedID === "2009") {
            hideNeighborhoods();
            hide2004Neighborhood();
            $('#_x32_009').css('display', 'inline');
            reduce2004Dots();
            reduce2006Dots();
            reduce2007Dots();
            reduce2008Dots();
            hide2010Dots();
            hide2012Dots();
            hide2014Dots();
            $('.infantilDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.infantilDot').data('click-count', 1);
            $('.infantilDescription').fadeIn(275).css('display', 'inline');
        }

        else if (clickedID === "2010") {
            hideNeighborhoods();
            hide2004Neighborhood();
            $('#_x32_010').css('display', 'inline');
            reduce2004Dots();
            reduce2006Dots();
            reduce2007Dots();
            reduce2008Dots();
            reduce2009Dots();
            hide2012Dots();
            hide2014Dots();
            $('.moraDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.moraDot').data('click-count', 1);
            $('.moraDescription').fadeIn(275).css('display', 'inline');
        }

        else if (clickedID === "2011") {
            hideNeighborhoods();
            hide2004Neighborhood();
            $('#_x32_011').css('display', 'inline');
            reduce2004Dots();
            reduce2006Dots();
            reduce2007Dots();
            reduce2008Dots();
            reduce2009Dots();
            reduce2010Dots();
            hide2012Dots();
            hide2014Dots();
        }

        else if (clickedID === "2012") {
            hideNeighborhoods();
            hide2004Neighborhood();
            $('#_x32_012').css('display', 'inline');
            reduce2004Dots();
            reduce2006Dots();
            reduce2007Dots();
            reduce2008Dots();
            reduce2009Dots();
            reduce2010Dots();
            hide2014Dots();
            $('.lb_ManuelDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.lb_ManuelDot').data('click-count', 1);
            $('.comuna_13Dot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.comuna_13Dot').data('click-count', 1);
            $('.lb_ManuelDescription').fadeIn(275).css('display', 'inline');
            $('.comuna_13Description').fadeIn(275).css('display', 'inline');
        }

        else if (clickedID === "2013") {
            hideNeighborhoods();
            hide2004Neighborhood();
            $('#_x32_013').css('display', 'inline');
            reduce2004Dots();
            reduce2006Dots();
            reduce2007Dots();
            reduce2008Dots();
            reduce2009Dots();
            reduce2010Dots();
            reduce2012Dots();
            hide2014Dots();
        }

        else if (clickedID === "2014") {
            hideNeighborhoods();
            hide2004Neighborhood();
            $('#_x32_014').css('display', 'inline');
            reduce2004Dots();
            reduce2006Dots();
            reduce2007Dots();
            reduce2008Dots();
            reduce2009Dots();
            reduce2010Dots();
            reduce2012Dots();
            $('.exploraDot').fadeIn(275).css('display', 'inline').css('r', '10.25');
            $('.exploraDot').data('click-count', 1);
            $('.exploraDescription').fadeIn(275).css('display', 'inline');
        }
    });
};

$(document).ready(main);