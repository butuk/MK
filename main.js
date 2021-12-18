//alert('Привет!');
const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button')

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['shotgun', 'knife'],
    attack: function (){
        console.log(`${this.name} fights!`)
    }
};

const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['gun'],
    attack: function (){
        console.log(`${this.name} fights!`)
    }
};

function createElement(tag, nameOfClass) {
    const element = document.createElement(tag);
    if (nameOfClass) {
        element.classList.add(nameOfClass);
    };
    return element;
}

function addChild(parent, child) {
     return parent.appendChild(child);
}

function createPlayer(object) {
    const $player = createElement('div', `player${object.player}`);
    const $progressbar = createElement('div','progressbar');
    const $character = createElement('div','character');
    const $life = createElement('div','life');
    const $name = createElement('div','name');
    const $img = createElement('img')

    addChild($player, $progressbar);
    addChild($player, $character);
    addChild($progressbar,$life);
    addChild($progressbar, $name);

    addChild($character, $img);
    $img.src= object.img;
    $name.innerText = object.name;
    $life.style.width = '100%';

    return $player;
}

addChild($arenas, createPlayer(player1));
addChild($arenas, createPlayer(player2));


function changeHP(player) {
    const $playerLife = document.querySelector('.player'+player.player+' .life');

    const randomNum = Math.random()*20;

    player.hp -= randomNum;
    $playerLife.style.width = player.hp + '%';

    if(player.hp < 0) {
        player.hp == 0;
        $playerLife.style.width = 0;
        addChild($arenas,  playerLose(player.name))
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';
    $randomButton.disabled = true;
    return $loseTitle;
}

$randomButton.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
})

alert('test');