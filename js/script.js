$(document).ready(function () {
    var date_input = $('.date'); //our date input has the name "date"
    var options = {
        format: 'dd.mm.yyyy',
        todayHighlight: true,
        orientation: "right",
        autoclose: true
    };
    date_input.datepicker(options);

    $('input[name="phone"]').inputmask();

    $('#identifier_label').text($('#identifier').val());

    $('#identifier').on('change', function()
    {
        $('#identifier_label').text(this.value);
    });
});