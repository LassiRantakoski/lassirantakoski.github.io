const beats=["ohiWZiGCI8I","634dt_kELaw","D2Zff5ZhDEw","9N9x4rM5J0U","oP2kSTLmr-8","vWg_YGj7eTU","9krhCARI4Ag","aDV894H9YHI","zSHt7aD-sJ0"
    ,"PmWOWmjVTvE","uEB1MI01r28","_Ubpz1DxN8w","pk1YRxLu8n4","cQet2Xi84vE","k9fPk5LWL2s", "5gFVXeNygHg",
     "CBQZ7Bm6HyI","4kAcn-wgmEc","rZAiviiEuPk","p_4QVidbKkg" 
    ];
const words = [
    "FLOW", "TUHKAROKKO", "UIMAHALLI", "VALTAVIRTA", "SILUETTI", "AIKAJANA", "KATVE", "KERROSTUMA",
    "VALOKEILA", "ASFALTTI", "VIISARI", "VIIMEINEN", "HÄIVE",
    "SYKE", "KAIKU", "SÄRMÄ", "KATVEALUE", "HORISONTTI",
    "TÄHDISTÖ", "KALENTERI", "SYÖVERI", "KOMPASSI", "KARTTA",
    "TAHTOTILA", "PIIRROS", "LANGATON", "HEIJASTUS", "JUONENKÄÄNNE",
    "KATKOS", "REUNA", "SYKLINEN", "TEMPO", "KAARI",
    "RAJAPINTA", "SILMÄYS", "AAVE", "POIKKEAMA", "KÄÄNNE",
    "PALAPELI", "TAIVAL", "TUNNELI", "SÄVEL", "TUULI",
    "VARJOPUOLI", "KULISSI", "RYTMI", "KAHINA", "YHTEYS",
    "TARINA", "SYMBOLI", "AJATUSVIRTA", "VALTAISTUIN", "KIPINÄ",
    "LOHKO", "PEILIKUVA", "TUMMUUS", "JÄNNEVÄLI", "KOKONAISUUS",
    "FREKVENSSI", "SÄDEKEHÄ", "YLIVOIMA", "VAHVUUS", "MURTUMA",
    "SPIRAALI", "JÄNNE", "PINTA", "VASTARINTA", "SYNERGIA",
    "DYNAMIIKKA", "POLKU", "MUUTOS", "ELE", "MURROS",
    "RÄJÄHDYS", "KAAMOS", "AISTI", "JUOKSU", "LOHIKÄÄRME", "SÄRMÄ", 
    "KAJASTUS", "SAARI", "MUURI", "LIEKEISSÄ", "TAIVAL", 
    "KAJO", "ARPI", "VARJO", "KAARRE", "SYVYYS", 
    "KANTAMA", "RISTIRIITA", "SILTA", "KIPINÄ", "SUMU", 
    "SEURAUS", "KIERTO", "JÄNNE", "KAIKU", "SYRJÄSSÄ", 
    "VALTAVIRTA", "TUULI", "TYHJYYS", "TUNNE", "RAJAPINTA", 
    "HAAMU", "TAAKKA", "VIRE", "POLTE", "NÄRE", 
    "PAATOS", "SYÖVERI", "SÄVY", "KAARI", "VIRTAUS", 
    "ASKEL", "SÄDE", "VIRHE", "KAIKU", "TYVEN", 
    "PAKO", "SIRU", "HÄMÄRÄ", "VALKEA", "SYLI", 
    "PYÖRRE", "NUOTTI", "TIE", "VAARA", "KIPU", 
    "REUNA", "PUNOS", "KOLKKO", "HEHKU", "NÄKY", 
    "RANTA", "TULVA", "KUISKAUS", "KIVI", "SYLI", 
    "MATKA", "PIRSTALE", "RYTMI", "SOLMU", "KRUUNU", 
    "TAIKA", "KIRKAS", "VARA", "MUUTOS", "MIELIKUVA", 
    "VIHREÄ", "LOISTO", "KAAMOS", "SUUNTA", "JUONIKUVIOT", "KIERRE", "HETKI", "VÄLÄHDYS", "SUUNNANMUUTOS", "SIIRTO", "KOKONAISUUS", 
    "KASVU", "PAINE", "RATKAISU", "HENGITYS", "LÄHETE", "YKSITYISKOHTA", "UUDISTUS", "TASAPAINO", 
    "KEHÄ", "HAAVE", "RISTIKKO", "TULEMINEN", "YKSITYISKOHTAISUUS", "PÄÄTÖS", "KORKEUS", "SUKELTAMINEN", 
    "SUORA", "KATKEAMATTOMUUS", "VOITTO", "VÄLIMATKA", "HEIJAUSTEORIA", "VAIKUTELMA", "AIKAKAUSI", 
    "MAANPINNALLA", "KORRELAATIO", "LUONNOLLISUUS", "TARKASTUS", "YLÄPISTE", "LOISTAVUUS", "MYSTEERI", 
    "OSATEKIJÄ", "PIMEYS", "SUUNNITELMA", "ASETELMA", "KUVIO", "VÄLIMUOTO", "KOHDATA", "KESTO", 
    "PYÖRTEET", "PULSSIT", "YHTEINEN", "MERKITYS", "ERIKOISUUS", "KIERTOAJELU", "LÄHIÖ", "SUKELLUS", 
    "SYNNYTYS", "KORREKTIUS", "VAKIOLUKU", "PÄÄVIIVA", "TYHJYYS", "LAKKI", "ENNAKOINTI", "RYHTI", 
    "PAISTE", "LOISTE", "HEHKEYS", "VOIMAKKUUS", "LUONNE", "TUNNEKUOHU", "SUUNTAUS", "HARMI", 
    "JÄNNEVÄLI", "LAUSUMA", "TOIVOMUS", "ENERGIAVARA", "YKSITYISKOHTA", "KOKONAISVALTAINEN", 
    "MUODOSTUS", "KIILTO", "PÄÄTÖKSENTEKO", "VOIMAKKUUS"
];

const sointuListaGm=["Gm-1.PNG","Gm-2.PNG","Gm-3.PNG","Gm-4.PNG","Gm-5.PNG","Gm-6.PNG","Gm-7.PNG","Gm-8.PNG","Gm-9.PNG","Gm-10.PNG","Gm-11.PNG","Gm-12.PNG","Gm-13.PNG","Gm-14.PNG","Gm-15.PNG","Gm-16.PNG"];
const sointuListaAdim=["Adim-1.PNG","Adim-2.PNG","Adim-3.PNG","Adim-4.PNG","Adim-5.PNG","Adim-6.PNG","Adim-7.PNG","Adim-8.PNG","Adim-9.PNG","Adim-10.PNG","Adim-11.PNG","Adim-12.PNG"]
const sointuListaBb=["Bb-1.PNG","Bb-2.PNG","Bb-3.PNG","Bb-4.PNG","Bb-5.PNG","Bb-6.PNG","Bb-7.PNG","Bb-8.PNG","Bb-9.PNG","Bb-10.PNG","Bb-11.PNG","Bb-12.PNG","Bb-13.PNG","Bb-14.PNG","Bb-15.PNG","Bb-16.PNG"]
const sointuListaCm=["Cm-2.PNG","Cm-2.PNG","Cm-3.PNG","Cm-4.PNG","Cm-5.PNG","Cm-6.PNG","Cm-7.PNG","Cm-8.PNG","Cm-9.PNG","Cm-10.PNG","Cm-11.PNG","Cm-12.PNG","Cm-13.PNG","Cm-14.PNG","Cm-15.PNG","Cm-16.PNG",]
const sointuListaD=["D-1.PNG","D-2.PNG","D3.PNG","D-4.PNG","D-5.PNG","D-6.PNG","D-7.PNG","D-8.PNG","D-9.PNG","D-10.PNG","D-11.PNG","D-12.PNG","D-13.PNG","D-14.PNG","D-15.PNG","D-16.PNG"];
const sointuListaEbM=["EbM.PNG","EbM-2.PNG","EbM-3.PNG","EbM-4.PNG","EbM-5.PNG","EbM-6.PNG","EbM-7.PNG","EbM-8.PNG","EbM-9.PNG","EbM-10.PNG","EbM-11.PNG","EbM-12.PNG","EbM-13.PNG","EbM-14.PNG","EbM-15.PNG"];
const sointuListaF=["F-1.PNG","F-2.PNG","F-3.PNG","F-4.PNG","F-5.PNG","F-6.PNG","F-7.PNG","F-8.PNG","F-9.PNG","F-10.PNG","F-11.PNG","F-12.PNG","F-13.PNG","F-14.PNG"];

const link="https://www.youtube.com/embed/"
let wordChecker=[];
let beatChecker=[];



function playRandomBeat(){
    const youtubePlayer=document.getElementById("youtubePlayer");
    randomBeat=beats[Math.floor(Math.random()*beats.length)];
    if (beatChecker.length>4){
        beatChecker=[];
        return playRandomBeat();
    }
    else if (beatChecker.includes(randomBeat)){
        return playRandomBeat();
    }
    beatChecker.push(randomBeat);
    youtubePlayer.src=link+randomBeat;
}

function generateWord(){
    randomWord=words[Math.floor(Math.random()*words.length)];
    if (wordChecker.length==words.length){
        wordChecker=[];
    }
    else if (wordChecker.includes(randomWord)){
        generateWord();
    } else {
        wordChecker.push(randomWord)
    }
    const wordDisplay=document.getElementById("randomWord");
    wordDisplay.textContent=randomWord;

}

let interval=null;
function laskuri(){

    if (interval!==null){
        clearInterval(interval);
        interval=null;
    }
    let countdown=10;
    
    const timerDiv=document.getElementById('countdown');
    timerDiv.textContent="10";
    
    interval=setInterval(()=> {
        if(countdown>1){
            countdown--;
            timerDiv.textContent=countdown;
            

        } else {
        
        
        generateWord();
        countdown=10;
        timerDiv.textContent="0";
        }
    },1000);
}


const videot={"Am":["Ka7fZ9Let98","A-MINOR-SCALE-BASS.webp"],"Cm":["cGsILsJN2ak","C-MINOR-SCALE-BASS.webp"],"Gm":["4MPYRltRx3w","G-MINOR-SCALE-BASS.webp"]};

function playAm(){
    youtubePlayer.src=link+videot.Am[0];
    const kuvaDiv=document.getElementById("kuvaDiv");
    const img=document.createElement('img');
    img.src=videot.Am[1];
    img.style.width='50%';
    kuvaDiv.innerHTML = '';
    kuvaDiv.appendChild(img);
}

function playCm(){
    youtubePlayer.src=link+videot.Cm[0];
    const kuvaDiv=document.getElementById("kuvaDiv");
    const img=document.createElement('img');
    img.src=videot.Cm[1];
    img.style.width='50%';
    kuvaDiv.innerHTML = '';
    kuvaDiv.appendChild(img);
}

function playGm(){
    youtubePlayer.src=link+videot.Gm[0];
    const kuvaDiv=document.getElementById("kuvaDiv");
    const img=document.createElement('img');
    img.src=videot.Gm[1];
    img.style.width='50%';
    kuvaDiv.innerHTML = '';
    kuvaDiv.appendChild(img);
}


function jammailuHub() {
    const nappiDiv = document.getElementById("nappiDiv");
    nappiDiv.innerHTML='';
    youtubePlayer.src='';
    kuvaDiv.innerHTML='';
    nappiDiv.innerHTML = `
        <button onclick="playAm()" class="a">Am</button> 
        <button onclick="playCm()" class="a">Cm</button>
        <button onclick="playGm()" class="a">Gm</button>
    `;
}
function sormiTreeniHub(){
    const shorts=["3MgNeQqwy9g","d9C6ThdNpmU","Z9wVNHaEHIQ","uj7duXsmW5w"]
    const nappiDiv=document.getElementById("nappiDiv");
    nappiDiv.innerHTML='';
    youtubePlayer.src='';
    kuvaDiv.innerHTML='';

    for (const video of shorts){
        kuvaDiv.innerHTML+=`<iframe id="youtubePlayer1" width="315" height="560"
    src="${link+video}"
    title="YouTube video player"
    frameborder="0"
    alloW="accelometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe> `;
    }
}

function soinnutGm(){
    const galleryDiv=document.getElementById("galleryDiv");
    galleryDiv.innerHTML=`
    <p class="col1">I (Gm): (G, Bb, D)</p>
    <p class="col2">II (Adim): (A, C, Eb)</p>
    <p class="col3">III (Bb): Bb-duuri (Bb, D, F)</p>
    <p class="col4">IV (Cm): C-molli (C, Eb, G)</p>
    <p class="col5">V (D): D-duuri tai D7 (D, F#, A tai D, F#, A, C)</p>
    <p class="col6">VI (Eb): Eb-duuri (Eb, G, Bb)</p>
    <p class="col7">VII (F): F-duuri (F, A, C)</p>
    `;

    for(const chord of sointuListaGm){
        galleryDiv.innerHTML+=`
        <img src=${chord} class="col1">
        `
    }
    for(const chord of sointuListaAdim){
        galleryDiv.innerHTML+=`
        <img src=${chord} class="col2">
        `
    }
    for(const chord of sointuListaBb){
        galleryDiv.innerHTML+=`
        <img src=${chord} class="col3">
        `
    }
    for(const chord of sointuListaCm){
        galleryDiv.innerHTML+=`
        <img src=${chord} class="col4">
        `
    }
    for(const chord of sointuListaD){
        galleryDiv.innerHTML+=`
        <img src=${chord} class="col5">
        
        `
    }
    for(const chord of sointuListaEbM){
        galleryDiv.innerHTML+=`
        <img src=${chord} class="col6">
        `
    }
    for(const chord of sointuListaF){
        galleryDiv.innerHTML+=`
        <img src=${chord} class="col7">
        `
    }
}

