import '../styles/globals.css'
import { Layout } from 'antd';
import Head from "next/head";
import App from "next/app";
const { Header, Footer, Sider, Content } = Layout;
class MyApp extends App {


  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
  
    const { Component, pageProps } = this.props;
  return(<>
      <Layout>
      <Header>Header</Header>
       <Content><Component {...pageProps} /></Content>
      <Footer>Footer</Footer>
    </Layout>
 
  </>)}
}


export default MyApp
