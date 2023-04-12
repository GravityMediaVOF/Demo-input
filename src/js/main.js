//Step function
let current_step = 6;
let all_steps = document.querySelectorAll('.step');

function Step() {
  if (current_step == 0) {
    document.querySelector(".step-buttons-container.bottom").style.display = "none";
    document.querySelector(".step-buttons-container.mobile").style.display = "none";
  }
  else {
    document.querySelector(".step-buttons-container.bottom").style.display = "";
    document.querySelector(".step-buttons-container.mobile").style.display = "";
  }

  if (current_step == 7) {
    document.body.classList.add("container_full");
    document.querySelector(".step-buttons-container.bottom").style.display = "none";
    document.querySelector(".step-buttons-container.mobile").style.display = "none";
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


function ValidatePhoneNumber(input) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (input.value.match(re)) {
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
let vinkopties = document.querySelectorAll('.step1 .vinkopties-container .vinkopties-optie');
let vinkopties_exclusive_step2 = document.querySelectorAll('.step2 .vinkopties-container.exclusive .vinkopties-optie');
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
  if (current_step > 0) {
    current_step = current_step - 1;
    document.querySelector('.step-buttons-error-message').style.display = "none";
    Step();
  }
});

next_button.addEventListener("click", function () {
  if (current_step == 1 && !CheckChecked() == true) {
    document.querySelector('.step-buttons-error-message').innerHTML = "Kies tenminste één optie om door te gaan.";
    document.querySelector('.step-buttons-error-message').style.display = "block";
    ScrollToTopDesktop();
  }
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
      if (isEmpty(gegevens_inputs[i].value)) {
        input_error = true;
      }

      //Check if email is valid
      if (!ValidateEmail(document.querySelector('.gegevens-input .email'))) {
        input_error = true;
        document.querySelector('.gegevens-input .email').focus();
      }

      //Check if phone is valid
      if (!ValidatePhoneNumber(document.querySelector('.gegevens-input .telefoon'))) {
        input_error = true;
        document.querySelector('.gegevens-input .telefoon').focus();
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
  if (current_step > 0) {
    current_step = current_step - 1;
    document.querySelector('.step-buttons-error-message').style.display = "none";
    Step();
  }
});

next_button_mobile.addEventListener("click", function () {
  if (current_step == 1 && !CheckChecked() == true) {
    document.querySelector('.step-buttons-error-message').innerHTML = "Kies tenminste één optie om door te gaan.";
    document.querySelector('.step-buttons-error-message').style.display = "block";
    ScrollToTopDesktop();
  }
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
      if (isEmpty(gegevens_inputs[i].value)) {
        input_error = true;
      }

      //Check if email is valid
      if (!ValidateEmail(document.querySelector('.gegevens-input .email'))) {
        input_error = true;
        document.querySelector('.gegevens-input .email').focus();
      }

      //Check if phone is valid
      if (!ValidatePhoneNumber(document.querySelector('.gegevens-input .telefoon'))) {
        input_error = true;
        document.querySelector('.gegevens-input .telefoon').focus();
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

emaildemo_button.addEventListener("click", function () {
  PostEmail();
});





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


  let step2 = document.querySelector('.step2 .vinkopties-container .vinkopties-optie.active').dataset.name;
  choices.push({ 'uitstraling': step2 });


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


//Post emailadres
function PostEmail() {
  let mail = new Array();
  mail.push({ 'email': document.querySelector('.step5 .gegevens-input .email').value });
  $.post('send_2.php', { data: mail }).done(function () {
    window.location = "https://www.companyfuel.nl/bedankt?succes=true";
  });
}



//Post logo to server
function PostLogo() {
  if (document.querySelector('.vinkopties-container .vinkopties-optie[data-name="upload"]').classList.contains('active')) {
    const file = document.querySelector('.drop-zone .drop-zone__input').files[0];
    //var bedrijfsnaam = document.querySelector('.step5 .gegevens-input .bedrijfsnaam').value;
    var id = Math.floor(Math.random() * (99999 - 10000) + 10000);
    var name = './demo_logos/' + id + '-' + document.querySelector('.drop-zone .drop-zone__input').files[0].name;
    var urlname = '/demo_logos/' + id + '-' + document.querySelector('.drop-zone .drop-zone__input').files[0].name;
    console.log(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      // Use a regex to remove data url part
      const data = reader.result.replace('data:', '').replace(/^.+,/, '');

      console.log(data);
      $.post('send_logo.php', { data: data, name });
    };
    reader.readAsDataURL(file);
    var image_url = "https://demo.companyfuel.dev" + urlname;
    PostChoices(image_url);
    console.log(image_url);
  }
  else {
    PostChoices("");
  }
}












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

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}
