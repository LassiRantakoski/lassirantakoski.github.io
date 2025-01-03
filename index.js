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
