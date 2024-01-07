// Canvasの初期化
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// グリッドサイズの設定
const ROWS = 20;
const COLS = 10;

// ゲームボードの初期化
function createBoard(rows, cols) {
  const board = [];
  for (let r = 0; r < rows; r++) {
      board[r] = [];
      for (let c = 0; c < cols; c++) {
          board[r][c] = 0;
      }
  }
  return board;
}
// ゲームボードの描画
function drawBoard(board, ctx) {
  ctx.lineWidth = 0.5;
  for (let r = 0; r < board.length; r++){
    for (let c = 0; c < board[r].length; c++) {
        // セルに色を設定
        ctx.fillStyle = board[r][c] === 0 ? '#f0f0f0' : 'blue';
        ctx.fillRect(c * 30, r * 30, 30, 30);
        ctx.strokeRect(c * 30, r * 30, 30, 30);
    }
  }
}

function drawTetrimino(tetrimino, offsetX, offsetY, ctx) {
  for (let r = 0; r < tetrimino.length; r++) {
    for(let c = 0; c < tetrimino[r].length; c++) {
      if (tetrimino[r][c]) {
        ctx.fillStyle = 'blue';
        ctx.fillRect((c + offsetX) * 30, (r + offsetY) * 30, 30, 30);
        ctx.strokeRect((c + offsetX) * 30, (r + offsetY) * 30, 30, 30);
      }
    }
  }
}

function startGame(canvas,ctx) {
  const board = createBoard(ROWS,COLS);
  drawBoard(board, ctx);

  // テトリミノの初期位置
  let currentTetrimino = getRandomTetrimino();
  let positionX = Math.floor(COLS / 2) - Math.ceil(currentTetrimino[0].length / 2);
  let positionY = 0;

  // テトリミノの描画
  drawTetrimino(currentTetrimino, positionX, positionY, ctx);
}

// テトリミノの描画
const tetriminoT = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0]
];

const tetriminoI =[
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const tetriminoJ =[
  [0, 0, 1],
  [0, 0, 1],
  [0, 1, 1]
];

const tetriminoL = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 1]
];

const tetriminoO = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
];

const tetriminoS = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 1, 0]
];

const tetriminoZ = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 1, 0]
];

const tetriminos = [tetriminoI, tetriminoJ, tetriminoL, tetriminoO, tetriminoS, tetriminoT, tetriminoZ];

function getRandomTetrimino() {
  const index = Math.floor(Math.random() * tetriminos.length);
  return tetriminos[index];
}

// イベントリスナーの追加
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const startScreen = document.getElementById('startScreen');
  
  startButton.addEventListener('click', () => {
    startCountdown(startScreen, canvas);
  });
});

// カウントダウン
function startCountdown(startScreen, canvas) {
  let countdown = 3;
  startScreen.innerHTML = countdown;

  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      startScreen.innerHTML = countdown;
    } else {
      clearInterval(countdownInterval);
      startScreen.style.display = 'none';
      canvas.style.display = 'block';
      startGame(canvas, ctx);
    }
  }, 1000);
}
