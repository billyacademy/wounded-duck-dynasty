(function(){Teaspoon.hook=function(t,e){var n,o;return null==e&&(e={}),n=null,(o=function(t,e,o){var a;if(window.XMLHttpRequest)n=new XMLHttpRequest;else if(window.ActiveXObject)try{n=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){a=t;try{n=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){a=t}}if(!n)throw"Unable to make Ajax Request";return n.onreadystatechange=o,n.open("POST",Teaspoon.root+"/"+t,!1),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify({args:e}))})(Teaspoon.suites.active+"/"+t,e,function(){if(4===n.readyState&&200!==n.status)throw'Unable to call hook "'+url+'".'})}}).call(this);