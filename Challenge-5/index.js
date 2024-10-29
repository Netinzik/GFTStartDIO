function calcRankedGame(gain, loss) {
  const saldoVitorias = gain - loss;
  const rank = "Ferro";

  if (saldoVitorias > 10 && saldoVitorias < 21) {
    rank = "Bronze";
  } else if (saldoVitorias > 20 && saldoVitorias < 51) {
    rank = "Prata";
  } else if (saldoVitorias > 50 && saldoVitorias < 81) {
    rank = "Ouro";
  } else if (saldoVitorias > 80 && saldoVitorias < 91) {
    rank = "Diamante";
  } else if (saldoVitorias > 90 && saldoVitorias < 101) {
    rank = "Lendário";
  } else if (saldoVitorias >= 101) {
    rank = "Imortal";
  }

  return { saldoVitorias, rank };
}

const gain = 10;
const loss = 0;
const { rank, saldoVitorias } = calcRankedGame(gain, loss)
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${rank}`)


