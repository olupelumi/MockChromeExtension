



document.addEventListener('DOMContentLoaded', function() {
        var x, i, xmlDoc;
        var txt = "";
        var orig_txt;
        var checkPageButton = document.getElementById('xmlButton');
        checkPageButton.addEventListener('click', function() {
                console.log("hello");
                //onclick="loadXMLDoc()"
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                        
                        if (this.readyState == 4 && this.status == 200) {
                        //document.getElementById("demo").innerHTML = this.responseText;
                        orig_txt = this.responseText;
                  }
                };
                //xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://riceowls.com/services/calendar.ashx?type=rss", true);
                xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://riceowls.com/services/scores.aspx", true); //this is where the request is actually occurring
                xhttp.send(); // is this sending the request out?
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(orig_txt,"text/xml")//First parameter is the xml text and the second parameter is the content type of the 
                x = xmlDoc.documentElement.childNodes;
                for (i = 0; i < x.length; i++) {
                        txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>"
                }
                document.getElementById("demo").innerHTML = txt;
        }, false);
      }, false);





// function loadXMLDoc() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("demo").innerHTML =
//             this.responseText;
//           }
//         };
//         xhttp.open("GET", "xmlhttp_info.txt", true);
//         xhttp.send();
//       }
