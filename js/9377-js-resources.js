$(".mini-section .arrow").click(function () {
    $(this).toggleClass("rotate");
    if ($(this).attr("title") == "Expand") {
        $(this).attr("title", "Collaspe");
    } else {
        $(this).attr("title", "Expand");
    }
    $(this).parent().next().toggleClass("hide");
})

$(".link").click(function () {
    if ($(this).attr("title") == "Expand All") {
        $(this).attr("title", "Collaspe All");
        $(this).html("Collapse All");
        $(".mini-section .list").removeClass("hide");
        $(".mini-section .arrow").addClass("rotate");
    } else {
        $(this).attr("title", "Expand All");
        $(this).html("Expand All");
        $(".mini-section .list").addClass("hide");
        $(".mini-section .arrow").removeClass("rotate");
    }
})