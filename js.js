  function Login(){
       
        var username = document.forms["form"]["username"].value;
        var password = document.forms["form"]["password"].value;
        if(username=="admin" || password=="admin"){
            alert("Login Berhasil!, Lanjutkan ?");
            window.open("home.html", "_parent")
            
        }
        else{
            alert("Login Gagal!");
        }
}
function reset(){

    document.input.user.value=" ";
    document.input.pass.value=" ";

}

