"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailList = exports.Email = void 0;
class Email {
    constructor(from, to, message, subject) {
        this._from = from;
        this._to = to;
        this._message = message;
        this._subject = '';
        this._subject = subject;
    }
    set subject(newSubject) {
        if (newSubject.length <= 40)
            this._subject = newSubject;
    }
    get subject() {
        return this._subject;
    }
    get from() {
        return this._from;
    }
    get to() {
        return this._to;
    }
    get content() {
        return `
      From ${this._from} to ${this._to}
      ${this._subject}

      ${this._message}`;
    }
}
exports.Email = Email;
class MailList {
    constructor(mailList = []) {
        this._mailList = mailList;
    }
    // outro jeito de declarar o construtor:
    // constructor(private mailList: Email[] = []) {  }
    get all() { return this._mailList; }
    getByEmailFrom(mailAddress) {
        return this._mailList.filter((mail) => mail.from === mailAddress);
    }
    getByEmailTo(mailTo) {
        return this._mailList.filter((mail) => mail.to === mailTo);
    }
    getBySubject(searchString) {
        return this._mailList.filter((mail) => mail.subject.includes(searchString));
    }
    addEmail(newMail) {
        this._mailList.push(newMail);
    }
    removeEmail(mailToRemove) {
        this._mailList = this._mailList.filter((mail) => mail !== mailToRemove);
    }
}
exports.MailList = MailList;
