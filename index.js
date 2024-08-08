gameBoard = {
    gameBoard: [

        '','','',
        '','','',
        '','',''
    ]
}

function gamePlay (){
    const cell = document.querySelectorAll('.cell')
        .forEach((cell) => {
            cell.addEventListener('click', () => {
                cell.innerHTML = 'X'
                const clicked = cell.dataset.index
                console.log(clicked)
            })
        })
}

gamePlay()