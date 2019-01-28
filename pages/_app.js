import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

import Layout from '../components/Layout'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>My Bank - Enrique's Account</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <style jsx global>{`
          body {
            font-family: "Arial";
            color: #1F1F1F;
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
      </Container>
    )
  }
}
