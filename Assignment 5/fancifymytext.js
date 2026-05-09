function bigger(){
    document.getElementById("text").style.fontSize = "24pt";
}

function fancy(){
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function boring(){
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}

function moo(){
    var str = document.getElementById("text").value;
    str = str.toUpperCase();
    var parts = str.split(".");
    str = parts.join("-Moo.");
    document.getElementById("text").value = str;
}