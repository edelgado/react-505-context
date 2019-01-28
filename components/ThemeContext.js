import React from 'react'
import themes from "../lib/themes"

const { Provider, Consumer } = React.createContext()

class ThemeProvider extends React.Component {
  state = {
    theme: themes[0]
  }

  onThemeChange(name) {
    this.setState({
      theme: themes.find(theme => theme.name === name)
    })
  }

  render() {
    return(
      <Provider value={{
        theme: this.state.theme,
        onThemeChange: (e) => this.onThemeChange(e.target.value)
      }}>
        { this.props.children }
      </Provider>
    )
  }
}

export { ThemeProvider, Consumer as ThemeConsumer }
