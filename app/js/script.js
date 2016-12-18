;( function( window, document ){

//func for controll scroll 
var disableScroll = function() {
	    window.oldScrollPos = $(window).scrollTop();
	    $(window).on('scroll.scrolldisabler',function ( event ) {
	       $(window).scrollTop( window.oldScrollPos );
	       event.preventDefault();
	    });
	};

var enableScroll = function() {
    $(window).off('scroll.scrolldisabler');
};	

disableScroll();

var audioElement = document.getElementById('music');

//Text controll

var theater = theaterJS()
	theater
   .addActor('main-slogan')

  theater
  .addScene(1000)
  .addScene('main-slogan:Hellow,world = )', 1400)
  .addScene('main-slogan:THIS IS MY WORKS.', 1400)
  .addScene(function () {
   		//enableScroll();
   		//audioElement.pause();
	})

//clear storage
window.localStorage.clear();
}( window, document ) );

$(document).ready(function(){

	

	//for init SVG 
	svg4everybody();

	var audioElement = document.getElementById('music');
/*	var volumeCont = 0.4;
	$('#music').prop("volume", volumeCont);
	$('.slogan').click(function(){
		audioElement.pause();
	})*/
	
	//scroll page
	$(".main").onepage_scroll({
	   sectionContainer: "section",     
	   easing: "ease-in-out",                  
	   animationTime: 1000,             
	   pagination: false,                
	   loop: true,                     
	   keyboard: true,                
	   direction: "horizontal",
	   afterMove: function(index) {
	   	$('#music').prop("volume", volumeCont-0.2);
	   } ,
	});

	
})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );