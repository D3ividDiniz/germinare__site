const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
let showQrCode = false;

let id = 0;

function carrossel(){
    id++;
    if (id > img.length - 1){
        id = 0;
    }
    imgs.style.transform = `translateX(${-id*32.6}rem)`;

}
setInterval(carrossel, 1800);

const botao = document.getElementById("doacao_btn")
const img_doacao = document.getElementById("img_amigoGerm")
const qr_doacao = document.getElementById("doacao")

botao.onclick = () => {
    if(!showQrCode){
        img_doacao.style.cssText = `
        display: none;
        `;
        qr_doacao.style.cssText =`
        display: flex;
        flex-direction: column;
        margin: 6.22rem 0 0 2.22rem;
        width: 50%;
        gap: 1rem;`;

        showQrCode = true;
    }else{
        img_doacao.style.cssText = ``;
        qr_doacao.style.cssText =``;
        showQrCode = false;
    }

}