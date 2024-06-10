window.onload = function () {
    if ($(".datepicker").length>0){
        viewDatepicker();
    }
}

function zoomSearchBody() {
    $('#search_body').toggleClass('d-none');
    $('.btn_search_zoom').toggleClass('zoom_out')
}

//moneyFormatter.format(100000) => 100.000
const moneyFormatter = new Intl.NumberFormat('vi-VN');

function viewDatepicker() {
    $(".datepicker").datepicker({dateFormat: "dd/mm/yy"});
}