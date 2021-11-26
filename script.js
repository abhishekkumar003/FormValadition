

function Val()
{
    user_val();
    email_val();
    pass_val();
    cpass_val();

    return false;
}

function user_val()
{
    var user_data = document.getElementById('username').value;
    const user_msg = document.getElementById('user_msg');

    user_data = user_data.trim();

    if(user_data == '')
    {
        user_msg.innerHTML = "*Please Enter Username";
    }

    else if(user_data.length <= 5)
    {
        user_msg.innerHTML = "*Username must contain more than 5 letters";
    }

    else{
        user_msg.innerHTML = " ";
    }

}

function email_val()
{
    const email_data = document.getElementById('email').value;
    const email_msg = document.getElementById('email_msg');

    if(email_data == '')
    {
        email_msg.innerHTML = "*Please Enter Email";
    }

    else if(email_data.indexOf('@')<=0)
    {
        email_msg.innerHTML = "*Please Enter Correct Email";
    }

    else if((email_data.charAt(email_data.length-4)!=".") && (email_data.charAt(email_data.length-3)!="."))
    {
        email_msg.innerHTML = "*Please Enter Correct Email";
    }

    else{
        email_msg.innerHTML = " ";
    }

}

var pass_data;

function pass_val()
{
    pass_data = document.getElementById('password').value;
    const pass_msg = document.getElementById('pass_msg');

    pass_data = pass_data.trim();

    if(pass_data == '')
    {
        pass_msg.innerHTML = "*Please Enter Password"
    }

    else if(pass_data.length <= 5)
    {
        pass_msg.innerHTML = "*Password Must Contain more than 5 letter";
    }

    else{
        pass_msg.innerHTML = " ";
    }


}

function cpass_val()
{
    const cpass_data = document.getElementById('cpassword').value;
    const cpass_msg = document.getElementById('cpass_msg');

    if(cpass_data == '')
    {
        cpass_msg.innerHTML = "*Please Renter the Password";
    }

    else if(cpass_data != pass_data)
    {
        cpass_msg.innerHTML = "*Please Enter Same Password as above";
    }

    else{
        cpass_msg.innerHTML = " ";
    }

}