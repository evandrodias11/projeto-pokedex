export function handleGenerateBg(type) {
  switch (type) {
    case "Fire":
      return "#FF8C00";

    case "Grass":
      return "#ADFF2F";

    case "Water":
      return "#B0E0E6";

    case "Electric":
      return "#F0E68C";

    case "Bug":
      return "#D2B48C";

    case "Fairy":
      return "#DDA0DD";

    default:
      return "#CCC";
  }
}
