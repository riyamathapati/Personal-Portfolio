
let wrapper
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function writingAll (stringTarget, container){
  wrapper = document.querySelector('['+container+']')
  const stringsContainer = document.getElementsByClassName(stringTarget)
     
  while(wrapper){
    for (i=0; i <  stringsContainer.length ; i++){
      const string = stringsContainer[i].textContent
      await write(string)
      await sleep(1000)
      await erase()
      await sleep(1000)
    };
  }
};

async function write(text){    
  let index = 0
  while(index < text.length){
    const timeout = 100
    await sleep(timeout)
    index++
    wrapper.innerHTML = text.substring(0, index)
  }
};


async function erase() {
  while(wrapper.textContent.length){
    const timeout = 100
    await sleep(timeout)
    wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2)
  }
};

writingAll('item', 'data-text');

// startofcustomcursor
var main=document.querySelector("#skills");
var crsr=document.querySelector(".cursor");


main.addEventListener("mousemove",function(riiii){
    crsr.style.left= riiii.x+"px";
    crsr.style.top=riiii.y+"px";

})


var main1=document.querySelector("#Projects");
var crsr1=document.querySelector(".cursor2");


main1.addEventListener("mousemove",function(cursor2){
    crsr1.style.left= cursor2.x+"px";
    crsr1.style.top=cursor2.y+"px";

})




























