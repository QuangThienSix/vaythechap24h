// Main


$(document).ready(function() {
    // Phần Slider
    $('.home-slider .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });
    // Phần Clients
    $('.home-clients .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            // breakpoint from 480 up
            480: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 4,
            },
            // breakpoint from 992 up
            992: {
                items: 6,
            }
        }
    });
});


$(".txtbox input").on("focus", function() {
    $(this).addClass("focus");

});

$(".txtbox input").on("blur", function() {
    if ($(this).val() == "")
        $(this).removeClass("focus");

});

function KiemTra() {
    let name = $('#username1').val();
    let sdt = $('#sdt1').val();
    let email = $('#email1').val();
    let note = $('#note1').val();

    if (name == '' || name == null) {
        alert("Tên không được trống!");
        username1.focus();
        return false;
    }
    if (sdt == '' || sdt == null) {
        alert("Số điện thoại không được để trống");
        sdt1.focus();
        return false;
    }
    const items = {
        name: name,
        sdt: sdt,
        email: email,
        note: note
    }
    $.ajax({
        url: '/api/customer',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
            alert("Đăng Ký Thành Công ! Cảm Ơn Quý Khách")
        },
        data: JSON.stringify(items)
    });
    alert("Đăng Ký Thành Công ! Cảm Ơn Quý Khách")


}

function KiemTra3() {
    let name = $('#username3').val();
    let sdt = $('#sdt3').val();
    let email = $('#email3').val();
    let note = $('#note3').val();

    if (name == '' || name == null) {
        alert("Tên không được trống!");
        username3.focus();
        return false;
    }
    if (sdt == '' || sdt == null) {
        alert("Số điện thoại không được để trống");
        sdt3.focus();
        return false;
    }
    const items = {
        name: name,
        sdt: sdt,
        email: email,
        note: note
    }
    $.ajax({
        url: '/api/customer',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
            alert("Đăng Ký Thành Công ! Cảm Ơn Quý Khách")
        },
        data: JSON.stringify(items)
    });
    alert("Đăng Ký Thành Công ! Cảm Ơn Quý Khách")
}

function KiemTra2() {
    let name = $('#username2').val();
    let sdt = $('#sdt2').val();
    let email = $('#email2').val();
    let note = $('#note2').val();

    if (name == '' || name == null) {
        alert("Tên không được trống!");
        username2.focus();
        return false;
    }
    if (sdt == '' || sdt == null) {
        alert("Số điện thoại không được để trống");
        sdt2.focus();
        return false;
    }
    const items = {
        name: name,
        sdt: sdt,
        email: email,
        note: note
    }
    $.ajax({
        url: '/api/customer',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
            alert("Đăng Ký Thành Công ! Cảm Ơn Quý Khách")
        },
        data: JSON.stringify(items)
    });
    alert("Đăng Ký Thành Công ! Cảm Ơn Quý Khách")
}



// $.getJSON("/api/customer", function(result) {
//     $.each(result, function(i, field) {
//         $(".about .table-striped tbody").append(`
//         <tr>
//             <th scope="row">${i+1}</th>
//             <td>${field.name}</td>
//             <td>${field.sdt}</td>
//             <td>${field.email}</td>
//             <td>${field.note}</td>

//         </tr>`);

//     });
// });

function KiemTralogin() {

    if (username.value == '' || username.value == null) {
        alert("Tên đăng nhập không được trống!");
        username.focus();
        return false;
    }
    if (password.value == '' || password.value == null) {
        alert("Mật khẩu không được để trống");
        password.focus();
        return false;
    }
    return true;
}