import React from 'react'
import Layout from '../components/Layout'
import themes from '../lib/themes'
import { UserProvider } from '../components/UserContext'

class Main extends React.Component {
  state = {
    theme: {
      ...themes[0]
    }
  }

  onThemeChange(name) {
    this.setState({
      theme: themes.find(theme => theme.name === name)
    })
  }

  render() {
    return(
      <UserProvider>
        <React.Fragment>
          <Layout
            theme={this.state.theme}
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
      </UserProvider>
    )
  }
}

export default Main
