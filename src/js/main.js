// Step function
let current_step = -1;
let all_steps = document.querySelectorAll('.step');
let style_switch = document.querySelector('.style_switch');
let iframe_url = '';

// Get the current URL parameters
const urlParams = new URLSearchParams(window.location.search);
const demoId = urlParams.get('id');

// Function to update the URL with the current step parameter
function updateURLParameter(step) {
  const url = new URL(window.location.href);
  url.searchParams.set('step', step);
  window.history.replaceState({}, '', url);
}

// Check if the 'step' parameter exists in the URL
const stepParam = urlParams.get('step');
if (stepParam) {
  current_step = parseInt(stepParam, 10); // Parse the step parameter as an integer
} else if (demoId) {
  current_step = 7;
}

if (demoId) {
  const xhr = new XMLHttpRequest();
  const url = `fetch_data.php?id=${demoId}`;
  xhr.open('GET', url, true);
  document.querySelector('.loading-screen p').style.display = 'block';
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = xhr.responseText;
      console.log(data);
      var branche = data.split("branche=")[1];
      branche = branche.split("&")[0];
      //console.log(branche);
      const time = Date.now();
      //console.log(time);
      const frameParams = data;
      document.querySelector('#demoFrame').src = "https://demogenerator.companyfuel.nl/" + branche + "/?" + data;
      document.querySelector('#demoFrame').name = Math.floor(Date.now() / 1000);
      document.querySelector('#demoFrame').src = document.querySelector('#demoFrame').src + "&time=" + time;
      document.querySelector('#demoFrame').contentWindow.location.href = document.querySelector('#demoFrame').src;


      const styleSwitchInputs = document.querySelectorAll('.style_switch');
      const demoFrame = document.querySelector('#demoFrame');

      // Preselect the radio input based on the 'style' parameter value
      const url = demoFrame.src;
      const initialStyleValue = (new URL(url).searchParams.get('style') || 'style1');
      const selectedInput = [...styleSwitchInputs].find(input => input.value === initialStyleValue);
      selectedInput?.setAttribute('checked', 'checked');

      styleSwitchInputs.forEach(input => {
        input.addEventListener('change', function() {
          let iframeUrl = new URL(demoFrame.src);
          console.log(iframeUrl);
          const selectedStyle = this.value;

          iframeUrl.searchParams.set('style', selectedStyle);

          console.log(selectedStyle);
          demoFrame.src = iframeUrl.href;
          demoFrame.contentWindow.location.href = demoFrame.src;
        });
      });


    } else {
      console.error('Error fetching data from database');
    }
  };
  xhr.send();

  current_step = 7;
}




function Step() {
  if (current_step < 7) {
    updateURLParameter(current_step);
  }
  if (current_step == -1) {
    document.querySelector(".step-buttons-container.bottom").style.display = "none";
    document.querySelector(".step-buttons-container.mobile").style.display = "none";
  }
  else {
    document.querySelector(".step-buttons-container.bottom").style.display = "";
    document.querySelector(".step-buttons-container.mobile").style.display = "";
  }
  const directParam = urlParams.get('direct');

  // Check if the "direct" parameter is true and the current step is 6
  if (directParam === 'true' && current_step === 6) {
    document.querySelector(".step-buttons-previous").style.display = "none";
    document.querySelector(".step-buttons-next").style.display = "none";
    document.querySelector(".step6 .step-buttons-begin.button.demo-direct").style.width = "90%";
    document.querySelector(".step6 .step-buttons-begin.button.demo-direct").textContent = "Direct genereren";
    document.querySelector(".step6 h2").textContent = "Afspraak maken of direct genereren";
  }
  if (directParam != 'true' && current_step == 6) {
    document.querySelector(".step-buttons-previous").style.display = "none";
    document.querySelector(".step-buttons-next").style.display = "none";
    if (document.querySelector(".step6 .step-buttons-begin.button.demo-direct")) {
      document.querySelector(".step6 .step-buttons-begin.button.demo-direct").style.display = "none";
    }

  }

  if (current_step == 7) {

    $(".loading-screen").css("display", "flex");
    $(".loading-screen").css("opacity", "1");
    setTimeout(() => {
      $(".loading-screen").animate({
        opacity: 0
      }, 2000, function () {
        $(".loading-screen").css("display", "none");
        $(' html, body').css({ overflow: 'auto' });
      });
    }, 3000);

    document.body.classList.add("container_full");
    document.querySelector(".step-buttons-container.bottom").style.display = "none";
    document.querySelector(".step-buttons-container.mobile").style.display = "none";
  }
  else {

  }

  for (var i = 0; i < all_steps.length; i++) {
    all_steps[i].style.display = "none";
  }
  for (var i = 0; i < all_steps.length; i++) {
    if (all_steps[i].dataset.step == current_step) {
      all_steps[i].style.display = "block";
    }
  }
  ScrollToTop();
  ScrollToTopDesktop();
}

Step();



function CheckChecked() {
  for (var i = 0; i < vinkopties.length; i++) {
    if (vinkopties[i].classList.contains('active')) {
      return true;
    }
  }
}


function ScrollToTop() {
  $(".inputform-container").animate({ scrollTop: 0 }, "slow");
}

function ScrollToTopDesktop() {
  $(".inputform-col.right").animate({ scrollTop: 0 }, "slow");
}


function isEmpty(str) {
  return !str.trim().length;
}


function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    //alert("Valid email address!");
    //document.form1.text1.focus();
    return true;
  }

  else {
    return false;
  }
}


function ValidateHex(input) {
  var re = "^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$";
  if (input.value.match(re)) {
    return true;
  }
  else {
    return false;
  }

}



//Style modal
let modal = document.querySelector('.style-modal');
let modal_close = document.querySelector('.modal-close');
let magnifying_glasses = document.querySelectorAll('.img-magnifying');
let styles = document.querySelectorAll('.style-modal .stijl');
let choose_style_buttons = document.querySelectorAll('.style-modal .choose-style');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Close button
modal_close.onclick = function () {
  modal.style.display = "none";
}


//Magnifying glass open modal showing right content
for (var i = 0; i < magnifying_glasses.length; i++) {
  magnifying_glasses[i].onclick = function () {
    let clicked_glass = this.parentNode.parentNode.dataset.name;
    console.log();
    modal.style.display = "block";
    for (var i = 0; i < styles.length; i++) {
      if (styles[i].dataset.style == clicked_glass) {
        styles[i].style.display = "block";
      }
      else {
        styles[i].style.display = "none";
      }
    }
  }
}


//Modal gallery
let thumbnails = document.querySelectorAll('.modal-gallery-thumbnail');

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].onclick = function () {
    this.parentNode.previousElementSibling.querySelector('img').src = this.querySelector('img').src;
    thumbnails_chosen = this.parentNode.querySelectorAll('.modal-gallery-thumbnail');
    for (var i = 0; i < thumbnails_chosen.length; i++) {
      thumbnails_chosen[i].classList.remove('active');
      this.classList.add('active');
    }
  }
}



//Modal choose style button
for (var i = 0; i < choose_style_buttons.length; i++) {
  choose_style_buttons[i].onclick = function () {
    modal.style.display = "none";
    current_step = current_step + 1;
    Step();
  }
}









// Checkbox toggles
let vinkopties = document.querySelectorAll('.step0 .vinkopties-container .vinkopties-optie');
let vinkopties_exclusive_step2 = document.querySelectorAll('.step1 .vinkopties-container.exclusive .vinkopties-optie');
let vinkopties_exclusive_step_stijl = document.querySelectorAll('.step2 .vinkopties-container.exclusive .vinkopties-optie');
let vinkopties_exclusive_step3 = document.querySelectorAll('.step3 .vinkopties-container.exclusive .vinkopties-optie');
let vinkopties_exclusive_step4 = document.querySelectorAll('.step4 .vinkopties-container.exclusive .vinkopties-optie');

for (var i = 0; i < vinkopties.length; i++) {
  vinkopties[i].addEventListener("click", function () {
    this.classList.toggle('active');
  });
}

for (var i = 0; i < vinkopties_exclusive_step2.length; i++) {
  vinkopties_exclusive_step2[i].addEventListener("click", function () {
    for (var i = 0; i < vinkopties_exclusive_step2.length; i++) {
      vinkopties_exclusive_step2[i].classList.remove('active');
    }
    this.classList.add('active');
  });
}

for (var i = 0; i < vinkopties_exclusive_step_stijl.length; i++) {
  vinkopties_exclusive_step_stijl[i].addEventListener("click", function () {
    for (var i = 0; i < vinkopties_exclusive_step_stijl.length; i++) {
      vinkopties_exclusive_step_stijl[i].classList.remove('active');
    }
    this.classList.add('active');
  });
}

for (var i = 0; i < vinkopties_exclusive_step3.length; i++) {
  vinkopties_exclusive_step3[i].addEventListener("click", function () {
    for (var i = 0; i < vinkopties_exclusive_step3.length; i++) {
      vinkopties_exclusive_step3[i].classList.remove('active');
    }
    this.classList.add('active');
  });
}

for (var i = 0; i < vinkopties_exclusive_step4.length; i++) {
  vinkopties_exclusive_step4[i].addEventListener("click", function () {
    for (var i = 0; i < vinkopties_exclusive_step4.length; i++) {
      vinkopties_exclusive_step4[i].classList.remove('active');
    }
    this.classList.add('active');
  });
}





// Previous and next button
let previous_button = document.querySelector('.step-buttons-previous');
let next_button = document.querySelector('.step-buttons-next');
let previous_button_mobile = document.querySelector('.step-buttons-previous-mobile');
let next_button_mobile = document.querySelector('.step-buttons-next-mobile');
let begin_button = document.querySelector('.step-buttons-begin');
let emaildemo_button = document.querySelector('.maildemo-button');
let gegevens_inputs = document.querySelectorAll('.gegevens-input input');
let hex_inputs = document.querySelectorAll('.colors-combination-custom-input .hexinput');

previous_button.addEventListener("click", function () {
  // if (current_step == 3) {
  //   current_step = current_step - 2;
  //   Step();
  // }
  if (current_step > -1) {
    current_step = current_step - 1;
    document.querySelector('.step-buttons-error-message').style.display = "none";
    Step();
  }
});

next_button.addEventListener("click", function () {
  if (current_step == 0 && !CheckChecked() == true) {
    document.querySelector('.step-buttons-error-message').innerHTML = "Kies tenminste één optie om door te gaan.";
    document.querySelector('.step-buttons-error-message').style.display = "block";
    ScrollToTopDesktop();
  }
  // else if (current_step == 1) {
  //   current_step = current_step + 2;
  //   Step();
  // }
  else if (current_step == 3 && document.querySelector('.vinkopties-container.colors .vinkopties-optie[data-name="custom"]').classList.contains('active')) {
    let input_error = false;
    for (var i = 0; i < hex_inputs.length; i++) {
      if (!ValidateHex(hex_inputs[i])) {
        input_error = true;
      }

    }
    if (input_error == true) {
      document.querySelector('.step-buttons-error-message').innerHTML = "Vul 2 geldige hex-kleurwaarden in.";
      document.querySelector('.step-buttons-error-message').style.display = "block";
      ScrollToTopDesktop();
    }
    else if (input_error == false) {
      current_step = current_step + 1;
      document.querySelector('.step-buttons-error-message').style.display = "none";
      Step();
    }
  }
  else if (current_step == 4 && document.querySelector('.vinkopties-container .vinkopties-optie[data-name="upload"]').classList.contains('active')) {
    let input_error = false;
    //console.log(document.querySelector('.vinkopties-container .vinkopties-optie[data-name="upload"] .drop-zone__input').value);
    if (document.querySelector('.vinkopties-container .vinkopties-optie[data-name="upload"] .drop-zone__input').value == "") {
      input_error = true;
    }
    if (input_error == true) {
      document.querySelector('.step-buttons-error-message').innerHTML = "Selecteer een geldig bestand om te uploaden.";
      document.querySelector('.step-buttons-error-message').style.display = "block";
      ScrollToTopDesktop();
    }
    else if (input_error == false) {
      PostLogo();
      current_step = current_step + 1;
      document.querySelector('.step-buttons-error-message').style.display = "none";
      Step();
    }
  }
  else if (current_step == 5) {
    let input_error = false;
    for (var i = 0; i < gegevens_inputs.length; i++) {

      //Check if inputs are empty
      if (gegevens_inputs[i].hasAttribute('required') && isEmpty(gegevens_inputs[i].value)) {
        input_error = true;
      }

      //Check if email is valid
      if (!ValidateEmail(document.querySelector('.gegevens-input .email'))) {
        input_error = true;
        document.querySelector('.gegevens-input .email').focus();
      }

    }
    if (input_error == false) {
      PostLogo();
      let base_url = "https://calendly.com/company-fuel/plan-website-demo?hide_event_type_details=1&hide_gdpr_banner=1&text_color=14223b&primary_color=2d1eed";
      let url = base_url + "&first_name=" + document.querySelector('.step5 .gegevens-input .voornaam').value +
        "&last_name=" + document.querySelector('.step5 .gegevens-input .achternaam').value +
        "&email=" + document.querySelector('.step5 .gegevens-input .email').value;

      document.querySelector('.step-buttons-error-message').style.display = "none";
      document.querySelector('.calendly-inline-widget').dataset.url = url;
      document.querySelector('.calendly-inline-widget iframe').src = url;
      current_step = current_step + 1;
      Step();
    }
    else if (input_error == true) {
      document.querySelector('.step-buttons-error-message').innerHTML = "Zorg dat alle invoervelden correct zijn ingevuld.";
      document.querySelector('.step-buttons-error-message').style.display = "block";
      ScrollToTopDesktop();
    }

  }
  else if (current_step < 7) {
    current_step = current_step + 1;
    document.querySelector('.step-buttons-error-message').style.display = "none";
    Step();
  }
});

previous_button_mobile.addEventListener("click", function () {
  // if (current_step == 3) {
  //   current_step = current_step - 2;
  //   Step();
  // }
  if (current_step > -1) {
    current_step = current_step - 1;
    document.querySelector('.step-buttons-error-message').style.display = "none";
    Step();
  }
});

next_button_mobile.addEventListener("click", function () {
  if (current_step == 0 && !CheckChecked() == true) {
    document.querySelector('.step-buttons-error-message').innerHTML = "Kies tenminste één optie om door te gaan.";
    document.querySelector('.step-buttons-error-message').style.display = "block";
    ScrollToTopDesktop();
  }
  // else if (current_step == 1) {
  //   current_step = current_step + 2;
  //   Step();
  // }
  else if (current_step == 3 && document.querySelector('.vinkopties-container.colors .vinkopties-optie[data-name="custom"]').classList.contains('active')) {
    let input_error = false;
    for (var i = 0; i < hex_inputs.length; i++) {
      if (!ValidateHex(hex_inputs[i])) {
        input_error = true;
      }

    }
    if (input_error == true) {
      document.querySelector('.step-buttons-error-message').innerHTML = "Vul 2 geldige hex-kleurwaarden in.";
      document.querySelector('.step-buttons-error-message').style.display = "block";
      ScrollToTopDesktop();
    }
    else if (input_error == false) {
      current_step = current_step + 1;
      document.querySelector('.step-buttons-error-message').style.display = "none";
      Step();
    }
  }
  else if (current_step == 4 && document.querySelector('.vinkopties-container .vinkopties-optie[data-name="upload"]').classList.contains('active')) {
    let input_error = false;
    //console.log(document.querySelector('.vinkopties-container .vinkopties-optie[data-name="upload"] .drop-zone__input').value);
    if (document.querySelector('.vinkopties-container .vinkopties-optie[data-name="upload"] .drop-zone__input').value == "") {
      input_error = true;
    }
    if (input_error == true) {
      document.querySelector('.step-buttons-error-message').innerHTML = "Selecteer een geldig bestand om te uploaden.";
      document.querySelector('.step-buttons-error-message').style.display = "block";
      ScrollToTopDesktop();
    }
    else if (input_error == false) {
      current_step = current_step + 1;
      document.querySelector('.step-buttons-error-message').style.display = "none";
      Step();
    }
  }
  else if (current_step == 5) {
    let input_error = false;
    for (var i = 0; i < gegevens_inputs.length; i++) {

      //Check if inputs are empty
      if (gegevens_inputs[i].hasAttribute('required') && isEmpty(gegevens_inputs[i].value)) {
        input_error = true;
      }

      //Check if email is valid
      if (!ValidateEmail(document.querySelector('.gegevens-input .email'))) {
        input_error = true;
        document.querySelector('.gegevens-input .email').focus();
      }

    }
    if (input_error == false) {
      PostLogo();
      let base_url = "https://calendly.com/company-fuel/plan-website-demo?hide_event_type_details=1&hide_gdpr_banner=1&text_color=14223b&primary_color=2d1eed";
      let url = base_url + "&first_name=" + document.querySelector('.step5 .gegevens-input .voornaam').value +
        "&last_name=" + document.querySelector('.step5 .gegevens-input .achternaam').value +
        "&email=" + document.querySelector('.step5 .gegevens-input .email').value;

      document.querySelector('.step-buttons-error-message').style.display = "none";
      document.querySelector('.calendly-inline-widget').dataset.url = url;
      document.querySelector('.calendly-inline-widget iframe').src = url;
      current_step = current_step + 1;
      Step();
    }
    else if (input_error == true) {
      document.querySelector('.step-buttons-error-message').innerHTML = "Zorg dat alle invoervelden correct zijn ingevuld.";
      document.querySelector('.step-buttons-error-message').style.display = "block";
      ScrollToTopDesktop();
    }

  }
  else if (current_step < 6) {
    current_step = current_step + 1;
    document.querySelector('.step-buttons-error-message').style.display = "none";
    Step();
  }
});

begin_button.addEventListener("click", function () {
  if (current_step < 6) {
    current_step = current_step + 1;
    Step();
  }
});


let email_clicked = false;
if (!urlParams.has('direct')) {
  emaildemo_button?.addEventListener("click", function () {
    email_clicked = true;
    PostEmail();
  });
}

//Sync color picker with hex input
let color_hexers = document.querySelectorAll('.hexinput');

for (var i = 0; i < color_hexers.length; i++) {
  color_hexers[i].addEventListener('input', function () {
    this.nextElementSibling.value = this.value;
  });
}

let color_pickers = document.querySelectorAll('.colorinput');

for (var i = 0; i < color_pickers.length; i++) {
  color_pickers[i].addEventListener('input', function () {
    this.previousElementSibling.value = this.value;
  });
}







//Post function
function PostChoices(imageurl) {
  let choices = new Array();
  let step1 = new Array();

  for (var i = 0; i < vinkopties.length; i++) {
    if (vinkopties[i].classList.contains("active")) {
      let name = vinkopties[i].dataset.name;
      step1.push({ 'option': name });
    }
  }

  choices.push({ 'doel': step1 });


  let step2 = document.querySelector('.step1 .vinkopties-container .vinkopties-optie.active').dataset.name;
  choices.push({ 'uitstraling': step2 });


  let step_stijl = document.querySelector('.step2 .vinkopties-container .vinkopties-optie.active').dataset.name;
  choices.push({ 'stijl': step_stijl });

  let step3;
  if (document.querySelector('.step3 .vinkopties-container .vinkopties-optie.active').dataset.name == 'custom') {
    step3 = new Array();
    step3.push({
      'name': document.querySelector('.step3 .vinkopties-container .vinkopties-optie.active').dataset.name,
      'primary': document.querySelector('.step3 .vinkopties-container .vinkopties-optie .hexinput.primary').value,
      'secondary': document.querySelector('.step3 .vinkopties-container .vinkopties-optie .hexinput.secondary').value,
    });
  }
  else {
    step3 = document.querySelector('.step3 .vinkopties-container .vinkopties-optie.active').dataset.name;
  }
  choices.push({ 'kleuren': step3 });


  let step4 = document.querySelector('.step4 .vinkopties-container .vinkopties-optie.active').dataset.name;
  choices.push({ 'logo': step4, 'url': imageurl });


  let step5 = new Array();
  step5.push({
    'voornaam': document.querySelector('.step5 .gegevens-input .voornaam').value,
    'achternaam': document.querySelector('.step5 .gegevens-input .achternaam').value,
    'bedrijfsnaam': document.querySelector('.step5 .gegevens-input .bedrijfsnaam').value,
    'email': document.querySelector('.step5 .gegevens-input .email').value,
    'telefoon': document.querySelector('.step5 .gegevens-input .telefoon').value,
  });

  choices.push({ 'gegevens': step5 });


  console.log(choices);

  $.post('send.php', { data: choices });
}


function PostEmail() {

  let vinkopties = document.querySelectorAll('.step0 .vinkopties-container .vinkopties-optie');
  let doelen = null;
  for (var i = 0; i < vinkopties.length; i++) {
    if (vinkopties[i].classList.contains("active")) {
      let name = vinkopties[i].dataset.name;
      (doelen == null) ? doelen = name : doelen = doelen + ", " + name;
    }
  }

  let branche = document.querySelector('.step1 .vinkopties-container .vinkopties-optie.active').dataset.name;
  let stijl = document.querySelector('.step2 .vinkopties-container .vinkopties-optie.active').dataset.name;
  kleuren = document.querySelector('.step3 .vinkopties-container .vinkopties-optie.active').dataset.name;

  let logo = document.querySelector('.step4 .vinkopties-container .vinkopties-optie.active').dataset.name;
  (logo == "later") ? logo = "https://www.gmskeleton.nl/wp-content/uploads/2019/12/placeholder.com-logo1.png" : logo = image_url;

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

  const urlParameters = `demo=true&bedrijfsnaam=${bedrijfsnaam}&heroBg=https://images.unsplash.com/photo-1508873699372-7aeab60b44ab&primaryColor=${primaryColor}&secondaryColor=${secondaryColor}&bedrijfsnaam=${bedrijfsnaam}&logoUrl=${logo}&info%40companyfuel.nl=${email}&branche=${branche}&style=${stijl}`;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '../../save.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (xhr.status === 200) {


      const newId = xhr.responseText;
      console.log(`Data saved successfully! New ID is ${newId}`);
      $.post('sendMail.php', { email: email, name: voornaam, bedrijfsnaam: bedrijfsnaam, newId: newId }).done(function () {
        window.location = "https://www.companyfuel.nl/website-advies-verstuurd/";
      });
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
}








function PostCalendly() {

  let vinkopties = document.querySelectorAll('.step0 .vinkopties-container .vinkopties-optie');
  let doelen = null;
  for (var i = 0; i < vinkopties.length; i++) {
    if (vinkopties[i].classList.contains("active")) {
      let name = vinkopties[i].dataset.name;
      (doelen == null) ? doelen = name : doelen = doelen + ", " + name;
    }
  }

  let branche = document.querySelector('.step1 .vinkopties-container .vinkopties-optie.active').dataset.name;
  let stijl = document.querySelector('.step2 .vinkopties-container .vinkopties-optie.active').dataset.name
  kleuren = document.querySelector('.step3 .vinkopties-container .vinkopties-optie.active').dataset.name;

  let logo = document.querySelector('.step4 .vinkopties-container .vinkopties-optie.active').dataset.name;
  (logo == "later") ? logo = "https://www.gmskeleton.nl/wp-content/uploads/2019/12/placeholder.com-logo1.png" : logo = image_url;

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

  const urlParameters = `demo=true&bedrijfsnaam=${bedrijfsnaam}&heroBg=https://images.unsplash.com/photo-1508873699372-7aeab60b44ab&primaryColor=${primaryColor}&secondaryColor=${secondaryColor}&bedrijfsnaam=${bedrijfsnaam}&logoUrl=${logo}&info%40companyfuel.nl=${email}&branche=${branche}&style=${stijl}`;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '../../save.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (xhr.status === 200) {


      const newId = xhr.responseText;
      console.log(`Data saved successfully! New ID is ${newId}`);
      // $.post('sendMail.php', { email: email, name: voornaam, bedrijfsnaam: bedrijfsnaam, newId: newId }).done(function () {
      //   window.location = "https://www.companyfuel.nl/bedankt?succes=true";
      // });
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
}








var image_url;
//Post logo to server
function PostLogo() {
  if (document.querySelector('.vinkopties-container .vinkopties-optie[data-name="upload"]').classList.contains('active')) {
    const file = document.querySelector('.drop-zone .drop-zone__input').files[0];
    var id = Math.floor(Math.random() * (99999 - 10000) + 10000);
    var name = './demo_logos/' + id + '-' + document.querySelector('.drop-zone .drop-zone__input').files[0].name;
    var urlname = '/demo_logos/' + id + '-' + document.querySelector('.drop-zone .drop-zone__input').files[0].name;
    const reader = new FileReader();
    reader.onloadend = () => {
      const data = reader.result.replace('data:', '').replace(/^.+,/, '');
      $.post('send_logo.php', { data: data, name });
    };
    reader.readAsDataURL(file);
    image_url = window.location.href.split('?')[0] + urlname;
    PostChoices(image_url);
  }
  else {
    PostChoices("");
  }
}






document.body.onbeforeunload = function(){
  if (current_step == 6 && email_clicked == false && urlParams.get('direct') != 'true') {
    PostCalendly();
  }
};







//Drag drop file upload
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name + " geüpload ✓";

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;

      const img = new Image();
      img.src = reader.result;

      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const maxHeight = img.height + 24;
        console.log(aspectRatio)
        dropZoneElement.style.aspectRatio = aspectRatio;
        dropZoneElement.style.maxHeight = `${maxHeight}px`;
      };
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}


//Show/hide bottom bar
let bottom_bar = document.querySelector('.top_bar_menu');
let bottom_bar_hide = document.querySelector('.hide-bar');
let bottom_bar_hide_icon = document.querySelector('.hide-bar .icon')
let is_visible = true;

bottom_bar_hide.addEventListener("click", function() { 
  if (is_visible == true) {
    bottom_bar.style.transform = "translateY(79px)"; 
    bottom_bar_hide_icon.innerHTML = 'expand_less';
    is_visible = false;
  }
  else {
    bottom_bar.style.transform = "translateY(0px)"; 
    bottom_bar_hide_icon.innerHTML = 'expand_more';
    is_visible = true;
  }
  
});



// Loading screen
window.addEventListener("load", (event) => {
  setTimeout(() => {
    $(".loading-screen").animate({
      opacity: 0
    }, 1000, function () {
      $(".loading-screen").css("display", "none");
      $(' html, body').css({ overflow: 'auto' });
    });
  }, 1000);

});
