data = {
    services:[
    {
        name: "Application Services",
        image: "images/application.png",
        features: ["Latest Technology", "Micro Service Architectiure"
         ,"Cloud Native","Test Driven Development"]
    },
    {
        name: "Testing Services",
        image: "images/testing.png",
        features: ["End to End Testing", "Performance Analysis"
         ,"Quality Assurance","Powerful tools"]
    },
    {
        name: "Infrastructure Services",
        image: "images/infrastructure.png",
        features: ["Cloud Services", "Low Cost"
         ,"Premium Hardware","High Performance"]
    }

]
}

function getalert(featuresalert){
   alert(featuresalert)
}

let code =""

for(let service of data.services){
    code+= "<div class='service-box'>"
    code+="<h3>"+service.name+"</h3>"
    code+="<img src='"+service.image+"'>"
    code+="<div class='features'> <ul>"
    for(let feature of service.features){
        code+="<li onclick=\"getalert('" + feature + "')\">"+feature+"</li>"
    }
    code+="</ul></div></div>"
}

document.getElementById("services-wrapper").innerHTML=code


