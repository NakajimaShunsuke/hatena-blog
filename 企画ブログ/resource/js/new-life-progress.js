ityped.init(document.querySelector("#ityped"), {
    strings: ['Hello World!!  ', 'Welcome to my memorandum!'],        //表示させたい文字の設定 区切りはカンマ
    startDelay: 200,                                                  //アニメーション開始までの遅延、大きいほど遅れる
    typeSpeed: 100,                                                   //表示させるスピード、大きいほどゆっくり
    loop: false,                                                      //ループ
    backSpeed: 80,                                                   //戻るスピード
    backDelay: 150,                                                  //戻る時間指定
    showCursor: true,                                                 //カーソル表示
    cursorChar: "|",                                                  //カーソルとして表示するテキスト
})