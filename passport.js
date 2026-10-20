const change = document.getElementById("change");
change.addEventListener("click", change_all);

function change_all() {
    
    let famElement = document.getElementById("fam");
    
    if (famElement.innerText === "Алоев") {
        
        document.getElementById("fam").innerHTML = "<span>Aloev</span>";
        document.getElementById("imya").innerHTML = "<span>Erhivery</span>";
        document.getElementById("otc").innerHTML = "<span>Sukkulentovich</span>";
        document.getElementById("bth").innerText = "Male \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 17.06.2007";
        document.querySelector(".reg").innerText = "MVD of the Republic of Bashkortostan";
        document.querySelector(".city").innerText = "g. UFA";
    } else {
        document.getElementById("fam").innerHTML = "<span>Алоев</span>";
        document.getElementById("imya").innerHTML = "<span>Эрхиверий</span>";
        document.getElementById("otc").innerHTML = "<span>Суккулентович</span>";
        document.getElementById("bth").innerText = "Муж \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 17.06.2007";
        
        document.querySelector(".reg").innerText = "МВД по Республике Башкортостан";
        document.querySelector(".city").innerText = "г. УФА";
    }
}