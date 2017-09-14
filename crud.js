/**
 * Created by 15874 on 2017/9/14.
 */
var _access_token = 'NjY4MzA3ZGQ0ODk0YmNjYWJjM2I1YWZiMGY0YzZiYWQ=';
var DATA_API_HOST = 'https://api.dev.songchechina.com';
var start = 1;
$(function () {
    //getToken();
    loadData();
})

/**
 * 获取数据并渲染
 */
function loadData() {
    $.ajax({
        url: DATA_API_HOST + "/ucenter/favorite?access_token=" + _access_token + '&type=CAR',
        type: "GET",
        headers: {
            Accept: "application/json"
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
            if(data.status === 'err'){
                alert(data.msg);
                return;
            }
            $("#table-tpl").tmpl(data).appendTo('.table-content');
        }
    })
}

/**
 * 获取token
 */
function getToken(){
        $.ajax({
            url: DATA_API_HOST + "/ucenter/auth/login",
            type: "POST",
            headers: {
                Accept: "application/json"
            },
            data:{
                username:'15522991302',
                password:'MTIzNDU2'
            },
            dataType: 'json',
            success: function (data) {
                console.log(data);

            }
        })
}