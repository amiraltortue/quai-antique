const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");


btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //ici, il faudra appeler l'api pour vérifier les credentials en BDD;

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123456"){
      
        // il faudra récuperer le vrai token
        const token = "ldkkdldkldldkldkdfkfldlqfjkslslfjfksfjfjkdjjfl";
        setToken(token);

        //placer ce token en cookie

setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}