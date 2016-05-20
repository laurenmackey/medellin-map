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
    hide2006Dots();
    hide2007Dots();
    hide2008Dots();
    hide2009Dots();
    hide2010Dots();
    hide2012Dots();
    hide2014Dots();
    $('.metrocableKDot').css('display', 'inline').css('r', '10.25');
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

    $('.timelineCircles circle').click(function() {
        var clickedCircle = $(this);
        var unselected = clickedCircle.siblings();
        var clickedID = $(clickedCircle).attr('id');
        $('.PopUp_Panel').hide();
    
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
            $('.metrocableKDot').css('display', 'inline').css('r', '10.25');
            $('.metrocableKDescription').css('display', 'inline');
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
            $('.caraboboDot').css('display', 'inline').css('r', '10.25');
            $('.lb_SanJavierDot').css('display', 'inline').css('r', '10.25');
            $('.caraboboDescription').css('display', 'inline');
            $('.lb_SanJavierDescription').css('display', 'inline');
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
            $('.lb_EspanaDot').css('display', 'inline').css('r', '10.25');
            $('.lb_LaderaDot').css('display', 'inline').css('r', '10.25');
            $('.lb_LaQuintanaDot').css('display', 'inline').css('r', '10.25');
            $('.puenteDot').css('display', 'inline').css('r', '10.25');
            $('.granizalDot').css('display', 'inline').css('r', '10.25');
            $('.lb_EspanaDescription').css('display', 'inline');
            $('.lb_LaderaDescription').css('display', 'inline');
            $('.lb_LaQuintanaDescription').css('display', 'inline');
            $('.puenteDescription').css('display', 'inline');
            $('.granizalDescription').css('display', 'inline');
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
            $('.metrocableJDot').css('display', 'inline').css('r', '10.25');
            $('.lb_BelenDot').css('display', 'inline').css('r', '10.25');
            $('.cultCenterDot').css('display', 'inline').css('r', '10.25');
            $('.colegioDot').css('display', 'inline').css('r', '10.25');
            $('.metrocableJDescription').css('display', 'inline');
            $('.lb_BelenDescription').css('display', 'inline');
            $('.cultCenterDescription').css('display', 'inline');
            $('.colegioDescription').css('display', 'inline');
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
            $('.infantilDot').css('display', 'inline').css('r', '10.25');
            $('.infantilDescription').css('display', 'inline');
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
            $('.moraDot').css('display', 'inline').css('r', '10.25');
            $('.moraDescription').css('display', 'inline');
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
            $('.lb_ManuelDot').css('display', 'inline').css('r', '10.25');
            $('.comuna_13Dot').css('display', 'inline').css('r', '10.25');
            $('.lb_ManuelDescription').css('display', 'inline');
            $('.comuna_13Description').css('display', 'inline');
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
            $('.exploraDot').css('display', 'inline').css('r', '10.25');
            $('.exploraDescription').css('display', 'inline');
        }
    });
};

$(document).ready(hideNeighborhoods);
$(document).ready(main);