let note = 120;

if (note >= 80 && note <= 100) {
  console.log("Parabéns, você foi aprovado(a)!");
}
else if (note < 80  && note >= 60) {
  console.log("Você está na nossa lista de espera.");
}
else if (note < 60 && note >= 0) {
  console.log("Você foi reprovado(a)");
}
else{
  console.log("Valor digitado incorretamente!");
}
