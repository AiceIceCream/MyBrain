function reg(){
    var username = document.querySelector('#usr');
    var password = document.querySelector('#loginPassword');
    var email = document.querySelector('#loginEmail');

    if(username.value == '' || password.value == '' || email.value == ''){
        alert('Please input what is required!');
    } else {
        var user = {
            username: username.value,
            password: password.value,
            email: email.value
        }

        var json = JSON.stringify(user);

        localStorage.setItem('user', json);
        console.log('User Added');
        alert('You are now registered! Click ok to continue');

        username.value = '';
        password.value = '';
        email.value = '';
    }
}

function auth(){
    var username = document.querySelector('#loginEmail').value;
    var password = document.querySelector('#loginPassword').value;
    var user = localStorage.getItem('user');
    var key = JSON.parse(user);

    if(username == '' && password == ''){
        alert('Please input what is required!');
    } else if((username == key.username || username == key['email']) && password == key.password){
        window.location.assign("home.html");
        alert('Successfully Login!');
    } else if(username == "admin@gmail.com" && password == "admin123"){
        window.location.assign("home.html");
        alert('Successfully Login as Admin!');
    } else {
        alert('User Not Found!');
    }
    document.getElementById("sign").innerHTML = username;

}