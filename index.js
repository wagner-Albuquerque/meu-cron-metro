var sec = 0
var min = 0
var hr = 0
var interval 

function doisDigito(digito){
    if(digito<10){
        return ("0"+digito)
    }else{
        return (digito)
    }
}

function start(){
    contador()
    interval = setInterval(contador, 1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    min=0
    sec=0
    document.getElementById("contador").innerText="00:00:00"
}

function contador(){
    sec++ 
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById("contador").innerText=doisDigito(hr)+":"+doisDigito(min)+":"+doisDigito(sec)
}