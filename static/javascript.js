
    $(document).ready(function () {
        show_guestbook();
    });

    function show_guestbook() {
        $.ajax({
            type: "GET",
            url: "/guestbooks",
            data: {},
            success: function (response) {
                let rows = response['guestbooks']
                for (let i = 0; i < rows.length; i++) {
                    let host = rows[i]['Jongwoo']
                    let guest = rows[i]['guest']
                    let guestbook = rows[i]['guestbook']

                    let temp_html=`<tr>
                                    <td>${host}</td>
                                    <td>${guest}</td>
                                    <td>${guestbook}</td>
                                    </tr>`

                    $('#order-box').append(temp_html)
                }
            }
        });
    }
    /*
    function load_host_guestbook(response) {
        let rows = response["guestbooks"]
        for (let i = 0; rows.length; i++) {
            if (rows[i]['host'] == 'Jongwoo') {
                let guest = rows[i]['guest']
                let guestbook = rows[i]['guestbook']

                let temp_html = `<tr>
                                <td>${guest}</td>
                                <td>${guestbook}</td>
                                <td>yeah</td>
                                </tr>`
                $("#order-box").append(temp_html)
            }
        }
    }
    */
    function save_guestbook() {
        let host = 'Jongwoo'
        let guest = $('#name').val()
        let guestBook = $('#address').val()

        $.ajax({
            type: 'POST',
            url: '/guestbooks',
            data: {host_give: host, guest_give: guest, guestbook_give: guestBook},
            success: function (response) {
                alert(response['msg'])
                window.location.reload()
            }
        })
    }


