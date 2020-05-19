let p = document.getElementById("click");

let chuck = [
    "Chuck Norris est en couleur sur les photos Noir et Blanc.",
    "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
    "Chuck Norris est contre les radars automatiques : ça l'éblouit lorsqu'il fait du vélo.",
    "Chuck Norris sait parler le braille.",
    "Chuck Norris peut t'étrangler avec un téléphone sans fil.",
    "Quand chuck norris pisse face au vent, le vent préfère changer de direction.",
    "Quand chuck norris marche sur un râteau, le rateau se prend chuck norris dans la gueule.",
    "Chuck Norris n'a pas de père. On ne nique pas la mère de Chuck Norris.",
    "Chuck Norris peut encercler ses ennemis. Tout seul.",
    "Chuck Norris sait parler le braille.",
]

function generateQuote() {
    return chuck[Math.floor(Math.random() * chuck.length)]
}

function generateColor() {
let color = []

for (let i = 0 ; i < 3 ; i++)
    color.push(Math.floor(Math.random() * 255))

return color
}


function display() {
    let text = document.getElementById("chuckphrase")
    let color = generateColor()
    text.textContent = generateQuote()
    text.style.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

function color() {
    let colback = document.getElementById("colorback")
    let color = generateColor()
    colback.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}


p.addEventListener("click", display)
p.addEventListener("click", color)

display()
color()
