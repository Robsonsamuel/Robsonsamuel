






//serve para pegar dados da variavel do parametro
const  urlSearchParams = new URLSearchParams(window.location.search);

//utiliza-se o get para pegar os dados que precisamos
const postID=urlSearchParams.get('id');


console.log(postID);

$mensagem=document.getElementById('msg');


$criar_conta=document.getElementById('login');

$actualizar_conta=document.getElementById('actualizar');

const mensage=document.getElementById("mensagem");
mensage.style.display="none";
$criar_conta.style.display="none";
$actualizar_conta.style.display="none";
async function Buscar_Todos_Clientes(){
  const url="http:localhost:3001/usuario"

  if(postID>0)
    {
      $actualizar_conta.style.display="block";
    }
  const response = await fetch(url,
    {
      method:'GET',
      headers:{
        "Content-type":"application/json",
      },
    }
  );

  const  data = await response.json();

  
  
  $table=document.getElementById('tabela');

  $thead=document.querySelector('thead tr');
  
  

  
  $headNOME=document.createElement('th');
  $headNOME.innerText="NOME";
  $headSENHA=document.createElement('th');
  $headSENHA.innerText="SENHA";
  $headEMAIL=document.createElement('th');
  $headEMAIL.innerText="EMAIL";
  

  $headOPCOES=document.createElement('th');
  $headOPCOES.innerText="OPÇÕES";
  $headOPCOES.style.colSpan="2";

  $thead.appendChild($headNOME);
  $thead.appendChild($headEMAIL);
  $thead.appendChild($headSENHA);
 
  $thead.appendChild($headOPCOES);
  
  $mensagem.innerText="Nenhum cliente cadastrado";
  data.map((post)=>{

   
    
    $mensagem.innerText="";
    $tr=document.createElement('tr');
    $id=document.createElement('td');
    $nome=document.createElement('td');
    $email=document.createElement('td');
    $senha=document.createElement('td');
    
    $editar=document.createElement('td');
    $excluir=document.createElement('td');

    $editar.id="editar";
    $excluir.id="excluir";

    $linkEdite =document.createElement('a');
    $linkDelete =document.createElement('a');
   

    $id.innerText=post.id;
    $nome.innerText=post.nome;
    $senha.innerText=post.senha;
    $email.innerText=post.email;

  
    $linkEdite.innerText="Editar";
    $linkEdite.onclick=function(){
      
      window.location.href = (`usuarioslogados.html?id=${post.id}`);//.replace('T23:00:00.000Z', '');
      $actualizar_conta.style.display="block";
    
   }


    $linkDelete.setAttribute("href",`deletar_cliente.html?id=${post.id}`);
    $linkDelete.innerText="Excluir";


    //Para as colunas de uma linha
  
    $tr.appendChild($nome);
    $tr.appendChild($email);
    $tr.appendChild($senha);
    $tr.appendChild($editar);

    $editar.appendChild($linkEdite);
    $tr.appendChild($editar);


    $excluir.appendChild($linkDelete);
    $tr.appendChild($excluir);

  
    
    // para as linhas
    $table.appendChild($tr);


      
  
      if($mensagem.value=="Nenhum cliente cadastrado"){
        $table.style.display="none";

      }
      else
      {
        $table.style.display="block";
      }
  });
};
Buscar_Todos_Clientes();




//---------------------------------funcao para criar conta--------------------------------------------

const nome=document.getElementById("nome");
const senha=document.getElementById("senha");
const email=document.getElementById("email");

const mensagem=document.getElementById("mensagem");
const ms=document.getElementById("ms");
const sair=document.getElementById("sair");
const login=document.getElementById("login");

mensagem.style.display="none";



async function cadastrar()
{
var nome=document.getElementById("nome");
var email=document.getElementById("email");
var password=document.getElementById("senha");

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

async function Update_Cliente($id){

  const url="http:localhost:3001/update/usuarios"
  
  
  const nome=document.querySelector("#actualizar #nome");
  const senha=document.querySelector("#actualizar #senha");
  const email=document.querySelector("#actualizar #email");
 
  
  
  const mensagem=document.getElementById("mensagem");
  const ms=document.getElementById("ms");
  const sair=document.getElementById("sair");
  
  const registar=document.getElementById("registar");
  
  mensagem.style.display="none";
  
  
  console.log(postID);
   
  let coment={
    nome:nome.value,
    email:email.value,
    senha:senha.value,
   

  }
   
 
  coment = JSON.stringify(coment);
  const response = await fetch(`${url}/${coment}/${$id}`,
    {
      method:'PUT',
      body:coment,
      headers:{
        "Content-type":"application/json",
      },
    }
    
  );
  console.log(coment);

  const  data = await response.json();

  console.log(data);
  window.location.href = 'usuarioslogados.html';

 
  

}


function fecharMensagem(){
  mensagem.style.display="none";
}


function fechar_cadastro(){
  $criar_conta.style.display="none";
}
function abrir_cadastro(){
  $criar_conta.style.display="block";
}

function fechar_actualizar(){
  $actualizar_conta.style.display="none";
}
function abrir_actualizar(){
  $actualizar_conta.style.display="block";
}
