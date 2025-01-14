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

const sointuListaGm=["Gm-1.png","Gm-2.png","Gm-3.png","Gm-4.png","Gm-5.png","Gm-6.png","Gm-7.png","Gm-8.png","Gm-9.png","Gm-10.png","Gm-11.png","Gm-12.png","Gm-13.png","Gm-14.png","Gm-15.png","Gm-16.png"];
const sointuListaAdim=["Adim-1.png","Adim-2.png","Adim-3.png","Adim-4.png","Adim-5.png","Adim-6.png","Adim-7.png","Adim-8.png","Adim-9.png","Adim-10.png","Adim-11.png","Adim-12.png"]
const sointuListaBb=["Bb-1.png","Bb-2.png","Bb-3.png","Bb-4.png","Bb-5.png","Bb-6.png","Bb-7.png","Bb-8.png","Bb-9.png","Bb-10.png","Bb-11.png","Bb-12.png","Bb-13.png","Bb-14.png","Bb-15.png","Bb-16.png"]
const sointuListaCm=["Cm-2.png","Cm-2.png","Cm-3.png","Cm-4.png","Cm-5.png","Cm-6.png","Cm-7.png","Cm-8.png","Cm-9.png","Cm-10.png","Cm-11.png","Cm-12.png","Cm-13.png","Cm-14.png","Cm-15.png","Cm-16.png",]
const sointuListaD=["D-1.png","D-2.png","D3.png","D-4.png","D-5.png","D-6.png","D-7.png","D-8.png","D-9.png","D-10.png","D-11.png","D-12.png","D-13.png","D-14.png","D-15.png","D-16.png"];
const sointuListaEbM=["EbM.png","EbM-2.png","EbM-3.png","EbM-4.png","EbM-5.png","EbM-6.png","EbM-7.png","EbM-8.png","EbM-9.png","EbM-10.png","EbM-11.png","EbM-12.png","EbM-13.png","EbM-14.png","EbM-15.png"];
const sointuListaF=["F-1.png","F-2.png","F-3.png","F-4.png","F-5.png","F-6.png","F-7.png","F-8.png","F-9.png","F-10.png","F-11.png","F-12.png","F-13.png","F-14.png"];

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

