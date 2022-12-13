//sidebar
$("nav").attr("height", screen.height);
$("nav").addClass("close");
if($("body").innerWidth() < 400) $("nav").addClass("narrow");
$("#handle").on("click", function(){
    if($("body").innerWidth() > 400) $("nav").toggleClass("close");
    else $("nav").toggleClass("narrow");
})
// gallery
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
            // Add images
            let links = JSON.parse(data);
            $.each(links, function(idx, val){
                let aside = $("<aside></aside>");
                let img = $("<img>");
                $(img).attr("src", val.src);
                aside.append(img);
                $(".gal").append(aside);
            })
        },
        (err)=>{console.log(err)}
    )
}
$.when(jsonLoad()).then(function(){
    let slideIdx = 1;
    let slides = $(".gal").children("aside");
    function showSlide(n){
        if(n > slides.length) slideIdx = 1;
        else if (n < 1) slideIdx = slides.length;
        for(i = 0; i < slides.length; i++){
            $(slides[i]).css("display", "none").toggleClass("slide");
        }
        $(slides[slideIdx-1]).css("display", "flex").toggleClass("slide");
    }
    showSlide(slideIdx);
    $(".prev").on("click", function(){
        showSlide(slideIdx += -1);
    })
    $(".next").on("click", function(){
        showSlide(slideIdx += 1);
    })
})