import React from 'react';

// 1) Esquerda

// 1.1 - feed

  function Post(props) {
    // State Variables
    const VALOR_INICIAL = 'heart-outline';
    const [isLiked, setIsLiked] = React.useState(VALOR_INICIAL);
    
    // Logic
    function likeChange() {
      setIsLiked((isLiked === 'heart') ? 'heart-outline' : 'heart');
    }

    //  UI 
    return (
      <div class="post">
        <div class="topo">
          <div class="usuario">
          <img src={props.userImg} />
          {props.user}
          </div>

          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo" onClick={likeChange}>
          <img src={props.img} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div class={isLiked}>
              <ion-icon name={isLiked} onClick={likeChange}></ion-icon>
              {actionIcons.map(icon => <ion-icon name={icon}></ion-icon>)}
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.likedByImg} />
            <div class="texto">
              Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.numLikes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const actionIcons = ["chatbubble-outline", "paper-plane-outline"];
  const posts = [
    {userImg:"assets/img/meowed.svg", user: "meowed", img: "assets/img/gato-telefone.svg",
    likedByImg: "assets/img/respondeai.svg", likedBy:"respondeai", numLikes: "101.523"},
    {userImg: "assets/img/barked.svg", user: "barked", img: "assets/img/dog.svg", 
    likedByImg: "assets/img/adorable_animals.svg", likedby:"adorable_animals", numLikes:"99.159"}];
// 1.2 - Stories
function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} />
      </div>
      <div class="usuario">
        {props.user}
      </div>
    </div>
  )
}
 
const stories = [
  {img:"assets/img/9gag.svg", user:"9gag"}, {img:"assets/img/meowed.svg", user:"meowed"}, {img: "assets/img/barked.svg", user: "barked"},
  {img:"assets/img/nathanwpylestrangeplanet.svg" , user:"nathanwpylestrangeplanet"}, {img:"assets/img/wawawicomics.svg", user: "wawawicomics"},
  {img:"assets/img/respondeai.svg", user: "respondeai"}, {img: "assets/img/filomoderna.svg", user: "filomoderna"},
  {img: "assets/img/memeriagourmet.svg", user: "memeriagourmet"}];

// 2) Sidebar

function User(props) {
  return (
    <div class="usuario">
              <img src={props.img} />
              <div class="texto">
                <strong>{props.strong}</strong>
                {props.nick}
              </div>
            </div>
  );
}

function Sugestion(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.img} />
        <div class="texto">
          <div class="nome">{props.name}</div>
          <div class="razao">{props.reason}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
  </div>
  );
}

const sugestions = [
  {img:'assets/img/bad.vibes.memes.svg', name:'bad.vibes.memes', reason:'Segue você'}, 
  {img:"assets/img/chibirdart.svg", name:"chibirdart", reason:"Segue você"},
  {img:"assets/img/razoesparaacreditar.svg", name:"razoesparaacreditar", reason:"Novo no Instagram"}, 
  {img:"assets/img/adorable_animals.svg", name:"adorable_animals", reason:"Segue você"},
  {img:"assets/img/smallcutecats.svg", name:"smallcutecats", reason:"Segue você"}];


  export default function Corpo() {
    return (
        <div class="corpo">
          <div class="esquerda">
            <div class="stories">
 
              {stories.map(st => <Story img={st.img} user={st.user} />)}
              <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
              </div>

            </div>

            <div class="posts">
              {posts.map(pst => <Post userImg={pst.userImg} user={pst.user} img={pst.img} likedByImg={pst.likedByImg} likedBy={pst.likedBy} numLikes={pst.numLikes} />)}
            </div>
          </div>

          <div class="sidebar">

            <User img="assets/img/catanacomics.svg" strong="catanacomics" nick="Catana" />

            <div class="sugestoes">
              <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
              </div>
              
              {sugestions.map(sug => <Sugestion img={sug.img} name={sug.name} reason={sug.reason} />)}

              <div class="links">
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
              </div>

              <div class="copyright">
              © 2021 INSTAGRAM DO FACEBOOK
              </div>
            </div>
          </div>
        </div>
    );
}  