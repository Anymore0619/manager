/**
 * Created by 15874 on 2017/9/14.
 */
var _access_token = 'NjY4MzA3ZGQ0ODk0YmNjYWJjM2I1YWZiMGY0YzZiYWQ=';
var DATA_API_HOST = 'https://api.dev.songchechina.com';
var start = 1;
$(function () {
    //getToken();
    loadData(start);
})

/**
 * 获取数据并渲染
 */
function loadData(start) {
    $.ajax({
        url: DATA_API_HOST + "/ucenter/favorite?access_token=" + _access_token + '&type=CAR' + '&start=' +start,
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
            $('.table-content').empty();
            $("#table-tpl").tmpl(data).appendTo('.table-content');
            pagination(data.current_page,data.total_page);
        }
    })
}


/**
 * 分页事件
 */
function pagination(curr,total){
    laypage({
        cont: 'pagination-wrap', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
        pages: total, //通过后台拿到的总页数
        curr: curr || 1, //当前页
        groups:7,
        first: 1, //将首页显示为数字1,。若不显示，设置false即可
        last: total, //将尾页显示为总页数。若不显示，设置false即可
        prev: '«', //若不显示，设置false即可
        next: '»',//若不显示，设置false即可
        jump: function(obj, first){ //触发分页后的回调
            if(!first){ //点击跳页触发函数自身，并传递当前页：obj.curr
                pagination(obj.curr,total);
                console.log(obj.curr);
                loadData(obj.curr);
            }
        }
    });
};



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