
// window.onload = function(){
const lang_en = document.querySelector(".en-btn");
const lang_de = document.querySelector(".de-btn");

const en = {
    headerTag: 'THANK YOU FOR YOUR INTEREST IN RECYCLING AND PLASTICS!',
    headerTag2: 'cosnova supports plastic waste recycling',
    bannerHeader: `<p>
        You probably came across this page via our new <span class="font-weight-bold"> 'Sisterlove' collection,</span>
        </p>
        <p>
            the <span class="font-weight-bold">Limited Edition TANsation</span> by our brands essence and CATRICE.
        </p>`,
    details: `<p>As part of this Limited Edition "TANsation", cosnova, the company
                behind <span class="text-decoration-underline"> essence </span>
                and
            <span class="text-decoration-underline"> CATRICE </span>,  is supporting the <span
                class="text-decoration-underline font-weight-bold">PPlastics For Change </span>
                organization with a <span class="font-weight-bold">donation of 35,000 US dollars. </span>
                Since the beginning
                of 2020, Plastics For Change has been using this money to expand two 
            <span class="font-weight-bold">collection centers for plastic waste </span>
            in India. The aim of the cooperation is to 
                <span class="font-weight-bold"> recycle
                </span>carelessly disposed of but still 
                <span class="font-weight-bold"> usable plastic  </span>
                and to reuse
                it as a so-called recyclate. 
        </p>
        <p>
            The collaboration with Plastics For Change is particularly close to
            <span class="text-decoration-underline"> cosnova's</span> heart, as the cooperation not only makes an important
                contribution to environmental protection, but also offers Indian
                workers a sustainable livelihood.</p>`,
    detailsTag: 'Donate via ',
    respText: `As a cosmetics company we take responsibility, because our beautiful planet and the
            people who live on it are very dear to us. That is why we want to <span class="font-weight-bold">
            conserve resources,protect the environment and contribute to reducing the vast amounts of waste.
                </span>`,
    process:`  <h3 class="theme-color">Specifically, this means: </h3>
            <p>… that we are successively reducing the proportion of new plastic in the outer
packaging of our cosmetic products. Our goal: to produce  <span
                    class="font-weight-bold"> at least 50 percent
of our packaging from recycled material </span> by 2025.</p>
            <p>
                … that we design our <span class="font-weight-bold"> packaging to be recyclable  </span>
                – by  <span class="font-weight-bold"> up to 75 percent by 2025.</span>
            </p>
            <p>… that we generally use less material for our packaging.
Our objective: <span class="font-weight-bold">30 percent less packaging material by 2025. 
                </span>
            </p>`,
            prcessTag:'Target by',
            productText:`By the way: significantly less new plastic was also used in the production
of the TANsation packaging by <span
                class="text-decoration-underline">essence </span> and <span
                class="text-decoration-underline"> CATRICE,</span>  e.g. the packaging of
the <span class="text-decoration-underline"> CATRICE Bronzing Babe Of The Dunes Maxi Baked Bronzing Powder
Face & Body</span> requires 95 percent less "Virgin Plastics".*`,
mark:'* compared to the same packaging if it is made entirely of plastic.'

}

const de = {
    headerTag: 'DANKE FÜR DEIN INTERESSE AM THEMA RECYCLING UND PLASTIK!',
    headerTag2: 'cosnova fördert Recycling von Plastikmüll',
    bannerHeader: `<p>
            Wahrscheinlich bist Du über
        </p>
        <p>
            unsere neue<span class="font-weight-bold">,Sisterlove'-Kollektion</span>, die <span
                class="font-weight-bold">Limited Edition TANsation</span> unserer Marken
        </p>
        <p> CATRICE und essence auf diese Seite gestoßen.</p>`,

    details: `<p>Im Rahmen dieser Limited Edition „TANsation“ unterstützt cosnova,
            das Unternehmen hinter<span class="text-decoration-underline"> essence </span>und
            <span class="text-decoration-underline"> CATRICE </span>, die Organisation <span
                class="text-decoration-underline font-weight-bold">Plastics For Change </span>
            mit einer <span class="font-weight-bold">Spende über 35.000 US-Dollar. </span>Seit Anfang 2020 baut
            Plastics For Change mit
            diesem Geld zwei
            <span class="font-weight-bold">Sammelzentren für Plastikmüll </span> in Indien aus.
            Ziel der Zusammenarbeit
            ist es, achtlos entsorgtes, aber noch<span class="font-weight-bold"> nutzbares Plastik zu
                recyceln</span>
            und
            als sogenanntes Rezyklat weiterzuverwenden.
            Die Zusammenarbeit mit Plastics For Change liegt cosnova besonders
            am Herzen, da die Kooperation nicht nur einen wichtigen Beitrag zum
            Umweltschutz leistet, sondern den indischen Arbeiterinnen und Arbeitern
            auch eine nachhaltige Existenzgrundlage bietet.
        </p>`,
    detailsTag: 'Spende über',
    respText: `       Als Kosmetikunternehmen übernehmen wir Verantwortung, denn unser wunderschöner
            Planet und die Menschen, die auf ihm Leben, liegen uns sehr am Herzen. Darum möchten
            wir <span class="font-weight-bold">Ressourcen schonen, die Umwelt schützen und zur Reduktion der
                Müllberge beitragen. </span>`,
    process:`  <h3 class="theme-color">Konkret bedeutet das:</h3>
            <p>… , dass wir den Anteil an Neu-Plastik in den Umverpackungen unserer
                Kosmetikprodukte sukzessive reduzieren. Unser Ziel: bis 2025 <span
                    class="font-weight-bold">mindestens
                    50 Prozent unserer Verpackungen aus recyceltem Material</span> herstellen.</p>
            <p>
                … , dass wir unsere <span class="font-weight-bold">Verpackungen recyclingfähig </span>designen –
                und zwar <span class="font-weight-bold">bis zu 75 Prozent bis 2025.</span>
            </p>
            <p>
                … , dass wir generell weniger Material für unsere Verpackungen verwenden.
                Unser Bestreben: <span class="font-weight-bold">30 Prozent weniger Verpackungsmaterial bis 2025.
                </span>
            </p>`,
            prcessTag:'Ziele bis',
            productText: ` Übrigens: Auch bei der Herstellung des TANsation-Packagings von
            <span class="text-decoration-underline">essence</span> und <span
                class="text-decoration-underline">CATRICE</span> wurde deutlich weniger Neu-Plastik verwendet,
            so kommt z.B. die Verpackung des <span class="text-decoration-underline">
                so kommt z.B. die Verpackung des CATRICE Bronzing Babe Of The Dunes
                Maxi Baked Bronzing Powders Face & Body
                so kommt z.B. die Verpackung des </span> mit 95 Prozent weniger
            „Virgin Plastics“ aus.*`,
            mark:'* im Vergleich zu derselben Verpackung, wenn sie vollständig aus Plastik besteht.'

}
let activeLang = de

const changeLang = (lang) => {
    const activeClass = lang === 'en' ? lang_en : lang_de
    const nonAcive = activeClass === lang_en ? lang_de : lang_en
    activeLang = lang === 'en' ? en : de;
    activeClass.classList.add('active');
    nonAcive.classList.remove("active");
    applyChanges(activeLang)
}

lang_en.onclick = () => changeLang('en');
lang_de.onclick = () => changeLang('de');

const applyChanges = (activeLang) => {
    document.querySelector("#headerTag").innerHTML = activeLang.headerTag;
    document.querySelector("#headerTag2").innerHTML = activeLang.headerTag2;
    document.querySelector("#bannerHeader").innerHTML = activeLang.bannerHeader;
    document.querySelector("#details").innerHTML = activeLang.details;
    document.querySelector("#respText").innerHTML = activeLang.respText;
    document.querySelector("#productText").innerHTML = activeLang.productText
    document.querySelector(".mark").innerHTML = activeLang.mark
}

changeLang('de');
applyChanges(activeLang)

