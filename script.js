///davaleba 1
const statusbar = document.createElement("div")
const form = document.getElementById('sign_up');
form.appendChild(statusbar);
form.addEventListener("submit", (e) => { 
    e.preventDefault();
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const textarea = document.getElementById("description").value;
});

 try {
        if (firstName.value.length < 6) { 
            document.getElementById("first_name").style.border = "3px solid red"
            throw new Error ('The name must be at least 6 letter long')
        } else { 
        document.getElementById("first_name").style.border = "2px solid green"
        statusbar.textContent = "Name is valid!"
        statusbar.style.fontSize = "20px"
        statusbar.style.color = "green";
        statusbar.style.fontWeight = "bold"
    }
     
    if (lastName.value.length < 6) {
        document.getElementById("last_name").style.border = "2px solid red"
        throw new Error('Last name must be at least 6 letters') 
        
    } else {
        document.getElementById("last_name").style.border = "2px solid green"
        statusbar.textContent = "Last name is valid"
        statusbar.style.color = "green";
        statusbar.style.fontWeight = "bold"
    }

    const validateEmail = (email) => {
        return email.match (
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    
      const validate = () => {
        const $result = $('#result');
        const email = $('#email').val();
        $result.text('');
      
        if(validateEmail(email)){
          $result.text(email + ' is valid.');
          $result.css('color', 'green');
        } else{
          $result.text(email + ' is invalid.');
          $result.css('color', 'red');
        }
        return false;
      }
      
      $('#email').on('input', validate);

    if (password.value.length < 6)
    { 
        document.getElementById("password").style.border = "2px solid red"
        throw new Error ("password must be at least 6 characters")
    }  else {
        document.getElementById("password").style.border = "2px solid green"
        statusbar.textContent = "Password is valid"
        statusbar.style.color = "green";

     } 
     if (confirmPassword !== password) {
        document.getElementById("confirm_password").style.border = "2px solid red"
        throw new Error( "passwords doesn't match!")
        
    } else {
        document.getElementById("confirm_password").style.border = "2px solid green"
        statusbar.textContent = "Passwords matches"
        statusbar.style.color = "green";

    }

        if (textarea.length > 100) { 
            document.getElementById("description").style.border = "2px solid red"
            throw new Error ("The description is too big")
        } else { 
            document.getElementById("description").style.border = "2px solid green"
            statusbar.textContent = "excelent description"
            statusbar.style.color = "green";

        }
    } catch (e) { 
        statusbar.textContent = e.message;
        statusbar.style.color = "red";
        statusbar.style.fontSize = "20px";
        statusbar.style.fontWeight = "bold"

};


////davaleba 2
const text = getElementById ('text');
const add = getElementById('add');
const lists = document.getElementById("list")
const handleClick = () => { 
    textValue.textContent = text.value;
    lists.style.color = "green";
    inputText.value = "";
}

add.addEventListener("click", handleClick)
  
///doesnot work 


////work 3

