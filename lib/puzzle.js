// retrouver le bouton
// pauser un écouteur dessus (event: "click")
// autrement dit : Si je click
  // retrouver l'élément "hint"
  // ajouter class "active" à cet élement


// récupérer tous les td met
// il va falloir itérer sur la liste des td

  // poser un écouteur sur chaque td

    // aller chercher la case noire

    // si le td à un bord commun avec la case noire
      // enlever le empty de la case noire
      // ajouter le empty au td que l'on a cliqué
      // récupérer le innerText du td cliqué et l'ajouter à la case noire
      // retirer le innerText du td cliqué
      // retourner chercher la liste des td
      // si cette liste est égale à un tableau de 1 à 15
        // alors afficher une alerte "Vous avez gagné"


const hintBtn = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

hintBtn.addEventListener("click", (event) => {
  hint.classList.toggle("active");
});

const currentCells = document.querySelectorAll("td");
currentCells.forEach((currentCell) =>{
  currentCell.addEventListener("click", (event) => {
    const bigBlackCell = document.querySelector(".empty");

    const currentCol = currentCell.cellIndex;
    const currentRow = currentCell.parentElement.rowIndex;
    const blackCol = bigBlackCell.cellIndex;
    const blackRow = bigBlackCell.parentElement.rowIndex;
    const heigth = Math.abs(currentRow - blackRow);
    const width = Math.abs(currentCol - blackCol);
    const delta = width + heigth;

    if (delta === 1) {
      bigBlackCell.classList.remove("empty");
      currentCell.classList.add("empty");
      const value = currentCell.innerText;
      bigBlackCell.innerText = value;
      currentCell.innerText = "";

      // const result = document.querySelector("table").innerText.split("\n").join();
      // if (result === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15") {
      //   alert("you win!!");
      // }

    }
  });
});
