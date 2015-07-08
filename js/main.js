function convertToC(){

 	//on click get user input
 	var f = $('.userTempF').val();
 	console.log(f);
 	//value of temp user input is string so need to convert string to int
 	f =parseInt(f);
 	//convert user input from F to C
 	var cTemp = (f-32) * (5/9);

 	//need to convert answer to a whole number - round up
	cTemp = Math.floor(cTemp);

	console.log(cTemp);
	//display C result
	console.log(cTemp);
	$('.result').html(cTemp);
}

function convertToF (){
	var c =$('.userTempC').val();
	c =parseInt(c);
	var fTemp = c * (9/5) + 32;

	console.log(fTemp);
	$('.result').html(fTemp);

}
// clear user input

/*function clearInput () {
	cTemp = 0;
	fTemp= 0;
}*/

$(function() {
  // Handler for .ready() called.
//detect click

$('.convertC').click(convertToC);
$('.convertF').click(convertToF);
//$('userTempC').click(clearInput);
//$('userTempF').click(clearInput);

});