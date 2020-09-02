//何回やったら当てるか
var countNum = 0;

//Random数字生成
var randomNum = Math.floor(Math.random() * 100) + 1;

var textpress = document.getElementById("usertxt");

//keypressイベント設定
textpress.onkeypress = function(e){
    var code = e.keycode || e.which;
    if ( code == 13 ){
        checking();
        return false;
    }
    
}

function checking(){
    //userが入力した値を取ってくる
    var userNum = document.querySelector("#usertxt").value;

    if (userNum >= 1 && userNum <= 100){
        if (randomNum > userNum){   //Computerの数字が大きい場合　-Up表示
            document.querySelector("#print").innerHTML = "Up";
        }else if (randomNum <userNum){  //Computerの数字が小さい場合　-Down表示
            document.querySelector("#print").innerHTML = "Down";
        }else{  //Computerの数字を当たった場合
            document.querySelector("#print").innerHTML = "<pan style='color:red'>success</sapn>";
        }
        //入力した値消す
        document.querySelector("#usertxt").value= "";
        //TextBoxにCursor置く
        document.querySelector("#usertxt").focus();
        countNum++;
        //試した回数
        document.querySelector("#countNum").innerHTML = "try number" + countNum + "回";
    }else{
        swal("Oh No!", "1から100まで入力してください。", "error");
    }
}


//rest機能
function Reset(){
    location.reload();
}