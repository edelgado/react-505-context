import Head from "next/head"
import Header from './Header'

const Layout = (props) => (
  <div className="container">
    <Head>
      <title>My Bank</title>
    </Head>
    <Header theme={props.theme}/>

    {React.cloneElement(props.children, props)}

    <style jsx>{`
      padding: 1rem;
    `}</style>
  </div>
)

export default Layout
