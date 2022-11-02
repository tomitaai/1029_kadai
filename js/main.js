// コンテンツ読み込み後実行
// $(window).on('load', function (){

    // // 繰り返しの実行
    // $(function() {
    // for(var i = 0; i <45; i++){
    //     console.log(i,"インデックス番号")
    //     // スライド画像のsrcの配列を定義
    //     var slide_img_array = ["dog.png","cat.png","chick.png","horse.png","pig.png","toumei.png","toumei.png","toumei.png"];
    //     // スライド画像の枚数に応じた範囲の乱数を生成
    //     var random = Math.floor( Math.random() * slide_img_array.length);
    //     console.log(random,"乱数")
    //     //乱数に応じて表示する画像のsrcを配列から取得
    //     var slide_img_src = slide_img_array[random];
    //     console.log(slide_img_src,"スライド画像のsrc")
    //     // 乱数から取得した画像に変更
    //     $(".slide-img"+i).attr("src","img/" + slide_img_src);
    // }
    // })


// });




// スタートボタンを押したとき実行
$("#btn_play").on("click", function () {

    // 1.動画を再生する
    $('#video').get(0).play();


// ==========youtube===========
    // // API読み込み
    // var tag = document.createElement("script");
    // tag.src = "https://www.youtube.com/iframe_api";
    // var firstScriptTag = document.getElementsByTagName("script")[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // // API読み込み後にプレーヤーの設定
    // var player;
    // function onYouTubeIframeAPIReady() {
    // player = new YT.Player('player');
    // }
    
    // // ボタンクリック時の操作
    // document.getElementById("btn_play").addEventListener('click', function() {
    // player.playVideo();
    // }, false);
// ==========youtube===========




    // 2.画像をランダムに変更してスライド
    // 45回繰り返しの実行
    function slide_anime() {
        for(var i = 0; i <=44; i++){
            console.log(i,"インデックス番号")

            // 透明画像を追加
            $(".slide-zone").append('<img class="slide-img" src="img/toumei.png" alt="'+i+'">');
            // ID名を連番で追加
            $(".slide-img").each(function(i){
                $(this).attr('id','slide-img' + (i));
                });

            // スライド画像のsrcの配列を定義
            var slide_img_array = ["chick.png","dog.png","cat.png","horse.png","pig.png","toumei.png","toumei.png","toumei.png"];
            // スライド画像の枚数に応じた範囲の乱数を生成
            var random = Math.floor( Math.random() * slide_img_array.length);
            console.log(random,"乱数")
            //乱数に応じて表示する画像のsrcを配列から取得
            var slide_img_src = slide_img_array[random];
            console.log(slide_img_src,"スライド画像のsrc")
            // 乱数から取得した画像に変更
            $("#slide-img"+i).attr("src","img/" + slide_img_src);
            // 0.2秒ごとに画像を横スライド
            (function(i){
                setTimeout(function() {
                    $("#slide-img"+i).animate({ right: 1150 }, 3000, "linear");
                }, 200 * i );

            })(i);
        }
    }

    slide_anime();


    }); //スタートボタンを押した時の実行終了




// ===============================



// キーダウン成功のときは画像変更

// ここから
function success_anime() {
    $(".drum-img").attr("src","img/success.png");
    setTimeout(function(){
        $(".drum-img").attr("src","img/mato.png");            
        }, 100);
    }
function fall_anime{
    $(".player-img").attr("src","img/player-fall.png");
    setTimeout(function(){
        $(".player-img").attr("src","img/player.png");            
        }, 100);
    }

$(window).on('keydown', function(e) {
    const pos_drum = $(".drum-img").offset();
    const pos_item0 = $("#slide-img0").offset();
    var src = $("#slide-img0").attr('src');
    console.log(src);

    // 条件1.的に動物がいる
    if(pos_item0.left >= pos_drum.left+37.5
    && pos_item0.left <= pos_drum.left+112.5){
        // 条件2.画像と押したキーが同じ
        if(src === 'img/chick.png' && e.keyCode === 13){
        success_anime();
        // HP変更
        // //////////////////
        }
        else if(src === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        // HP変更
        // //////////////////
        }
        else if(src === 'img/cat.png' && e.keyCode === 40){
            success_anime();
            // HP変更
            // //////////////////
            }
        else if(src === 'img/horse.png' && e.keyCode === 37){
            success_anime();
            // HP変更
            // //////////////////
            }
        else if(src === 'img/pig.png' && e.keyCode === 39){
            success_anime();
            // HP変更
            // //////////////////
            }
        }
    else{
    fall_anime();
    }
});

// ここまで

// ここからeachメソッドおためし
function success_anime() {
    $(".drum-img").attr("src","img/success.png");
    setTimeout(function(){
        $(".drum-img").attr("src","img/mato.png");            
        }, 100);
    }
function fall_anime{
    $(".player-img").attr("src","img/player-fall.png");
    setTimeout(function(){
        $(".player-img").attr("src","img/player.png");            
        }, 100);
    }

$(window).on('keydown', function(e) {
    const pos_drum = $(".drum-img").offset();
    const pos_item0 = $("#slide-img0").offset();
    var src = $("#slide-img0").attr('src');
    console.log(src);

    // 条件1.的に動物がいる
    if(pos_item0.left >= pos_drum.left+37.5
    && pos_item0.left <= pos_drum.left+112.5){
        // 条件2.画像と押したキーが同じ
        if(src === 'img/chick.png' && e.keyCode === 13){
        success_anime();
        // HP変更
        // //////////////////
        }
        else if(src === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        // HP変更
        // //////////////////
        }
        else if(src === 'img/cat.png' && e.keyCode === 40){
            success_anime();
            // HP変更
            // //////////////////
            }
        else if(src === 'img/horse.png' && e.keyCode === 37){
            success_anime();
            // HP変更
            // //////////////////
            }
        else if(src === 'img/pig.png' && e.keyCode === 39){
            success_anime();
            // HP変更
            // //////////////////
            }
        }
    else{
    fall_anime();
    }
});

// ここまで


// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item1 = $(".slide-img1").offset();

// if (pos_item1.left >= pos_drum.left+37.5) {
// if(pos_item1.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item2 = $(".slide-img2").offset();

// if (pos_item2.left >= pos_drum.left+37.5) {
// if(pos_item2.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item3 = $(".slide-img3").offset();

// if (pos_item3.left >= pos_drum.left+37.5) {
// if(pos_item3.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item4 = $(".slide-img4").offset();

// if (pos_item4.left >= pos_drum.left+37.5) {
// if(pos_item4.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item5 = $(".slide-img5").offset();

// if (pos_item5.left >= pos_drum.left+37.5) {
// if(pos_item5.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item6 = $(".slide-img6").offset();

// if (pos_item6.left >= pos_drum.left+37.5) {
// if(pos_item6.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item7 = $(".slide-img7").offset();

// if (pos_item7.left >= pos_drum.left+37.5) {
// if(pos_item7.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item8 = $(".slide-img8").offset();

// if (pos_item8.left >= pos_drum.left+37.5) {
// if(pos_item8.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item9 = $(".slide-img9").offset();

// if (pos_item9.left >= pos_drum.left+37.5) {
// if(pos_item9.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item10 = $(".slide-img10").offset();

// if (pos_item10.left >= pos_drum.left+37.5) {
// if(pos_item10.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item11 = $(".slide-img11").offset();

// if (pos_item11.left >= pos_drum.left+37.5) {
// if(pos_item11.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item12 = $(".slide-img12").offset();

// if (pos_item12.left >= pos_drum.left+37.5) {
// if(pos_item12.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item13 = $(".slide-img13").offset();

// if (pos_item13.left >= pos_drum.left+37.5) {
// if(pos_item13.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item14 = $(".slide-img14").offset();

// if (pos_item14.left >= pos_drum.left+37.5) {
// if(pos_item14.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item15 = $(".slide-img15").offset();

// if (pos_item15.left >= pos_drum.left+37.5) {
// if(pos_item15.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item16 = $(".slide-img16").offset();

// if (pos_item16.left >= pos_drum.left+37.5) {
// if(pos_item16.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item17 = $(".slide-img17").offset();

// if (pos_item17.left >= pos_drum.left+37.5) {
// if(pos_item17.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item18 = $(".slide-img18").offset();

// if (pos_item18.left >= pos_drum.left+37.5) {
// if(pos_item18.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item19 = $(".slide-img19").offset();

// if (pos_item19.left >= pos_drum.left+37.5) {
// if(pos_item19.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item20 = $(".slide-img20").offset();

// if (pos_item20.left >= pos_drum.left+37.5) {
// if(pos_item20.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item21 = $(".slide-img21").offset();

// if (pos_item21.left >= pos_drum.left+37.5) {
// if(pos_item21.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item22 = $(".slide-img22").offset();

// if (pos_item22.left >= pos_drum.left+37.5) {
// if(pos_item22.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item23 = $(".slide-img23").offset();

// if (pos_item23.left >= pos_drum.left+37.5) {
// if(pos_item23.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item24 = $(".slide-img24").offset();

// if (pos_item24.left >= pos_drum.left+37.5) {
// if(pos_item24.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item25 = $(".slide-img25").offset();

// if (pos_item25.left >= pos_drum.left+37.5) {
// if(pos_item25.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item26 = $(".slide-img26").offset();

// if (pos_item26.left >= pos_drum.left+37.5) {
// if(pos_item26.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item27 = $(".slide-img27").offset();

// if (pos_item27.left >= pos_drum.left+37.5) {
// if(pos_item27.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item28 = $(".slide-img28").offset();

// if (pos_item28.left >= pos_drum.left+37.5) {
// if(pos_item28.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item29 = $(".slide-img29").offset();

// if (pos_item29.left >= pos_drum.left+37.5) {
// if(pos_item29.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item30 = $(".slide-img30").offset();

// if (pos_item30.left >= pos_drum.left+37.5) {
// if(pos_item30.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item31 = $(".slide-img31").offset();

// if (pos_item31.left >= pos_drum.left+37.5) {
// if(pos_item31.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item32 = $(".slide-img32").offset();

// if (pos_item32.left >= pos_drum.left+37.5) {
// if(pos_item32.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item33 = $(".slide-img33").offset();

// if (pos_item33.left >= pos_drum.left+37.5) {
// if(pos_item33.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item34 = $(".slide-img34").offset();

// if (pos_item34.left >= pos_drum.left+37.5) {
// if(pos_item34.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item35 = $(".slide-img35").offset();

// if (pos_item35.left >= pos_drum.left+37.5) {
// if(pos_item35.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item36 = $(".slide-img36").offset();

// if (pos_item36.left >= pos_drum.left+37.5) {
// if(pos_item36.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item37 = $(".slide-img37").offset();

// if (pos_item37.left >= pos_drum.left+37.5) {
// if(pos_item37.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item38 = $(".slide-img38").offset();

// if (pos_item38.left >= pos_drum.left+37.5) {
// if(pos_item38.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item39 = $(".slide-img39").offset();

// if (pos_item39.left >= pos_drum.left+37.5) {
// if(pos_item39.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item40 = $(".slide-img40").offset();

// if (pos_item40.left >= pos_drum.left+37.5) {
// if(pos_item40.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item41 = $(".slide-img41").offset();

// if (pos_item41.left >= pos_drum.left+37.5) {
// if(pos_item41.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item42 = $(".slide-img42").offset();

// if (pos_item42.left >= pos_drum.left+37.5) {
// if(pos_item42.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item43 = $(".slide-img43").offset();

// if (pos_item43.left >= pos_drum.left+37.5) {
// if(pos_item43.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });

// $(window).on('keydown', function(e) {

// const pos_drum = $(".drum-img").offset();
// const pos_item44 = $(".slide-img44").offset();

// if (pos_item44.left >= pos_drum.left+37.5) {
// if(pos_item44.left <= pos_drum.left+112.5){
// if(e.keyCode === 13){
// // 得点したときの画像に一瞬変更
// $(".drum-img").attr("src","img/success.png");
// setTimeout(function(){
// $(".drum-img").attr("src","img/mato.png"); 
// }, 100);
// }}}
// });









































































































































































































































































































































































































































































































































































































// ＝＝めも＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 不明点
// ・繰り返し
// ・数字の足し算