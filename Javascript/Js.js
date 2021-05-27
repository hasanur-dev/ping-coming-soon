let email = document.getElementById('email');
let evalue = email.value;
let errormsgds = document.getElementById("errormsgds");
let errormsgmb = document.getElementById("errormsgmb");
let tomatch = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function validate(){
    if(email.value.match(tomatch)){
        errormsgds.innerText="";
        errormsgmb.innerText="";
        return true;
    }
    else if(email.value.length < 1){
        errormsgds.innerText="Whoops! It looks like you forgot to add your email";
        errormsgmb.innerText="Whoops! It looks like you forgot to add your email";
        email.style.cssText="border: 0.12rem solid hsl(354, 100%, 66%)"
        return false;
    } 
    else{
        errormsgds.innerHTML="Please provide a valid email address";
        errormsgmb.innerHTML="Please provide a valid email address";
        return false;
}
};




//            ()