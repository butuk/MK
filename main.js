//alert('Привет!');

const player1 = {
    id: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['shotgun', 'knife'],
    attack: function (){
        console.log(`${this.name} fights!`)
    }
};

const player2 = {
    id: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['gun'],
    attack: function (){
        console.log(`${this.name} fights!`)
    }
};

function createDiv(nameOfClass) {
    const div = document.createElement('div');
    div.classList.add(nameOfClass);
    return div;
}

function addChild(parent, child) {
     return parent.appendChild(child);
}

function createPlayer(player, object) {
    
    const $arenas = document.querySelector('.arenas');
    const $player = createDiv(`player${object.id}`);
    const $progressbar = createDiv('progressbar');
    const $character = createDiv('character');
    const $life = createDiv('life');
    const $name = createDiv('name');

    addChild($arenas, $player);
    addChild($player, $progressbar);
    addChild($player, $character);
    addChild($progressbar,$life);
    addChild($progressbar, $name);

    $img = document.createElement('img');
    $img.src= object.img;
    addChild($character, $img);

    $name.innerText = object.name;

}

createPlayer('player1', player1);
createPlayer('player2', player2);

