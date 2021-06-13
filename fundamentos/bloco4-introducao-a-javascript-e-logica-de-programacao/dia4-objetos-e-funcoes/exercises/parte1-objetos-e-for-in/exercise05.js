let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';

let info2 = {
  personagem: 'Tio Patinhas',
  origem: `Christmas on Bear Moutain, Dell's Four Color Comics #178`,
  nota: `O último MacPatinhas`,
  recorrente: `Sim`
};

for (let key in info) {
  let verification = (key === 'personagem' || key === 'origem' || key === 'nota');
  if (verification) {
    console.log(`${info[key]} e ${info2[key]}`);
  } else if (key === 'recorrente') {
    console.log(`Ambos recorrentes`);
  }
}