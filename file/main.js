// Canvasの初期化
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

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

const tetrominoZ = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 1, 0]
];

// イベントリスナーの追加
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const startScreen = document.getElementById('startScreen');
  
  startButton.addEventListener('click', () => {
    startCountdown(startScreen, canvas);
  });
});

// ゲーム開始
function startGame(canvas, ctx){

}

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
