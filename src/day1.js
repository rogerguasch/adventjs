const sheeps = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];

export default function contarOvejas(sheeps) {
  return sheeps.filter(
    (sheep) =>
      sheep.color === "rojo" &&
      sheep.name.toLowerCase().includes("a") &&
      sheep.name.toLowerCase().includes("n")
  );
}

contarOvejas(sheeps);
