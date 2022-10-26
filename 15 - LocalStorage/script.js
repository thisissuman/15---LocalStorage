const additems = document.querySelector('.add-items');
//console.log(additems);
const plates = document.querySelector('.plates');
console.log(plates.innerHTML);
const items = [];

function additem(params) {
    params.preventDefault();
    const text1 = document.querySelector('[name=item]'); 
    // or
    const text = document.querySelector('input').value; 
    //console.log(text);
    const item = {
        text : text,
        added : false
    }
    
    items.push(item);
    console.log(item);
    //console.log(this);
    buildhtml(items,plates);
    this.reset();
}

function buildhtml(platesss = [],additemsss) {
    additemsss.innerHTML = platesss.map((plate,i) => {
        return `<input type="checkbox" id="item${i}"> <li><label for="item${i}">${plate.text}</label></li>`;
    }).join('');

    console.log(additemsss.innerHTML);
}

additems.addEventListener('submit', additem);