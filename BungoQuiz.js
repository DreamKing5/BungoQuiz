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
    ["「歌よみに与ふる書」とは誰の作品か？","正岡子規"],
    ["「病床六尺」とは誰の作品か？","正岡子規"],
    ["「一握の砂」とは誰の作品か？","石川啄木"],
    ["「阿部一族」とは誰の作品か？","森鴎外"],
    ["「高瀬舟」とは誰の作品か？","森鴎外"],
    ["「山椒大夫」とは誰の作品か？","森鴎外"],
    ["「赤光」とは誰の作品か？","斎藤茂吉"],
    ["「こころ」とは誰の作品か？","夏目漱石"],
    ["「彼岸過迄」とは誰の作品か？","夏目漱石"],
    ["「道程」とは誰の作品か？","高村光太郎"],
    ["「智恵子抄」とは誰の作品か？","高村光太郎"],
    ["「羅生門」とは誰の作品か？","芥川龍之介"],
    ["「河童」とは誰の作品か？","芥川龍之介"],
    ["「暗夜行路」「城の崎にて」とは誰の作品か？","志賀直哉"],
    ["「雪国」とは誰の作品か？","川端康成"],
    ["「蟹工船」とは誰の作品か？","小林多喜二"],
    ["「党生活者」とは誰の作品か？","小林多喜二"],
    ["坪内逍遥は何を著して言文一致を説いたか？","小説神髄"],
    ["正岡子規の弟子で、「白牡丹といふといへども紅ほのか」という俳句を残したのは誰か？","高浜虚子"],
    ["正岡子規が短歌の革新のために書いた歌集とは何か？","歌よみに与ふる書"],
    ["前期作として「門」「三四郎」「それから」がある作家とは誰か？","夏目漱石"],
    ["ドイツ留学の経験がある、「高瀬舟」などを著した作家とは誰か？","森鴎外"],
    ["夏目漱石の未完の遺作とは何か？","明暗"],
    ["志賀直哉が、親との関係を自伝的に書いた小説とは何か？","和解"],
    ["プロレタリア作家の代表といえば誰か？","小林多喜二"]
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
