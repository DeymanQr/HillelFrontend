class Contact{
	constructor(id, name, phone) {
		this.id = id;
		this.name = name;
		this.phone = phone;
	}
}

class ContactList{
	static getContact() {
		let contacts;
		if (localStorage.getItem('contacts') === null) {
			contacts = [];
		} else {
			contacts = JSON.parse(localStorage.getItem('contacts'));
		}
		return contacts;
	}

	static addContact(contact) {
		const contacts = ContactList.getContact();
		contacts.push(contact);
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}
	static removeContact(id) {
		const contacts = ContactList.getContact();
		contacts.forEach((contact, i) => {
			if (contact.id == id) {
				contacts.splice(i, 1);
			}
		});
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}
}

class UI{
	static displayContact() {
		const contacts = ContactList.getContact();
		contacts.forEach((contact) => UI.addContactToList(contact));
	}

	static addContactToList(contact) {
		const list = document.querySelector('#contact-list');
		const tr = document.createElement('tr');
		tr.innerHTML = `<td>${contact.id}</td><td>${contact.name}</td><td>${contact.phone}</td><td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;    
		list.appendChild(tr);
	}

	static deleteContact(el) {
		if (el.classList.contains('delete')) {
			el.parentElement.parentElement.remove();
			UI.showAlert('Contact deleted', 'warning');
		}
	}

	static showAlert(message, className) {
		const div = document.createElement('div');
		div.className = `alert alert-${className} text-center`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		const form = document.querySelector('#contact-form');
		container.insertBefore(div, form);
		setTimeout(() => document.querySelector('.alert').remove(), 4000);
	}

	static clearFilds() {
		document.querySelector('#id').value = '';
		document.querySelector('#name').value = '';
		document.querySelector('#phone').value = '';
	}
}

document.addEventListener('DOMContentLoaded', UI.displayContact);
document.querySelector('#contact-form').addEventListener('submit', (e) => {
	e.preventDefault();
	const id = document.querySelector('#id').value;
	const name = document.querySelector('#name').value;
	const phone = document.querySelector('#phone').value;
	if (id === '' || name === '' || phone === '' ) {
		UI.showAlert('Wrong input', 'danger');
	} else {
		const contact = new Contact(id, name, phone);
		UI.addContactToList(contact);
		ContactList.addContact(contact);
		UI.showAlert(`Contact ${name} added`, 'success');
		UI.clearFilds();
	}
});

document.querySelector('#contact-list').addEventListener('click', (e) => {
	UI.deleteContact(e.target);
	ContactList.removeContact(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
});