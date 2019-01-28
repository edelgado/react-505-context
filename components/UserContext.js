import React from 'react'

const { Provider, Consumer } = React.createContext()

class UserProvider extends React.Component {
  state = {
    user: {
      name: 'Peter',
      email: 'pete@aol.com',
      updating: false
    }
  }

  toggleUpdate() {
    this.setState({
      user: {
        ...this.state.user,
        updating: !this.state.user.updating
      }
    })
  }

  handleUpdate(e) {
    e.preventDefault()
    const form = e.target
    const data = {}
    for (let element of form.elements) {
      if (element.name === '') { continue; }
      data[element.name] = element.value;
    }
    this.setState({
      user: {
        name: data.userName,
        email: data.userEmail,
        updating: false
      }
    })
  }

  render() {
    return(
      <Provider value={{
        user: this.state.user,
        toggleUpdate: () => this.toggleUpdate(),
        handleUpdate: (e) => this.handleUpdate(e)
      }}>
        { this.props.children }
      </Provider>
    )
  }
}

export { UserProvider, Consumer as UserConsumer }
