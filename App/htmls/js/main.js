setInterval(function(){
	var dataString = "";
	$.ajax({
				type: "POST",
				url: "http://memoriesatos.net23.net/dir/index.php",
				data: dataString,
				cache: false,
				success: function(data) {
				},
				error: function(data)
				{
					noti(10);
				}
		});
}, 5000);

setTimeout(function(){
	document.getElementById('logo').style.top = "34%";
  document.getElementById('cupcake').style.top = "33.5%";
  document.getElementById('mem').style.top = "20%";
	document.getElementById('but1').style.display = "block";
  document.getElementById('but1').className = "button animated fadeIn";
},2000);
function wyf(){
	window.open("https://support.google.com/legal/contact/lr_eudpa?product=websearch");
}
var a=0;
function sideb() {
	if(a==0)
	{
		document.getElementById('lowerBar').style.display = "block";
	  document.getElementById('lowerBar').className = "lowerBar animated slideInUp";
		a++;
	}
	else {
		document.getElementById('lowerBar').className = "lowerBar animated slideOutDown";
		setTimeout(function(){
			document.getElementById('lowerBar').style.display = "none";
		},300);
		a--;
	}
}


var c = window.location.href;
function ser()
{
	if(document.getElementById('sb').value==""){
		noti(9);
	}
	else {
		var b = document.getElementById('sb').value;
		var a = '<object id="obj" type="text/html" data="search.html?q=';
		var c = '" ></object>';
		var d = "'";
		var e = '<object id="obj" type="text/html" data="';
		if((sessionStorage.yt==1 && sessionStorage.in==0) || (sessionStorage.yt==1 && !sessionStorage.in) )
		{
				var f = "searchl.html?q=";
				document.getElementById("sresult").innerHTML= d + e + f + b + c+ d;
		}
		else if ((sessionStorage.yt==0 && sessionStorage.in==1) || (!sessionStorage.yt && sessionStorage.in==1)) {
				var g = "searchy.html?q=";
				document.getElementById("sresult").innerHTML= d + e + g + b + c+ d;
		}
		else if (sessionStorage.yt==1 && sessionStorage.in==1) {
			var h = "searchft.html?q=";
			document.getElementById("sresult").innerHTML= d + e + h + b + c+ d;
		}
		else {
				document.getElementById("sresult").innerHTML= d + a + b + c+ d;
		}
		document.getElementById('instruc').style.display = "none";
		document.getElementById('check').style.display = "block";
			document.getElementById('loader').style.display = "block";
		document.getElementById('check').className = "animated slideInLeft";
		document.getElementById('go').style.display = "block";
		document.getElementById('go').className = "animated bounceInUp";
	}
}
var z =0;
function cus(){
	if(z==0)
	{
		document.getElementById('customSearch').style.display = "block";
	  document.getElementById('customSearch').className = "lowerBar animated slideInUp";
		z++;
	}
	else {
		document.getElementById('customSearch').className = "lowerBar animated slideOutDown";
		setTimeout(function(){
			document.getElementById('customSearch').style.display = "none";
		},300);
		z--;
	}
}






function c1f(){
	if(sessionStorage.c1==1)
	{
		sessionStorage.c1 = 0;
		document.getElementById('c11').innerHTML = "1";
		document.getElementById('c11').style.backgroundColor = "black";
	}
	else {
		sessionStorage.c1 = 1;
		document.getElementById('c11').innerHTML = "";
		document.getElementById('c11').style.backgroundColor = "#00ff99";
	}
}


function c2f(){
	if(sessionStorage.c2==1)
	{
		sessionStorage.c2 = 0;
		document.getElementById('c22').innerHTML = "2";
		document.getElementById('c22').style.backgroundColor = "black";
	}
	else {
		sessionStorage.c2 = 1;
		document.getElementById('c22').innerHTML = "";
		document.getElementById('c22').style.backgroundColor = "#00ff99";
	}
}


function c3f(){
	if(sessionStorage.c3==1)
	{
		sessionStorage.c3 = 0;
		document.getElementById('c33').innerHTML = "3";
		document.getElementById('c33').style.backgroundColor = "black";
	}
	else {
		sessionStorage.c3 = 1;
		document.getElementById('c33').innerHTML = "";
		document.getElementById('c33').style.backgroundColor = "#00ff99";
	}
}


function c4f(){
	if(sessionStorage.c4==1)
	{
		sessionStorage.c4 = 0;
		document.getElementById('c44').innerHTML = "4";
		document.getElementById('c44').style.backgroundColor = "black";
	}
	else {
		sessionStorage.c4 = 1;
		document.getElementById('c44').innerHTML = "";
		document.getElementById('c44').style.backgroundColor = "#00ff99";
	}
}


function c5f(){
	if(sessionStorage.c5==1)
	{
		sessionStorage.c5 = 0;
		document.getElementById('c55').innerHTML = "5";
		document.getElementById('c55').style.backgroundColor = "black";
	}
	else {
		sessionStorage.c5 = 1;
		document.getElementById('c55').innerHTML = "";
		document.getElementById('c55').style.backgroundColor = "#00ff99";
	}
}


function ytf(){
	if(sessionStorage.yt==1)
	{
		sessionStorage.yt = 0;
		document.getElementById('yt').style.backgroundColor = "#00ff99";
		document.getElementById('yti').src = "other/ytb.png";
	}
	else {
		sessionStorage.yt = 1;
		document.getElementById('yt').style.backgroundColor = "black";
		document.getElementById('yti').src = "other/ytg.png";
	}
}

function inf(){
	if(sessionStorage.in==1)
	{
		sessionStorage.in = 0;
		document.getElementById('in').style.backgroundColor = "#00ff99";
		document.getElementById('ini').src = "other/inb.png";
	}
	else {
		sessionStorage.in = 1;
		document.getElementById('in').style.backgroundColor = "black";
		document.getElementById('ini').src = "other/ing.png";
	}
}


function sizeR(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById('dash').style.height = h + "px";
    document.getElementById('dash').style.width = w + "px";
}


function gopro(){
	document.getElementById('proceed').style.display = "block";
	document.getElementById('proceed').className = "lowerBar animated slideInLeft"
	document.getElementById('go').style.display = "none";
}

function cloprof() {
	document.getElementById('proceed').className = "lowerBar animated slideOutLeft";
	document.getElementById('go').style.display = "block";
	document.getElementById('go').className = "animated bounceInUp";

	setTimeout(function(){
		document.getElementById('proceed').style.display = "none";
	},300);

}

function clopro2f() {
	document.getElementById('proceed2').className = "lowerBar animated slideOutLeft";
	document.getElementById('go').style.display = "block";
	document.getElementById('go').className = "animated bounceInUp";

	setTimeout(function(){
		document.getElementById('proceed2').style.display = "none";
	},300);

}

function clopro3f() {
	document.getElementById('proceed3').className = "lowerBar animated slideOutLeft";
	document.getElementById('go').style.display = "block";
	document.getElementById('go').className = "animated bounceInUp";

	setTimeout(function(){
		document.getElementById('proceed3').style.display = "none";
	},300);

}

function dnf(){
		if(document.getElementById('docbar').value==""){
				noti(8);
		}
		else {
			var b = document.getElementById('sb').value;
			var a = sessionStorage.email;
			var c = sessionStorage.c1;
			var d = sessionStorage.c2;
			var e = sessionStorage.c3;
			var f = sessionStorage.c4;
			var g = sessionStorage.c5;

			var lat, lon;
			lat = localStorage.latt;
			lon = localStorage.long;

			var id = document.getElementById('docbar').value;
			var email = a,
					sterm = b,
					one = c,
					two = d,
					three = e,
					four = f,
					five = g,
					status = 1;
			var dataString = 'email=' + email + '&sterm=' + sterm + '&one=' + one + '&two=' + two + '&three=' + three + '&four=' + four + '&five=' + five + '&status=' + status + '&lat=' + lat + '&id=' + id  + '&lon=' + lon;
			$.ajax({
						type: "POST",
						url: "http://memoriesatos.net23.net/",
						data: dataString,
						cache: false,
						success: function(data) {
								console.log(data);
								localStorage.track = 1;
								noti(1);

						},
						error: function(data)
						{
							noti(7);
						}
				});
		}
}

function noti(code){

	if(code==1){
		document.getElementById('notitext').innerHTML = "Submitted Successfully!! Track Your Submittion.";
		document.getElementById('idk').src = "other/suc.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==2) {
		document.getElementById('notitext').innerHTML = "Thanks for trying this app :) Do come back.";
		document.getElementById('idk').src = "other/thanks.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
				window.location.href= window.location.href;
			},400);
		},2500);
	}

	else if (code==3) {
		document.getElementById('notitext').innerHTML = "Made in India with love. Team Brackets. Memories Beta Version";
		document.getElementById('idk').src = "other/india.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==4) {
		document.getElementById('notitext').innerHTML = "Deleting all the data this App stores and logging out.";
		document.getElementById('idk').src = "other/rem.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
					localStorage.clear();
					sessionStorage.clear();

					document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

					window.location.href= window.location.href;

			},400);
		},5000);
	}
	else if (code==5) {
		document.getElementById('notitext').innerHTML = "This Feature is only available with Memories Pro App.";
		document.getElementById('idk').src = "other/card.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==6) {
		document.getElementById('notitext').innerHTML = "No tracking record found!! You may have cleared the app data.";
		document.getElementById('idk').src = "other/card.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==7) {
		document.getElementById('notitext').innerHTML = "Error Occured. Check your connection or report the developer.";
		document.getElementById('idk').src = "other/cellphone.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if(code==8){
		document.getElementById('notitext').innerHTML = "We need your ID proof! Don't leave it blank.";
		document.getElementById('idk').src = "other/id.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==9) {
		document.getElementById('notitext').innerHTML = "Enter something to proceed! Don't leave it blank.";
		document.getElementById('idk').src = "other/cellphone.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==10) {
		document.getElementById('notitext').innerHTML = "You are Offline. App requires Internet Connection";
		document.getElementById('idk').src = "other/cellphone.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},3000);
	}

}



function notif(code){

	if(code==1){
		document.getElementById('notitext').innerHTML = "Soumis avec succès!! Suivi de soumission.";
		document.getElementById('idk').src = "other/suc.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==2) {
		document.getElementById('notitext').innerHTML = "Merci d'avoir essayé cette app :) Ne revenez.";
		document.getElementById('idk').src = "other/thanks.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
				window.location.href= window.location.href;
			},400);
		},2500);
	}

	else if (code==3) {
		document.getElementById('notitext').innerHTML = "Fabriqué en Inde avec amour. Team Brackets. Memories Beta Version";
		document.getElementById('idk').src = "other/india.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==4) {
		document.getElementById('notitext').innerHTML = "Suppression de toutes les données ce magasin App et déconnexion.";
		document.getElementById('idk').src = "other/rem.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
					localStorage.clear();
					sessionStorage.clear();

					document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

					window.location.href= window.location.href;

			},400);
		},5000);
	}
	else if (code==5) {
		document.getElementById('notitext').innerHTML = "Cette fonction est disponible uniquement avec Souvenirs Pro App.";
		document.getElementById('idk').src = "other/card.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==6) {
		document.getElementById('notitext').innerHTML = "Aucun enregistrement de suivi trouvé! Vous pouvez avoir effacé les données de l'app.";
		document.getElementById('idk').src = "other/card.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==7) {
		document.getElementById('notitext').innerHTML = "Erreur est survenue. Vérifiez votre connexion ou signaler le développeur.";
		document.getElementById('idk').src = "other/card.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

}


function subn(){
	document.getElementById('proceed2').style.display = "block";
	document.getElementById('proceed2').className = "lowerBar animated slideInLeft"
	document.getElementById('proceed').style.display = "none";
}


function conflo(){
	document.getElementById('proceed3').style.display = "block";
	document.getElementById('proceed3').className = "lowerBar animated slideInLeft"
	document.getElementById('proceed2').style.display = "none";

}

function track(){
	var a = document.getElementById('track');
	if(localStorage.track)
	{
		document.getElementById('trackdetails').innerHTML = "Account : " + sessionStorage.email + "<br>Status : Request recieved. Under Process";
		document.getElementById('home').innerHTML = "Track Details";
		a.className = "animated fadeIn";
		a.style.display = "block";
		sideb();
	}
	else{
		noti(6);
	}
}


function closeOption(option){
	if(option==1)
	{
		document.getElementById('track').style.display = "none";
	}
	document.getElementById('home').innerHTML = "Home";
}


function changeLanguage(){
		sideb();
		document.getElementById('card').style.display = "block";
		document.getElementById('card').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('card').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('card').style.display = "none";
			},400);
		},5000);
}


function changeColorOption(){
		sideb();
		document.getElementById('card1').style.display = "block";
		document.getElementById('card1').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('card1').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('card1').style.display = "none";
			},400);
		},5000);
}

function changeToFrench(){
	document.getElementById('cser').innerHTML='<i class="fa fa-cog" style="display:inline;"></i> Recherche personnalisée';
	document.getElementById('up1').innerHTML='<img id="up1i" src="other/language.png" height="auto" width="100%" /><br>Changer de langue';
	document.getElementById('up2').innerHTML='<img id="up2i" src="other/up2.png" height="auto" width="100%" /><br>Navigateur privé';
	document.getElementById('up3').innerHTML='<img id="up3i" src="other/up3.png" height="auto" width="100%" /><br>Sous Forme de piste';
	document.getElementById('up4').innerHTML='<img id="up4i" src="other/theme.png" height="auto" width="100%" /><br>Change le thème';
	document.getElementById('d1').innerHTML='<img id="d1i" src="other/d1.png" height="auto" width="100%" /><br>Supprimer les données d App';
	document.getElementById('d2').innerHTML='<img id="d2i" src="other/d2.png" height="auto" width="100%" /><br>Contactez nous';
	document.getElementById('d3').innerHTML='<img id="d3i" src="other/d3.png" height="auto" width="100%" /><br>App Infos';
	document.getElementById('d4').innerHTML='<img id="d4i" src="other/d4.png" height="auto" width="100%" /><br>Se déconnecter';
	document.getElementById('sb').placeholder = "Entrez le terme de recherche ...";

	document.getElementById('d3').setAttribute( "onClick", "javascript: notif(3);" );
	document.getElementById('d1').setAttribute( "onClick", "javascript: notif(4);" );
	document.getElementById('d4').setAttribute( "onClick", "javascript: notif(2);" );

	document.getElementById('cw').setAttribute( "onClick", "javascript: notif(5);" );
	document.getElementById('fb').setAttribute( "onClick", "javascript: notif(5);" );
	document.getElementById('tw').setAttribute( "onClick", "javascript: notif(5);" );

	document.getElementById('csdetails').innerHTML="Éteignez les sites Web que vous ne voulez pas que votre moteur de recherche pour rechercher dans.";
	document.getElementById('wy').innerHTML='<img id="wyi" src="other/wy.png" height="auto" width="100%" /><br>Écrivez vous-même';
	document.getElementById('cw').innerHTML='<img id="cwi" src="other/cw.png" height="auto" width="100%" /><br>Template personnalisé';
	document.getElementById('dn').innerHTML='<img id="dni" src="other/dn.png" height="auto" width="100%" /><br>Soumettre';

	document.getElementById('remarkText').innerHTML='Système de suivi est en cours d élaboration. Ne vous inquiétez pas, nous vous informerons par e-mail tout.';
	document.getElementById('locatetext').innerHTML='Autoriser cette application à utiliser votre emplacement. ';
	document.getElementById('doctext').innerHTML='S il vous plaît télécharger votre ID Google Drive / onedrive et de fournir ici le lien partageable.';

	document.getElementById('ins').src="other/pic2.jpg";
}

function changeToEnglish(){
	document.getElementById('cser').innerHTML='<i class="fa fa-cog" style="display:inline;"></i> &nbsp; Custom Search';
	document.getElementById('up1').innerHTML='<img id="up1i" src="other/language.png" height="auto" width="100%" /><br>Change language';
	document.getElementById('up2').innerHTML='<img id="up2i" src="other/up2.png" height="auto" width="100%" /><br>Private Browser';
	document.getElementById('up3').innerHTML='<img id="up3i" src="other/up3.png" height="auto" width="100%" /><br>Track Submission';
	document.getElementById('up4').innerHTML='<img id="up4i" src="other/theme.png" height="auto" width="100%" /><br>Change Theme';
	document.getElementById('d1').innerHTML='<img id="d1i" src="other/d1.png" height="auto" width="100%" /><br>Delete App Data';
	document.getElementById('d2').innerHTML='<img id="d2i" src="other/d2.png" height="auto" width="100%" /><br>Contact us';
	document.getElementById('d3').innerHTML='<img id="d3i" src="other/d3.png" height="auto" width="100%" /><br>App Info';
	document.getElementById('d4').innerHTML='<img id="d4i" src="other/d4.png" height="auto" width="100%" /><br>Log out';
	document.getElementById('sb').placeholder = "Enter your search term ...";

	document.getElementById('d3').setAttribute( "onClick", "javascript: noti(3);" );
	document.getElementById('d1').setAttribute( "onClick", "javascript: noti(4);" );
	document.getElementById('d4').setAttribute( "onClick", "javascript: noti(2);" );

	document.getElementById('cw').setAttribute( "onClick", "javascript: noti(5);" );
	document.getElementById('fb').setAttribute( "onClick", "javascript: noti(5);" );
	document.getElementById('tw').setAttribute( "onClick", "javascript: noti(5);" );

	document.getElementById('csdetails').innerHTML="  Turn off the websites which you don't want our search engine to search in.";
	document.getElementById('wy').innerHTML='<img id="wyi" src="other/wy.png" height="auto" width="100%" /><br>Write Yourself';
	document.getElementById('cw').innerHTML='<img id="cwi" src="other/cw.png" height="auto" width="100%" /><br>Custom Template';
	document.getElementById('dn').innerHTML='<img id="dni" src="other/dn.png" height="auto" width="100%" /><br>Submit';

	document.getElementById('remarkText').innerHTML="Tracking System is under development. Don't worry, we'll inform you everyting via Email.";
	document.getElementById('locatetext').innerHTML='Allow this app to use your location. Location is important. ';
	document.getElementById('doctext').innerHTML='Please upload your ID to google drive/one drive and provide here the sharable link.';

		document.getElementById('ins').src="other/pic.png";
}

function changeColor(colorcode){
	var a;
	if (colorcode==1) {
			a = "#faacab";
			changenow(a);
	}
	else if (colorcode==2) {
		a = "#d3abfa";
		changenow(a);
	}
	else if (colorcode==3) {
		a = "#faabd2";
		changenow(a);
	}
	else {
		a = "#00ff99";
		changenow(a);
	}
}

function changenow(colCode){
	document.getElementById('card').style.backgroundColor = colCode;
	document.getElementById('card1').style.backgroundColor = colCode;
	document.getElementById('noti').style.backgroundColor = colCode;
		document.getElementById('lowerBar').style.backgroundColor = colCode;
		document.getElementById('upperBar').style.backgroundColor = colCode;
		document.getElementById('proceed').style.backgroundColor = colCode;
document.getElementById('proceed2').style.backgroundColor = colCode;
document.getElementById('proceed3').style.backgroundColor = colCode;

document.getElementById('customSearch').style.backgroundColor = colCode;
			changestatus(colCode);
}
