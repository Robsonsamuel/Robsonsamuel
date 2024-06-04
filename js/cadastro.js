
async function cadastrar()
{
var nome=document.getElementById("nome");

var email=document.getElementById("email");
var password=document.getElementById("password");

    var coment={
        nome:nome.value,
        email:email.value,
        senha:password.value,
      
      }
      
     coment = JSON.stringify(coment);
  
      console.log(coment);
 
  
       
  
      
      const response = await fetch(`http:localhost:3001/criar_conta/usuarios/${coment}`,
      {
        method:'POST',
        body:coment,
        headers:{
          "Content-type":"application/json",
        },
     }
    

    );
    const  data = await response.json();
    console.log(data);


}