$(document).ready(function($) {
         //for select

$("#form1").validate({
    submitHandler: function(form) {
        window.location.assign('form.html');
    },
    rules: {
        agree_c:{
            required: true,
        }
    },
    messages: {
        agree_c: {
            required: "請勾選 !!",
        },
         agree_e:{
            required: "Please check !!",
        },
    }
    });
});
