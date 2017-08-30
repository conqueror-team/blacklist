class MemberManager {

    getMemberList(requestPage, pageSize, callback) {
        let data = {requestPage: requestPage, pageSize: pageSize};
        $.ajax({
            url:'/app/member/getAll',
            async: false,
            cache: false,
            type:"POST",
            contentType: "application/x-www-form-urlencoded",
            data: data,
            dataType: "json",
            error:function (xhr, msg, e) {
                callback(null,false);
            },
            success:function (result) {
                callback(result,true);
            }
        });
    }

    searchMember(keyword,callback){
        let data = {keyword:keyword};
        $.ajax({
            url:'/app/member/search',
            async: false,
            cache: false,
            type:"POST",
            contentType: "application/x-www-form-urlencoded",
            data: data,
            dataType: "json",
            error:function (xhr, msg, e) {
                callback(null,false);
            },
            success:function (result) {
                callback(result,true);
            }
        });
    }
}

export default MemberManager