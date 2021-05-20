let personStatus = 'reprovada';

switch (personStatus){
  case 'aprovada':
    console.log('Parabéns você foi aprovado(a)!');
    break;

  case 'lista':
    console.log('O senhor(a) encontra-se na lista de espera!');
    break;
  
  case 'reprovada':
    console.log('O senhor(a) foi reprovado(a).');
    break;

  default:
    console.log('Não se aplica.');
}