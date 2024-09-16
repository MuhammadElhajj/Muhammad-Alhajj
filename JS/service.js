let list = document.querySelector(".list");


let MyService = function (icon , h2Contant , pContant){
let div = document.createElement("div");
list.appendChild(div);
let i = document.createElement("i");
i.classList = `${icon} hi`;
div.appendChild(i);
let h2 = document.createElement("h2");
h2.className = "hi";
div.appendChild(h2);
h2.appendChild(document.createTextNode(h2Contant));
let p = document.createElement("p");
p.className = "hello";
div.appendChild(p);
p.appendChild(document.createTextNode(pContant));
let a = document.createElement("a");
a.className = "a";
div.appendChild(a);
a.appendChild(document.createTextNode("Learn More"));
}

let MyServiceList = function (icon , h2Contant ,length , licontant1 , licontant2 , licontant3 , licontant4 , licontant5 , licontant6 , licontant7){

    let div = document.createElement("div");
list.appendChild(div);
let i = document.createElement("i");
i.classList = `${icon} hi`;
div.appendChild(i);
let h2 = document.createElement("h2");
h2.className = "hi";
div.appendChild(h2);
h2.appendChild(document.createTextNode(h2Contant));

let ul = document.createElement("ul")
ul.className = "hello";
div.appendChild(ul);

// let licontant  = [licontant1 , licontant2 , licontant3 , licontant4 ,licontant5]
let licontant  = [licontant1 , licontant2 , licontant3 , licontant4 ,licontant5 , licontant6 ,licontant7]

for (let i = 0 ; i < length ; i++)
{
    let li = document.createElement("li");
    ul.appendChild(li);
    li.appendChild(document.createTextNode(licontant[i]))
}


let a = document.createElement("a");
a.className = "a";
div.appendChild(a);
a.appendChild(document.createTextNode("Learn More"));
a.href = "#";


}





MyService ("fa-solid fa-code" , "Web Designing" , "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis corrupti officiis sit similique saepe et ea minus .....")
MyService("fa-solid fa-crop" , "UX/UI Design" , "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquam hic iste. Quis, odio veniam maxime tempora placeat facilis. Ut deserunt amet quis! Quae odit exercitationem numquam commodi magnam incidunt.")
MyServiceList("fab fa-app-store" , "App Devices" ,7, "I have a lot of Portfolui ..." , "amazing bye ...", "Have a good relation with other people ...","Nice in using JS skills every where & Time ...", "Making able to finsh on time ..." , "Making perfect pixel ..." , "Making very nice design ...")