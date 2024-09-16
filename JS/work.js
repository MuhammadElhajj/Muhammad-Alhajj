let workList = document.querySelector(".work-list");




let workfunction = function (photo , h2contant , pcontant){

    let div  = document.createElement("div");
    div.className = "my-work";
    workList.appendChild(div);

    let img = document.createElement("img");
    div.appendChild(img);
    img.src = photo ;


    let layer = document.createElement("div");
    layer.className = "layer";
    div.appendChild(layer);


    let h2 = document.createElement("h2");
    layer.appendChild(h2)
    h2.appendChild(document.createTextNode(h2contant))

    let p = document.createElement("p");
    layer.appendChild(p)
    p.appendChild(document.createTextNode(pcontant))


    let a = document.createElement("a")
    layer.appendChild(a);
    a.href = "#";

    let i = document.createElement("i")
    i.className = "fas fa-external-link-alt" ;
    a.appendChild(i);
}


workfunction("../Images/work-1.jpg" , "Desktop App" ,"I have made an application for desktop devices ...");
workfunction("../Images/work-2.jpg" , "Mobile App" ,"I have made an application for mobile devices ...");
workfunction("../Images/work-3.jpg" , "Online Shopping App" ,"I have a web site called ReStorEm for online shopping...");