// sidebar
$("nav").attr("height", screen.height);
$("nav").addClass("close");
if($("body").innerWidth() < 400) $("nav").addClass("narrow");
$("#handle").on("click", function(){
    if($("body").innerWidth() > 400) $("nav").toggleClass("close");
    else{
        $("nav").toggleClass("narrow");
    }
})

// gallery
let gal = $("article")[6];
const jsonLoad = async() => {
    const loadData = new Promise((res)=>{
        let xmlReq = new XMLHttpRequest();
        xmlReq.onload = () => {
            if(xmlReq.status == 200) res(xmlReq.response);
        }
        xmlReq.open("GET", "./data/imgSrc.json");
        xmlReq.send();
    }).then(
        (data)=>{
            let links = JSON.parse(data);
            $.each(links, function(idx, val){
                let img = $("<img>");
                img.attr("src", val.src);
                img.attr("alt", "pic"+idx);
                $(gal).append(img);
            })
        },
        (err)=>{console.log(err)}
    )
}
jsonLoad();