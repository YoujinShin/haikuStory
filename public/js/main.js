width = $('body').width();

// d3.select('#ship').transition().duration(14000)
// 	.style('left', width/2 + 'px');

d3.select('#duck').transition().duration(8000)
	.style('right', width/2 - 80 + 'px');

d3.select('#poem_1').transition().duration(8000)
	.style('opacity', 1);

d3.select('#line').transition().duration(8000)
	.style('width', 220 + 'px');