const list = document.getElementById("ghostList");
const info = document.getElementById("info");

for (const name in ghosts) {

    const card = document.createElement("div");
    card.className = "ghost-card";
    card.textContent = name;

    card.onclick = () => {

        document.querySelectorAll(".ghost-card").forEach(c => {
            c.classList.remove("active");
        });

        card.classList.add("active");

        const ghost = ghosts[name];

        info.innerHTML = `
            <h1>${name}</h1>

            <hr>

            <h3>Описание</h3>

            <p>${ghost.description}</p>

           <div class="bottom-section">

    <div class="evidence-box">

        <h3>Улики</h3>

        <ul>
            ${(ghost.evidence || []).map(e => `<li>${e}</li>`).join("")}
        </ul>

    </div>

    <div class="photo-box">

        <img src="${ghost.image}" alt="${name}">

    </div>

</div>
        `;

    };

    list.appendChild(card);

}