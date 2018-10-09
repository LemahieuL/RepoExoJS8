var age = document.getElementById('age')
var regex = /^[0-9]+$/

submit.addEventListener('click', validation)

function validation(){
  if(regex.test(age.value)){
    if(age.value <110){
      if(age.value >= 18){
        alert('Vous êtes majeur')
      } else {
        alert('Vous êtes mineur')
      }
    } else {
      alert('Tu es mort')
    }
  } else {
    alert('Donnée incorrecte')
  }
}
