// clock.js
function updateClock() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 月份从0开始
  const date = now.getDate();
  const day = now.getDay(); // 星期几
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const daysOfWeek = ["日", "一", "二", "三", "四", "五", "六"];
  const dayName = daysOfWeek[day];

  // 对分钟数和秒数进行格式处理，小于10时在前面添加0
  const formattedMinutes = minutes < 10? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10? `0${seconds}` : `${seconds}`;

  const clockDiv = document.getElementById('clock');
  clockDiv.innerHTML = ` ${year}年${month}月${date}日 星期${dayName} ${hours}：${formattedMinutes}：${formattedSeconds}`;

  if (minutes === 20 || minutes === 50) {
      console.log("站起来活动一下吧！");
  }
}

// 每秒更新一次时钟
setInterval(updateClock, 1000);
updateClock(); // 初始化时钟