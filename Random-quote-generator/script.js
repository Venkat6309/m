let genbtn=document.querySelector("#generate");
let text=document.querySelector("#introText");
let copy=document.querySelector("#copy");
let a=document.querySelector("#author")
let b=document.body;
var quote;
genbtn.addEventListener("click",()=>{
        fetch("https://api.quotable.io/quotes/random")
        .then((x)=>x.json())
        .then((data)=>{
            text.innerText=data[0].content;
            quote=data[0].content;
            a.innerText=`- ${data[0].author}`;    
        })
    })
copy.addEventListener("click",()=>{
    let ct=quote;
    navigator.clipboard.writeText(ct);
    console.log("copied");
    copy.innerText=`copied ✅`;
    copy.style.transition="0.5s"
    setTimeout(()=>{
        copy.innerText="Copy"
        copy.style.transition="0.5s"
    },800);
})

