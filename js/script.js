let gal = $("article")[3];
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
                let img = $(gal).add("<img alt='${idx}'>");
                img.attr("src", val.src);
                $(gal).append(img);
            })
        },
        (err)=>{console.log(err)}
    )
}
jsonLoad();