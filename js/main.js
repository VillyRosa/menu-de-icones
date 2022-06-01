var body = window.document.querySelector("body");
var container = window.document.querySelector("div.container");
var icons = window.document.querySelectorAll("svg.icons");
var pointer = window.document.querySelector("svg#pointer");

function change(i){
    if (i == 0) 
    {
        pointer.style = "margin: 0 222px 0 0; stroke: white;"
        icons[i].style = "color: #0F91F3;"
        container.style = "background-color: white; box-shadow: 0px 0px 20px 2px black;"
        body.style = "background: rgb(34,79,182);"
    } 
    else if (i == 1)
    {
        pointer.style = "margin: 0 74px 0 0; stroke: white;"
        icons[i].style = "color: #B03AA1;"
        container.style = "background-color: white; box-shadow: 0px 0px 20px 2px black;"
        body.style = "background: rgb(84,89,202); background: linear-gradient(132deg, rgba(84,89,202,1) 0%, rgba(244,78,84,1) 50%, rgba(255,212,83,1) 100%);"
    }
    else if (i == 2)
    {
        pointer.style = "margin: 0 0 0 77px; stroke: white;"
        icons[i].style = "color: #0F91F3;"
        container.style = "background-color: white; box-shadow: 0px 0px 20px 2px black;"
        body.style = "background: #4CA2E5;"
    }
    else if (i == 3)
    {
        pointer.style = "margin: 0 0 0 227px; stroke: white;"
        icons[i].style = "color: #C31E1D;"
        container.style = "background-color: white; box-shadow: 0px 0px 20px 2px black;"
        body.style = "background: #F20000;"
    } 
}

function unChange(i){
    pointer.style = "margin: 0 0 0 0; stroke: #c000ffa3;"
    icons[i].style = "color: #3c3838;"
    container.style = "background-color: #c000ffa3; box-shadow: 0px 0px 20px 3px #620581;"
    body.style = "background-color: #a891bd;"
}