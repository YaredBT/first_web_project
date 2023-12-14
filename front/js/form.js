

const form=document.getElementById("form-add-hospital")
const title=document.getElementById("title")
const logo=document.getElementById("logo")
const description=document.getElementById("description")
const textual=document.getElementById("textual")
const map=document.getElementById("map")
const videoFile=document.getElementById("videoFile")
const imageFile=document.getElementById("imageFile")
const audioFile=document.getElementById("audioFile")
const services=document.getElementById("services")
const filter=document.getElementById("filter")
const button=document.getElementById("submit-button")


function Add_Hospital(){
  
    let formdata=new FormData()
    formdata.append("photos",logo.files[0])
    const postlogo=async (formdata)=>{
                        const response= await fetch("http://localhost:3300/files/photos",{
                            method:"Post",
                            body:formdata
                        })
                        const result=await response.json()
                        
                        localStorage("logo_path","./images/"+result.files.originalname)
                    }
    postlogo(formdata)

    let formdata1=new FormData()
    formdata1.append("photos",imageFile.files[0])
    const postimage=async (formdata)=>{
                        const response= await fetch("http://localhost:3300/files/photos",{
                            method:"Post",
                            body:formdata
                        })
                        const result=await response.json()
                        
                        localStorage("image_path","./images/"+result.files.originalname)
                    }
    postimage(formdata1)

    let formdata2=new FormData()
    formdata2.append("audio",audioFile.files[0])
    const postaudio=async (formdata)=>{
                        const response= await fetch("http://localhost:3300/files/audio",{
                            method:"Post",
                            body:formdata
                        })
                        const result=await response.json()
                        
                        localStorage("audio_path","./audio/"+result.files.originalname)
                    }
    postaudio(formdata2)

    let formdata3=new FormData()
    formdata3.append("video",videoFile.files[0])
    const postvideo=async (formdata)=>{
                        const response= await fetch("http://localhost:3300/files/video",{
                            method:"Post",
                            body:formdata
                        })
                        const result=await response.json()
                        
                        localStorage("video_path","./video/"+result.files.originalname)
                    }
    postvideo(formdata3)

    const newHospital={
    title:title.value,
    logo_path:localStorage.getItem("logo_path"),
    description:description.value,
    Address:{
      textual:textual.value,
      map:map.value
    },
    vedio_path:localStorage.getItem("video_path"),
    images_path:localStorage.getItem("image_path")
    ,
    audio_path:localStorage.getItem("audio_path"),
    services:services.value,
    tag:filter.value
  }
  
  console.logo(newHospital)
  alert(newHospital.title)

  const Create_Hospital=async()=>{
    const result=await fetch(`http://localhost:3300/cards/`,{
      method:"Post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(newHospital)
    })
    result=await result.json()
    if(result.status==201){
      alert(newHospital.title+" Created SuccessFull")
    }
    alert(result.message)
  }
  Create_Hospital()
  // window.location.href="./index.html"
}
localStorage.clear()