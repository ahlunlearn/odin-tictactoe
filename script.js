const gameBoard = (()=>{
    const board = Array(9).fill('')

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
        document.querySelector('.gameBoard').innerText = ''
        displayBoard()
    }

    const displayBoard = () =>{
        const boardContent = gameBoard.getBoardStatus()
        const gameBoardDom = document.querySelector('.gameBoard')
        for(let i=0;i<boardContent.length;i++){
            let item = document.createElement('div')
            item.classList.add('item')
            item.setAttribute('id',i.toString())
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

const Player = (mark) => {
    const click = (id) =>{
        displayController.updateaGrid(id,mark)
        console.log()
    }
    return {click}
}
const P1 = Player('O')
document.querySelector('.gameBoard').addEventListener('click',(e)=>{
    if(e.target.classList.contains('item') && e.target.innerText === ''){
    P1.click(Number(e.target.getAttribute('id')))
    }
})