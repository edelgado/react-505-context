import React from 'react'
import Layout from '../components/Layout'
import themes from '../lib/themes'

class Main extends React.Component {
  state = {
    user: {
      name: 'Peter',
      email: 'pete@aol.com',
      updating: false
    },
    theme: {
      ...themes[0]
    }
  }

  onThemeChange(name) {
    this.setState({
      theme: themes.find(theme => theme.name === name)
    })
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
      <React.Fragment>
      <Layout
        user={this.state.user}
        theme={this.state.theme}
        toggleUpdate={() => this.toggleUpdate()}
        handleUpdate={(e) => this.handleUpdate(e)}
        onThemeChange={(e) => this.onThemeChange(e.target.value)}>
        { this.props.children }
      </Layout>
      <style jsx global>{`
          body {
            font-family: "Arial";
            color: ${this.state.theme.textColor};
            background-color: ${this.state.theme.bodyColor};
          }
          a {
            font-weight: bold;
            text-decoration: none;
            color: ${this.state.theme.textColor};
            margin-right: 1.5rem;
          }
          a:hover {
            font-weight: bold;
            text-decoration: underline;
          }
          table {
            padding: 1rem;
            border: 1px #DDD solid;
          }
          th {
            min-width: 6rem;
            text-align: left;
          }
          button {
            font-size: 1rem;
            padding: 0.5rem;
            margin-top: 1rem;
            margin-right: 1rem;
            border-radius: 5px;
          }
          input {
            font-size: 1rem;
            display: block;
            margin: 0.5rem 0;
          }
          input[type=submit] {
            font-size: 1rem;
            padding: 0.5rem;
            margin-top: 1rem;
            margin-right: 1rem;
            border-radius: 5px;
          }
          .card {
            float: left;
            margin-right: 3rem;
          }
          select {
            margin-left: 1rem;
          }
          .clearfix::after {
            display: block;
            content: "";
            clear: both;
          }
      `}</style>
      </React.Fragment>
    )
  }
}

export default Main
