class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.contacts = [];
  }
  addContact(contact) {
    if (!contact.phoneNumber || !contact.name) {
      return 'Invalid'
    }
    if (contact.phoneNumber.length !== 10) {
      return 'Invalid'
    }
    this.contacts.push(contact);
    return `${contact.name} added.`
  }
  removeContact(name) {
    const findContact = this.contacts.findIndex((contact) => contact.name === name);
    if (findContact === -1) {
      return `Contact not found.`
    } else {
      this.contacts.splice((findContact), 1);
      return `${name} removed.`
    }
  }
  makeCall(info) {
    let validNumber = info.length === 10;
    let person = this.contacts.find((contact) => contact.name === info || contact.phoneNumber === info);
    if (!this.contacts.find((contact) => contact.name === info) && !validNumber) {
      return `Invalid`
    } else if (person) {
      return `Calling ${person.name}...`
    } else {
      (!this.contacts.find((contact) => contact.name === info))
      return `Calling ${info}...`
    }
  }
}

class AppleIPhone extends Phone {
  constructor(phoneNumber, model) {
    super(phoneNumber)
    this.model = model;
  }
  sendIMessage(device, message) {
    if (device instanceof AppleIPhone) {
      return `Message: ${message} - sent from ${this.model}`
    } else {
      return `Message could not be sent.`
    }
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
