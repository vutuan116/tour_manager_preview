function openNavBar(liId) {
    $("aside>ul>li.target").removeClass("target");
    $("#" + liId).addClass("target");
}