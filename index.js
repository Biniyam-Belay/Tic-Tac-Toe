gameBoard = {
    gameBoard: [

        '','','',
        '','','',
        '','',''
    ]
}

winningCombination = {
    win: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
}

playerOneScore = [];
playerTwoScore = [];


function gamePlay (){

    playerTurn = 'playerOne';
    // console.log(playerTurn);

    const cell = document.querySelectorAll('.cell')
        .forEach((cell) => {
            cell.addEventListener('click', function handleClick () {
                if (playerTurn === 'playerOne'){
                    cell.innerHTML = 'X'
                    const clicked = cell.dataset.index
                    playerOneScore.push(clicked)
                    console.log(playerOneScore)
                    console.log('playerOneScore: ', playerOneScore)
                    playerTurn = 'playerTwo'
                    console.log(playerTurn);
                    cell.classList.add('disabled')
                    cell.removeEventListener('click', handleClick);
                }else{
                    cell.innerHTML = '0'
                    const clicked = cell.dataset.index
                    playerTwoScore.push(clicked)
                    console.log(playerTwoScore)
                    // console.log(clicked)
                    console.log('playerTwoScore: ', playerTwoScore)
                    playerTurn = 'playerOne'
                    console.log(playerTurn);
                    cell.classList.add('disabled')
                    cell.removeEventListener('click', handleClick);
                }
            })
        })
}

gamePlay()