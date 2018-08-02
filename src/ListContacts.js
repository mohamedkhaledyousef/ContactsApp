import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'

//Normal function or called Stateless Functional Components === Component
//Here we can't use this keyword
//instead of Create entire class Component that has only render method , we have a function that have some props and render some UI

// function ListContacts (props){
//   return (
//       <ol className='contact-list'>
//         {props.contacts.map((contact) => (
//           <li key={contact.id} className='contact-list-item'>
//             <div className='contact-avatar' style={{
//               backgroundImage: 'url(${contact.avatarURL})'
//             }}/>
//             <div className='contact-details'>
//               <p>{contact.name}</p>
//               <p>{contact.email}</p>
//             </div>
//
//             //invoke removeContact method
//             <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
//               remove
//             </button>
//           </li>
//         ))}
//       </ol>
//   )
// }

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  //Controlled Components
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim()})
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    //to Controlled Components
    let showingContacts
    if (this.state.query)
    {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
    }
    else
    {
      showingContacts = this.props.contacts
    }

    showingContacts.sort(sortBy('name'))

    return (
      <div className='list-contacts'>
      // {JSON.stringify(this.state)}
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            placeholder='Search contacts'
            />
        </div>

        {showingContacts.length !== this.props.contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {this.props.contacts.length} total </span>
            <button onClick={this.clearQuery}>Show all </button>
          </div>
        )}

        <ol className='contact-list'>
          {showingContacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: 'url(${contact.avatarURL})'
              }}/>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
                remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts
