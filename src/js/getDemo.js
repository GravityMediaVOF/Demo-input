document.addEventListener("DOMContentLoaded", () => {

    let demoFrame = document.getElementById("demoFrame");
    let url_string = "https://skelter.cfdemo4.nl/demo/?demo=true&Sterke,_duidelijke_propositie_hier=Organiseren%20kun%20je%20leren!&heroBg=https://images.unsplash.com/photo-1512394005248-f047741d263e&primaryColor=E88668&secondaryColor=C3D3CA&Interessant%20leesvoer=Interessante%20artikelen&bedrijfsnaam=Fox%20Organizing&logoUrl=https://foxorganizing.nl/wp-content/uploads/2022/01/Logo-VET-800X400-2.png";
    demoFrame.src = url_string;

    const demoContainer = document.querySelector(".demo-container");
    const mobileActive = document.querySelector(".mobile_active");
    const desktopActive = document.querySelector(".desktop_active");
    mobileActive.addEventListener('click', () => {
        demoContainer.classList.remove("demo-container-mobile");
        desktopActive.classList.remove("active");
        mobileActive.classList.add("active");
    });
    desktopActive.addEventListener('click', () => {
        demoContainer.classList.add("demo-container-mobile");
        mobileActive.classList.remove("active");
        desktopActive.classList.add("active");
    });
});