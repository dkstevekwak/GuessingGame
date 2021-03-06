$(document).ready(function(){

	var computerinput = Math.floor(Math.random()*100);
	var count = 0;
	var track = [];
	
	$('#input1').keydown(function(event){    
    if(event.keyCode==13){
       $('.submit').click();
	    }
	});

    $('.submit').on('click', function(){
    	var input = +$('#input1').val();
    	count += 1;
    	$('input').val('');
    	$('h4').text('Life: '+(5-count))

		if(track.indexOf(input)!=-1) {
			$('h3').text('You have already entered that number');
			count -= 1;
			$('h4').text('Life: '+(5-count));
		}
    	else if(input>100 || input<0) {
    		$('h3').text('Input range should be 0~100');
    		count -= 1;
			$('h4').text('Life: '+(5-count));
    	}
    	else if(computerinput===input) {
    		$('h3').text('Correct! Congratulations!');
    		$('h4').text('Win!')
    		$('h1,h2').css('color','#FAFA43')
    		$('.fire').animate({'height':'370px','width':'320px'},'fast');
    		$('.snow').remove();
    		$('.fireworks').fadeIn('slow');
    		$('.submit').attr('disabled','disabled');
    		$('#input1').attr('disabled','disabled');
    	}
        else if(count===5) {
        	$('h3').text('You lost..play again?');
			$('.snow').animate({'height':'370px','width':'320px'},'fast');
    		$('.fire').remove();
    		$('.iceage').fadeIn('slow');
    		$('h1,h2').css('color','#D3E4F5')
    	}
    	else if(count===6) {
    		$('h3').text('No more life! Play with me one more time?');
    		$('h4').html('<a href="http://faceboo.com"><p>Ask friends for more life</p></a>')
    		$('.iceage').remove();
    		$('.cat').fadeIn('slow');
    		$('.snow').remove();
    		$('.donkey').fadeIn('slow');
    		$('.submit').attr('disabled','disabled');
    		$('#input1').attr('disabled','disabled');
    	}
    	else if(computerinput>input) {	
	    	if(computerinput-input>25) {
	    		$('h3').text('You are ice cold. Guess much higher!');
	    		$('.fire').animate({'height':'180px','width':'180px'},'fast');
	    		$('.snow').animate({'height':'330px','width':'330px'},'fast');
	    	}
	    	else if(computerinput-input>15 && computerinput-input<=25) {
	    		$('h3').text('You are cold. Guess higher!');
	    		$('.fire').animate({'height':'220px','width':'220px'},'fast');
	    		$('.snow').animate({'height':'300px','width':'300px'},'fast');
	    	}
	    	else if(computerinput-input>5 && computerinput-input<=15) {
	    		$('h3').text('You are hot. Guess higher!');
	    		$('.fire').animate({'height':'300px','width':'300px'},'fast');
	    		$('.snow').animate({'height':'220px','width':'220px'},'fast');
	    	}
	    	else if(computerinput-input<=5) {
	    		$('h3').text('You are super hot. Guess higher!');
	    		$('.fire').animate({'height':'330px','width':'330px'},'fast');
	    		$('.snow').animate({'height':'180px','width':'180px'},'fast');
 			}
 		}
    	else if(computerinput<input) {
	    	if(input-computerinput>25) {
	    		$('h3').text('You are ice cold. Guess much lower!');
	    		$('.fire').animate({'height':'180px','width':'180px'},'fast');
	    		$('.snow').animate({'height':'330px','width':'330px'},'fast');
	    	}
	    	else if(input-computerinput>15 && input-computerinput<=25) {
	    		$('h3').text('You are cold. Guess lower!');
	    		$('.fire').animate({'height':'220px','width':'220px'},'fast');
	    		$('.snow').animate({'height':'300px','width':'300px'},'fast');
	    	}
	    	else if(input-computerinput>5 && input-computerinput<=15) {
	    		$('h3').text('You are hot. Guess lower!');
	    		$('.fire').animate({'height':'300px','width':'300px'},'fast');
	    		$('.snow').animate({'height':'220px','width':'220px'},'fast');
	    	}
	    	else if(input-computerinput<=5) {
    			$('h3').text('You are super hot. Guess lower!');
    			$('.fire').animate({'height':'330px','width':'330px'},'fast');
	    		$('.snow').animate({'height':'180px','width':'180px'},'fast');
    	    }
    	}
		track.push(input);
		$('h5').text("Your last input: "+input);
	});

	$('.playagain').on('click', function(){
		document.location.reload();
	});
    $('.hint').on('click', function(){
    	$('h3').text('The answer is '+computerinput+'!');
    });	
        $('button').on('mouseenter', function(){
    	$(this).css('color','#000000');
    });
    $('button').on('mouseleave', function(){
    	$(this).css('color','#4E7D8A');
    });
});