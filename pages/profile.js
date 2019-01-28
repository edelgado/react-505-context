import themes from '../lib/themes'

const Profile = ({user, theme, onThemeChange}) => (
  <React.Fragment>
    <h1>{user.name}'s Profile</h1>
    <div className="clearfix">
      <div className="card">
        <h3>Contact Information</h3>
        <table>
          <thead>
          <tr>
            <th>Name:</th>
            <td>{user.name}</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>Email:</th>
            <td>{user.email}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3>Settings</h3>
        <label htmlFor="theme-select">Theme:</label>
        <select id='theme-select' value={theme.name} onChange={onThemeChange}>
          {themes.map(theme => <option key={`theme-${theme.name}`} value={theme.name}>{theme.label}</option>)}
        </select>
      </div>
    </div>
    <style jsx>{`
      label {
        padding-right: 10px;
      }
      select {
        font-size: .9rem;
        padding: 2px 5px;
      }
    `}</style>
  </React.Fragment>
)

export default Profile
