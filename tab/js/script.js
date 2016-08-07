var slider1= $('.slider1'); 
var tab = $('.tab'); 


$('.slider-left').click(function(event) {
	$('.range').slider('enable');	 
	tab.draggable('enable');	     
    $('input').attr('disabled', false); 
    
});





var sliderMaximum = 21;	
var sliderMinimum = 1;		
var sliderStep = 1;	

$('form').bind('slide',function(event,info) {
  
  
  for (var i = sliderMinimum; i <= sliderMaximum; i+=sliderStep) {
    if (info.value == i) {
      $('.nums div').removeClass('active');
      $('.nums div:nth-child(' + i +')').addClass('active');
    }
  }
});




$('.range').slider({min: sliderMinimum, max: sliderMaximum, step: sliderStep});//Блок расстояния
$(function(){
  var options = {};
  tab.draggable({});
    slider1.droppable('enable'); 
    
        
        
        options.out = function(event){
          slider1.css({
              'background-image': 'url(img/sad.png)',
          });
        };
       
    options.drop = function(event){
          tab.animate({
            'opacity': 'hide'
          });
         
          slider1.fadeOut(400, function(){ 
            slider1.css({
              background: 'url(img/happy.png)',
              width: '821px',
              left: '100px',
              });
            }
          );
          slider1.fadeIn(400);
    };
  slider1.droppable(options);
});


$('.slider-right').click(function(event) {
  $('.range').slider('disable');  
  tab.draggable('disable'); 
    $('input').attr('disabled', true);  
   
});



	