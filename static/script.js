$(document).ready(function(){ 
    /* 탭 클릭 */
      $('.content a').on('click',function(){
       var anchorId = $(this).attr('data-anchor');
       // 스크롤 이동
       scroll_to_anchor_tab(anchorId);
       });
    });
     // 탭 이동 - 부드러운 스크롤
        function scroll_to_anchor_tab(anchor_id,speed) {
            if( !speed ) var speed = 'fast';
            var a_tag = $("#"+anchor_id);
            if(a_tag.length > 0){
                $('html, body').animate({
                    scrollTop: a_tag.offset().top - $('').height() -  $('').height() // 상단에 특정 위치를 제외하고 스크롤할때 해당 이름 작성
                }, speed);
            }
        }
