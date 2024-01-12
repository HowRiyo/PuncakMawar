window.addEventListener("DOMContentLoaded", () => {
    const content = `
        <div class="Logo">
            <img src="./img/logo.png" width="60">
            <h1>Puncak <span style="color: maroon">Mawar</h1>
        </div>
        <nav>
            <ol>
                <li>
                    <a href="">Tiket Masuk</a>
                </li>
                <li>
                    <a href="">Penawaran</a>
                </li>
                <li>
                    <a href="">Akun</a>
                </li>
            </ol>
            <ol>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Layanan</a>
                </li>
                <li>
                    <a href="">Produk</a>
                </li>
                <li>
                    <i class="fa-solid fa-xl fa-language"></i>
                </li>
            </ol>
        </nav>
    `

    const header = document.getElementsByTagName("header")[0]
    header.innerHTML = content

    const ol = document.querySelectorAll("nav > ol")
    const li = document.querySelectorAll("nav > ol > li")

    let open = false

    ol[0].addEventListener("click", () => {
        console.log("hellow")
        if (!open) {
            open = true
            li.forEach((li) => (li.style.display = "block"))
        } else {
            open = false
            li.forEach((li) => (li.style.display = "none"))
        }
    })

    const Menu = (x) => {
        const new_div = document.createElement("div");
        const div = document.querySelector("nav > ol > div");
        const length_div = document.querySelectorAll("nav > ol > div").length;
        const angleIcon = '<i class="fa-solid fa-xl fa-angle-';

    
        if (x.matches) {
            new_div.innerHTML = "<h4>MENU</h4>" + angleIcon + `down angle-icon"></i>`;
            li.forEach((li) => (li.style.display = "none"));
            ol[0].insertBefore(new_div, ol[0].firstChild);
            if (length_div > 0) {
                div.remove();
            }
        } else {
            li.forEach((li) => (li.style.display = "flex"));
            if (div) {
                console.log('se');
                div.remove();
            }
            new_div.innerHTML = "<h4>Others</h4>" + angleIcon + `up angle-icon"></i>`;
        }
    
        new_div.addEventListener('click', () => {
            const angleElement = document.querySelector('.angle-icon');
            if (angleElement.classList.contains('fa-angle-up')) {
                angleElement.classList.remove('fa-angle-up');
                angleElement.classList.add('fa-angle-down');
            } else {
                angleElement.classList.remove('fa-angle-down');
                angleElement.classList.add('fa-angle-up');
            }
        });
    };
    

    const MobileWidth = window.matchMedia("(max-width: 800px)")

    Menu(MobileWidth)

    window.addEventListener("resize", () => Menu(MobileWidth))

})