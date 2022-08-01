'use strict';

{
  //Intersection Observer API
  function callback(entries){
    //特定の要素が画面に現れたかを監視することができる↑

    entries.forEach(entry => {
      if (!entry.isIntersecting){
        return;
      }

      entry.target.classList.add('appear');
    });
    
 
  }

  const observer = new IntersectionObserver(callback,
    // options)
    {
    //callback optionsという引数を渡すことが出来る↑
    threshold:0.2,
    //スレッシュホールド0.2とすると、特定の要素が20％くらい交差したときにcallbackの処理を実行してくれる

  });

  document.querySelectorAll('.animate').
    //上記9行目のobserverを使ってanimateクラスをつけた要素を監視すればいいので、document.querySelectorAllを使う。こうすると複数の要素を取得できる。のでanimateクラスを付けた要素を取得して、forEach（配列に含まれる要素を先頭から順に取り出してコールバック関数を呼び出す働き）で処理していける。  
  forEach(el => {
    observer.observe(el);
    //個々の要素をelとしてobserverのメソッドを使って監視していく。
    //そのための方法がobserver の observeメソッドを使ってelを渡すこと。
    //つまり個々の要素＝監視対象である複数のanimateクラスを付けた要素。
    //まぁアニメーションの発動きっかけを取得するために毎回書くおまじないだと思えばいい。
  });

  document.querySelectorAll('.animateM'). 
  forEach(el => {
    observer.observe(el);
   
  });
}