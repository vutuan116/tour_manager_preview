function zoomSearchBody() {
    $('#search_body').toggleClass('d-none');
    $('.btn_search_zoom').toggleClass('zoom_out')
}

function viewDatepicker(id_datepicker) {
    $("#" + id_datepicker).datepicker();
}