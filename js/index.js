var numer = 1;

function zmienpostac()

{
	numer++; if (numer>2) numer=1;
	
	var plik = "<img src=\"/Images/postac" + numer + ".png\"	/>";
	
	document.getElementById("topbarL").innerHTML = plik;
	
	setTimeout("zmienpostac()",15000);
	
}