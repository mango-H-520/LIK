// game.js
// 定义图片数组，这里需要替换为实际的图片路径
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg'
];

let currentImageIndex = 0;
const imageDisplay = document.getElementById('imageDisplay');
const startButton = document.getElementById('startButton');
const volumeControl = document.getElementById('volumeControl');
// 获取“上一张”按钮元素
const prevButton = document.getElementById('prevButton');

// 初始化显示第一张图片
imageDisplay.src = images[currentImageIndex];

// 创建音频元素并设置背景音乐
const audio = new Audio('红色高跟鞋 - 蔡健雅.mp3'); // 替换为实际的音乐文件路径
audio.loop = true; // 设置循环播放

// 为开始按钮添加点击事件监听器
startButton.addEventListener('click', function() {
    // 检查是否到达最后一张图片
    if (currentImageIndex < images.length - 1) {
        // 切换到下一张图片
        currentImageIndex++;
        imageDisplay.src = images[currentImageIndex];
    }

    // 在用户点击按钮后播放音乐
    audio.play().catch(error => {
        console.error('播放音乐时出错:', error);
    });
});

// 为“上一张”按钮添加点击事件监听器
prevButton.addEventListener('click', function() {
    // 检查是否不是第一张图片
    if (currentImageIndex > 0) {
        // 切换到上一张图片
        currentImageIndex--;
        imageDisplay.src = images[currentImageIndex];
    }
});

// 为音量调节滑块添加事件监听器
volumeControl.addEventListener('input', function() {
    audio.volume = parseFloat(this.value);
});

// 计算从 2024.11.1 到现在的天、分、秒
function calculateTimeSince() {
    const startDate = new Date('2024-11-01');
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;

    // 一天的毫秒数
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.floor(timeDifference / oneDay);

    const remainingTime = timeDifference % oneDay;
    const hours = Math.floor(remainingTime / (60 * 60 * 1000));
    const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

    return `${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
}

// 获取显示时间的元素
const scoreValueElement = document.getElementById('scoreValue');

// 更新显示的时间
function updateTime() {
    scoreValueElement.textContent = calculateTimeSince();
}

// 初始更新
updateTime();

// 每秒更新一次
setInterval(updateTime, 1000);