const nameP = "Neto";
const xp = 100000;
let rank = "Ferro";

if (xp > 1000 && xp < 2001) {
  rank = "Bronze";
} else if (xp > 2000 && xp < 5001) {
  rank = "Prata";
} else if (xp > 5000 && xp < 7001) {
  rank = "Ouro";
} else if (xp > 7000 && xp < 8001) {
  rank = "Platina";
} else if (xp > 8000 && xp < 9001) {
  rank = "Ascendente";
} else if (xp > 9000 && xp < 10001) {
  rank = "Imortal";
} else if (xp >= 10001) {
  rank = "Radiante";
}

console.log(`O Herói de nome ${nameP} está no nível de ${rank}`)