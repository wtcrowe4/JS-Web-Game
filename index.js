// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)


//Global Variables
let horizonLine = window.innerHeight / 2
let sky = window.innerHeight - horizonLine
let grass = horizonLine
let inventory

//Adding Background
function tile(url, left, bottom, width, height){
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            newImage(url, left + x*100, bottom + y*100)
        }
    }
}

tile('assets/sky.png', 0, horizonLine, window.innerWidth/100, sky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, grass/100) 


//Function to add images to page
function newImage(file, left, bottom) {
    let item = document.createElement('img')
    item.src = file
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)
    return item
}

//Function to add clickable items and place them in Inventory
function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('dblclick', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
}

//Adding Inventory to page
function newInventory(){
    inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '80px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}


//Adding images to page
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//Adding clickable items
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

//Adding Inventory
newInventory()