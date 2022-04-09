alert("文豪クイズを始めます。OKを押して始めてください。")

let Quiz=[
    ["「学問ノススメ」とは誰の作品か？","福沢諭吉"],
    ["「小説神髄」とは誰の作品か？","坪内逍遥"],
    ["「浮雲」とは誰の作品か？","二葉亭四迷"],
    ["「舞姫」とは誰の作品か？","森鴎外"],
    ["「五重塔」とは誰の作品か？","幸田露伴"],
    ["「たけくらべ」とは誰の作品か？","樋口一葉"],
    ["「にごりえ」とは誰の作品か？","樋口一葉"],
    ["「若菜集」とは誰の作品か？","島崎藤村"],
    ["「破壊」とは誰の作品か？","島崎藤村"],
    ["「金色夜叉」とは誰の作品か？","尾崎紅葉"],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
    ["「」とは誰の作品か？",""],
]
//問題リスト「["",""],」をコピペで作成
 
//問題表示の関数
let Q=document.getElementById("mondai");
//正解数
let correct=0;
//問題数
let Qcnt=0;
//問題リストからランダムに表示する乱数
var rundom=Math.floor(Math.random()*Quiz.length);
//問題数の表示の関数
let count=document.getElementById("mondaisu");
//問題数を決定する関数
let nanmon=2;

//問題と問題数の表示
function Qset(){
    Q.textContent=Quiz[rundom][0];
    count.textContent=("第"+(Qcnt+1)+"問目");
};

Qset();

//正誤判定と繰り返しの判定
function Answer_check(){
    document.getElementById("ansB").onclick=function(){
        const ansans=document.getElementById("answer").value;
        console.log(ansans);
        if(ansans==Quiz[rundom][1]){
            alert("正解！");
            correct++;
        }else{
            alert("不正解です。正解は「"+Quiz[rundom][1]+"」でした。");
        }
        Qcnt++;
        //テキストボックスを空に
        document.getElementById("answer").value="";
        Quiz.splice(rundom,1);
        console.log(Quiz);
        //問題リストからランダムに表示する乱数
        rundom=Math.floor(Math.random()*Quiz.length);
        count.textContent=("");
        if(Qcnt>=nanmon){
            //結果発表
            Q.textContent="問題は以上です。"+correct+"問正解しました。";
            //ボタンを非表示
            document.getElementById("ansB").style.visibility="collapse";
            document.getElementById("answer").style.visibility="collapse";
        }else{
            Qset();
        }
    };
}

Answer_check();
