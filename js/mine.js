var alert2 = document.getElementById("second al")

var alert1 = document.getElementById("first al")

var bookmarkName = document.getElementById("bookmarkname")

var websiteUrl = document.getElementById("websiteurl")

var row = document.getElementById("mydiv")

var websites;


 


if(localStorage.getItem("mywebsites") == null)
{
    websites = [] ;
}

else
{
    websites = JSON.parse (localStorage.getItem("mywebsites"))
    show ()

}

mybtn.onclick = function()
{

    

    if (bookmarkName.value  == "" ||  websiteUrl.value   == "" )
    {
       if(bookmarkName.value  == "")
       {
           warning1()
       }
       if(bookmarkName.value  !== "")
       {
        alert1.style.display= "none"
       }

       if(websiteUrl.value   == "")
       {
           warning2()
       }

       if(websiteUrl.value   !== "")
       {
        alert2.style.display = "none"

       }
    }

   

 
 else 
 {
    add()
    show()

    alert1.style.display= "none"
    alert2.style.display = "none"
    
    
    
 }
}


function add() 
{
    var website = 
    {
        siteName : bookmarkName.value ,

        websiteurl : websiteUrl.value ,
    }

   
    websites.push(website)
    localStorage.setItem("mywebsites" , JSON.stringify(websites))
    show () 
  

}


function show () 
{
    var col = "" ;
    
    for(i = 0 ; i < websites.length ; i++)
    {
        col += `<div class="col-md-12">

                <div class="mine row my-3"> 
                <h3 class="my-5 col-md-3">`+websites[i].siteName+`</h3>
               <a href="http://`+websites[i].websiteurl+`" target="_blank" > <button class="btn btn-primary  my-5 mx-3 " > visit </button> </a>
                <button class="btn btn-danger my-5 " onclick="delet(`+i+`)" > delete </button>

                </div>
                </div>

        `

        
    }
    row.innerHTML=col

    
    
   
}

function delet(index)
{
    websites.splice(index,1)
    localStorage.setItem("mywebsites" , JSON.stringify(websites))
    show()
}


function warning1()
{
   var firstAL = `<div class="alert alert-danger" role="alert">
   Name is required
 </div>`

 alert1.innerHTML = firstAL

 
}

function warning2()
{
    var secAl = `<div class="alert alert-danger" role="alert">
 Url Field is required
</div>`

alert2.innerHTML = secAl
}

