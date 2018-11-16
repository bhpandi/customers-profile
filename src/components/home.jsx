import React from "react";
import Profile from "./Profile";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const Home = props => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content>
        <div className="profile-container" style={{}}>
          <Profile orderDetails={props.orderDetails} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        E-commerce customer portal ©2018 Created by Bharath
      </Footer>
    </Layout>
  );
};

export default Home;
