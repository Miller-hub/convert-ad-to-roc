const heavenlyStems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const earthlyBranches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const zodiacs = ["鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬"];

function getGanzhi(year) {
  const stem = heavenlyStems[(year - 4) % 10];
  const branch = earthlyBranches[(year - 4) % 12];
  return `${stem}${branch}年`;
}

function getZodiac(year) {
  return `${zodiacs[(year - 4) % 12]}年`;
}

function toROC() {
  const input = parseInt(document.getElementById('inputYear').value);
  const resultEl = document.getElementById('result');

  if (isNaN(input) || input < 1912) {
    resultEl.innerText = '⚠️ 請輸入有效的西元年（1912 年之後）';
    return;
  }

  const roc = input - 1911;
  const ganzhi = getGanzhi(input);
  const zodiac = getZodiac(input);
  resultEl.innerHTML = `
    ⏱ 西元 ${input} 年<br/>
    👉 民國 ${roc} 年<br/>
    🧧 ${ganzhi}　${zodiac}
  `;
}

function toAD() {
  const input = parseInt(document.getElementById('inputYear').value);
  const resultEl = document.getElementById('result');

  if (isNaN(input) || input < 1) {
    resultEl.innerText = '⚠️ 請輸入有效的民國年（1 年以上）';
    return;
  }

  const ad = input + 1911;
  const ganzhi = getGanzhi(ad);
  const zodiac = getZodiac(ad);
  resultEl.innerHTML = `
     民國 ${input} 年<br/>
     西元 ${ad} 年<br/>
     ${ganzhi}　${zodiac}
  `;
}

function clearAll() {
  const inputEl = document.getElementById('inputYear');
  const resultEl = document.getElementById('result');
  
  inputEl.value = '';
  resultEl.innerHTML = '';
  
  // 移除游標錯位或錯誤提示狀態
  inputEl.blur();
  setTimeout(() => inputEl.focus(), 100);
}
