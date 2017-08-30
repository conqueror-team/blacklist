class BootboxManager {
    showNormalMessage(msg) {
        bootbox.alert({
            message: msg,
            size: 'small'
        });
    }

    showErrorMessage(msg) {
        bootbox.alert({
            message: msg,
            size: 'normal',
            buttons: {
                ok: {
                    label: '取消',
                    className: 'btn-danger'
                }
            }
        });
    }
}

export default BootboxManager