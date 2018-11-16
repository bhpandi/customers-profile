import React, { Component } from "react";
import { Tabs, Icon, Collapse, Row, Col, Avatar, Pagination } from "antd";
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
class Profile extends Component {
  state = {
    current: 1,
    tab: 1
  };
  handlePage = page => {
    this.setState({
      current: page
    });
  };
  onTabChange = key => {
    console.log(key);
    this.setState({
      tab: key
    });
  };
  render() {
    const {
      about,
      address,
      company,
      email,
      phone,
      name: { first, last },
      registered,
      orders
    } = this.props.orderDetails;

    const paging = 4;

    const paginfInfo = {
      indexOfLastTodo: this.state.current * paging,
      OrderList: orders,
      get currentList() {
        const indexOfFirstTodo = this.indexOfLastTodo - paging;
        return this.OrderList.slice(indexOfFirstTodo, this.indexOfLastTodo);
      },
      get totalList() {
        return this.OrderList.length;
      }
    };
    const { currentList, totalList } = paginfInfo;
    return (
      <div>
        <Tabs defaultActiveKey="1" animated={false} onChange={this.onTabChange}>
          <TabPane
            tab={
              <span>
                <Icon type="user" />
                My Account
              </span>
            }
            key="1"
            animated={false}
          >
            <Collapse defaultActiveKey={[]}>
              <Panel
                header={
                  <div>
                    <Avatar shape="square" size={64} icon="user" />
                    <span className="avatar-name">
                      <strong>{`${first} ${last}`}</strong>
                    </span>
                  </div>
                }
                key="1"
              >
                <Row gutter={16} className="user-profile">
                  <Col span={24}>
                    <p>
                      <label>
                        <strong>Name:</strong>
                      </label>
                      <span>{`${first} ${last}`}</span>
                    </p>
                    <p>
                      <label>
                        <strong>Email:</strong>
                      </label>
                      <span>{email}</span>
                    </p>
                    <p>
                      <label>
                        <strong>Phone:</strong>
                      </label>
                      <span>{phone}</span>
                    </p>
                    <p>
                      <label>
                        <strong>Registered On:</strong>
                      </label>
                      <span>{registered}</span>
                    </p>
                    <p>
                      <label>
                        <strong>Company:</strong>
                      </label>
                      <span>{company}</span>
                    </p>
                    <p>
                      <label>
                        <strong>Address:</strong>
                      </label>
                      <span>{address}</span>
                    </p>
                    <p>
                      <label>
                        <strong>About:</strong>
                      </label>
                      <span>{about}</span>
                    </p>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="shopping" />
                Orders
              </span>
            }
            key="2"
          >
            <Collapse defaultActiveKey={[]} className="order-tab">
              {currentList.map(item => (
                <Panel
                  header={
                    <div>
                      <Row gutter={16} className="expand-collopse">
                        <Col span={8}>
                          <img
                            src={item.product.picture}
                            title={item.product.name}
                            alt={item.product.name}
                          />
                          <span>
                            <strong>{item.product.name}</strong> <br />
                          </span>
                        </Col>
                        <Col span={8} className="flex-container">
                          <span>
                            <strong>{item.price}</strong>
                          </span>
                        </Col>
                        <Col span={8} className="flex-container">
                          <span>
                            <strong>{item.product.orderStatus}</strong>
                          </span>
                        </Col>

                        <Row>
                          <Col span={24} className="order-id">
                            Order # <strong>{item.id}</strong>
                            <br />
                            <em>
                              Orderd On:
                              {item.product.orderDate.replace("GMT+0000", "")}
                            </em>
                          </Col>
                        </Row>
                      </Row>
                    </div>
                  }
                  key={item.id}
                >
                  <Row gutter={16}>
                    <Col span={24}>
                      <p>{item.product.description}</p> <br />
                    </Col>
                  </Row>
                </Panel>
              ))}
            </Collapse>
          </TabPane>
        </Tabs>
        {parseInt(this.state.tab) === 2 && (
          <Pagination
            current={this.state.current}
            onChange={page => this.handlePage(page)}
            total={totalList}
          />
        )}
      </div>
    );
  }
}
export default Profile;
