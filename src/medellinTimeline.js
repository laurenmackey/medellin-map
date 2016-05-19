console.log("I am running");

var maxWidth = 700,
    maxHeight = 70,
    margin = {top: 32, right: 30, bottom: 17, left: 30},
    width = maxWidth - margin.left - margin.right,
    height = maxHeight - margin.top - margin.bottom,
    startingYear = new Date('2004, 1, 1'),
    endingYear = new Date('2014, 1, 1'),
    handle = null,
    handleSize = 24,

    xScale = d3.time.scale()
        .domain([startingYear, endingYear])
        .range([0, width])
        .clamp(true),

    dateFormatter = d3.time.format('%Y'),
    xAxis = d3.svg.axis()
        .orient('bottom')
        .scale(xScale)
        .ticks(11)
        .innerTickSize([8])
        .outerTickSize([2])
        .tickFormat(function(d) { return dateFormatter(d); }),

    brush = d3.svg.brush()
        .x(xScale)
        .extent([startingYear, startingYear])
        .on('brush', brushed)

    intervalID = null;

function brushstart () {
    intervalID = setInterval(MedellinSliderController.update, 50);
}

function brushend () {
    clearInterval(intervalID);
}
 
function brushed () {
    var value = brush.extent()[0];

    console.log('brushed', d3.event);
    if (d3.event.sourceEvent) {
        value = xScale.invert(d3.mouse(this)[0]);
        brush.extent([value, value]);
    }
    
    handle.attr('transform', 'translate(' + (xScale(value) - (handleSize / 2)) + ',0)');
}

document.addEventListener("DOMContentLoaded", main);

function main (event) {
    console.log('I am loaded completely', event);
    console.log('Let"s see if d3 loaded', d3);

    var svg = d3.select('.Timeline')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom);

    var timeline = svg
        .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
            .attr('class', 'axis')
        .call(xAxis);

        timeline = d3.select('#Timeline');

    var slider = svg
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + 0 + ')')
        .attr('class', 'full_slider')
        .call(brush);

    slider.selectAll('.extent,.resize')
        .remove();

    // figure out how to get cursor to be a pointer a little more on the outskirts of the box
    slider.select('.background')
        .attr('height', height + margin.top + margin.bottom)
        .style('cursor', 'pointer');

    handle = slider
        .append('g')
        .attr('class', 'handle');

    var mySlider = handle
        .append('path')
        .attr('d', 'M 0 16 L 24 16 L 12 31 L 0 16')
        .attr('class', 'slider');

    slider.call(brush.event);
}