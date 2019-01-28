import themes from '../lib/themes'
import { UserConsumer } from "../components/UserContext"
import { ThemeConsumer } from "../components/ThemeContext"

const Profile = () => (
  <ThemeConsumer>
    {({theme, onThemeChange}) => (
      <UserConsumer>
        {({user, toggleUpdate, handleUpdate}) => (
          <React.Fragment>
            <h1>{user.name}'s Profile</h1>
            <div className="clearfix">
              <div className="card">
                <h3>Contact Information</h3>
                {user.updating ?
                  <form onSubmit={handleUpdate}>
                    <label>
                      Name: <input type="text" name="userName" defaultValue={user.name}/>
                    </label>
                    <label>
                      Email: <input type="text" name="userEmail" defaultValue={user.email}/>
                    </label>
                    <input type="submit" value="Save" />
                  </form>
                  :
                  <div>
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
                    <button onClick={toggleUpdate}>Update</button>
                  </div>
                }
              </div>
              <div className="card">
                <h3>Settings</h3>
                <label htmlFor="theme-select">Theme:</label>
                <select id='theme-select' value={theme.name} onChange={onThemeChange}>
                  {themes.map(aTheme => <option key={`theme-${aTheme.name}`} value={aTheme.name}>{aTheme.label}</option>)}
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
      </UserConsumer>
    )}
  </ThemeConsumer>
)

export default Profile
