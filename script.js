function init() {
    items = []
    listOut = document.getElementById("list")
    popupOut = document.getElementById("popup")

    addItem("Apple", 1)

    display()
}

function addItem(name, quantity) {
    let item = {
        "name" : name,
        "quantity" : quantity
    };

    items.push(item)
}

function remove(index) {
    items.splice(index, 1);
    display();
}

function swap(i1, i2) {
    let temp = items[i1];
    items[i1] = items[i2];
    items[i2] = temp
}

function moveUp(index)
{
    if (index != 0)
    {
        swap(index, index-1);
        display();
    }
    
}

function moveDown(index)
{
    if (index != items.length-1)
    {
        swap(index, index+1)
        display();
    }
    
}

function add() {
    let name = document.forms["form"]["name"].value;
    let amount = document.forms["form"]["amount"].value;

    console.log(name, amount)
    let index = -1;

    for (i in items)
    {
        if (items[i]["name"] == name) index = i;
    }

    if (index == -1) addItem(name, amount);
    else 
    {
        let newAmount = Number(items[index]["quantity"]) + Number(amount);
        items[index]["quantity"] = newAmount;
    }

    document.forms["form"]["name"].value = "";
    document.forms["form"]["amount"].value = "1";
    hide();
    display();
}

function show() {
    popupOut.style.display = "flex";
}

function hide() {
    popupOut.style.display = "none";
}

function display() {
    listOut.innerHTML = "";
    for (let i in items)
    {
        let item = items[i];
        let num = Number(i) + 1;
        listOut.innerHTML += `
        <div class='item'>
            <div class='name'>${num}.     ${item["name"]}</div>
            <div class='group'>
                <div class='quantity'>${item["quantity"]}x</div>
                <div>
                    <button class='move-button' onclick='moveUp(${i});'><div class='arrow up'></div></button>
                    <button class='move-button' onclick='moveDown(${i});'><div class='arrow down'></div></button>
                </div>
                <button class='remove' onclick='remove(${i});'><img src='images/trash.png'></button>
            </div>
        </div>`
    }
}

