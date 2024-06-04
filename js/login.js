const url="http:localhost:3001/usuario"




async function logar(){
const email=document.getElementById("email");
const senha=document.getElementById("senha");


  /*
  
  const response = await fetch(url,{method:'GET'})
  console.log(response);

*/

 let coment={
   email:email.value,
   senha:senha.value
 }
  

 coment = JSON.stringify(coment);


 if(email.value!="" && senha.value!="" )
  {

 
const response = await fetch(`${url}/${coment}`,
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

var $id="";
var $vsenha=""
var $vemail="";
data.map((post)=>{

   $id=post.id;
   $vemail=post.email;
   $vsenha=post.senha;
});




if(email.value==$vemail && senha.value==$vsenha )
  {

window.location.href = 'p2.html?id='+$id;
email.value="";
senha.value="";
/*senha.value="";
telefone.value="";*/
console.log("conectado");
  }
  else
  {
   /* ms.innerText="Erro ao validar dados";
    mensagem.style.display="block";*/
    console.log("erro");
  }
  }
  else
  {
    /*
    ms.innerText="Preencha os campos vasios";
    mensagem.style.display="block";*/
  }

console.log(coment);
email.value="";
senha.value="";

}


function fecharMensagem(){
  mensagem.style.display="none";
}


