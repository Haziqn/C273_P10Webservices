$(document).ready(function () {

    $("#defaultForm").validator().on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
                var duration = $("[name=activity]").val();
                $("#idActivity").change(function (){
                    var activity = $(this).val();
                });
                var weight = $("[name=weight]").val();
            $.ajax({
                type: "GET",
                url: "http://localhost/calcApp/getActivityEnergy.php?weight=60&activity=aerobics&duration=30",
                data: "weight="+weight+"&activity="+activity+"&duration="+duration,
                cache: false,
                dataType: "JSON",
                success: function (response) {
                    console.log(response.result);
                    $("b").append(response.result);
                }
            });
            e.preventDefault();
        }
    });
});
