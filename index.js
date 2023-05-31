const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black" ? update("black", "white") : update("white", "black")
);

const select1 = document.querySelector("div select");
select1.addEventListener("change",printTable);

function printTable(){
    digit = select1.value;
    for(let i=1;i<=10;i++){
        line = document.createElement("p");
        line.innerHTML = `${digit} X ${i} = ${digit*i}`;
        document.body.appendChild(line);
    }
}

var contacts = [
    "Asim Habib: 03014481147",
    "Habib Ullah:03004120601",
    "Hj.Abdul Latif:03054575669",    
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");


btn.addEventListener("click",()=>{
    const name = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts){
        const splitContact = contact.split(":");
        if(splitContact[0].toLowerCase() === name){
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }
    if(para.textContent = ""){
        para.textContent = "contact not found";
    }
});