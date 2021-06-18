const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo'
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom' // chave adicionada
};

const exibirConteudo = (object) => {
  for (let keys in object) {
    console.log(`${keys}, Nível: ${object[keys]}`);
  }
}

console.log(exibirConteudo(student2));