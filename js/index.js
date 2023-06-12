var url = "https://apipw1.myferby.com/ws.php?tk=t32311277&op="

CategoriasActivasDelSistema();

function CategoriasActivasDelSistema() {
    fetch(url + "categorias")
        .then(Respuesta => Respuesta.json())
        .then(datos => {
            console.log(datos);
            var categorias = document.getElementById("SeccionDecategorias");
            categorias.innerHTML = "";

            datos.categorias.forEach(c => {
                var div1 = document.createElement("div");
                var img = document.createElement("img");
                var div2 = document.createElement("div");
                var h6 = document.createElement("h6");

                categorias.appendChild(div1);
                div1.append(img, div2);
                div2.appendChild(h6);

                div1.classList = "card ms-2 mt-3";
                div1.setAttribute("style", "width: 8rem");
                img.classList = "card-img-top mt-2";
                img.setAttribute("height", "110px");
                div2.classList = "card-body";
                h6.classList = "card-title";
                div2.setAttribute("style", "text-align: center");

                img.src = c.imagen;
                h6.innerHTML = c.nombre;

            })
        })
}