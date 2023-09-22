
function Contagem() {
    var n = Number(document.getElementById("number").value);
    var temp = "";


    for (let i = n; i >= 0; i--) {
        temp += i + " ";
    }

    document.getElementById("textarea").value = temp;
}