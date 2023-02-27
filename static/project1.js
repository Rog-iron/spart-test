
//밑에 팀소개페이지(게스트북) 코드도 따로 만들어놨습니다.
//제일 처음에 만든거라(게스트북) POST는 되고 GET은 안됐었는데 이거도 그냥 jiho.html에 복붙하면 될 것 같아요.

//개인프로젝트용 ajax 코드
//jiho.html에도 복붙 해 놨습니다. 이쪽 코드 지워도 jiho.html에 그대로 있어서 될 것 같긴한데.. 일단 냅둬봅니다.
$(document).ready(function () {
            show_comment()
        });

        function save_comment() {
            let name =$('#name').val()
            let comment =$('#comment').val()
            let password = $('#password').val()

           $.ajax({
            type: 'POST',
            url: '/comments',
            data: {name_give :name, comment_give: comment, password_give: password},
            success: function (response) {
            alert(response['msg'])
            window.location.reload()
                }
            })
        }

        function show_comment() {
            $.ajax({
                type: "GET",
                url: "/comments",
                data: {},
                success: function (response) {
                    let rows = response['comments']
                    for (let i = 0; rows.length; i++) {
                        let name = rows[i]['name']
                        let password = rows[i]['password'] //비밀번호도 만들었으나 어떻게 사용해야할지..
                        let comment = rows[i]['comment']
                        let temp_html = `
                                <div class="card">
                              <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                  <p style="color: #6A75CA">${comment}</p>
                                  <footer class="blockquote-footer"style="color: #6A75CA">${name}</footer>
                                </blockquote>
                              </div>
                            </div>
                            </div>`
                        $("#order-box").append(temp_html)
                    }
                }
            });
        }


// 다크모드/라이트모드 버튼 스크립트
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}


// 여기는 게스트북 겟/포스트
// $(document).ready(function () {
//     show_guestbook();
// });
//
// function show_guestbook() {
//     $('#order-box').empty()
//
//     $.ajax({
//         type: "GET",
//         url: "/comments",
//         data: {},
//         success: function (response) {
//             load_host_guestbook(response)
//         }
//     });
// }
//  function load_host_guestbook(response) {
//   let rows = response["guestbooks"]
//  for (let i = 0; rows.length; i++) {
//      if (rows[i]['host'] === ['jiho']) {
//          let guest = rows[i]['guest']
//          let guestbook = rows[i]['guestbook']
//          let temp_html = `<div class="card">
//                               <div class="card-body">
//                                 <blockquote class="blockquote mb-0">
//                                   <p>${guestbook}</p>
//                                   <footer class="blockquote-footer">${guest}</footer>
//                                 </blockquote>
//                               </div>
//                             </div>
//                             </div>`
//
//          $("#order-box").append(temp_html)
//
//      }
//  }
// }
//
// function save_guestbook() {
//     let host = 'jiho'
//     let guest = $('#guest').val()
//     let guestbook = $('#guestbook').val()
//     let password = $('#password').val()
//
//     $.ajax({
//         type: 'POST',
//         url: '/comments',
//         data: {host_give: host, guest_give: guest, guestbook_give: guestbook,password_give: password},
//         success: function (response) {
//             alert(response['msg'])
//             window.location.reload()
//         }
//     })
// }


