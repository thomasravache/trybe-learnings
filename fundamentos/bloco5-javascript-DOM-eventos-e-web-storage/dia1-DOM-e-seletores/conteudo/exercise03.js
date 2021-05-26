let header = document.querySelector('#header-container');
let emergencyTasks = document.querySelector('.emergency-tasks');
let noEmergencyTasks = document.querySelector('.no-emergency-tasks');
let divEmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
let divNoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks div h3');
let footer = document.querySelector('#footer-container');

header.style.backgroundColor = 'rgb(89,177,106)';
emergencyTasks.style.backgroundColor = 'rgb(247,158,131)';
noEmergencyTasks.style.backgroundColor = 'rgb(249,219,94)';

for (let index = 0; index < divEmergencyTasks.length; index += 1) {
  divEmergencyTasks[index].style.backgroundColor = 'rgb(177,132,243)';
}

for (let index = 0; index < divNoEmergencyTasks.length; index += 1) {
  divNoEmergencyTasks[index].style.backgroundColor = 'rgb(35,37,37)';
}

footer.style.backgroundColor = 'rgb(16,53,51)';

