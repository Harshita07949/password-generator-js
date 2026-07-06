let generate=document.querySelector(".gen");
let len=document.querySelector(".num");

const genpass={
uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lowercase:"abcdefghijklmnopqrstuvwxyz",
symbols:"!@#$%",
numbers:"0123456789",
}
function pass(){
   let password="";
   let allowedcharc="";
   let condition=document.querySelectorAll(".type:checked");
   let passwordLength= len.value;
   condition.forEach((checkbox) => {
      const type=checkbox.value;
      if(genpass[type]){
        allowedcharc+=genpass[type];
    }
});    
    if (allowedcharc === "") {
        alert("Please select at least one character type!");
        return ;
    
    }

for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedcharc.length);
        password += allowedcharc.charAt(randomIndex);
    }
    document.querySelector(".pass").innerText="Password suggested is :" +" "+password;
     document.querySelector(".pass").style.textAlign="center";
     document.querySelector(".pass").style.lineHeight="4rem";
     document.querySelector(".pass").style.backgroundColor="#373b6e";
}    
  

generate.addEventListener("click",()=>{
    pass();
});