const card_private=document.querySelector("#card-private")
const card_publice=document.querySelector("#card-publice")
const card_lab=document.querySelector("#card-labratory")

const clicks=document.querySelector("#click")


const card_fetch=async()=>{
    const result=await fetch(`http://localhost:3300/cards/`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
})
    const data=await result.json()
    let content1=""
    let content2=""
    let content3=""
    data.map(data=>{ 
        if (data.tag=="private hospital"){
            content1+=`
        <div  class="col-sm-7 col-md-5 col-lg-3">
            <div class="card">
                <div class="card-body text-center">
                        <img
                            class="img-fluid rounded"
                            src='${data.logo_path}'
                            alt="Amin Hospital log"
                        />
                        <h3 id="h3" class="pb-2 pt-4 fs-5">${data.title}</h3>
                        <a onclick="finds(document.getElementById('${data._id}').textContent)"
                            class="btn py-0 px-4 text-decoration-none border border-3"
                            href="./main.html"
                            
                        >Get info</a>
                        <div class="hidden_id" id="${data._id}">${data._id}</div>
                </div>
            </div>
        </div>
            `
        }
        if (data.tag=="public hospital"){
            content2+=`
        <div  class="col-sm-7 col-md-5 col-lg-3">
            <div class="card">
                <div class="card-body text-center">
                        <img
                            class="img-fluid rounded"
                            src='${data.logo_path}'
                            alt="Amin Hospital log"
                        />
                        <h3 id="h3" class="pb-2 pt-4 fs-5">${data.title}</h3>
                        <a onclick="finds(document.getElementById('${data._id}').textContent)"
                            class="btn py-0 px-4 text-decoration-none border border-3"
                            href="./main.html"
                        >Get info</a>
                        <div class="hidden_id" id="${data._id}">${data._id}</div>
                </div>
            </div>
        </div>
            `
        }
        if (data.tag=="Laboratory"){
            content3+=`
        <div  class="col-sm-7 col-md-5 col-lg-3">
            <div class="card">
                <div class="card-body text-center">
                        <img
                            class="img-fluid rounded"
                            src='${data.logo_path}'
                            alt="Amin Hospital log"
                        />
                        <h3 id="h3" class="pb-2 pt-4 fs-5">${data.title}</h3>
                        <a onclick="finds(document.getElementById('${data._id}').textContent)"
                            class="btn py-0 px-4 text-decoration-none border border-3"
                            href="./main.html"
                            
                        >Get info</a>
                        <div class="hidden_id" id="${data._id}">${data._id}</div>
                </div>
            </div>
        </div>
            `
        }
        
        
    })
    card_private.innerHTML=content1
    card_publice.innerHTML=content2
    card_lab.innerHTML=content3
}
card_fetch()
function finds(id){
    localStorage.removeItem("id")
    localStorage.setItem("id",id)
}
const main_fetch=async(id)=>{
    const result=await fetch(`http://localhost:3300/cards/${id}`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
})
    const data=await result.json()
    let main_page=""
    main_page=`
        <div class="row justify-content-center gap-5">
        <div class="col-lg-5 col-sm-10">
          <video class="img-fluid" src="${data.video_path}" controls></video>
          <div class="row justify-content-start align-items-center shadow-lg mt-3 rounded p-2">
            <div class="col-3">
              <img class="img-fluid" src="${data.image_path[0]}" alt="Amin hospital logo" />
            </div>
            <div class="col-3">
              <img class="img-fluid" src="${data.image_path[1]}" alt="Amin hospital labratory" />
            </div>
            <div class="col-6">
              <audio class="w-100" src="${data.audio_path}" controls></audio>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-sm-10">
          <h2>${data.title}</h2>
          <p class="fs-5">
            ${data.description}
          </p>
          <h2>Address</h2>
          <p class="fs-5">
            ${data.Address.textual}
          </p>
          <a href="${data.Address.map}"
            class="btn shadow-lg px-5">map</a>
        </div>
      </div>
      <div class="w-75 col-3 mt-3 ms-4">
        <h2>Services</h2>
        ${data.Service}
      </div>
        `
    const main=document.querySelector("#main")
    main.innerHTML=main_page
}
main_fetch(localStorage.getItem("id"))