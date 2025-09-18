// ---- Perusdata: projektit (täytä omasi) ----
function toggleCv() {
  const content = document.getElementById("cv-content");
  const teaser = document.getElementById("cv-teaser");
  const btn = document.querySelector("#cv .toggle-btn");

  if (content.style.maxHeight) {
    // jos auki → suljetaan
    content.style.maxHeight = null;
    content.style.opacity = 0;
    teaser.style.display = "block";   // tuo teaser näkyviin
    btn.textContent = "Näytä lisää";
  } else {
    // jos kiinni → avataan
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.opacity = 1;
    teaser.style.display = "none";   // piilota teaser
    btn.textContent = "Näytä vähemmän";
  }
}

function toggleEdu() {
  const content = document.getElementById("edu-content");
  const teaser = document.getElementById("edu-teaser");
  const btn = document.querySelector("#education .toggle-btn");

  if (content.style.maxHeight) {
    // jos auki → suljetaan
    content.style.maxHeight = null;
    content.style.opacity = 0;
    teaser.style.display = "block";   // tuo teaser näkyviin
    btn.textContent = "Näytä lisää";
  } else {
    // jos kiinni → avataan
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.opacity = 1;
    teaser.style.display = "none";   // piilota teaser
    btn.textContent = "Näytä vähemmän";
  }
}



const projects = [
  {
    title: "Sähkö GUI & automaatio",
    desc: "Selenium + Tkinter + SQLite. Hakee kulutukseni Helenin palvelusta sekä spot-hinnat APIn kautta. Laskee erotuksen pörssihinnalle ja kiinteälle hinnalle.",
    tag: "data",
    video: "https://www.youtube.com/embed/hoIdrGxqN0g"
  },
  {
    title: "Portfolioweb",
    desc: "Tämä sivu: vanilla HTML/CSS/JS.",
    tag: "web",
    video: "" // ei videota
  }

];



// ---- Util ----
const $ = (q, el = document) => el.querySelector(q);
const $$ = (q, el = document) => [...el.querySelectorAll(q)];

// ---- Navigaatio mobiili ----
const menuBtn = $("#menuBtn");
const nav = $("#nav");
menuBtn?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});


// ---- Projektikortit ----
const grid = $("#projectGrid");
const modal = $("#projectModal");
const mTitle = $("#mTitle");
const mDesc = $("#mDesc");
const mLink = $("#mLink");
$("#closeModal")?.addEventListener("click", () => modal.close());

function renderCards(filter = "all") {
  grid.innerHTML = "";
  projects
    .filter(p => filter === "all" ? true : p.tag === filter)
    .forEach(p => {
      const card = document.createElement("article");
      card.className = "project";
      card.innerHTML = `
        <span class="badge">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button class="btn outline more">Näytä lisää</button>
        </div>`;
      
      card.querySelector(".more").addEventListener("click", () => {
        mTitle.textContent = p.title;
        mDesc.textContent = p.desc;

        if (p.video) {
          mVideo.src = p.video;
          mVideo.parentElement.style.display = "block";
        } else {
          mVideo.src = "";
          mVideo.parentElement.style.display = "none";
        }

        modal.showModal();
      });

      grid.appendChild(card);
    });
}

// Sulkeminen + videon resetointi
document.getElementById("closeModal").addEventListener("click", () => {
  modal.close();
  mVideo.src = ""; // resetoi ettei video soi taustalla
});



$$(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    $$(".chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    renderCards(chip.dataset.filter);
  });
});

renderCards();
$("#year").textContent = new Date().getFullYear();

// ---- Yhteys (mock) ----
$("#contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  alert(`Kiitos!\n\nNimi: ${data.name}\nSähköposti: ${data.email}\n\nViesti:\n${data.message}`);
  e.target.reset();
});

function toggleSection(id) {
  const section = document.getElementById(id);

  if (section.style.maxHeight) {
    // jos auki → suljetaan
    section.style.maxHeight = null;
  } else {
    // jos kiinni → avataan sisällön korkeuteen
    section.style.maxHeight = section.scrollHeight + "px";
  }
}

function toggleSection(id) {
  const allSections = ["motivation", "skills"];

  const section = document.getElementById(id);
  const btn = section.previousElementSibling.querySelector(".toggle-btn");

  // jos klikattu osio on kiinni → avataan se (sulkematta muita)
  if (!section.style.maxHeight) {
    section.style.maxHeight = section.scrollHeight + "px";
    btn.textContent = "Näytä vähemmän";
  } 
  // jos klikattu osio on auki → suljetaan kaikki
  else {
    allSections.forEach(secId => {
      const sec = document.getElementById(secId);
      const secBtn = sec.previousElementSibling.querySelector(".toggle-btn");
      sec.style.maxHeight = null;
      secBtn.textContent = "Näytä lisää";
    });
  }
}




