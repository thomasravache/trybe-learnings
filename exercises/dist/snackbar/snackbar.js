"use strict";
// class Customer {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
//   getName() {
//     return this._name;
//   }
// }
var Month;
(function (Month) {
    Month[Month["Janeiro"] = 1] = "Janeiro";
    Month[Month["Fevereiro"] = 2] = "Fevereiro";
    Month[Month["Mar\u00E7o"] = 3] = "Mar\u00E7o";
    Month[Month["Abril"] = 4] = "Abril";
    Month[Month["Maio"] = 5] = "Maio";
    Month[Month["Junho"] = 6] = "Junho";
    Month[Month["Julho"] = 7] = "Julho";
    Month[Month["Agosto"] = 8] = "Agosto";
    Month[Month["Setembro"] = 9] = "Setembro";
    Month[Month["Outubro"] = 10] = "Outubro";
    Month[Month["Novembro"] = 11] = "Novembro";
    Month[Month["Dezembro"] = 12] = "Dezembro";
})(Month || (Month = {}));
class Data {
    constructor(day, month, year) {
        const dateString = `${year}-${month}-${day}`;
        if (new Date(dateString).getDate() !== day) { // se não conseguir trazer o dia com o new Date, então seta a data como 01/01/1900
            day = 1;
            month = 1;
            year = 1900;
        }
        this._day = day;
        this._month = month;
        this._year = year;
    }
    getMonthName() {
        return Month[this._month];
    }
    isLeapYear() {
        if (this._year % 4 === 0 && (this._year % 100 === 0 && this._year % 400 === 0))
            return true;
        return false;
    }
    compare({ _year, _month, _day }) {
        const paramDate = new Date(`${_year}-${_month}-${_day}`).getTime();
        const thisDate = new Date(`${this._year}-${this._month}-${this._day}`).getTime();
        if (paramDate === thisDate)
            return 0;
        return 1;
    }
    format(format) {
        const { _day, _month, _year } = this;
        const yearString = _year.toString();
        const dayString = _day < 10 ? `0${_day}` : _day;
        const monthString = _month < 10 ? `0${_month}` : _month;
        const stringFormats = [
            ['dd/mm/aaaa', `${dayString}/${monthString}/${_year}`],
            ['aaaa-mm-dd', `${_year}-${monthString}-${dayString}`],
            ['dd de M de aa', `${dayString} de ${Month[_month].toLowerCase()} de ${yearString[2]}${yearString[3]}`],
            ['dd, M de aaaa', `${dayString}, ${Month[_month].toLowerCase()} de ${_year}`]
        ];
        const findedFormat = stringFormats.find((stringFormat) => stringFormat[0] === format);
        if (!findedFormat)
            throw new Error('formato incorreto');
        return findedFormat[1];
    }
}
const date = new Data(1, 2, 1998);
const date2 = new Data(1, 2, 2000);
console.log(date.getMonthName());
console.log(date.isLeapYear());
console.log(date.compare(date2));
console.log(date.format('dd/mm/aaaa'));
console.log(date.format('aaaa-mm-dd'));
console.log(date.format('dd de M de aa'));
console.log(date.format('dd, M de aaaa'));
// console.log(date.format('teste'));
