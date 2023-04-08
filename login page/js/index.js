//fetching the employee data form the json file

//var userinfo;
var userinfo;





//targeting the element using dom

var username = document.getElementById("username");
var password = document.getElementById("password");
var dcode = document.getElementById("dcode");
//error box

var error =  document.getElementsByClassName("error")[0];
//validating data 
// when user will submit the form
document.body.getElementById('submit').onclick = ()=>{

    fetch('./../json/Employee.json')

// it return in the text formate so converted in the json

.then(data =>data.json())

//now use the data
.then(data=>{
//assiging the all information in the user infor variable
        userinfo = data;


        userinfo.Employee.forEach(element => {

        
            //first check for the username
    
            
    
            if(element.Username == username.value)
            {
                //once username matched check with the password
    
                if(element.Password == password.value)
    
                {
    
                    //check the dealer code
    
                    if(element.Dcode == dcode.value)
                    {
                            //redirect to the other page
    
                            //saving in the local storrag
                            let name = localStorage.setItem("name",element.Name)
    
                            location.href = "./../welcome.html";
    
    
    
                    }else
                    {
                        error.style.display = "block";
                    }
                }else
                {
                    error.style.display = "block";
                }
    
            }else
            {
                error.style.display = "block";
            }
    
    
        });
    
    

})

    
    //first validating the user name 

   


}