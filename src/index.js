const fio = window.prompt(' Ваше фамилия,имя,отчесво?');
const age = parseInt(window.prompt(' Ваш возраст в годах?'));
 const ageInDays = 365 * age;
 const for5Year = age + 5;
const sex = window.confirm(' Ваш пол-мужской?');
const penciaAge = 65;


let pp ;
 if (sex) {
    pp ='мужской';
 } else {
     pp ='женский';
 }

let tt ;

 if (penciaAge > age) {
     tt = 'нет';
} else {
     tt = 'да';
 }

let result = "ваше ФИО:"+ fio +"\nваш возраст в годах:"+ age +"\nваш возраст в днях:"+ ageInDays +"\nчерез 5 лет вам будет: "+ for5Year+"\nваш пол: " + pp +"\nвы на пенсии: " + tt;

window.alert(tt);
 alert(result);

