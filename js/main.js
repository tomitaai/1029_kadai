// ■■■■■■スタートボタンを押したとき実行■■■■■■
$("#btn_play").on("click", function () {

    // 0.ボタン消す
    $("#btn_play").hide();
    $(".rule").hide();

    // 1.動画を再生する
    $('#video').get(0).play();


    // 2.画像をランダムに変更してスライド
    // 繰り返しの実行
    function slide_anime() {
        for(var i = 0; i <=25; i++){

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
            //乱数に応じて表示する画像のsrcを配列から取得
            var slide_img_src = slide_img_array[random];
            console.log(i,"番号",random,"乱数",slide_img_src,"画像")
            // 乱数から取得した画像に変更
            $("#slide-img"+i).attr("src","img/" + slide_img_src);
            // 0.2秒ごとに画像を横スライド
            (function(i){
                setTimeout(function() {
                    $("#slide-img"+i).animate({ right: 1150 }, 3000, "linear");
                }, 400 * i );
            })(i);
        }
    }
    slide_anime();
    

    }); 

    // ■■■■■■スタートボタンを押したとき終了■■■■■■

    

    // ■■■■■■キーダウンされたとき実行■■■■■■

$(window).on('keydown', function(e) {
const pos_drum = $(".drum-img").offset();
const pos_item0 = $("#slide-img0").offset();
const pos_item1 = $("#slide-img1").offset();
const pos_item2 = $("#slide-img2").offset();
const pos_item3 = $("#slide-img3").offset();
const pos_item4 = $("#slide-img4").offset();
const pos_item5 = $("#slide-img5").offset();
const pos_item6 = $("#slide-img6").offset();
const pos_item7 = $("#slide-img7").offset();
const pos_item8 = $("#slide-img8").offset();
const pos_item9 = $("#slide-img9").offset();
const pos_item10 = $("#slide-img10").offset();
const pos_item11 = $("#slide-img11").offset();
const pos_item12 = $("#slide-img12").offset();
const pos_item13 = $("#slide-img13").offset();
const pos_item14 = $("#slide-img14").offset();
const pos_item15 = $("#slide-img15").offset();
const pos_item16 = $("#slide-img16").offset();
const pos_item17 = $("#slide-img17").offset();
const pos_item18 = $("#slide-img18").offset();
const pos_item19 = $("#slide-img19").offset();
const pos_item20 = $("#slide-img20").offset();
const pos_item21 = $("#slide-img21").offset();
const pos_item22 = $("#slide-img22").offset();
const pos_item23 = $("#slide-img23").offset();
const pos_item24 = $("#slide-img24").offset();
const pos_item25 = $("#slide-img25").offset();

var src0 = $("#slide-img0").attr('src');
var src1 = $("#slide-img1").attr('src');
var src2 = $("#slide-img2").attr('src');
var src3 = $("#slide-img3").attr('src');
var src4 = $("#slide-img4").attr('src');
var src5 = $("#slide-img5").attr('src');
var src6 = $("#slide-img6").attr('src');
var src7 = $("#slide-img7").attr('src');
var src8 = $("#slide-img8").attr('src');
var src9 = $("#slide-img9").attr('src');
var src10 = $("#slide-img10").attr('src');
var src11 = $("#slide-img11").attr('src');
var src12 = $("#slide-img12").attr('src');
var src13 = $("#slide-img13").attr('src');
var src14 = $("#slide-img14").attr('src');
var src15 = $("#slide-img15").attr('src');
var src16 = $("#slide-img16").attr('src');
var src17 = $("#slide-img17").attr('src');
var src18 = $("#slide-img18").attr('src');
var src19 = $("#slide-img19").attr('src');
var src20 = $("#slide-img20").attr('src');
var src21 = $("#slide-img21").attr('src');
var src22 = $("#slide-img22").attr('src');
var src23 = $("#slide-img23").attr('src');
var src24 = $("#slide-img24").attr('src');
var src25 = $("#slide-img25").attr('src');


        // ライフゲージ（プレイヤー）＝＝＝＝＝＝＝＝＝＝＝＝＝＝

        const plifeBar = document.querySelector('.player-life-bar')
        const plifeMark = document.querySelector('.player-life-mark')
        let plife = 100

        function plife_damage(){
            plife -= 20
            if ( plife <= 0 ){
                // 0 以下は光部分を非表示
                plife = 0
                setTimeout(function(){
                    plifeMark.style.visibility = 'hidden'
                }, 300)
            }
            // ライフゲージを変更する
            plifeBar.style.width = plife + "%"
            $('.p-p').html("<p>プレイヤー ライフ</p>"+plife + "%");
            $(".player-img").fadeOut(100).fadeIn(100);
        }

        // ライフゲージ（鬼）＝＝＝＝＝＝＝＝＝＝＝＝＝＝

        const olifeBar = document.querySelector('.oni-life-bar')
        const olifeMark = document.querySelector('.oni-life-mark')
        let olife = 100

        function olife_damage( value ){
            olife -= value
            if ( olife <= 0 ){
                // 0 以下は光部分を非表示
                olife = 0
                setTimeout(function(){
                    olifeMark.style.visibility = 'hidden'
                }, 300)
            }
            // ライフゲージを変更する
            olifeBar.style.width = olife + "%"
            $('.oni-p').html("<p>鬼さん ライフ</p>" + olife + "%");
            $(".oni-img").fadeOut(100).fadeIn(100);
        }

        // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

        function success_anime() {
            $(".drum-img").attr("src","img/success.png");
            setTimeout(function(){
                $(".drum-img").attr("src","img/mato.png");            
                }, 100);
            olife_damage( 30 );
            }
        

    // 条件1.的に動物がいる
    if(pos_item0.left >= pos_drum.left+37.5
    && pos_item0.left <= pos_drum.left+112.5){
        // 条件2.画像と押したキーが同じ
        if(src0 === 'img/chick.png' && e.keyCode === 13){
        success_anime();  
        }
        else if(src0 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src0 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src0 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src0 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
    else{
    }
console.log(olife)
    // ここから繰り返し ここを何とかしたいです＝＝＝＝＝＝＝＝＝＝＝＝＝
    if(pos_item1.left >= pos_drum.left+37.5
        && pos_item1.left <= pos_drum.left+112.5){
        if(src1 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src1 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src1 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src1 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src1 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }console.log(olife)

        if(pos_item2.left >= pos_drum.left+37.5
        && pos_item2.left <= pos_drum.left+112.5){
        if(src2 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src2 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src2 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src2 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src2 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item3.left >= pos_drum.left+37.5
        && pos_item3.left <= pos_drum.left+112.5){
        if(src3 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src3 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src3 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src3 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src3 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item4.left >= pos_drum.left+37.5
        && pos_item4.left <= pos_drum.left+112.5){
        if(src4 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src4 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src4 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src4 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src4 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item5.left >= pos_drum.left+37.5
        && pos_item5.left <= pos_drum.left+112.5){
        if(src5 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src5 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src5 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src5 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src5 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item6.left >= pos_drum.left+37.5
        && pos_item6.left <= pos_drum.left+112.5){
        if(src6 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src6 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src6 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src6 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src6 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item7.left >= pos_drum.left+37.5
        && pos_item7.left <= pos_drum.left+112.5){
        if(src7 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src7 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src7 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src7 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src7 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item8.left >= pos_drum.left+37.5
        && pos_item8.left <= pos_drum.left+112.5){
        if(src8 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src8 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src8 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src8 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src8 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item9.left >= pos_drum.left+37.5
        && pos_item9.left <= pos_drum.left+112.5){
        if(src9 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src9 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src9 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src9 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src9 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item10.left >= pos_drum.left+37.5
        && pos_item10.left <= pos_drum.left+112.5){
        if(src10 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src10 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src10 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src10 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src10 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item11.left >= pos_drum.left+37.5
        && pos_item11.left <= pos_drum.left+112.5){
        if(src11 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src11 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src11 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src11 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src11 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item12.left >= pos_drum.left+37.5
        && pos_item12.left <= pos_drum.left+112.5){
        if(src12 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src12 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src12 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src12 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src12 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item13.left >= pos_drum.left+37.5
        && pos_item13.left <= pos_drum.left+112.5){
        if(src13 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src13 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src13 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src13 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src13 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item14.left >= pos_drum.left+37.5
        && pos_item14.left <= pos_drum.left+112.5){
        if(src14 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src14 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src14 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src14 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src14 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item15.left >= pos_drum.left+37.5
        && pos_item15.left <= pos_drum.left+112.5){
        if(src15 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src15 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src15 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src15 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src15 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item16.left >= pos_drum.left+37.5
        && pos_item16.left <= pos_drum.left+112.5){
        if(src16 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src16 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src16 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src16 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src16 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item17.left >= pos_drum.left+37.5
        && pos_item17.left <= pos_drum.left+112.5){
        if(src17 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src17 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src17 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src17 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src17 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item18.left >= pos_drum.left+37.5
        && pos_item18.left <= pos_drum.left+112.5){
        if(src18 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src18 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src18 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src18 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src18 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item19.left >= pos_drum.left+37.5
        && pos_item19.left <= pos_drum.left+112.5){
        if(src19 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src19 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src19 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src19 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src19 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item20.left >= pos_drum.left+37.5
        && pos_item20.left <= pos_drum.left+112.5){
        if(src20 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src20 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src20 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src20 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src20 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item21.left >= pos_drum.left+37.5
        && pos_item21.left <= pos_drum.left+112.5){
        if(src21 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src21 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src21 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src21 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src21 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item22.left >= pos_drum.left+37.5
        && pos_item22.left <= pos_drum.left+112.5){
        if(src22 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src22 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src22 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src22 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src22 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item23.left >= pos_drum.left+37.5
        && pos_item23.left <= pos_drum.left+112.5){
        if(src23 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src23 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src23 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src23 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src23 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item24.left >= pos_drum.left+37.5
        && pos_item24.left <= pos_drum.left+112.5){
        if(src24 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src24 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src24 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src24 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src24 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }
        if(pos_item25.left >= pos_drum.left+37.5
        && pos_item25.left <= pos_drum.left+112.5){
        if(src25 === 'img/chick.png' && e.keyCode === 13){
        success_anime(); 
        }
        else if(src25 === 'img/dog.png' && e.keyCode === 38){
        success_anime();
        }
        else if(src25 === 'img/cat.png' && e.keyCode === 40){
        success_anime();
        }
        else if(src25 === 'img/horse.png' && e.keyCode === 37){
        success_anime();
        }
        else if(src25 === 'img/pig.png' && e.keyCode === 39){
        success_anime();
        }
        else{
        plife_damage();
        }}
        else{
        }






});


    // ■■■■■■キーダウンされたとき終了■■■■■■
