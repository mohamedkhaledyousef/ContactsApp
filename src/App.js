import React, { Component } from 'react';
import ListContacts from './ListContacts'
import { Route } from 'react-router-dom'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:3006/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:3006/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:3006/tyler.jpg"
      },
      {
        "id": "mohamed",
        "name": "Mohamed Khaled Yousef",
        "email": "mkhy@reacttraining.com",
        "avatarURL": "http://localhost:3006/ryan.jpg"
      },
      {
        "id": "islam",
        "name": "Islam Ahmed",
        "email": "islam@reacttraining.com",
        "avatarURL": "http://localhost:3006/michael.jpg"
      },
      {
        "id": "yousef",
        "name": "Yousef Mohamed",
        "email": "yousef@reacttraining.com",
        "avatarURL": "http://localhost:3006/tyler.jpg"
      },
      {
        "id": "heram",
        "name": "Abo heram",
        "email": "heram@reacttraining.com",
        "avatarURL": "http://localhost:3006/michael.jpg"
      },
      {
        "id": "laila",
        "name": "Laila",
        "email": "laila@reacttraining.com",
        "avatarURL": "http://localhost:3006/michael.jpg"
      },
      {
        "id": "fatema",
        "name": "Fatema X",
        "email": "fatema@reacttraining.com",
        "avatarURL": "http://localhost:3006/michael.jpg"
      }
  ]
}

  //Update State with setState
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
