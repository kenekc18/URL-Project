let btn = document.querySelector(".btn-form");
let box = document.getElementById("inputbox");
let old_link = document.querySelector(".old-link")
let new_link = document.querySelector('.api-link');
let link = document.querySelector('.new-short-link');
let apiUrll = "https://api-ssl.bitly.com/v4/shorten";
let inputbox = document.querySelector("#inputbox")

async function shorten(url){
    try{
        let real_link = await fetch(apiUrll,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 2d1e5578739c50899d1ecb478281d507b4b860d3'
            },
            body: JSON.stringify({"long_url": url, "domain": "bit.ly", "group_guid": "BncteWHgnx8"})
        })
        if (real_link.ok){
            let url_link = await real_link.json();
            new_link.innerHTML = `<a href="${url_link.link}">${url_link.link}</a>`
            old_link.innerHTML = `${inputbox.value}`
        }else{
            new_link.innerHTML = "Link could not be shortened";
            new_link.style.color = "red";
            new_link.style.backgroundColour = "gray";
        }
    }catch(error){
        console.error("Error during fetch", error);
    }
}



btn.addEventListener('click', ()=>{
    link.classList.add('short-link');
    shorten(box.value)
})