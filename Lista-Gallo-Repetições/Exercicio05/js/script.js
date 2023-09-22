function Contagem() {
    var temp = "";

    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0) {
            temp += i + " ";
        }
    }

    document.getElementById("textarea").value = temp;
}