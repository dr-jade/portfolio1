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
            let ul = $("<ul></ul>");
            $.each(links, function(idx, val){
                let li = $("<li></li>");
                li.css("background-image", "url("+val.src+")");
                $(ul).append(li);
                $(".gal").append(ul);
            })
        },
        (err)=>{console.log(err)}
    )
}
$.when(jsonLoad()).then(function setSlide(){
    let slides = $(".gal").children("ul").children("li");
    let wrapWidth = $(".works").width();
    $(slides).css("width", wrapWidth);
    let slCount = slides.length;
    let slWidth =  slides.width();
    let slHeight = slides.height();
    let sliderWidth = slCount * slWidth;
    $(".gal").css({"max-width": slWidth, "height": slHeight});
    $(".gal ul").css({"width": sliderWidth, "margin-left": -slWidth});
    $(".gal ul li:last-child").prependTo($(".gal ul"));
    $(".gal ul li:last-child").appendTo($(".gal ul"));
    $(".prev").on("click", function(){
        $(".gal ul").stop().animate({
            left: + slWidth
        }, 700, function(){
            $(".gal ul li:last-child").prependTo($(".gal ul"));
            $(".gal ul").css("left", "");
        })
    })
    $(".next").on("click", function(){
        $(".gal ul").stop().animate({
            left: - slWidth
        }, 700, function(){
            $(".gal ul li:first-child").appendTo($(".gal ul"));
            $(".gal ul").css("left", "");
        })
    })
    $(window).resize(function(){
        setSlide();
    })
})