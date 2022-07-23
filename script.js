let $result = document.getElementById("result");

alert("확인 버튼을 누르면 로또가 시작됩니다.");

// 랜덤 로또숫자 뽑기
const arr_num45 = Array(45).fill().map((v,i) => i + 1);
// console.log(arr_num45);
const arr_shuffle = []; // 빈 배열(arr_num45에서 7개를 뽑아 저장할 용도)

while(arr_num45.length > 0){ // arr_num45에 값이 존재하면
    const random_index = Math.floor(Math.random()*arr_num45.length); // 랜덤익덱;
    const arr_spliced = arr_num45.splice(random_index, 1);
    // splice로 잘라서 값을 가져오면, 원래 배열의 값도 삭제됨
    arr_shuffle.push(arr_spliced[0]);
}
// console.log(arr_shuffle);
let arr_order6 = arr_shuffle.slice(0,6).sort((a,b)=>a-b); // 6개 번호 꺼내서 오름차순
let bonus_number = arr_shuffle[6]; // 보너스 번호
// console.log(arr_order6, bonus_number);

for(let i = 0;i < arr_order6.length;i++){
    setTimeout(() => {
        // 로또 ball 하나 만들기
        let $ball = document.createElement('div'); // div 태그 만들어 변수에 저장
        $ball.className = 'ball'; // 태그에 클래스 이름 주기
        $ball.innerText = arr_order6[i];
        if(arr_order6[i] < 10){
            $ball.style.backgroundColor = 'red';
            $ball.style.color = 'white';
        }
        else if(10 <= arr_order6[i] && arr_order6[i] < 20){
            $ball.style.backgroundColor = 'orange';
            $ball.style.color = 'black';
        }
        else if(20 <= arr_order6[i] && arr_order6[i] < 30){
            $ball.style.backgroundColor = 'yellow';
            $ball.style.color = 'black';
        }
        else if(30 <= arr_order6[i] && arr_order6[i] < 40){
            $ball.style.backgroundColor = 'blue';
            $ball.style.color = 'white';
        }
        else if(40 <= arr_order6[i]){
            $ball.style.backgroundColor = 'green';
            $ball.style.color = 'white';
        }
        // console.log($ball);
        $result.appendChild($ball);
    },1000*(i+1));
}    

// 보너스 번호
let $bonus = document.getElementById('bonus');
setTimeout(() => {
    // 로또 ball 하나 만들기
    let $ball = document.createElement('div'); // div 태그 만들어 변수에 저장
    $ball.className = 'ball'; // 태그에 클래스 이름 주기
    $ball.innerText = bonus_number;
    // console.log($ball);
    if(bonus_number < 10){
        $ball.style.backgroundColor = 'red';
        $ball.style.color = 'white';
    }
    else if(10 <= bonus_number && bonus_number < 20){
        $ball.style.backgroundColor = 'orange';
        $ball.style.color = 'black';
    }
    else if(20 <= bonus_number && bonus_number < 30){
        $ball.style.backgroundColor = 'yellow';
        $ball.style.color = 'black';
    }
    else if(30 <= bonus_number && bonus_number < 40){
        $ball.style.backgroundColor = 'blue';
        $ball.style.color = 'white';
    }
    else if(40 <= bonus_number){
        $ball.style.backgroundColor = 'green';
        $ball.style.color = 'white';
    }
    $bonus.appendChild($ball);
},7000);

