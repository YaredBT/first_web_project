const { json } = require("express")
const e = require("express")

function signup_handler(){
    
    const fullname=document.querySelector("#fullname").value
    const email=document.querySelector("#email").value
    const username=document.querySelector("#username").value
    const password=document.querySelector("#password").value
    const Confirm_password=document.querySelector("#password2").value
    

    if(!password==Confirm_password){
        return alert("Confirm password is not same with password")
    }
    const newUser={
        Full_name:fullname,
        Username:username,
        password:password,
        email:email,
        confirm_password:Confirm_password
    }
    const postuser=async (newUser)=>{
                        const response= await fetch("http://localhost:3300/auth/signup",{
                            method:"Post",
                            headers:{
                                "Accept":"application/json,text/plain"
                                ,
                                "Content-Type":"application/json"
                                },
                            body:JSON.stringify(newUser)
                        })
                        const result=await response.json()
                        if (!result.statusCode==400){
                            localStorage.setItem("access_token",result.access_token)
                            alert(result.access_token)
                        }
                        alert(result.message)
                    }
    postuser(newUser)
    window.location.href="./index.html"
    
}






function login_handler(){
    let username=document.querySelector("#log-username").value
    let Password=document.querySelector("#log-password").value
    const usered=document.querySelector("username_nav")
    
    
    let user={
        Username:username,
        password:Password
    }


    const login=async (User)=>{

        const login_btn=document.querySelector("#btn_login")
        const logout_btn=document.querySelector("#btn_logout")

                        const response= await fetch("http://localhost:3300/auth/login",{
                            method:"Post",
                            headers:{
                                "Accept":"application/json,text/plain"
                                ,
                                "Content-Type":"application/json"
                                },
                            body:JSON.stringify(User)
                        })
                        const result=await response.json()
                        if(result.statusCode==400){
                            alert("Error ocuerd")
                        }
                        else{
                            localStorage.setItem("access_token",result.access_token)
                            window.location.href="./index.html"
                        }
                        
                    }
    login(user)
 
}

    



async function Add(){
    access_token=localStorage.getItem("access_token")
        
        const response= await fetch("http://localhost:3300/auth/user",{
        method:"Get",
        headers:{
            "Authorization":`Bearer ${access_token}`
        },
        })
        const result=await response.json()
        
        if(!result.Username){
            window.location.href="./login.html"
        }
        else{
            window.location.href="./form.html"
        }
}

function logOut (){         
    localStorage.removeItem("access_token")
    
}
function logIn(){
    window.location.href="./login.html"
}


