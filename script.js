const gameBoard = (()=>{
    // const board = Array(9).fill('')
    const board = ['X','X','X','X','X','X','X','X','X']

    const setMark = (id, mark) => {
        board[id] = mark
    }

    const getBoardStatus = () => {
        return board
    }

    return {
        setMark,
        getBoardStatus
    }
})()

const displayController = (()=>{
    const updateaGrid = (id, mark) => {
        gameBoard.setMark(id, mark)
    }

    const displayBoard = () =>{
        console.log('get')
        const boardContent = gameBoard.getBoardStatus()
        const gameBoardDom = document.querySelector('.gameBoard')
        for(let i=0;i<boardContent.length;i++){
            let item = document.createElement('div')
            item.classList.add('item')
            item.innerText = boardContent[i]
            gameBoardDom.appendChild(item)
        }
    }

    return {
        updateaGrid,
        displayBoard
    }
})()

displayController.displayBoard()

// const Player = ()