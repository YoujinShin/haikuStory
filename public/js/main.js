width = $('body').width();
height = window.innerHeight;	


$(function(){

	width = $('body').width();
	height = window.innerHeight;

	// firstPoem();
	secondPoem();
	// thirdPoem();
});


function firstPoem() {

	console.log('first poem');

	$('.img_1').css('visibility', 'visible');
	$('.img_2').css('visibility', 'hidden');
	$('.img_3').css('visibility', 'hidden');

	d3.select('#duck').transition().duration(8000)
		.style('right', width/2 - 80 + 'px');

	setTimeout(function () {
    	d3.select('#poem_1').transition().duration(8000)
		.style('opacity', 1);
    }, 4000);
}


function secondPoem() {

	console.log('second poem');

	d3.select('#img_2').style('visibility', 'visible');
	$('#img_1').css('visibility', 'hidden');
	// $('.img_2').css('visibility', 'visible');
	// $('.img_3').css('visibility', 'hidden');

	
	d3.select('#bg').style('visibility', 'visible');
	d3.select('#bg').style('visibility', 'hidden');


	d3.select('#box').transition().duration(18000)
		.style('left', width + 400 + 'px');

	setTimeout(function () {
    	d3.select('#poem_2').transition().duration(8000)
		.style('opacity', 1);
    }, 4000);
}

function thirdPoem() {

	console.log('third poem');

	$('#img_1').css('visibility', 'hidden');
	$('#img_2').css('visibility', 'hidden');
	$('#img_3').css('visibility', 'visible');

	console.log(  $('#img_3').css("visibility")  );

	d3.select('#box2').transition().duration(8000)
		.style('bottom', height + 'px');

	setTimeout(function () {
    	d3.select('#poem_3').transition().duration(8000)
		.style('opacity', 1);
    }, 4000);
}



