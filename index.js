const beats=["ohiWZiGCI8I","634dt_kELaw","D2Zff5ZhDEw","9N9x4rM5J0U","oP2kSTLmr-8","vWg_YGj7eTU","9krhCARI4Ag","aDV894H9YHI","zSHt7aD-sJ0","PmWOWmjVTvE","uEB1MI01r28","_Ubpz1DxN8w"];
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
    "VIHREÄ", "LOISTO", "KAAMOS", "SUUNTA"
];
const link="https://www.youtube.com/embed/"

function playRandomBeat(){
    const youtubePlayer=document.getElementById("youtubePlayer");
    randomBeat=beats[Math.floor(Math.random()*beats.length)];
    youtubePlayer.src=link+randomBeat;
}

function generateWord(){
    randomWord=words[Math.floor(Math.random()*words.length)];
    const wordDisplay=document.getElementById("randomWord");
    wordDisplay.textContent=randomWord;
}

function laskuri(){
    let countdown=10;
    const timerDiv=document.getElementById('countdown');
    
    const interval=setInterval(()=> {
        if(countdown>0){
            countdown--;
            timerDiv.textContent=countdown;

        } else {
        
        
        generateWord();
        countdown=10;
        }
    },1000);
}
