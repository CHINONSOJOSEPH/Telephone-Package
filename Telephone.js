class Telephone {
 constructor() {
    this.phoneBook = new Set()
 }
 add(phonecontact) {
    this.phoneBook.add(phonecontact)
 }
 remove(phonecontact){
    this.phoneBook.delete(phonecontact)
 }
 notify(message){
    for(let phonecontact of this.phoneBook){
    phonecontact.update(`${message} ${phonecontact.phoneNumber}`)}
 }
}
class Phonecontact {
    constructor(phoneNumber) {  this.phoneNumber = phoneNumber}
    update(message) {
        console.log(message);
    
    }
}

const phoneBook  = new Telephone
const joseph = new Phonecontact (2347023232)
phoneBook.add(joseph)
phoneBook.notify("Now Dailing")

