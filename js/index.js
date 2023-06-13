var url = "https://apipw1.myferby.com/ws.php?tk=t32311277&op="
var productosEnCarrito = [];
var categorias = document.getElementById("SeccionDecategorias");
CategoriasActivasDelSistema();

function CategoriasActivasDelSistema() {
    fetch(url + "categorias")
        .then(Respuesta => Respuesta.json())
        .then(datos => {
            categorias.innerHTML = "";
            datos.categorias.forEach(c => {
                var div1 = document.createElement("div");
                var img = document.createElement("img");
                var div2 = document.createElement("div");
                var h6 = document.createElement("h6");

                categorias.appendChild(div1);
                div1.append(img, div2);
                div2.appendChild(h6);

                div1.classList = "card ms-5 mt-3";
                div1.setAttribute("style", "width: 8rem");
                img.classList = "card-img-top mt-2";
                img.setAttribute("height", "110px");
                div2.classList = "card-body p-0";
                h6.classList = "card-title";
                div2.setAttribute("style", "text-align: center");

                img.src = c.imagen;
                h6.innerHTML = c.nombre;

                //traer el prodcucto al hacerle click a la categoria
                div1.onclick = function () {
                    categorias.innerHTML = "";
                    fetch(url + "productos_categoria&cat=" + c.id).then(r => r.json())
                        .then(data => {
                            data.productos.forEach(p => {
                                var div1 = document.createElement("div");
                                var img = document.createElement("img");
                                var div2 = document.createElement("div");
                                var h6 = document.createElement("h6");
                                var p1 = document.createElement("p");
                                var p2 = document.createElement("h6");
                                var buton = document.createElement("button");


                                categorias.appendChild(div1);
                                div1.append(img, div2, p1, p2, buton);
                                div2.appendChild(h6);

                                div1.classList = "card mt-2 ms-5 text-center";
                                div1.setAttribute("style", "width: 16rem");
                                img.classList = "card-img-top mt-1";
                                img.setAttribute("height", "200px");
                                div2.classList = "card-body p-0";
                                div2.setAttribute("style", "text-align: center");
                                h6.classList = "card-title m-0";
                                p1.classList = "card-text";
                                p2.classList = "card-text";
                                buton.classList = "btn btn-primary my-1";


                                img.src = p.imagen;
                                h6.innerHTML = p.nombre;
                                p1.innerHTML = p.descripcion;
                                p2.innerHTML = "Precio: L" + p.precio
                                buton.innerHTML = "Añadir Al Carrito";


                                //click en añadir producto carrito
                                buton.onclick = function () {
                                    var productoQueDesea = {
                                        imagen: p.imagen,
                                        nombre: p.nombre,
                                        descripcion: p.descripcion,
                                        precio: p.precio
                                    };

                                    productosEnCarrito.push(productoQueDesea);
                                    console.log(productosEnCarrito);
                                }
                            })
                        })
                }
            })
        })
}



//ir al carrito a ver los productos
var irCarrito = document.getElementById("irCarrito");
irCarrito.onclick = function () {
    categorias.innerHTML = "";
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var ul = document.createElement("ul");

    categorias.appendChild(div1);
    div1.append(div2, ul);

    div1.classList = "card";
    div1.setAttribute("style", "width: 25rem");
    div2.classList = "card-header text-center";
    ul.classList = "list-group list-group-flush";
    div2.innerHTML = " Productos En Tu Carrito " + '<img id="irCarrito" src="img/carrito.png" width="50px" alt="">';

//creacion de cada prodcuto
    productosEnCarrito.forEach(p => {
        console.log("holaa")
        var li = document.createElement("li");
        var img = document.createElement("img");
        var div4=document.createElement("div");
        var h6 = document.createElement("h6");
        var p1 = document.createElement("p");
        var p2 = document.createElement("h6");
        var p3 =document.createElement("p")
     
        li.classList = "list-group-item";
        img.classList = "col-5";
        p2.classList = "col-4 py-5";
        p3.classList = "col-3 px-0 py-4";
        img.setAttribute("width", "50px");
        div4.classList = "row";
        
        ul.appendChild(li);
        li.append(h6, p1, div4);
        div4.append(img, p2, p3);
        h6.setAttribute("style", "text-align: center");
        p1.setAttribute("style", "text-align: center");

        img.src = p.imagen;
        h6.innerHTML = p.nombre;
        p1.innerHTML = p.descripcion;
        p2.innerHTML = "Precio: L"+p.precio;
        p3.innerHTML = "Cantidad:" + '<a class="btn btn-danger">-</a>' + ' ' + 1 + ' ' + '<a class="btn btn-success">+</a>';           
    });
    
    
}