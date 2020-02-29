document.addEventListener('DOMContentLoaded', function() {
        var x, i, xmlDoc;
        var txt = "";
        var orig_txt;

        //  const getData = () => {
                
        //  }



        var checkPageButton = document.getElementById('xmlButton');
        checkPageButton.addEventListener('click', function() {
                console.log("hello");
                //onclick="loadXMLDoc()"
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                        
                        if (this.readyState == 4 && this.status == 200) {
                                console.log(this.responseText);
                                
                         //document.getElementById("demo").innerHTML = this.responseText;
                                orig_txt = this.responseText;
                                parser = new DOMParser();
                                xmlDoc = parser.parseFromString(orig_txt,"text/xml")//First parameter is the xml text and the second parameter is the content type of the 
                                x = xmlDoc.documentElement.childNodes;
                                console.log(x);
                                console.log(x.length);
                                let count = 1;
                                let sportType;
                                //iterating over all the games in the stream
                                for (i = 1; i < x.length-1; i+=2) {
                                        //console.log(i);
                                       // console.log(x[i].childNodes.item(7));
                                        //console.log(x[i].childNodes);
                                        let childNodeLst = x[i].childNodes;
                                        //iteration over the information 
                                        for (valIdx = 0;i < childNodeLst.length;i++){ //iterating through childNode
                                                console.log("id: " + childNodeLst[valIdx].id);
                                                if (childNodeLst[valIdx].id == "sport_abbrev"){
                                                        console.log("does this check ever work?");
                                                        console.log("sport_abbrev: " + childNodeLst[valIdx].id);
                                                        sportType = childNodeLst[valIdx].innerHTML;
                                                }
                                        }

                                        console.log(sportType);
                                        if (sportType == "BB"){
                                                //the date plus the sport type plus the opponent
                                                //console.log(count);
                                                txt += x[i].children.namedItem("date").innerHTML + ": " + sportType + " vs " + x[i].children.namedItem("opponent").innerHTML + "<br>"
                                        }
                                        count +=1;
                                }
                                //console.log(txt);
                                document.getElementById("demo").innerHTML = txt;
                

                        }
                };
                //xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://riceowls.com/services/calendar.ashx?type=rss", true);
                
                //open prepares an http request to be sent
                xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://riceowls.com/services/scores.aspx", true); 
                //this actually sends the request
                xhttp.send(); 
                
                
                
                
                
                
                
                
                
                //parser = new DOMParser();
		//xmlDoc = parser.parseFromString(orig_txt,"text/xml")//First parameter is the xml text and the second parameter is the content type of the 
                //x = xmlDoc.documentElement.childNodes;
                // for (i = 0; i < x.length; i++) {
                //         txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>"
                // }
                // document.getElementById("demo").innerHTML = txt;
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
