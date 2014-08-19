/* global _ */
'use strict';

//////////////////////////////////////////////////////////////////////////
// GLOBAL VARIABLES //////////////////////////////////////////////////////
var i;
var topicLabel;
var topicsLength = Topics.length;

//////////////////////////////////////////////////////////////////////////
// FUNCTION DEFINITIONS //////////////////////////////////////////////////
function makeNewDiv() {
	topicLabel = document.createElement('div');
			topicLabel.className = 'topic'+ i;
			topicLabel.innerHTML = Topics[i].label;
	$('.wordcloud').append(topicLabel);
}

function changeLabelColor(topicLabel, sentimentScore) {
	if (sentimentScore > 60) {
		$(topicLabel).addClass('positive');
	}
	if (sentimentScore < 40) {
		$(topicLabel).addClass('negative');
	}
}

function changeLabelSize(topicLabel, volume) {
	if (volume <= 5) {
		$(topicLabel).addClass('size6');
	}
	if (volume >= 6 && volume <= 10 ) {
		$(topicLabel).addClass('size5');
	}
		if (volume >= 11 && volume <= 15 ) {
		$(topicLabel).addClass('size4');
	}
	if (volume >= 16 && volume <= 20 ) {
		$(topicLabel).addClass('size3');
	}
	if (volume >= 21 && volume <= 25 ) {
		$(topicLabel).addClass('size2');
	}
	if (volume >= 26) {
		$(topicLabel).addClass('size1');
	}
}

function showMetadata(x) {
	var topicVolume = Topics[x].volume;
	$('.totalvol').html(topicVolume);

	var posSent = Topics[x].sentiment.positive;
		if(typeof posSent === 'undefined'){
			posSent = '--';
		};
	$('.pos-sent').html(posSent);

	var negSent = Topics[x].sentiment.negative;
		if(typeof negSent === 'undefined'){
			negSent = '--';
		};
	$('.neg-sent').html(negSent);

	var neuSent = Topics[x].sentiment.neutral;
		if(typeof neuSent === 'undefined'){
			neuSent = '--';
		};
	$('.neu-sent').html(neuSent);
}

//////////////////////////////////////////////////////////////////////////
// CALLING FUNCTIONS /////////////////////////////////////////////////////
for (i=0; i<topicsLength; i++) {
	var topicVolume = Topics[i].volume;

	makeNewDiv(i);
	changeLabelSize(topicLabel, topicVolume);

	if ( $("div[class*='topic']") && $("div[class*=i]") ) {
		var topicScore = Topics[i].sentimentScore;
			changeLabelColor(topicLabel, topicScore);
	}
}

//////////////////////////////////////////////////////////////////////////
// CLICK EVENTS //////////////////////////////////////////////////////////
$('.topic0').click(function() {
		showMetadata(0);
});

$('.topic1').click(function() {
		showMetadata(1);
});

$('.topic2').click(function() {
		showMetadata(2);
});

$('.topic3').click(function() {
		showMetadata(3);
});

$('.topic4').click(function() {
		showMetadata(4);
});

$('.topic5').click(function() {
		showMetadata(5);
});

$('.topic6').click(function() {
		showMetadata(6);
});

$('.topic7').click(function() {
		showMetadata(7);
});

$('.topic8').click(function() {
		showMetadata(8);
});

$('.topic9').click(function() {
		showMetadata(9);
});

$('.topic10').click(function() {
		showMetadata(10);
});

$('.topic11').click(function() {
		showMetadata(11);
});

$('.topic12').click(function() {
		showMetadata(12);
});

$('.topic13').click(function() {
		showMetadata(13);
});

$('.topic14').click(function() {
		showMetadata(14);
});

$('.topic15').click(function() {
		showMetadata(15);
});

$('.topic16').click(function() {
		showMetadata(16);
});

$('.topic17').click(function() {
		showMetadata(17);
});

$('.topic18').click(function() {
		showMetadata(18);
});

$('.topic19').click(function() {
		showMetadata(19);
});

$('.topic20').click(function() {
		showMetadata(20);
});

$('.topic21').click(function() {
		showMetadata(21);
});

$('.topic22').click(function() {
		showMetadata(22);
});

$('.topic23').click(function() {
		showMetadata(23);
});

$('.topic24').click(function() {
		showMetadata(24);
});

$('.topic25').click(function() {
		showMetadata(25);
});

$('.topic26').click(function() {
		showMetadata(26);
});

$('.topic27').click(function() {
		showMetadata(27);
});

$('.topic28').click(function() {
		showMetadata(28);
});

$('.topic29').click(function() {
		showMetadata(29);
});