document.addEventListener("DOMContentLoaded", () => {
    let bottom_bar = document.querySelector('.top_bar_menu');

    let demoFrame = document.getElementById("demoFrame");
    let url_string = "https://demogenerator.companyfuel.nl/demo/?demo=true";

    const demoContainer = document.querySelector(".demo-container");
    const mobileActive = document.querySelector(".mobile_active");
    const desktopActive = document.querySelector(".desktop_active");
    mobileActive.addEventListener('click', () => {
        demoContainer.classList.add("demo-container-mobile");
        desktopActive.classList.remove("active");
        mobileActive.classList.add("active");
    });
    desktopActive.addEventListener('click', () => {
        demoContainer.classList.remove("demo-container-mobile");
        mobileActive.classList.remove("active");
        desktopActive.classList.add("active");
    });

    //direct genereren voor klant
    const demoDirectElements = document.querySelectorAll('.demo-direct');
    console.log(demoDirectElements);

    demoDirectElements.forEach((demoDirect) => {
        demoDirect.addEventListener('click', (event) => {
            let vinkopties = document.querySelectorAll('.step0 .vinkopties-container .vinkopties-optie');
            let doelen = null;
            for (var i = 0; i < vinkopties.length; i++) {
                if (vinkopties[i].classList.contains("active")) {
                    let name = vinkopties[i].dataset.name;
                    (doelen == null) ? doelen = name : doelen = doelen + ", " + name;
                }
            }

            let branche;
            let beroep;
            if (document.querySelector('.step1 .vinkopties-container .vinkopties-optie.beroep.active')) {
                branche = document.querySelector('.step1 .vinkopties-container .vinkopties-optie.beroep.active').dataset.branche;
                beroep = document.querySelector('.step1 .vinkopties-container .vinkopties-optie.beroep.active').dataset.name;
            }
            else {
                branche = document.querySelector('.step1 .vinkopties-container .vinkopties-optie.active').dataset.name;
                beroep = false;
            }


            let stijl = document.querySelector('.step2 .vinkopties-container .vinkopties-optie.active').dataset.name;
            kleuren = document.querySelector('.step3 .vinkopties-container .vinkopties-optie.active').dataset.name;

            let logo = document.querySelector('.step4 .vinkopties-container .vinkopties-optie.active').dataset.name;
            (logo == "later") ? logo = "https://demogenerator.companyfuel.nl/wp-content/uploads/placeholder-logo.png" : logo = image_url;
            console.log(image_url);

            let voornaam = document.querySelector('.step5 .gegevens-input .voornaam').value;
            let achternaam = document.querySelector('.step5 .gegevens-input .achternaam').value;
            let bedrijfsnaam = document.querySelector('.step5 .gegevens-input .bedrijfsnaam').value;
            let email = document.querySelector('.step5 .gegevens-input .email').value;
            let telefoon = document.querySelector('.step5 .gegevens-input .telefoon').value;
            let primaryColor;
            let secondaryColor;
            const customPrimary = document.querySelector('.step3 .vinkopties-container .vinkopties-optie .hexinput.primary').value;
            const customSecondary = document.querySelector('.step3 .vinkopties-container .vinkopties-optie .hexinput.secondary').value;
            switch (kleuren) {
                case "combi1":
                    primaryColor = "3A61EF";
                    secondaryColor = "1540A0";
                    break;
                case "combi2":
                    primaryColor = "FFBB33";
                    secondaryColor = "FF7C1A";
                    break;
                case "combi3":
                    primaryColor = "7A9B6B";
                    secondaryColor = "53774B";
                    break;
                case "combi4":
                    primaryColor = "88758E";
                    secondaryColor = "59525B";
                    break;
                case "custom":
                    primaryColor = customPrimary.slice(1);
                    secondaryColor = customSecondary.slice(1);
                    break;
            }

            let urlParameters;
            if (!beroep == false) {
                urlParameters = `demo=true&bedrijfsnaam=${bedrijfsnaam}&heroBg=https://images.unsplash.com/photo-1508873699372-7aeab60b44ab&primaryColor=${primaryColor}&secondaryColor=${secondaryColor}&bedrijfsnaam=${bedrijfsnaam}&logoUrl=${logo}&info%40companyfuel.nl=${email}&branche=${branche}&beroep=${beroep}&style=${stijl}`;
            }
            else {
                urlParameters = `demo=true&bedrijfsnaam=${bedrijfsnaam}&heroBg=https://images.unsplash.com/photo-1508873699372-7aeab60b44ab&primaryColor=${primaryColor}&secondaryColor=${secondaryColor}&bedrijfsnaam=${bedrijfsnaam}&logoUrl=${logo}&info%40companyfuel.nl=${email}&branche=${branche}&style=${stijl}`;
            }

            demoFrame.src = "https://demogenerator.companyfuel.nl/" + branche + "/?" + urlParameters;

            const xhr = new XMLHttpRequest();
            xhr.open('POST', '../../save.php');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function () {
                if (xhr.status === 200) {


                    const newId = xhr.responseText;
                    console.log(`Data saved successfully! New ID is ${newId}`);

                    // Redirect the user to the current page with the new ID parameter
                    const currentUrl = window.location.href;
                    const separator = currentUrl.indexOf('?') !== -1 ? '&' : '?';
                    const newUrl = currentUrl + separator + 'id=' + newId;
                    window.location.href = newUrl;

                } else {
                    console.log('Data could not be saved!');
                }
            };
            xhr.onerror = function () {
                console.log('Error occurred while saving data!');
            };
            const data = new URLSearchParams();
            data.append('url_parameters', urlParameters);
            data.append('doelen', doelen);
            data.append('branche', branche);
            data.append('stijl', stijl);
            data.append('kleuren', kleuren);
            data.append('step3_custom_secondary', null);
            data.append('step3_option', 'Option 2');
            data.append('logo_option', 'Option 3');
            data.append('logo_url', logo);
            data.append('first_name', voornaam);
            data.append('last_name', achternaam);
            data.append('company_name', bedrijfsnaam);
            data.append('email', email);
            data.append('phone_number', telefoon);

            xhr.send(data);
            data.forEach(element => {
                console.log(element);
            });
            bottom_bar.style.zIndex = 100;
        });
    });

    demoFrame.src = url_string;
});
