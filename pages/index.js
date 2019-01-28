const Index = ({user}) => (
  <React.Fragment>
    <h1>{user.name}'s Accounts</h1>
    <div className="clearfix">
      <div className="card">
        <h3>Checking</h3>
        <table>
          <thead>
            <tr>
              <th>Nickname</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Main</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>Fun Money</td>
              <td>$15.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3>Savings</h3>
        <table>
          <thead>
          <tr>
            <th>Nickname</th>
            <th>Balance</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Nest Egg</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>X-mas Fund</td>
            <td>$20.00</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </React.Fragment>
)

export default Index
