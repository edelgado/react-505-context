import Link from 'next/link'
import { UserContext } from "./Main"

const Header = ({theme }) => (
  <UserContext.Consumer>
    {(user) => (
      <div className="header">
        <Link href="/">
          <a>💳 Accounts</a>
        </Link>
        <Link href="/profile">
          <a>👤 Profile</a>
        </Link>
        <div className="avatar">
          Hi <Link href="/profile"><a>{user.name}</a></Link>
        </div>
        <style jsx>{`
          .header {
            background-color: ${theme.headerColor};
            padding: 1rem;
          }
         .avatar {
            float: right;
          }
        `}</style>
      </div>
    )}
  </UserContext.Consumer>
)

export default Header
