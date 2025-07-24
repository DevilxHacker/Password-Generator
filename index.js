function copyPassword() {
  const passwordField = document.getElementById("generatedPassword");
  navigator.clipboard.writeText(passwordField.value);
  alert("Password copied to clipboard!");
}

function updateTextInput(val) {
  document.getElementById("password-length").value = val;
  updateRangeInput(val);
  console.log(val);
}

function updateRangeInput(val) {
  document.getElementById("password-length-slider").value = val;
  console.log(val);
  updateTextInput(val);
}

function NewPassword() {
  const length = parseInt(document.getElementById("password-length").value);
  const UC = document.getElementById("uppercase").checked;
  const LC = document.getElementById("lowercase").checked;
  const Num = document.getElementById("numbers").checked;
  const S = document.getElementById("symbols").checked;

  
    const UCchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LCchar = 'abcdefghijklmnopqrstuvwxyz';
    const Numchar = '0123456789';
    const Schar = '!@#$%^&*()_+[]{}|;:,.<>?';

  let i=0;
    
    let allChars = '';
    if (UC) { allChars += UCchar; i++; }
    if (LC) { allChars += LCchar; i++; }
    if (Num) { allChars += Numchar; i++;}
    if (S) { allChars += Schar; i++;}
    if(i===0){
      alert("Please! Select atleast 1 character type");
    document.getElementById('generatedPassword').value ='';}
   else{

     let password = '';
     for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * allChars.length);
       password += allChars[randomIndex];
     }
     console.log(password);
     document.getElementById('generatedPassword').value = password;
   }
    

}
