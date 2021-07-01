function listImages(){
   // var i =document.getElementById("cd1").value
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://192.168.43.98/cgi-bin/listImg.py", true);
    xhr.send();
    
    xhr.onload = function (){
    document.getElementById("output").innerHTML = xhr.responseText;
    }}

function listContainers(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://192.168.43.98/cgi-bin/listCon.py",true);
    xhr.send()

    xhr.onload = function(){
    document.getElementById("output").innerHTML = xhr.responseText;
    }
}
function otherCmd() {
    var i = document.getElementsById("cmd").value ;
    var j = document.getElementById("attr").value ;
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://192.168.43.98/cgi-bin/otherCmd.py?x= ${i}& y= ${j}", true)

    xhr.onload = function(){
        document.getElementById("output").innerHTML = xhr.responseText;
    }

}
function kubernetes(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://192.168.43.98/cgi-bin/dockercmd.py?x= " + document.getElementById("kube_input").value,"true");
    xhr.send();
    xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("output").innerHTML = output.responseText;
}
}
