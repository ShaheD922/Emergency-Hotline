// my  function

function getElement(id)
{
  return document.getElementById(id);
}


function getInnerText(id)
{
 return parseInt(getElement(id).innerText);
}




// my heart
getElement("heart").addEventListener("click",function()

{

getElement("heart-Count").innerText = getInnerText("heart-Count")+1;

});

const heartIcons =document.querySelectorAll(".card .fa-heart");

for (let i=0;i<heartIcons.length;i++)   
{
  heartIcons[i].addEventListener("click", function () 
  {
    
    const heartCount = document.getElementById("heart-Count");
    heartCount.innerText = parseInt(heartCount.innerText) + 1;

  
  });
}

const copyButtons = document.querySelectorAll(".card .btn");

for (let i = 0; i < copyButtons.length; i++) {
  if (copyButtons[i].querySelector(".fa-copy")) {
    copyButtons[i].addEventListener("click", function () 
    {
      const card = this.parentNode.parentNode;
      const number= card.querySelector(".num-btn").innerText;
      navigator.clipboard.writeText(number);

     
      const copyCount =document.getElementById("copy-Count");
      copyCount.innerText =parseInt(copyCount.innerText) + 1;

     
      alert("Copied: " + number);
    });
  }
}

const callButtons = document.querySelectorAll(".card .call-btn");

for (let i=0;i<callButtons.length;i++) 
    
  {
  callButtons[i].addEventListener("click", function () 
  {
   
    const card = this.parentElement.parentElement; 
    const serviceName = card.querySelector(".font-bold").innerText;
    const serviceNumber = card.querySelector(".text-2xl").innerText;

    if (getInnerText("coin-Count")<20) 
    {
      alert("Not enough coins to call");
      return;
    }

    getElement("coin-Count").innerText = getInnerText("coin-Count") - 20;
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    const historyList = getElement("historyList");
    const now = new Date();

    const newHistory = document.createElement("div");
    newHistory.className = "flex justify-between items-center border-b pb-2 py-20";

    newHistory.innerHTML = `
      <div>
        <div class="text-xl font-bold">${serviceName}</div>
        <div class="text-gray-500 text-xl">${serviceNumber}</div>
      </div>
      <div class="text-gray-500 text-xl font-sm">${now.toLocaleTimeString()}
      </div>
    `;

    historyList.appendChild(newHistory);
  });




}



getElement("copy-btn").addEventListener("click", function () 
{
  getElement("historyList").innerHTML = "";
});