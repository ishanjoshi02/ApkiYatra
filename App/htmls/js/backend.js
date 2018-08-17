function checkLogin(){
    if(!localStorage.userName)
	{
		document.getElementById('appLoginScreen').style.display="block";
	}
	else{
		document.getElementById('appMainScreen').style.display="block";
	}
	var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById('appLoginScreen').style.height = h + "px";
    document.getElementById('appLoginScreen').style.width = w + "px";

     document.getElementById('appMainScreen').style.height = h + "px";
    document.getElementById('appMainScreen').style.width = w + "px";

    document.getElementById("googleMap").innerHTML='<object type="text/html" data="home.html" id="googleMap1" ></object>';
    
}


function abcde(){
	document.getElementById("googleMap").innerHTML='<object type="text/html" data="home.html" id="googleMap1" ></object>';
}

var a=0;
function displayOptions() {
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


function noti(code){

	if(code==1){
		document.getElementById('notitext').innerHTML = "Submitted Successfully!! Soon get a Notification.";
		document.getElementById('idk').src = "assets/images/suc.png";
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
		document.getElementById('idk').src = "assets/images/thanks.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			localStorage.clear();
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
				window.location.href= window.location.href;
			},400);
		},2500);
	}

	else if (code==3) {
		document.getElementById('notitext').innerHTML = "Made in India with love. Team Thirst. Thirst Beta Version";
		document.getElementById('idk').src = "assets/images/india.png";
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
		document.getElementById('notitext').innerHTML = "You are Offline. App requires Internet Connection";
		document.getElementById('idk').src = "assets/images/cellphone.png";
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



function showScreen(options)
{
	if(options==1)
	{
		document.getElementById('firstScreen').style.display="block";
		document.getElementById('secondScreen').style.display="none";
		document.getElementById('thirdScreen').style.display="none";
		document.getElementById('title').innerHTML="Home";
	}
	else if(options==2)
	{
		document.getElementById('firstScreen').style.display="none";
		document.getElementById('secondScreen').style.display="block";
		document.getElementById('thirdScreen').style.display="none";
		document.getElementById('title').innerHTML="Water Details";
	}
	else if(options==3)
	{
		document.getElementById('firstScreen').style.display="none";
		document.getElementById('secondScreen').style.display="none";
		document.getElementById('thirdScreen').style.display="block";
		document.getElementById('title').innerHTML="News";
	}
	else{
		document.getElementById('proceed3').style.display = "block";
	document.getElementById('proceed3').className = "lowerBar animated slideInLeft"

	}
}


function clopro3f() {
	document.getElementById('proceed3').className = "lowerBar animated slideOutLeft";

	setTimeout(function(){
		document.getElementById('proceed3').style.display = "none";
	},300);

}

function showRegisterOption(){
	document.getElementById('proceed3').style.display = "block";
	document.getElementById('proceed3').className = "lowerBar animated slideInLeft"
	displayOptions();
}

/*setInterval(function(){
	var dataString = "";
	$.ajax({
				type: "GET",
				url: "http://10.131.126.24:3003/car?source=abc",
				data: dataString,
				cache: false,
				success: function(data) {
				},
				error: function(data)
				{
					noti(4);
				}
		});
}, 5000);*/


 function login() {
	 
	 if(document.getElementById('docbar').value==""){
				noti(5);
		}
	 else{
				localStorage.userName = document.getElementById('docbar').value;
				document.getElementById('appLoginScreen').className = "appLoginScreen animated fadeOut";
                document.getElementById('welcomeMessageScreen').style.display= "block";
                document.getElementById('hey').className = "animated fadeIn";
				document.getElementById('name').innerHTML = localStorage.userName ;

                setTimeout(function(){
              		document.getElementById('appMainScreen').style.display = "block";
              	  document.getElementById('appMainScreen').className = "appMainScreen animated fadeIn";
              	},2000);
              	setTimeout(function(){
              		document.getElementById('appLoginScreen').style.display = "none";
					document.getElementById('welcomeMessageScreen').style.display= "none";
              	},3000);

              	setTimeout(function(){
					//initialize();
              	},5000);
	 }
 }
