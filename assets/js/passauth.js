$("#b").click(function() {
    var password = "password";
    if($("#pass").val() !== password) {
        $("#err").text("Incorrect password");
    }
    else {
        window.location.href = "http://someUrl";
    }
});