class MemberManager {

    getMemberList(requestPage, pageSize, callback) {
        let data = {requestPage: requestPage, pageSize: pageSize};
        $.ajax({
            url:'',
            async: true,
            cache: false,
            type:"POST",
            contentType: "application/x-www-form-urlencoded",
            data: data,
            dataType: "json",
            error:function (xhr, msg, e) {

            },
            success:function (result) {

            }
        });
    }
}

export default MemberManager