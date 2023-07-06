<?php
header("Cache-Control: no-cache, must-revalidate"); // HTTP 1.1
header("Pragma: no-cache"); // HTTP 1.0
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <title>Website demo - Company Fuel</title>
  <meta name="description" content="Bekijk het voorbeeld van je ideale website, op basis van jouw doelstellingen en branche. Genereer meer leads en klanten">
  <meta charset="utf-8">
  <meta name="robots" content="noindex, nofollow">
  <meta name="googlebot" content="noindex, nofollow">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-Equiv="Cache-Control" Content="no-cache" />
  <meta http-Equiv="Pragma" Content="no-cache" />
  <meta http-Equiv="Expires" Content="0" />
  <link rel="stylesheet" href="./src/css/style.min.css">
  <link rel="icon" type="image/x-icon" href="./favicon.ico">

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-88Q51HLPSF"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-88Q51HLPSF');
  </script>

  <script src="./src/js/jquery-3.6.3.min.js" charset="utf-8"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,1,0" />

  <!-- demo generation -->
  <script data-cfasync="false" src="./src/js/demoImagesArray.js"></script>
  <script data-cfasync="false" src="./src/js/getDemo.js"></script>

  <title></title>
</head>

<body>

  <div class="top_bar_menu">
    <div class="top_container">
      <a href="https://www.companyfuel.nl/" target="_blank">
        <img class="logo" src="./src/img/cf-logo-dark.svg" alt="">
      </a>
      <div class="menu_options">
        <div class="style_switch_outer">
          <span class="label">Stijl</span>
          <input type="radio" class="style_switch" name="style_switch" id="style1" value="style1">
          <label class="style_label" for="style1" data-tooltip="Fris: minimalistisch en gestroomlijnd" data-flow="bottom"><img src="/src/img/style1-home.webp" width="50px" height="50px" alt="Stijl 1"></label>

          <input type="radio" class="style_switch" name="style_switch" id="style2" value="style2">
          <label class="style_label" for="style2" data-tooltip="Innovatief: vernieuwend & vooruitstrevend" data-flow="bottom"><img src="/src/img/style2-home.webp" width="50px" height="50px" alt="Stijl 2"></label>

          <input type="radio" class="style_switch" name="style_switch" id="style3" value="style3">
          <label class="style_label" for="style3" data-tooltip="Statig: simpel & strak" data-flow="bottom"><img src="/src/img/style3-home.webp" width="50px" height="50px" alt="Stijl 3"></label>
        </div>
        <ul>
          <li class="desktop_active active"><i class="icon">web_asset</i></li>
          <li class="mobile_active"><i class="icon">phone_iphone</i></li>
        </ul>
        <a class="button orange" href="https://www.companyfuel.nl/professionele-website/#features" target="_blank">Bekijk de opties</a>
      </div>
    </div>

  </div>
  <div class="inputform-container">

    <div class="loading-screen">
      <span class="loader"></span>
      <p>Je demo wordt geladen...</p>
    </div>


    <div class="inputform-col left">
      <div class="inputform-inner-col left">



        <div class="step-container-left">

          <div class="step step-1" data-step="-1">
            <div class="instruction-container">
              <h1 class="instruction-titel">Claim je demo</h1>
              <p>Vraag een professionele website demo aan, en zie hoe jouw ideale website eruit ziet, en hoe deze je faciliteert in jouw doelstellingen.</p>
            </div>
            <div class="step-buttons-container">
              <div class="step-buttons-begin button">Starten met invullen</div>
            </div>
          </div>

          <div class="step step0" data-step="0">
            <div class="instruction-container">
              <h4 class="instruction-subtitel">Doelstellingen</h4>
              <h2 class="instruction-titel">Wat zijn je doelen?</h2>
              <p>Selecteer wat je met je website wil bereiken, zodat onze experts je een goed advies kunnen geven over de opbouw van je website.</p>
            </div>
          </div>

          <div class="step step1" data-step="1">
            <div class="instruction-container">
              <h4 class="instruction-subtitel">Structuur</h4>
              <h2 class="instruction-titel">In welke branche zit je?</h2>
              <p>Kies de branche waarin je actief bent, staat deze er niet tussen kies dan de optie anders.</p>
            </div>
          </div>

          <div class="step step2" data-step="2">
            <div class="instruction-container">
              <h4 class="instruction-subtitel">Design</h4>
              <h2 class="instruction-titel">Kies je stijl</h2>
              <p>Vertel ons over het karakter en de stijl van je bedrijf, zodat we een idee krijgen van de gewenste look & feel.</p>
            </div>
          </div>

          <div class="step step3" data-step="3">
            <div class="instruction-container">
              <h4 class="instruction-subtitel">Kleuren</h4>
              <h2 class="instruction-titel">Kleurenschema</h2>
              <p>Kies een van de vier populaire kleurenschema’s, of geef je eigen kleuren door voor maximale personalisatie.</p>
            </div>
          </div>

          <div class="step step4" data-step="4">
            <div class="instruction-container">
              <h4 class="instruction-subtitel">Merk</h4>
              <h2 class="instruction-titel">Logo kiezen</h2>
              <p>Upload indien gewenst je logo, of sla dit over en bekijk je website met een voorbeeld logo.</p>
            </div>
          </div>

          <div class="step step5" data-step="5">
            <div class="instruction-container">
              <h4 class="instruction-subtitel">Gegevens</h4>
              <h2 class="instruction-titel">Informatie</h2>
              <p>Deze gegevens gebruiken we om de afspraak te bevestigen en je het voorbeeld van je ideale website te sturen.</p>
            </div>
          </div>

          <div class="step step6" data-step="6">
            <div class="instruction-container">
              <h4 class="instruction-subtitel">Advies</h4>
              <h2 class="instruction-titel">Demo afspraak</h2>
              <p>Maak via het formulier een afspraak om je persoonlijke demo te bevestigen. Onze expert laat je dan in 20 minuten zien hoe de website jouw online groei faciliteert.</p>
              <?php if (isset($_GET['direct'])) : ?>
                <div class="step-buttons-begin button demo-direct">Direct genereren</div>
              <?php else : ?>
                <div class="step-buttons-begin button maildemo-button">Stuur de demo per e-mail</div>
              <?php endif; ?>
            </div>
          </div>

          <div class="step step7" data-step="7">
            <div class="instruction-container">
              <h4 class="instruction-subtitel">Advies</h4>
              <h2 class="instruction-titel">Demo afspraak</h2>
              <p>Maak via het formulier een afspraak om je persoonlijke demo te bevestigen. Onze expert laat je dan in 20 minuten zien hoe de website jouw online groei faciliteert.</p>
            </div>

          </div>

          <div class="step-buttons-container bottom desktop">
            <div class="step-buttons-previous">Vorige stap</div>
            <div class="step-buttons-next button">Volgende stap</div>
          </div>



        </div>

        <div class="footer-container desktop">
          <p class="footer-text">Powered by <a class="cf" href="https://www.companyfuel.nl/" target="_blank">company fuel</a><a href="https://www.companyfuel.nl/algemene-voorwaarden/" target="_blank">Voorwaarden</a> <a href="https://www.companyfuel.nl/privacybeleid/" target="_blank">Privacy</a></p>
        </div>

      </div>
    </div>




    <div class="inputform-col right">
      <div class="inputform-inner-col right">

        <div class="step-container-right">

          <div class="step-buttons-error-message">Kies tenminste één optie om door te gaan</div>

          <div class="step step-1" data-step="-1">
            <div class="video-container">
              <video src="./src/img/Demogenerator - Animatie Testttt.webm" autoplay muted loop></video>
            </div>
          </div>







          <div class="step step0" data-step="0">
            <div class="vinkopties-container">

              <div class="vinkopties-optie" data-name="leads_genereren">
                <div class="vinkopties-vink"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Leads genereren</h4>
                  <p class="vinkopties-p">Genereer leads als basis voor een succesvolle sales pipeline</p>
                </div>
              </div>

              <div class="vinkopties-optie" data-name="hoger_google">
                <div class="vinkopties-vink"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Hoger in Google (SEO)</h4>
                  <p class="vinkopties-p">Verhoog je positie met SEO en word gevonden op jouw expertise</p>
                </div>
              </div>

              <div class="vinkopties-optie" data-name="online_verkopen">
                <div class="vinkopties-vink"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Online verkopen</h4>
                  <p class="vinkopties-p">Verkoop producten of diensten en ontvang betalingen online</p>
                </div>
              </div>

              <!-- <div class="vinkopties-optie" data-name="klanten_onboarden">
                <div class="vinkopties-vink"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Klanten onboarden</h4>
                  <p class="vinkopties-p">Gemakkelijke informatie verwerking en verhoog effectiviteit</p>
                </div>
              </div> -->

              <div class="vinkopties-optie" data-name="tijd_besparen">
                <div class="vinkopties-vink"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Tijd besparen</h4>
                  <p class="vinkopties-p">Automatiseer herhaalde processen en bespaar tijd</p>
                </div>
              </div>

              <div class="vinkopties-optie" data-name="personeel_aantrekken">
                <div class="vinkopties-vink"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Personeel aantrekken</h4>
                  <p class="vinkopties-p">Promoot je bedrijf als werkgever en ontvang sollicitaties</p>
                </div>
              </div>

            </div>
          </div>








          <div class="step step1" data-step="1">
            <div class="vinkopties-container exclusive single-check">
              <div class="vinkopties-optie active" data-name="zakelijke_dienstverlening">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Zakelijke dienstverlening</h4>
                  <p class="vinkopties-p">Experts die zakelijke groei en succes stimuleren</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/zakelijke_dienstverlening.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="administratieve_dienstverlening">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Administratieve dienstverlening</h4>
                  <p class="vinkopties-p">Advies en ondersteuning bij administratieve zaken</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/administratieve_dienstverlening.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="juridische_dienstverlening">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Juridische dienstverlening</h4>
                  <p class="vinkopties-p">Juridische expertise die u kunt vertrouwen</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/juridische_dienstverlening.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="marketing_en_communicatie_advies">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Marketing & communicatie</h4>
                  <p class="vinkopties-p">Oplossingen bij merkstrategie en marketing</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/marketing_communicatie.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="creatieve_beroepen">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Creatieve beroepen</h4>
                  <p class="vinkopties-p">Innovatie en inspiratie bij creatieve projecten</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/creatieve_beroepen.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="software_en_ontwikkeling">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Software & ontwikkeling</h4>
                  <p class="vinkopties-p">Maatwerk oplossingen voor digitale ontwikkeling</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/software_ontwikkeling.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="gezondheid_en_verzorging">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Gezondheid & verzorging</h4>
                  <p class="vinkopties-p">Zorg en ondersteuning voor welzijn</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/gezondheid_verzorging.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="bouw_en_klusbedrijven">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Bouw- & klusbedrijven</h4>
                  <p class="vinkopties-p">Vakkundigheid en kwaliteit in bouwprojecten</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/bouw_klusbedrijven.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="handel_en_ecommerce">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Handel & e-commerce</h4>
                  <p class="vinkopties-p">Ondernemingen in handel en e-commerce</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/handel_ecommerce.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="evenementen">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Evenementen</h4>
                  <p class="vinkopties-p">Organisatie en ondersteuning bij evenementen</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/evenementen.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="sport_en_recreatie">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Sport en recreatie</h4>
                  <p class="vinkopties-p">Diensten in sport en recreatie activiteiten</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/sport_recreatie.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="vastgoed_en_woning">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Vastgoed & woning</h4>
                  <p class="vinkopties-p">Oplossingen voor vastgoed en woningbehoeften</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/vastgoed_woning.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="onderwijs_en_ontwikkeling">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Onderwijs & ontwikkeling</h4>
                  <p class="vinkopties-p">Inspireer leren en groei met onderwijs en ontwikkeling</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/onderwijs_ontwikkeling.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="reizen">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Reizen</h4>
                  <p class="vinkopties-p">Bied reiservaringen die de wereld helpen ontdekken</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/reizen.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="horeca">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Horeca</h4>
                  <p class="vinkopties-p">Bied een gastvrije en culinaire ervaring in de horeca</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/horeca.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="human_resources">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Human Resources</h4>
                  <p class="vinkopties-p">Strategisch beheer van talent en organisatie</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/human_resources.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="vervoer_en_opslag">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Vervoer en opslag</h4>
                  <p class="vinkopties-p">Efficiënte transport- en opslagoplossingen</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/vervoer_opslag.webp" alt="">
                </div>
              </div>
              <div class="vinkopties-optie" data-name="non_profit">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Non-profit</h4>
                  <p class="vinkopties-p">Samen bouwen aan een betere wereld</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/branche_icons/non-profit.webp" alt="">
                </div>
              </div>
            </div>
          </div>



          <div class="step step2" data-step="2">
            <div class="vinkopties-container exclusive uitstraling">

              <div class="vinkopties-optie active" data-name="style1">
                <div class="vinkopties-vink"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Fris</h4>
                  <p class="vinkopties-p">Minimalistisch en gestroomlijnd ontwerp.</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/style1-home.webp" alt="">
                  <div class="img-magnifying"></div>
                </div>
              </div>

              <div class="vinkopties-optie" data-name="style2">
                <div class="vinkopties-vink"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Innovatief</h4>
                  <p class="vinkopties-p">Vernieuwend & vooruitstrevend, moderne uitstraling.</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/style2-home.webp" alt="">
                  <div class="img-magnifying"></div>
                </div>
              </div>

              <div class="vinkopties-optie" data-name="style3">
                <div class="vinkopties-vink"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Statig</h4>
                  <p class="vinkopties-p">Simpel & strak, schreeuwerige uitstraling.</p>
                </div>
                <div class="vinkopties-img">
                  <img src="./src/img/style3-home.webp" alt="">
                  <div class="img-magnifying"></div>
                </div>
              </div>

            </div>
          </div>









          <div class="step step3" data-step="3">
            <div class="vinkopties-container exclusive colors">

              <div class="duo-grid">

                <div class="vinkopties-optie active" data-name="combi1">
                  <div class="vinkopties-vink vinkopties-vink-radio"></div>
                  <div class="vinkopties-text">
                    <h4 class="vinkopties-subtitel">Betrouwbaar</h4>
                    <div class="colors-combination-container">
                      <div class="colors-combination-color color-1-1"></div>
                      <div class="colors-combination-color color-1-2"></div>
                    </div>
                  </div>
                </div>

                <div class="vinkopties-optie" data-name="combi2">
                  <div class="vinkopties-vink vinkopties-vink-radio"></div>
                  <div class="vinkopties-text">
                    <h4 class="vinkopties-subtitel">Levendig</h4>
                    <div class="colors-combination-container">
                      <div class="colors-combination-color color-2-1"></div>
                      <div class="colors-combination-color color-2-2"></div>
                    </div>
                  </div>
                </div>

                <div class="vinkopties-optie" data-name="combi3">
                  <div class="vinkopties-vink vinkopties-vink-radio"></div>
                  <div class="vinkopties-text">
                    <h4 class="vinkopties-subtitel">Sfeervol</h4>
                    <div class="colors-combination-container">
                      <div class="colors-combination-color color-3-1"></div>
                      <div class="colors-combination-color color-3-2"></div>
                    </div>
                  </div>
                </div>

                <div class="vinkopties-optie" data-name="combi4">
                  <div class="vinkopties-vink vinkopties-vink-radio"></div>
                  <div class="vinkopties-text">
                    <h4 class="vinkopties-subtitel">Neutraal</h4>
                    <div class="colors-combination-container">
                      <div class="colors-combination-color color-4-1"></div>
                      <div class="colors-combination-color color-4-2"></div>
                    </div>
                  </div>
                </div>

              </div>

              <div class="vinkopties-optie" data-name="custom">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Eigen kleuren gebruiken</h4>
                  <p class="vinkopties-p">Voer de juiste hex-code in of selecteer de juiste kleuren met onze color picker</p>
                  <div class="colors-combination-container">
                    <div class="colors-combination-custom-container">
                      <p>Primaire kleur</p>
                      <div class="colors-combination-custom-input">
                        <input class="hexinput primary" type="text" name="" value="" placeholder="#FFFFFF">
                        <input class="colorinput" type="color" name="primary" value="#e66465">
                      </div>
                    </div>
                    <div class="colors-combination-custom-container">
                      <p>Secondaire kleur</p>
                      <div class="colors-combination-custom-input">
                        <input class="hexinput secondary" type="text" name="" value="" placeholder="#FFFFFF">
                        <input class="colorinput" type="color" name="secondary" value="#e66465">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>









          <div class="step step4" data-step="4">
            <div class="vinkopties-container exclusive">

              <div class="vinkopties-optie active" data-name="upload">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Logo uploaden</h4>
                  <p class="vinkopties-p">Ik heb al een goed logo voor mijn bedrijf, en wil er dus geen meer laten maken.</p>
                  <div class="logo-upload-container">
                    <p class="drop-zone__title">Plaats je logo hier</p>
                    <div class="drop-zone">
                      <div class="drop-zone__prompt"><span>Logo zoeken </span>
                        <p> of drag and drop.</p>
                      </div>
                      <input type="file" name="logo_upload" class="drop-zone__input" accept="image/*">
                    </div>
                    <p class="drop-zone__label">Ondersteunde bestandsformaten: .png, .webp, .svg, .jpg</p>
                  </div>

                </div>
              </div>

              <div class="vinkopties-optie" data-name="later">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel">Logo later toevoegen</h4>
                  <p class="vinkopties-p">Deze stap overslaan en later een logo toevoegen.</p>
                </div>
              </div>

            </div>
          </div>







          <div class="step step5" data-step="5">
            <div class="gegevens-container">
              <div class="duo-grid">
                <div class="gegevens-input">
                  <p>Voornaam*</p>
                  <input class="voornaam" type="text" name="" value="" required>
                </div>
                <div class="gegevens-input">
                  <p>Achternaam*</p>
                  <input class="achternaam" type="text" name="" value="" required>
                </div>
              </div>
              <div class="gegevens-input">
                <p>Bedrijfsnaam*</p>
                <input class="bedrijfsnaam" type="text" name="" value="" required>
              </div>
              <div class="gegevens-input">
                <p>E-mail*</p>
                <input class="email" type="text" name="" value="" required>
              </div>
              <div class="gegevens-input">
                <p>Telefoon</p>
                <input class="telefoon" type="text" name="" value="">
              </div>
            </div>
          </div>






          <div class="step step6" data-step="6">
            <div class="afspraak-container">
              <div class="iframe-container">
                <!-- Calendly inline widget begin -->
                <div class="calendly-inline-widget" data-url="https://calendly.com/company-fuel/plan-website-demo?hide_event_type_details=1&hide_gdpr_banner=1&text_color=14223b&primary_color=2d1eed" style="min-width:320px;height:750px;"></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                <!-- Calendly inline widget end -->
              </div>
            </div>
          </div>

          <div class="step step7" data-step="7">
            <div class="demo-container">
              <iframe id="demoFrame" frameborder="0" marginwidth="0" marginheight="0" scrolling="YES" width="100%" height="100%"></iframe>
            </div>
          </div>

          <!-- <div class="step step8" data-step="8">
            <div class="vinkopties-container single-check">

              <div class="vinkopties-optie active" data-name="advies_consultancy">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel vinkopties-subtitel-no-space">Advies en consultancy</h4>
                </div>
              </div>

              <div class="vinkopties-optie" data-name="financiele_dienstverlening">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel vinkopties-subtitel-no-space">Financiële dienstverlening</h4>
                </div>
              </div>

              <div class="vinkopties-optie" data-name="juridische_dienstverlening">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel vinkopties-subtitel-no-space">Juridische dienstverlening</h4>
                </div>
              </div>

              <div class="vinkopties-optie" data-name="it_dienstverlening">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel vinkopties-subtitel-no-space">IT-dienstverlening</h4>
                </div>
              </div>

              <div class="vinkopties-optie" data-name="marketing_communicatie">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel vinkopties-subtitel-no-space">Marketing en communicatie</h4>
                </div>
              </div>

              <div class="vinkopties-optie" data-name="human_resources">
                <div class="vinkopties-vink vinkopties-vink-radio"></div>
                <div class="vinkopties-text">
                  <h4 class="vinkopties-subtitel vinkopties-subtitel-no-space">Human resources (HR)</h4>
                </div>
              </div>

            </div>
          </div> -->








        </div>

      </div>
    </div>

    <div class="step-buttons-container mobile">
      <div class="step-buttons-previous-mobile">Vorige stap</div>
      <div class="step-buttons-next-mobile button">Volgende stap</div>
    </div>

    <div class="footer-container mobile">
      <p class="footer-text"><a class="cf" href="https://www.companyfuel.nl/" target="_blank">company fuel</a><br><a href="https://www.companyfuel.nl/algemene-voorwaarden/" target="_blank">Voorwaarden</a> <a href="https://www.companyfuel.nl/privacybeleid/" target="_blank">Privacy</a></p>
    </div>

  </div>

  <div class="style-modal">
    <div class="style-modal-content">
      <div class="modal-close"></div>
      <div class="modal-content-container">

        <div class="modal-content-left">


          <div class="stijl" data-style="style1">
            <div class="modal-main-image">
              <img src="./src/img/style1-home.webp" alt="">
            </div>
            <div class="modal-gallery-container">
              <div class="modal-gallery-thumbnail active">
                <img src="./src/img/style1-home.webp" alt="">
              </div>
              <div class="modal-gallery-thumbnail">
                <img src="./src/img/style1-element.webp" alt="">
              </div>
              <div class="modal-gallery-thumbnail">
                <img src="./src/img/style1-footer.webp" alt="">
              </div>
            </div>
          </div>





          <div class="stijl" data-style="style2">
            <div class="modal-main-image">
              <img src="./src/img/style2-home.webp" alt="">
            </div>
            <div class="modal-gallery-container">
              <div class="modal-gallery-thumbnail active">
                <img src="./src/img/style2-home.webp" alt="">
              </div>
              <div class="modal-gallery-thumbnail">
                <img src="./src/img/style2-element.webp" alt="">
              </div>
              <div class="modal-gallery-thumbnail">
                <img src="./src/img/style2-footer.webp" alt="">
              </div>
            </div>
          </div>





          <div class="stijl" data-style="style3">
            <div class="modal-main-image">
              <img src="./src/img/style3-home.webp" alt="">
            </div>
            <div class="modal-gallery-container">
              <div class="modal-gallery-thumbnail active">
                <img src="./src/img/style3-home.webp" alt="">
              </div>
              <div class="modal-gallery-thumbnail">
                <img src="./src/img/style3-element.webp" alt="">
              </div>
              <div class="modal-gallery-thumbnail">
                <img src="./src/img/style3-footer.webp" alt="">
              </div>
            </div>
          </div>


        </div>

        <div class="modal-content-right">



          <div class="stijl" data-style="style1">
            <h1 class="modal-titel">Fris</h1>
            <p>Deze stijl is modern en rustig met blauwe tinten, en biedt de volgende voordelen:</p>
            <div class="modal-bullet-list">
              <div class="bullet-point">
                <div class="bullet"></div>
                <p>Gebruik van lichte kleuren</p>
              </div>
              <div class="bullet-point">
                <div class="bullet"></div>
                <p>Frisse, schone uitstraling</p>
              </div>
              <div class="bullet-point">
                <div class="bullet"></div>
                <p>Benadrukt eenvoud & ruimte</p>
              </div>
            </div>
            <div class="button choose-style">Deze stijl kiezen</div>
          </div>



          <div class="stijl" data-style="style2">
            <h1 class="modal-titel">Opvallend</h1>
            <p>Deze stijl heeft een statige en schreeuwerige uitstraling met voornamelijk rode en zwarte tinten, en biedt de volgende voordelen:</p>
            <div class="modal-bullet-list">
              <div class="bullet-point">
                <div class="bullet"></div>
                <p>Opvallend design dat de aandacht van bezoekers trekt</p>
              </div>
              <div class="bullet-point">
                <div class="bullet"></div>
                <p>Overzichtelijke navigatie die gericht is op conversies</p>
              </div>
              <div class="bullet-point">
                <div class="bullet"></div>
                <p>Mogelijkheid voor het plaatsen van aanbevelingen van klanten</p>
              </div>
            </div>
            <div class="button choose-style">Deze stijl kiezen</div>
          </div>



          <div class="stijl" data-style="style3">
            <h1 class="modal-titel">Innovatief</h1>
            <p>Deze stijl heeft een moderne en speelse uitstraling met hoofdzakelijk paarse en groene tinten, en biedt de volgende voordelen:</p>
            <div class="modal-bullet-list">
              <div class="bullet-point">
                <div class="bullet"></div>
                <p>Futuristische ontwerpelementen, felle kleuren & typografie</p>
              </div>
              <div class="bullet-point">
                <div class="bullet"></div>
                <p>Focus op innovatie</p>
              </div>
              <div class="bullet-point">
                <div class="bullet"></div>
                <p>Vooruitgang & vooruitstrevendheid</p>
              </div>
            </div>
            <div class="button choose-style">Deze stijl kiezen</div>
          </div>

        </div>
      </div>
    </div>
  </div>

</body>
<script data-cfasync="false" src="./src/js/main.js" charset="utf-8"></script>

</html>