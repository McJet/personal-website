import { reactive, toRefs } from "vue";

const gameController = reactive({
    MAX_BOX_VALUE: 100,
    moneyAmount: 0,
    boxOpenedAmount: 0,
    boxValues: [],
    gameEndIndex: -1,
    isBoxContentVisible: false,
    isGameOver: false,
});

export default () => {
    const { 
        MAX_BOX_VALUE,
        moneyAmount,
        boxOpenedAmount,
        boxValues,
        gameEndIndex,
        isBoxContentVisible,
        isGameOver,
    } = toRefs(gameController)
    
    const getBoxContent = (boxNumber) => {
        if (!gameController.isBoxContentVisible) {
            gameController.boxValues[boxNumber] = "?"
        } else {
            gameController.boxValues[boxNumber]
        }
    }
    const startGame = () => {
        gameController.moneyAmount = 0
        gameController.boxOpenedAmount = 0
    }
    const loadNewBoxValues = () => {
        gameController.boxValues = []
        let badValueIndex = Math.floor(Math.random() * 4)
        gameController.gameEndIndex = badValueIndex
        for (let i = 0; i < 4; i++) {
            gameController.boxValues.push(Math.floor(Math.random() * gameController.MAX_BOX_VALUE))
        }
    }
    const onBoxClick = (boxNumber) => {
        if (gameController.isBoxContentVisible) {
            return
        }
        let boxValue = gameController.boxValues[boxNumber]
        gameController.isBoxContentVisible = true;
        if (boxNumber != gameController.gameEndIndex) {
            gameController.moneyAmount += boxValue
            gameController.boxOpenedAmount++
        } else {
            gameController.moneyAmount = 0
            gameController.boxOpenedAmount = 0
            gameController.isGameOver = true
        }
        setTimeout(() => {
            gameController.isBoxContentVisible = false
            gameController.isGameOver = false
            loadNewBoxValues()
        }, 1500)
    }

    return {
        MAX_BOX_VALUE,
        moneyAmount,
        boxOpenedAmount,
        boxValues,
        gameEndIndex,
        isBoxContentVisible,
        isGameOver,
        getBoxContent,
        startGame,
        loadNewBoxValues,
        onBoxClick,
    }
}