import Layout from "../components/Layout"

export default () => (
  <React.Fragment>
    <h1>My Profile</h1>
    <div className="clearfix">
      <div className="card">
        <h3>Contact Information</h3>
        <table>
          <thead>
          <tr>
            <th>Name:</th>
            <td>Enrique</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>Email:</th>
            <td>foo@bar.com</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3>Settings</h3>
        <label htmlFor="theme-select">Theme:</label>
        <select id='theme-select'>
          <option value="dark">Night Mode</option>
          <option value="light">Light</option>
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
