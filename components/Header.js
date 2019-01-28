import Link from 'next/link'

const Header = () => (
  <div className="header">
    <Link href="/">
      <a>💳 Accounts</a>
    </Link>
    <Link href="/profile">
      <a>👤 Profile</a>
    </Link>
    <div className="avatar">
      Hi <Link href="/profile"><a>Enrique</a></Link>
    </div>
    <style jsx>{`
      .header {
        background-color: #F0F0F0;
        font-family: "Arial";
        padding: 1rem;
      }
      a {
        font-weight: bold;
        text-decoration: none;
        color: #1F1F1F;
        margin-right: 1.5rem;
      }
      a:hover {
        font-weight: bold;
        text-decoration: underline;
        color: #1F1F1F;
      }
      .avatar {
        float: right;
      }
    `}</style>
  </div>
)

export default Header
