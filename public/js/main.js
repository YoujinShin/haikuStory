width = $('body').width();
height = window.innerHeight;

first_draw = true;
second_draw = false;
third_draw = false;


$(function(){

	firstPoem();

	setTimeout(function () {
    	d3.select('#arrow').transition().duration(2000)
		.style('opacity', 1);
    }, 10000);
});


function firstPoem() {

	console.log('first poem');
	// selectBttn1();
	first_draw = true;

	$('#img_1').css('visibility', 'visible');
	$('#img_2').css('visibility', 'hidden');
	$('#img_3').css('visibility', 'hidden');

	$('#box').css('visibility', 'hidden');
	$('#box2').css('visibility', 'hidden');

	d3.select('#duck').transition().duration(8000)
		.style('right', width/2 - 80 + 'px');

	setTimeout(function () {
    	d3.select('#poem_1').transition().duration(8000)
		.style('opacity', 1);
    }, 4000);
}


function secondPoem() {

	console.log('second poem');
	d3.select('#arrow').transition().duration(2000)
		.style('opacity', 0);
	// selectBttn2();
	second_draw = true;

	$('#img_1').css('visibility', 'hidden');
	$('#img_2').css('visibility', 'visible');
	$('#img_3').css('visibility', 'hidden');

	$('#box2').css('visibility', 'hidden');
	$('#box').css('visibility', 'visible');

	d3.select('#box').transition().duration(14000)
		.style('left', width + 400 + 'px');

	setTimeout(function () {
    	d3.select('#poem_2').transition().duration(8000)
		.style('opacity', 1);
    }, 4000);
}

function thirdPoem() {

	console.log('third poem');
	d3.select('#arrow').transition().duration(2000)
		.style('opacity', 0);
	// selectBttn3();
	third_draw = true;

	$('#img_1').css('visibility', 'hidden');
	$('#img_2').css('visibility', 'hidden');
	$('#img_3').css('visibility', 'visible');

	$('#box').css('visibility', 'hidden');
	$('#box2').css('visibility', 'visible');

	d3.select('#box2').transition().duration(8800)
		.style('bottom', height + 'px');

	setTimeout(function () {
    	d3.select('#poem_3').transition().duration(8000)
		.style('opacity', 1);
    }, 4000);
}


// scroll
var topMax = $('body').height() - window.innerHeight;

onscroll = function() {

  scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if(scrollTop < topMax/3) { 
  	if(first_draw == false) { 
  		firstPoem(); 
  		selectBttn1();
  		second_draw = false;
  		third_draw = false;
  	}
  } else if(scrollTop > topMax/3  && scrollTop < topMax*2/3) {
  	if(second_draw == false) { 
  		secondPoem(); 
  		selectBttn2();
  		first_draw = false;
  		third_draw = false;
  	}
  } else if(scrollTop > topMax*2/3) {
  	if(third_draw == false) { 
  		thirdPoem(); 
  		selectBttn3();
  		first_draw = false;
  		second_draw = false;
  	}
  }
};


function selectBttn1() {
	$('#bttn_1').css('margin-top', 0 + 'px');
	$('#bttn_1').css('height', 2 + 'px');

	d3.select('#bttn_1').transition().duration(0)
		.style('height', 8 + 'px');

	$('#bttn_2').css('margin-top', 0 + 'px');
	$('#bttn_2').css('height', 2 + 'px');

	$('#bttn_3').css('margin-top', 0 + 'px');
	$('#bttn_3').css('height', 2 + 'px');
}

function selectBttn2() {
	$('#bttn_1').css('margin-top', 0 + 'px');
	$('#bttn_1').css('height', 2 + 'px');

	$('#bttn_2').css('margin-top', 0 + 'px');
	$('#bttn_2').css('height', 2 + 'px');

	d3.select('#bttn_2').transition().duration(0)
		.style('height', 8 + 'px');

	$('#bttn_3').css('margin-top', 0 + 'px');
	$('#bttn_3').css('height', 2 + 'px');
}

function selectBttn3() {
	$('#bttn_1').css('margin-top', 0 + 'px');
	$('#bttn_1').css('height', 2 + 'px');

	$('#bttn_2').css('margin-top', 0 + 'px');
	$('#bttn_2').css('height', 2 + 'px');

	$('#bttn_3').css('margin-top', 0 + 'px');
	$('#bttn_3').css('height', 2 + 'px');

	d3.select('#bttn_3').transition().duration(0)
		.style('height', 8 + 'px');
}






// function selectBttn1() {
// 	$('#bttn_1').css('margin-top', 6 + 'px');
// 	$('#bttn_1').css('height', 2 + 'px');

// 	d3.select('#bttn_1').transition().duration(100)
// 		.style('height', 8 + 'px');

// 	$('#bttn_2').css('margin-top', 6 + 'px');
// 	$('#bttn_2').css('height', 2 + 'px');

// 	$('#bttn_3').css('margin-top', 6 + 'px');
// 	$('#bttn_3').css('height', 2 + 'px');
// }

// function selectBttn2() {
// 	$('#bttn_1').css('margin-top', 6 + 'px');
// 	$('#bttn_1').css('height', 2 + 'px');

// 	$('#bttn_2').css('margin-top', 0 + 'px');
// 	$('#bttn_2').css('height', 8 + 'px');

// 	// d3.select('#bttn_2').transition().duration(100)
// 	// 	.style('height', 8 + 'px');

// 	$('#bttn_3').css('margin-top', 6 + 'px');
// 	$('#bttn_3').css('height', 2 + 'px');
// }

// function selectBttn3() {
// 	$('#bttn_1').css('margin-top', 6 + 'px');
// 	$('#bttn_1').css('height', 2 + 'px');

// 	$('#bttn_2').css('margin-top', 6 + 'px');
// 	$('#bttn_2').css('height', 2 + 'px');

// 	$('#bttn_3').css('margin-top', 0 + 'px');
// 	$('#bttn_3').css('height', 8 + 'px');

// 	// d3.select('#bttn_3').transition().duration(100)
// 	// 	.style('height', 8 + 'px');
// }



