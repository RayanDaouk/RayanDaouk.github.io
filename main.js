const hiddenShow = document.querySelectorAll(".contBtn");
const ul = document.querySelectorAll('.animeOpacityList');
const btnPhotoshop = document.querySelector("#btnPhotoshop");
const btn3dsMax = document.querySelector("#btn3dsMax");
const btnUdk4 = document.querySelector("#btnUdk4");
const btnAfterFx = document.querySelector("#btnAfterFx");
const contProfil = document.getElementById('profil');
const skills = document.getElementById('fullComp');
/* --------------------------------- get img of interest -------------------------------- */
const pine = document.getElementById('pine');
const pairiDaiza = document.getElementById('pairiDaiza');
const gameboy = document.getElementById('gameboy');
/* ------------------------- get time of experience ------------------------- */
const time1 = document.getElementById("time1");
const time2 = document.getElementById("time2");
const time3 = document.getElementById("time3");
const time4 = document.getElementById("time4");
const time5 = document.getElementById("time5");

/* ------------------------------- infographie ------------------------------ */
const contPhotoshop = document.getElementById("photoshop");
btnPhotoshop.addEventListener("click", showHiddenPh);
/* ------------------------------------ . ----------------------------------- */
const cont3dsMax = document.getElementById("3dsMax");
btn3dsMax.addEventListener("click", showHidden3ds);
/* ------------------------------------ . ----------------------------------- */
const contUdk4 = document.getElementById("udk4");
btnUdk4.addEventListener("click", showHiddenUdk);
/* ------------------------------------ . ----------------------------------- */
const contAfterFx = document.getElementById("AfterFx");
btnAfterFx.addEventListener("click", showHiddenAfterFx);

/* -------------------------------------------------------------------------- */
/*                           spawn menu HTML-CSS-JS                           */
/* -------------------------------------------------------------------------- */
hiddenShow.forEach((btn) => {
    btn.addEventListener("click", function (btn) {
        const container = this.nextElementSibling;
        if (container.style.transform == "scaleY(0)") {
            container.style.transform = "scaleY(1)";
            this.parentNode.style.height = "100%";
        } else {
            container.style.transform = "scaleY(0)";
            this.parentNode.style.height = "44px";
        }

        const arrBtn = Array.prototype.slice.call(ul);

        arrBtn.forEach(el => {
            if (el.parentNode.id == this.nextElementSibling.id) {
                const lis = [...this.nextElementSibling.children[0].children]; // convert to Arr
                lis.forEach(e => {
                    e.classList.toggle("animeOpacity");
                })
            }
        })
    });
})
/* -------------------------------------------------------------------------- */
/*                              spawn infographie                             */
/* -------------------------------------------------------------------------- */
function showHiddenPh() {
    contPhotoshop.classList.toggle("showHid");
    printPhotoshop();
}

function showHidden3ds() {
    cont3dsMax.classList.toggle("showHid");
    print3dsmax();
}

function showHiddenUdk() {
    contUdk4.classList.toggle("showHid");
    printUdk4();
}

function showHiddenAfterFx() {
    contAfterFx.classList.toggle("showHid");
    printAfterFx();
}


/* -------------------------------------------------------------------------- */
/*                                 text typing                                */
/* -------------------------------------------------------------------------- */
const other = document.getElementById('other');
const speed = 15;
const speed2 = 5;
const speedImg = 200;



const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


/* -------------------------------------------------------------------------- */
/*                                cog transform                               */
/* -------------------------------------------------------------------------- */

const cogSpawn = document.querySelector('.svgAll');
const opacityCog = async () => {
    cogSpawn.style.opacity = "1";
}


/* ------------------------------ Print Profil ------------------------------ */
let text = contProfil.textContent;
contProfil.innerHTML = `<h3 id="printProfilH3"></h3><br><p id="printProfilP">`;
const printProfil = async () => {
    let h3 = document.getElementById('printProfilH3');
    let p = document.getElementById('printProfilP');

    let arrCharText = text.split('{');
    let add = arrCharText[0] + '{';
    for (const chars of add) {
        await sleep(speed2);
        h3.innerHTML += chars;
    }

    add = arrCharText[1];
    for (const chars of add) {
        await sleep(speed2);
        p.innerHTML += chars;
    }
}
/* ----------------------------------- PrintOther ---------------------------------- */
const charOther = other.innerText;
const arrCharOther = charOther.split('{');// 0+{/1
other.innerHTML = `<h3 id="printOtherH3"></h3><br>
<p id="printOtherP"></p>`;

const printOther = async () => {
    let h3 = document.getElementById('printOtherH3');
    let p = document.getElementById('printOtherP');

    // toPrint
    let add = arrCharOther[0] + "{";
    for (const chars of add) {
        await sleep(speed);
        h3.textContent += chars;
    }

    add = arrCharOther[1];
    let newAdd = add.split("(");

    for (const chars of newAdd[0]) {
        await sleep(speed);
        p.textContent += chars;
    }

    p.innerHTML += '<span id="printOtherSpan">(</span>';
    let span = document.getElementById('printOtherSpan');
    for (const chars of newAdd[1]) {
        await sleep(speed);
        span.textContent += chars;
        span.style.fontStyle = "italic";
    }
}


/* -------------------------------------------------------------------------- */
/*                              print Infographie                             */
/* -------------------------------------------------------------------------- */
/* ------------------------------ After Effect ------------------------------ */
let txtAfx = contAfterFx.textContent.replace(/\s+/g, '');
let txtUdk = contUdk4.textContent.replace(/\s+/g, '');
let txt3ds = cont3dsMax.textContent.replace(/\s+/g, '');
let txtPho = contPhotoshop.textContent.replace(/\s+/g, '');

const printAfterFx = async () => {
    cont3dsMax.innerHTML = "";
    contPhotoshop.innerHTML = "";
    contUdk4.innerHTML = "";
    contAfterFx.innerHTML = `<h4 id='printAfterFxH4'></h4>
    <p id='printAfterFxP'></p>`;


    let h4 = document.getElementById('printAfterFxH4');
    // functionafterEffect()=>{compositing;montagevidéo;}
    let print = txtAfx.substr(0, 8);
    // h4.innerText = print;
    for (const chars of print) {
        await sleep(speed);
        h4.innerHTML += chars;
    }

    print = txtAfx.substr(8, 11);
    h4.innerHTML += ` <strong id='printAfterFxStrong'></strong>`;
    let strongFx = document.getElementById("printAfterFxStrong");
    for (const chars of print) {
        await sleep(speed);
        strongFx.innerHTML += chars;
    }
    print = `()=>{`;
    for (const chars of print) {
        await sleep(speed);
        h4.innerHTML += chars;
    }

    let pFx = document.getElementById('printAfterFxP');
    print = txtAfx.substr(24, 12);
    for (const chars of print) {
        await sleep(speed);
        pFx.innerHTML += chars;
    }

    pFx.innerHTML += `<br>`;
    print = txtAfx.substr(36, 7);
    for (const chars of print) {
        await sleep(speed);
        pFx.innerHTML += chars;
    }

    pFx.innerHTML += ` `;
    print = txtAfx.substr(43, 6);
    for (const chars of print) {
        await sleep(speed);
        pFx.innerHTML += chars;
    }

    pFx.innerHTML += `<br><span class="bolderTxt" id='printAfterFxSpan'></span>`;
    let spanFx = document.getElementById('printAfterFxSpan');
    spanFx.innerHTML += `}`;

}
/* ---------------------------------- UDK4 ---------------------------------- */
const printUdk4 = async () => {
    cont3dsMax.innerHTML = "";
    contPhotoshop.innerHTML = "";
    contAfterFx.innerHTML = "";

    contUdk4.innerHTML = `<h4 id='printUdk4H4'></h4>
    <p id='printUdk4P'></p>`;

    let h4 = document.getElementById('printUdk4H4');
    let print = txtUdk.substr(0, 8);

    for (const chars of print) {
        await sleep(speed);
        h4.innerHTML += chars;
    }

    h4.innerHTML += ` <strong id="printStrongUdk4"></strong>`;
    let strong = document.getElementById('printStrongUdk4');
    print = txtUdk.substr(8, 4);
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }

    print = txtUdk.substr(12, 5);
    for (const chars of print) {
        await sleep(speed);
        h4.innerHTML += chars;
    }

    let p = document.getElementById("printUdk4P");

    /* ---------------------------------- xxxxx --------------------------------- */
    print = txtUdk.substr(17, 11);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += ` `;
    print = txtUdk.substr(28, 3);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br>`;
    print = txtUdk.substr(31, 12);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += ` `;
    print = txtUdk.substr(43, 2);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += ` `;
    print = txtUdk.substr(45, 7);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br>`;

    print = txtUdk.substr(52, 7);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br> <span class="bolderTxt" id="printUdk4Span"></span>`;
    let span = document.getElementById("printUdk4Span");
    span.innerHTML += `}`;

}
/* --------------------------------- 3dsMax --------------------------------- */
const print3dsmax = async () => {
    contPhotoshop.innerHTML = "";
    contUdk4.innerHTML = "";
    contAfterFx.innerHTML = "";

    cont3dsMax.innerHTML = `<h4 id='print3dsmaxH4'></h4>
    <p id='print3dsmaxP'></p>`;

    let h4 = document.getElementById('print3dsmaxH4');
    let print = txt3ds.substr(0, 8);

    for (const chars of print) {
        await sleep(speed);
        h4.innerHTML += chars;
    }


    h4.innerHTML += ` <strong id="printStrong3dsmax"></strong>`;
    let strong = document.getElementById('printStrong3dsmax');
    print = txt3ds.substr(8, 6);
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }

    print = txt3ds.substr(14, 5);
    for (const chars of print) {
        await sleep(speed);
        h4.innerHTML += chars;
    }

    /* ----------------------------------- *** ---------------------------------- */

    let p = document.getElementById("print3dsmaxP");
    print = txt3ds.substr(19, 13);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += ` `;
    print = txt3ds.substr(32, 3);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }


    p.innerHTML += `<br>`;
    print = txt3ds.substr(35, 9);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br>`;
    print = txt3ds.substr(44, 9);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }

    p.innerHTML += `<br><span class="bolderTxt" id="print3dsmaxSpan"></span>`;
    let span = document.getElementById('print3dsmaxSpan');
    span.innerHTML += `}`;
}
/* -------------------------------- Photoshop ------------------------------- */
const printPhotoshop = async () => {
    cont3dsMax.innerHTML = "";
    contUdk4.innerHTML = "";
    contAfterFx.innerHTML = "";

    contPhotoshop.innerHTML = `<h4 id='printPhotoshopH4'></h4>
    <p id='printPhotoshopP'></p>`;

    let h4 = document.getElementById('printPhotoshopH4');
    let print = txtPho.substr(0, 8);

    for (const chars of print) {
        await sleep(speed);
        h4.innerHTML += chars;
    }

    h4.innerHTML += ` <strong id="printPhotoshopStrong"></strong>`;
    let strong = document.getElementById('printPhotoshopStrong');
    print = txtPho.substr(8, 9);
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }

    print = txtPho.substr(17, 5);
    for (const chars of print) {
        await sleep(speed);
        h4.innerHTML += chars;
    }


    let p = document.getElementById('printPhotoshopP');
    print = txtPho.substr(22, 13);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br>`;
    print = txtPho.substr(35, 12);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br>`;
    print = txtPho.substr(47, 4);
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }

    p.innerHTML += `<br> <span class="bolderTxt" id="printPhotoshopSpan"></span>`;
    let span = document.getElementById('printPhotoshopSpan');
    span.innerHTML += `}`;
}

/* -------------------------------------------------------------------------- */
/*                              print Experience                              */
/* -------------------------------------------------------------------------- */
let contXp = document.getElementById('experiences');
contXp.innerHTML = `<h3 id="printXpH3"></h3>
<p id="printXpP1"></p>
<p id="printXpP2"></p>
<p id="printXpP3"></p>
<p id="printXpP4"></p>
<p id="printXpP5"></p>`;

const printXp1 = async () => {
    let h3 = document.getElementById("printXpH3");
    let print = "#Expériences pro {";
    for (const chars of print) {
        await sleep(speed);
        h3.innerHTML += chars;
    }
    let p = document.getElementById('printXpP1');
    p.innerHTML += `<span class="bolderTxt" id="printSpan1P1"></span>`;
    let span = document.getElementById('printSpan1P1');
    print = "BPOST";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    print = ", société de droit public."
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br><span class="colorTxt" id="printSpan2P1"></span>`;
    span = document.getElementById('printSpan2P1');
    print = "- Agent chargé de distribution et du contact client.";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    p.innerHTML += `<br><span class="italic" id="printSpan3P1"></span>`;
    span = document.getElementById('printSpan3P1');
    print = "Facteur.";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
}
const printXp2 = async () => {
    let p = document.getElementById('printXpP2');
    p.innerHTML += `<span class="bolderTxt" id="printSpan1P2"></span>`;
    let span = document.getElementById('printSpan1P2');
    let print = "LES P'TITS ESPACES THEATRE";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars.toString();
    }
    // console.log(span.innerHTML);
    print = ", compagnie théâtrale."
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars.toString();
    }
    p.innerHTML += `<br><span class="colorTxt" id="printSpan2P2"></span>`;
    span = document.getElementById('printSpan2P2');
    print = `- Chargé de`;
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    span.innerHTML += `<strong id="printStrong1P2"></strong>`;
    let strong = document.getElementById("printStrong1P2");
    print = `communication/publicité/vidéo`;
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }
    p.innerHTML += `<br><span class="italic" id="printSpan3P2"></span>`;
    span = document.getElementById("printSpan3P2")
    print = "montage vidéo et contenu du site internet.";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
}
const printXp3 = async () => {

    let p = document.getElementById('printXpP3');
    p.innerHTML = `<span class="bolderTxt" id="printSpan1P3"></span>`;
    let span = document.getElementById('printSpan1P3');
    let print = "IDEE3COM ";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    print = "créateur d'";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<strong id="printStrong1P3"></strong>`;
    let strong = document.getElementById("printStrong1P3");
    print = "applications 3D interactives";
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }
    p.innerHTML += `.<br><span class="colorTxt" id="printSpan2P3">-<strong id="printStrong2P3"></strong></span>`;
    strong = document.getElementById("printStrong2P3");
    print = "infographiste 3D généraliste.";
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }
    p.innerHTML += `<br><span class="italic" id="printSpan3P3"><strong id="printStrong3P3"></strong></span>`;
    strong = document.getElementById("printStrong3P3");
    print = `Modélisation 3D `;
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }
    span = document.getElementById("printSpan3P3");
    print = `pour un serious game point and click et un
    projet 3D temps réel.`;
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }

}
const printXp4 = async () => {
    let p = document.getElementById('printXpP4');
    p.innerHTML = `<span class="bolderTxt" id="printSpan1P4"></span>`;
    let span = document.getElementById('printSpan1P4');
    let print = "KALIFORM";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    print = ", agence de coaching.";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br><span class="colorTxt" id="printSpan2P4">-<strong id="printStrong1P4"></strong></span>`;
    let strong = document.getElementById('printStrong1P4');
    print = "Graphiste 2d ";
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }
    span = document.getElementById("printSpan2P4");
    span.innerHTML += ":";

    p.innerHTML += `<span class="italic" id="printSpan3P4"></span>`;
    span = document.getElementById("printSpan3P4");
    print = "Réalisation d'un jeu de plateau";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    span.innerHTML += "<br>";
    print = "pour le coaching.";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }

}
const printXp5 = async () => {
    let p = document.getElementById('printXpP5');
    p.innerHTML = `<span class="bolderTxt" id="printSpan1P5"></span>`;
    let span = document.getElementById('printSpan1P5');
    let print = "ALEPS ";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    print = "association culturelle regroupant tout le";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br>`;
    print = "Nord-Pas-de-Calais.";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br><span class="colorTxt" id="printSpan2P5"></span><br>`;
    span = document.getElementById('printSpan2P5');
    print = "- infographiste 2d, chargé de communication.";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    p.innerHTML += `<span class="italic" id="printSpan3P5"></span>`;
    span = document.getElementById('printSpan3P5');
    print = "Réalisation de panneaux évènementiels de ";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    print = "communication.";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
}

/* -------------------------------------------------------------------------- */
/*                               print Formation                              */
/* -------------------------------------------------------------------------- */


let formation = document.getElementById("formation");
formation.innerHTML = `<h3 id="printFormH3"></h3>
<p id="printFormP1"></p>
<p id="printFormP2"></p>
<p id="printFormP3"></p>
<p id="printFormP4"></p>
`;

const printFormationP1 = async () => {
    let h3 = document.getElementById('printFormH3');
    let print = "#Formation {";
    for (const chars of print) {
        await sleep(speed);
        h3.innerHTML += chars;
    }
    let p = document.getElementById("printFormP1");
    p.innerHTML += `<span class="bolderTxt" id="printFormSpan1P1"></span>`;
    let span = document.getElementById("printFormSpan1P1");
    print = "2021: ";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    print = "Formation intensive de ";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<strong id="printFormStrong1P1"></strong><br>`;
    let strong = document.getElementById("printFormStrong1P1");
    print = 'dev web front-end';
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }
    print = "chez TechnocITé, en partenariat avec ";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<strong id="printFormStrong2P1"></strong>`;
    strong = document.getElementById("printFormStrong2P1");
    print = " TRIPTYK";
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }
    p.innerHTML += `.`;


}

const printFormationP2 = async () => {
    let p = document.getElementById("printFormP2");
    p.innerHTML += `<span class="bolderTxt" id="printFormSpan1P2"></span>`;
    let span = document.getElementById("printFormSpan1P2");
    let print = "2017: ";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    print = "1ère année de formation professeur";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br><span class="bolderTxt" id="printFormSpan2P2"></span> `;
    span = document.getElementById("printFormSpan2P2");
    print = "2018 ";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    print = "des écoles,";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<span class="italic" id="printFormSpan3P2"></span>`;
    span = document.getElementById("printFormSpan3P2");
    print = " HEH,Tournai.";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
}

const printFormationP3 = async () => {
    let p = document.getElementById("printFormP3");
    p.innerHTML = `<span class="bolderTxt" id="printFormSpan1P3"></span>`;
    let span = document.getElementById("printFormSpan1P3");
    let print = "2010: ";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    print = "Licence ";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<strong id="printFormStrong1P3"></strong>`;
    let strong = document.getElementById("printFormStrong1P3");
    print = "infographie";
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }
    print = ", école supérieur";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<br><span class="bolderTxt" id="printFormSpan2P3"></span>`;
    span = document.getElementById("printFormSpan2P3");
    print = "2013 ";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    print = "d'infographie à ";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<span class="italic" id="printFormSpan3P3"><strong id="printFormStrong2P3"></strong></span>`;
    strong = document.getElementById("printFormStrong2P3");
    print = "Pôle IIID";
    for (const chars of print) {
        await sleep(speed);
        strong.innerHTML += chars;
    }
    span = document.getElementById("printFormSpan3P3");
    print = ", Roubaix.";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }

}

const printFormationP4 = async () => {
    let p = document.getElementById("printFormP4");
    p.innerHTML = `<span class="bolderTxt" id="printFormSpan1P4"></span>`;
    let span = document.getElementById("printFormSpan1P4");
    let print = "2009: ";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    print = "Bac STI Arts appliqués,";
    for (const chars of print) {
        await sleep(speed);
        p.innerHTML += chars;
    }
    p.innerHTML += `<span class="italic" id="printFormSpan2P4"></span>`;
    span = document.getElementById("printFormSpan2P4");
    print = " Lycée Theophile ";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
    span.innerHTML += `<br>`;
    print = "Legrand, Louvroil.";
    for (const chars of print) {
        await sleep(speed);
        span.innerHTML += chars;
    }
}


/* -------------------------------------------------------------------------- */
/*                                   interet                                  */
/* -------------------------------------------------------------------------- */
const interest = document.getElementById('printInteretH3');
let textInterest = interest.textContent;
interest.textContent = "";
const printInterest = async () => {

    for (const chars of textInterest) {
        await sleep(speed);
        interest.textContent += chars;
    }
}

/* --------------------------------- pop img -------------------------------- */
const popPine = async () => {
    await sleep(speedImg);
    pine.style.opacity = "1";
}
const popPairiDaiza = async () => {
    await sleep(speedImg);
    pairiDaiza.style.opacity = "1";
}
const popGameboy = async () => {
    await sleep(speedImg);
    gameboy.style.opacity = "1";
}

/* --------------------------- pop time experience -------------------------- */

const poptime1 = async () => {
    await sleep(speedImg);
    time1.style.transform = "scale(1)";
}
const poptime2 = async () => {
    await sleep(speedImg);
    time2.style.transform = "scale(1)";
}
const poptime3 = async () => {
    await sleep(speedImg);
    time3.style.transform = "scale(1)";
}
const poptime4 = async () => {
    await sleep(speedImg);
    time4.style.transform = "scale(1)";
}
const poptime5 = async () => {
    await sleep(speedImg);
    time5.style.transform = "scale(1)";
}

/* -------------------------------------------------------------------------- */
/*                              emitter Particule                             */
/* -------------------------------------------------------------------------- */

const emitter = document.querySelector('.emitter');
const view = document.querySelector('.viewing')
const newPart = document.createElement("img");
const arrPart = [
    "./img/particules/p_code.png",
    "./img/particules/p_html.png",
    "./img/particules/p_js.png"
];

/* ------------------------------ positionClick ----------------------------- */

const posCorrection = 20;
const nbParticule = 15;

view.addEventListener('click', function (e) {
    let yPos = e.pageY - posCorrection;
    let xPos = e.pageX - posCorrection;
    emitter.style.top = yPos + "px";
    emitter.style.left = xPos + "px";
    particules();
})

/* ----------------------------- New particules ----------------------------- */

function particules () {
    emitter.innerHTML="";
    /* -------------------------------- randomize ------------------------------- */
     for(let i = 0; i<nbParticule;i++){
        let nPart = newPart.cloneNode(true);
        let emitPart = emitter.appendChild(nPart);
        let randomP = Math.round(Math.random() * 2);
    
        /* ---------------------------- Particule params ---------------------------- */
        emitPart.classList.add("particule");
        emitPart.src = arrPart[randomP];
    }
    /* ---------------------------- translation anime --------------------------- */
    const posiNeg = [-1, 1];
    let part = document.querySelectorAll(".particule");
    setTimeout ( () => {
        part.forEach(ele => {            
            let x = Math.round(Math.random() * 50)* posiNeg[Math.round(Math.random())];
            let y = Math.round(Math.random() * 50)* posiNeg[Math.round(Math.random())];            
            ele.style.transform = `translateX(${x}px) translateY(${y}px)`;
            ele.style.opacity = 0; 
        })
    }, 10);
}

/* -------------------------------------------------------------------------- */
/*                                    init                                    */
/* -------------------------------------------------------------------------- */

const initAnimation = async () => {

    skills.style.opacity = "1";
    await sleep(1000);
    await opacityCog();


    printXp1();
    printXp2();
    printXp3();
    printXp4();

    await printXp5();
    soundPlay();

    await poptime1();


    await poptime2();


    await poptime3();

    await poptime4();

    await poptime5();

    await sleep(400);


    printFormationP1();
    printFormationP2();
    printFormationP3();
    await printFormationP4();
    await printProfil();
    await printOther();

    await printInterest();
    await popPine();
    await popPairiDaiza();
    popGameboy();

}
initAnimation();

/* ---------------------------------- sound --------------------------------- */
const popMenu = new Audio('./sound/PopMenu.mp3');
const bubble = new Audio('./sound/xp.mp3');
const gameBoySound = new Audio('./sound/gameBoy.mp3');
const gameBoyOff = document.getElementById('gameBoyOff');
const pairiSound = new Audio('./sound/PairiLogo.mp3');
const pineSound = new Audio('./sound/natureLogo.mp3');

pineSound.volue = 0.5;
pairiSound.volume = 0.2;
gameBoySound.volume = 0.5;
bubble.volume = 0.6;

gameBoyOff.addEventListener('mouseover', () => {
    if (pairiDaiza.style.opacity == 1){
        gameBoySound.play();
    }
})

pairiDaiza.addEventListener('mouseover', () => {
    if (pairiDaiza.style.opacity == 1){
        pairiSound.play();
    }
})

pine.addEventListener('mouseover', () => {
    if (pine.style.opacity == 1){
        pineSound.play();
    }
})

const bubblePop = 225;
const soundPlay = async () => {
    await sleep(bubblePop);
    bubble.play();
    await sleep(bubblePop);
    bubble.play();
    await sleep(bubblePop);
    bubble.play();
    await sleep(bubblePop);
    bubble.play();
    await sleep(bubblePop);
    bubble.play();
}




