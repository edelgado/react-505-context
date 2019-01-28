import themes from '../lib/themes'
import UserContext from "../components/UserContext"

const Profile = ({theme, onThemeChange}) => (
  <UserContext.Consumer>
    {(context) => (
      <React.Fragment>
        <h1>{context.user.name}'s Profile</h1>
        <div className="clearfix">
          <div className="card">
            <h3>Contact Information</h3>
            {context.user.updating ?
              <form onSubmit={context.handleUpdate}>
                <label>
                  Name: <input type="text" name="userName" defaultValue={context.user.name}/>
                </label>
                <label>
                  Email: <input type="text" name="userEmail" defaultValue={context.user.email}/>
                </label>
                <input type="submit" value="Save" />
              </form>
              :
              <div>
                <table>
                  <thead>
                  <tr>
                    <th>Name:</th>
                    <td>{context.user.name}</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th>Email:</th>
                    <td>{context.user.email}</td>
                  </tr>
                  </tbody>
                </table>
                <button onClick={context.toggleUpdate}>Update</button>
              </div>
            }
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
          select {
            font-size: .9rem;
            padding: 2px 5px;
          }
        `}</style>
      </React.Fragment>
    )}
  </UserContext.Consumer>
)

export default Profile
