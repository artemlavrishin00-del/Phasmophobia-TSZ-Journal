const ghosts = [
    {
        name: "Alienson",
        evidence: ["Peeing", "freezing", "MakingPhoto"]

    },
    {
        name: "Arsen",
        evidence: ["Pigging", "emf", "Peeing"]
    },
    {
        name: "Artyom",
        evidence: ["emf", "Pigging", "MoveItems"]
    },
        {
        name: "Blitz",
        evidence: ["HideItems", "MoveItems", "MakingPhoto"]
    },
        {
        name: "Bran",
        evidence: ["spiritbox", "ThrowingBottle", "MoveItems"]
    },
        {
        name: "Chormecalo",
        evidence: ["freezing", "Pigging", "MonkeyRot"]
    },
        {
        name: "Chresol",
        evidence: ["MakeSound", "MonkeyRot", "MoveItems"]
    },
        {
        name: "Chupakabra",
        evidence: ["ThrowingBottle", "Peeing", "MakingPhoto"]
    },
        {
        name: "Chuvurla",
        evidence: ["MakeSound", "Inscription", "ThrowingBottle"]
    },
        {
        name: "Croy",
        evidence: ["spiritbox", "HideItems", "MoveItems"]
    },
        {
        name: "Daunessa",
        evidence: ["freezing", "MakingPhoto", "MoveItems"]
    },
        {
        name: "Dima",
        evidence: ["ThrowingBottle", "Pigging", "HideItems"]
    },
        {
        name: "Dureo",
        evidence: ["Peeing", "MonkeyRot", "HideItems"]
    },
        {
        name: "Eibra",
        evidence: ["freezing", "Peeing", "HideItems"]
    },
        {
        name: "Frize",
        evidence: ["Inscription", "Peeing", "ThrowingBottle"]
    },
        {
        name: "Greshm",
        evidence: ["ThrowingBottle", "MakingPhoto", "MakeSound"]
    },
    
        {
        name: "Hrasch",
        evidence: ["ThrowingBottle", "MakeSound", "HideItems"]
    },
              {
        name: "Itacher",
        evidence: ["emf", "Inscription", "ThrowingBottle"]
    },
              {
        name: "Jox",
        evidence: ["emf", "Inscription", "freezing"]
    },
        {
        name: "Kalyon",
        evidence: ["spiritbox", "freezing", "Peeing"]
    },
        {
        name: "Limera",
        evidence: ["HideItems", "MakeSound", "MoveItems"]
    },
              {
        name: "Momo",
        evidence: ["emf", "Inscription", "spiritbox"]
    },
        {
        name: "Nelsi",
        evidence: ["emf", "Peeing", "MoveItems"]
    },
        {
        name: "NightWalk",
        evidence: ["emf", "ThrowingItems", "MoveItems"]
    },
              {
        name: "Oninoni",
        evidence: ["emf", "Inscription", "MakingPhoto"]
    },
        {
        name: "Parcharlt",
        evidence: ["emf", "Peeing", "spiritbox"]
    },
        {
        name: "Shaoran",
        evidence: ["Inscription", "Pigging", "HideItems"]
    },
        {
        name: "Skinwalker",
        evidence: ["Inscription", "MakingPhoto", "spiritbox"]
    },
        {
        name: "Styopa",
        evidence: ["MonkeyRot", "Pigging", "ThrowingBottle"]
    },
        {
        name: "Styopa Bilka",
        evidence: ["spiritbox", "Inscription", "MakeSound"]
    },
       {
        name: "Svintus",
        evidence: ["Peeing", "Pigging", "HideItems"]
    },
           {
        name: "Tvar",
        evidence: ["emf", "Inscription", "MonkeyRot"]
    },
              {
        name: "Uzhas",
        evidence: ["emf", "Inscription", "MakeSound"]
    },
        {
        name: "Vova",
        evidence: ["freezing", "MakingPhoto", "MoveItems"]
    },
        {
        name: "Wallrack",
        evidence: ["spiritbox", "freezing", "MonkeyRot"]
    },
        {
        name: "Zhirna Tvar",
        evidence: ["MonkeyRot", "Pigging", "Peeing"]
    }
 
    
    
   
];

const checkboxes =
document.querySelectorAll("input[type=checkbox]");
const ghostList =
document.getElementById("PossibleGhosts");

function updateGhosts() {
    const selected = [];

    checkboxes.forEach(box => {
        if (box.checked) {
            selected.push(box.id);
        }
    });

    PossibleGhosts.innerHTML = "";

    ghosts.forEach(ghost => {
        const match = selected.every(e =>
            ghost.evidence.includes(e)
        );

        if (match) {
            const li = document.createElement("li");
            li.textContent = ghost.name;
            PossibleGhosts.appendChild(li)
        }
    });
}


checkboxes.forEach(box => {
    box.addEventListener("change", updateGhosts);
});

updateGhosts();