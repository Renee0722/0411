let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#ffe8d6'); // 設定背景顏色

  // 生成 40 個圓形
  for (let i = 0; i < 100; i++) {
    circles.push({
      x: random(width), // 隨機 X 座標
      y: random(height), // 隨機 Y 座標
      size: random(30, 100), // 隨機大小
      color: color(random(255), random(255), random(255)) // 隨機鮮豔顏色
    });
  }
}

function draw() {
  background('#ffe8d6'); // 每次重繪背景

  // 根據滑鼠 X 座標調整圓形大小
  let sizeOffset = map(mouseX, 0, width, 10, 120);

  // 繪製所有圓形
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset); // 圓形大小隨滑鼠變化
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}
