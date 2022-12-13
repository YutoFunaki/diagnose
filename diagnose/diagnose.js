//ボタンを押すごとに画面が切り替わる関数
$(function () {

  $(".btn").on("click", function () {
    $(this).closest("div").css("display", "none");
    id = $(this).attr("href");
    $(id).addClass("fit").fadeIn("slow").show();
  });



//選択ボタン値を配列に入れてカウント
    var box =[]; // 選択した問題の値を格納

  $(".btn").each(function(){
    $(this).on('click',function(){
      var value = $(this).data("value");
       box.push(value);
       console.log(box)
    });
  });

  $('.end').on('click',function(){
    // sumにboxにある値を全て計算
   const sum = box.reduce(function(sum, element){
    return sum + element;
  }, 0);

    // 計算結果sumに応じて回答を出力
    if(0 == sum){
      $('#answer_01').css("display","")
    }else if(1 == sum) {
      $('#answer_02').css("display","")
    }else if(2 == sum){
      $('#answer_03').css("display","")
    }else if(3 == sum){
      $('#answer_04').css("display","")
    }else if(4 == sum){
      $('#answer_05').css("display","")
    }else if(5 == sum){
      $('#answer_06').css("display","")
    }else if(6 == sum){
      $('#answer_07').css("display","")
    }else if(7 == sum){
      $('#answer_08').css("display","")
    }else if(8 == sum){
      $("#answer_09").css("display","")
    }else if(9 == sum){
      $("#answer_10").css("display","")
    }else if(10 == sum){
      $("#answer_11").css("display","")
    }else{
      $("#answer_12").css("display","")
    }
  })

});