$(document).ready(function() {
    
    $(".page-overlay").animate({
        top: "50px",
        bottom: "53px"
    }, 1000, function() {
        var ww = $(window).prop("innerWidth");
        var wh = $(window).prop("innerHeight");
        var d = (ww - 250) + "px";

        $(".page-overlay .place-center").animate({opacity: 0}, 1250, function() {
        });
        $(this).animate({
            right: (ww - 250) + "px"
        }, 2000, function() {
            $(".page-overlay").animate({
                opacity: 0
            }, 1000, function() {
                $(this).remove();
            });
        });
    });

    $("#selectVertical .input-group:not(:first-child)").click(function(e) {
        var inputEl = $(this).children(".input-group-addon").children("[type=radio]");
        if (e.target.tagName !== "INPUT" && !e.target.type) {
            // alternative of initial radio value is set to itself.
            inputEl.prop("checked", !inputEl.is(":checked"));
            e.preventDefault();
        }

        var v = $(this).children(".form-control").text();
        var dv = inputEl.val();

        $("#selectVertical .input-group:first-child .form-control").val(v);

        $("#selectRole .input-group:first-child .form-control").val("");
        $("#selectRole .input-group:not(:first-child)").each(function() {
            // "this" refers to the anchor tag...
            if ($(this).attr("data-parent") === dv) {
                $(this).css("display", "block").animate({height: "34px"}, 500);
            } else {
                $(this).animate({height: "0px"}, 500, function() {
                    $(this).css("display", "none");
                });
            }
        });
    });

    $("#selectRole .input-group:not(:first-child)").click(function(e) {
        var inputEl = $(this).children(".input-group-addon").children("[type=radio]");
        if (e.target.tagName !== "INPUT" && !e.target.type) {
            // alternative of initial radio value is set to itself.
            inputEl.prop("checked", !inputEl.is(":checked"));
            e.preventDefault();
        }

        var v = $(this).children(".form-control").text();
        $("#selectRole .input-group:first-child .form-control").val(v);
    });
});



// -- old Script
//$("#selectRole2 .dropdown-menu li").css("display", "none");
//
//$("#selectVertical .dropdown-menu li > a").click(function() {
//    var dv = $(this).attr("data-value");
//    var v = $(this).text();
//    var inputEl = $(this).parents(".input-group").children('input[type=text]');
//
//    inputEl.val(v);
//
//    $("#selectRole input").val("");
//    $("#selectRole .dropdown-menu li > a").each(function() {
//        console.log($(this).attr("data-parent"), dv);
//        if ($(this).attr("data-parent") === dv) {
//            $(this).parent().css("display", "block");
//        } else {
//            $(this).parent().css("display", "none");
//        }
//    });
//});
//
//$("#selectRole .dropdown-menu li > a").click(function() {
//    var v = $(this).text();
//    var inputEl = $(this).parents(".input-group").children('input[type=text]');
//
//    inputEl.val(v);
//});