$(document).ready(function () {

    $('form').validator().on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            e.preventDefault();
        
            var n1 = parseInt($("#idNumber1").val());
            var n2 = parseInt($("#idNumber2").val());

            $.ajax({
                type: "GET",
                url: "http://localhost/C273_P08Multistar/getMultiResults.php",
                data: "num1=" + n1 + "&num2=" + n2,
                cache: false,
                dataType: "JSON",
                success: function (data, textStatus) {
                    var result = data.result;
                    var message = "";
                    for (var i = 0; i < result; i++) {
                        message += "<span class='glyphicon glyphicon-star'></span>";
                    }
                    
                    $(".panel-footer").html("Result: "+message);
                },
                error: function (obj, textStatus, errorThrown) {
                    console.log("Error " + textStatus + ": " + errorThrown);
                }
            });

        }
    });
});

