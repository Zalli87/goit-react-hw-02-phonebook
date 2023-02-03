import React, { Component } from "react";

export class App extends Component {

  state = {
  contacts: [],
  name: ''
}

  render() {

    return (
      <>
        <div>
          <h2>Phonebook</h2>
        <form>
          <label>Name:
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
          />
          <button type="submit">Add contact</button>
          </label>
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li>Jacob Mercer</li>
          </ul>
        </div>
      </>
    )
    
  }

};
