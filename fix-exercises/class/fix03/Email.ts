class Email {
  private _from: string;
  private _to: string;
  private _message: string;
  private _subject: string;

  constructor(
    from: string,
    to: string,
    message: string,
    subject: string,
  ) {
    this._from = from;
    this._to = to;
    this._message = message;
    this._subject = '';
    this._subject = subject;
  }

  set subject(newSubject: string) {
    if (newSubject.length <= 40) this._subject = newSubject;
  }

  get subject(): string {
    return this._subject;
  }

  get from(): string {
    return this._from;
  }

  get to(): string {
    return this._to;
  }

  get content(): string {
    return `
      From ${this._from} to ${this._to}
      ${this._subject}

      ${this._message}`;
  }
}

class MailList {
  private _mailList: Email[];

  constructor(mailList: Email[] = []) { 
    this._mailList = mailList;
   }

  // outro jeito de declarar o construtor:
  // constructor(private mailList: Email[] = []) {  }

  get all(): Email[] { return this._mailList; }

  getByEmailFrom(mailAddress: string): Email[] {
    return this._mailList.filter((mail) => mail.from === mailAddress);
  }

  getByEmailTo(mailTo: string): Email[] {
    return this._mailList.filter((mail) => mail.to === mailTo);
  }

  getBySubject(searchString: string): Email[] {
    return this._mailList.filter(
      (mail) => mail.subject.indexOf(searchString) !== -1 // ou (mail) => mail.subject.includes(searchString)
    );
  }

  addEmail(newMail: Email): void {
    this._mailList.push(newMail);
  }

  removeEmail(mailToRemove: Email): void {
    this._mailList = this._mailList.filter((mail) => mail !== mailToRemove);
  }
}

export {
  Email,
  MailList,
}
