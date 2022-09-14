const getBMI = (height, weight, point = 2) => (weight / (height / 100) ** 2).toFixed(point);
// tag,class,id
const elementEl = document.querySelector(".title");
const calcEl = document.querySelector("#calc");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
console.log(heightEl, weightEl);
console.log(elementEl);
console.log(calcEl);

elementEl.innerHTML = "<u>BMI Calculator</u>";
calcEl.innerText = "分析";

// 將按鈕增加事件監聽
calcEl.addEventListener("click", () => {




    let bmiEl = document.querySelector("#comment .bmi");
    console.log(bmiEl);

    let height = heightEl.value;
    let weight = weightEl.value;
    if (height == "" || weight == "") {
        alert("輸入不能為空!");
        return;

    }
    let bmi = getBMI(height, weight);
    if (isNaN(bmi)) {
        alert("請輸入數值!");
        return;
    }

    console.log(bmi);
    bmiEl.innerHTML = bmi;

    let comments = [
        { 'bmi': 35, 'color': 'red', 'comment': '異常範圍，請節食運動!' },
        { 'bmi': 24, 'color': 'green', 'comment': '正常範圍，恭喜你，請繼續保持。' },
        { 'bmi': 18.5, 'color': 'blue', 'comment': '體重過輕，請多攝取營養。' },
    ];

    bmiEl.style.color = comments[comments.length - 1]["color"];
    TextE1.innerText.color = comments[comments.length - 1]["comment"];



    for (let i = 0; i < comments.length; i++) {
        if (bmi >= comments[i].bmi) {
            bmiEl.style.color = comments[i]["color"];
            textE1.innerText = comments[i]["comment"];
            break;
        }
    }

});
