// Write your JavaScript code.
function Load() {
    $.get("/Home/Valuta", null, function (data) {
        valuta = $.parseJSON(data)
        values = valuta.stock;
        var line = "";
        for (var i = 0; i < values.length; i++)
            line = line + "<tr><td height=50>" + values[i].name + "</td>" + "<td align=right>" + values[i].volume + "</td>" + "<td align=right>" + values[i].price.amount.toFixed(2) + "</td></tr>";
        $(".rows").html(line);
    });
};

function Start() {
    Load();
    setTimeout(Load, 15000);
}

