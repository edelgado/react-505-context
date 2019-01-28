import Layout from '../components/Layout'
import React from "react"

import themes from '../lib/themes'

class Main extends React.Component {
  state = {
    user: {
      name: 'Peter',
      email: 'pete@aol.com'
    },
    theme: {
      ...themes.light
    }
  }

  onThemeChange(name) {
    this.setState({
      theme: themes[name]
    })
  }

  render() {
    return(
      <React.Fragment>
      <Layout
        user={this.state.user}
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
          .card {
            float: left;
            margin-right: 3rem;
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
