var memes=document.getElementsByClassName("meme");
    var textM=document.getElementsByClassName("memetext");
    var memebut=document.getElementsByClassName("memebut");
function Slider0(){
    var numarr=[1,2,3];
    memes.item(0).style.visibility="visible";
    memes.item(0).style.opacity="1";
    textM.item(0).style.visibility="visible";
    textM.item(0).style.opacity="1";
    memebut.item(0).style.backgroundColor="black";
    for(var i=0;i<numarr.length;++i){           
        memes.item(numarr[i]).style.visibility="hidden";
        memes.item(numarr[i]).style.opacity="0";
        textM.item(numarr[i]).style.visibility="hidden";
        textM.item(numarr[i]).style.opacity="0";
        memebut.item(numarr[i]).style.backgroundColor="lightblue";
    }
}
function Slider1(){
    var numarr=[0,2,3];
    memes.item(1).style.visibility="visible";
    memes.item(1).style.opacity="1";
    textM.item(1).style.visibility="visible";
    textM.item(1).style.opacity="1";
    memebut.item(1).style.backgroundColor="black";
    for(var i=0;i<numarr.length;++i){
        memes.item(numarr[i]).style.visibility="hidden";
        memes.item(numarr[i]).style.opacity="0";
        textM.item(numarr[i]).style.visibility="hidden";
        textM.item(numarr[i]).style.opacity="0";
        memebut.item(numarr[i]).style.backgroundColor="lightblue";
    }
}
function Slider2(){
    var numarr=[0,1,3];
    memes.item(2).style.visibility="visible";
    memes.item(2).style.opacity="1";
    textM.item(2).style.visibility="visible";
    textM.item(2).style.opacity="1";
    memebut.item(2).style.backgroundColor="black";
    for(var i=0;i<numarr.length;++i){
        memes.item(numarr[i]).style.visibility="hidden";
        memes.item(numarr[i]).style.opacity="0";
        textM.item(numarr[i]).style.visibility="hidden";
        textM.item(numarr[i]).style.opacity="0";
        memebut.item(numarr[i]).style.backgroundColor="lightblue";
    }
}
function Slider3(){
    var numarr=[0,1,2];
    memes.item(3).style.visibility="visible";
    memes.item(3).style.opacity="1";
    textM.item(3).style.visibility="visible";
    textM.item(3).style.opacity="1";
    memebut.item(3).style.backgroundColor="black";
    for(var i=0;i<numarr.length;++i){
        memes.item(numarr[i]).style.visibility="hidden";
        memes.item(numarr[i]).style.opacity="0";
        textM.item(numarr[i]).style.visibility="hidden";
        textM.item(numarr[i]).style.opacity="0";
        memebut.item(numarr[i]).style.backgroundColor="lightblue";
    }
}
