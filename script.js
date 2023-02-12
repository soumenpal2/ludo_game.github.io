

function ludogame() {
    const play1 = Math.floor(Math.random()*6)+1;

    const play1dice =`Untitled${play1}.png`;
    document.getElementById('check1').setAttribute("src",play1dice);

    const play2 = Math.floor(Math.random()*6)+1;

    const play2dice =`Untitled${play2}.png`;
    document.getElementById('check2').setAttribute("src",play2dice);

if(play1>play2)
{
    document.querySelector('h1').innerHTML="congratulation ! player 1 you won. "
} else if(play1<play2)
{
    document.querySelector('h1').innerHTML="congratulation ! player 2 you won. " 
}else{
    document.querySelector('h1').innerHTML="congratulation ! match is draw. "
}

}