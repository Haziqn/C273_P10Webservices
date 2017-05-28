$(document).ready(function () {

    $("#defaultForm").validator().on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
                var age = $("[name=age]").val();
                var gender = $("[name=gender]:checked").val();
                var height = $("[name=height]").val();
                var weight = $("[name=weight]").val();
            $.ajax({
                type: "GET",
                url: "http://localhost/C273Webservices/getCalorieCalcResults.php",
                data: "age="+age+"&gender="+gender+"&height="+height+"&weight="+weight,
                cache: false,
                dataType: "JSON",
                success: function (response) {
                    console.log(response.result);
                    $(".panel-footer").append("Your calorie per day is " + response.result);
                }
            });
            e.preventDefault();
        }
    });
});
