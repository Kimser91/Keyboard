let userLetters = [];

updateVeiw();
function updateVeiw()
{
    document.getElementById('app').innerHTML = 
    `
    <div id="mainDiv" class="container">
    <div id="display"></div>
    <div class="line">
    <div id="A" class="buttons" onclick="getLetter(this)">A</div>
    <div id="B" class="buttons" onclick="getLetter(this)">B</div>
    <div id="C" class="buttons" onclick="getLetter(this)">C</div>
    <div id="C" class="buttons" onclick="getLetter(this)">D</div>
    <div id="C" class="buttons" onclick="getLetter(this)">E</div>
    <div id="C" class="buttons" onclick="getLetter(this)">F</div>
    <div id="C" class="buttons" onclick="getLetter(this)">G</div>
    <div id="C" class="buttons" onclick="getLetter(this)">H</div>
    <div id="C" class="buttons" onclick="getLetter(this)">I</div>
    </div>
    <div class="line">
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">J</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">K</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">L</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">M</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">N</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">O</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">P</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">Q</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">R</div>
     </div>
     <div class="line">
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">S</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">T</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">U</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">V</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">W</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">X</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">Y</div>
    <div id="C" class="buttons" onclick="getLetter(this.innerHTML)">Z</div>
    <div id="C" class="backSpace" onclick="reset()">Back Space</div>
    </div>
    </div>
    `;
}

function reset() {location.reload();}

function getLetter(letter) 
{
    userLetters += letter;
    console.log(userLetters)
    printList()
}

function printList()
{
    let allWords = "";
    
    for(i = 0; i < userLetters.length; i++) 
        {
            allWords += `${userLetters[i]}, `
        }
       
       document.getElementById('display').innerHTML = allWords;
}