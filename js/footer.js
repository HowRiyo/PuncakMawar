window.addEventListener("DOMContentLoaded", () => {
    const content = `
        <div class="footer-Body">
            <h1>Copyright 2024</h1>
            <h2>Designed by <span style="color: rgb(var(--fixed-3))">@Riyo</span></h2>
            <h3>Special Thx To Contributor</h3>
            <p>
                Alvin Christian. <br>
                Dimas Maulana. <br>
                I Putu Gede Angga Surya Pradita.
            </p>
        </div>
    `

    const footer = document.getElementsByTagName("footer")[0]
    footer.innerHTML = content
})