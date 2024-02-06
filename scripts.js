function DrawBoard()
{
    let numberBoxesPerSide= GetNumberBoxes();
    let boxSideLength = 960 / parseFloat(numberBoxes);
    boxSideLength;

    let totalNumberBoxes = parseInt(numberBoxesPerSide * numberBoxesPerSide);

    const board = document.querySelector('#drawingBoard');
    board.innerHTML = ''; // Clear previous board

    for(let i = 0;  i < totalNumberBoxes; i++)
    {
        const box = document.createElement('div');
        box.classList.add('square');
        box.style.width = boxSideLength + 'px';
        box.style.height = boxSideLength + 'px';
        board.appendChild(box);

        box.addEventListener('mouseenter', function(event) {
            let randomRGB = GetRandomizedRGB();
            box.style.backgroundColor = randomRGB;
            console.log("hovered");
        });
    }

    console.log("Draw board console log");
}

function GetNumberBoxes()
{
    let userInput = ""
    do {
        userInput = prompt("How many boxes per side should the board have?");
    
        numberBoxes = parseInt(userInput);
    
        if (isNaN(numberBoxes)) {
            alert("Please enter a valid integer.");
        }
        else if(numberBoxes > 100)
        {
            alert("Input must be lower or equal to 100.");
        }
    } while (isNaN(numberBoxes) || numberBoxes > 100 || numberBoxes <= 0);

    return numberBoxes;
}

function GetRandomizedRGB(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r},${g},${b})`
    return rgb;
}

/*
function CalculateBoxSideLength(numberBoxes)
{
    const areaBoard = 960 * 960;
    const areaBox = areaBoard / numberBoxes;
    let squareSideLength = Math.sqrt(areaBox);

    return squareSideLength;
}*/
