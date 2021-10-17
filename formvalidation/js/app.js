// UI
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpasswod = document.getElementById('cfmpassword');

// Event Listener (Method 1)
// form.addEventListener('submit',function (e){
//     // console.log("hay");
//     e.preventDefault();
//     // console.log('hay');
//     if(username.value === ''){
//         showerror(username, 'Username is required');
//     }else{
//         showsuccess(username);
//     }
//
//     if(email.value === ''){
//         showerror(email,'Email is required');
//     }else if(!validateEmail(email.value)){
//         showerror(email,'Email is not valid');
//     }else{
//         showsuccess(email);
//     }
//
//     if(password.value === ''){
//         showerror(password,'Password is required');
//     }else{
//         showsuccess(password);
//     }
//
//     if(cfmpasswod.value === ''){
//         showerror(cfmpasswod,'Confirm password is requried');
//     }else if(password.value !== cfmpasswod.value){
//         showerror(cfmpasswod,'Password is not match');
//     } else{
//         showsuccess(cfmpasswod);
//     }
// });

// Event Listener (Method 2)
form.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log(e.target);
    checkrequired([username,email,password,cfmpasswod]);

    checklength(username,3,15);
    checklength(password,6,25);

    checkemail(email);
    checkpasswordsmatch(password,cfmpasswod);
});


function showerror(input,message){
    const formcontrol = input.parentElement;
    // console.log(formcontrol);
    formcontrol.className = "form-control error";

    const small = formcontrol.querySelector('small');
    // console.log(small);
    small.innerText = message;
}

function showsuccess(input){
    const formcontrol = input.parentElement;
    // formcontrol.classList.remove('error');
    // formcontrol.classList.add('success');
    formcontrol.className = "form-control success";
}

// // for checking email format (regular expression)
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkrequired(inputarrs){

    inputarrs.forEach(function (inputarr){
    // console.log(inputarr.value);

        if(inputarr.value === ''){
            showerror(inputarr,`${getfieldname(inputarr)} is required`);
        }else{
            showsuccess(inputarr);
        }
    });
}

// Get Field Name
function getfieldname(inputarr){
    // return inputarr.id;
    return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);

    // userrnamem  Usrname
}

// Check Input Length
function checklength(input,min,max){
    if(input.value.length < min){
        showerror(input,`${getfieldname(input)} must be least ${min} characters`);
    }else if(input.value.length > max){
        showerror(input,`${getfieldname(input)} must be less than ${max} characters`);
    }else{
        showsuccess(input);
    }
}

// For Checking Email Format (regular expression)
function checkemail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value)){
        showsuccess(input);
    }else{
        showerror(input,'Email is not valid');
    }
}

// Check Password Match
function checkpasswordsmatch(input1,input2){
    if(input1.value !== input2.value){
        showerror(input2,'Password do not match');
    }
}
