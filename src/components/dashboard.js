import React from "react";
import "../styles/dashboard.css";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { useSelector } from "react-redux";
import {
  selectLastFiveOrders,
  countOnDateOrders,
  countTotalOrders,
  countUnpaidOrders,
  ordersByMeals,
  orderCountsByDate,
} from "./store/orderSelector";

const Dashboard = () => {
  const orderStats = useSelector(orderCountsByDate);
  const lastFiveOrders = useSelector(selectLastFiveOrders);
  const totalOrders = useSelector(countTotalOrders);
  const unpaidOrders = useSelector(countUnpaidOrders);
  const countDateOrders = useSelector(countOnDateOrders);
  const countByMeals = useSelector(ordersByMeals);

  return (
    <div className="dashboardContent">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div className="infoCard">
            <span className="blockTitle">Last 5 orders</span>
            <div>
              {lastFiveOrders.map((order) => (
                <ul>
                  <li className="orderData">
                    <span>ID:</span> {order.ID}, <span>Phone:</span>{" "}
                    {order.Phone}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="infoCard">
            <span className="blockTitle">Orders by Meals</span>
            <div>
              {countByMeals.map((item) => (
                <ul>
                  <li className="orderData">
                    <span>
                      {item.count} Orders - {item.meals} Meals{" "}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="infoCard">
            <span className="blockTitle">Unpaid orders / Total orders</span>
            <div>
              <span>
                {unpaidOrders} / {totalOrders}
              </span>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="infoCard">
            <span className="blockTitle">Orders qtt on 2/25/2021</span>
            <div>
              <span>{countDateOrders}</span>
            </div>
          </div>
        </Col>
      </Row>
      <div className="chartContainer">
        <span className="blockTitle">Orders qtt by days chart</span>
        <VictoryChart width={1200} height={400} theme={VictoryTheme.material}>
          <VictoryAxis tickFormat={(y) => y} />
          <VictoryAxis dependentAxis tickFormat={(x) => x} />
          <VictoryArea
            style={{ data: { fill: "#3dc383", stroke: "teal" } }}
            data={orderStats}
            x="date"
            y="count"
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default Dashboard;
