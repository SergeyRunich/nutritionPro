import { stringToDate } from "../../helpers/stringToDate";
import { groupByField } from "../../helpers/groupByField";

export const selectLastFiveOrders = (state) => {
  const convertedOrders = state.orders.map((order) => ({
    ...order,
    Date: stringToDate(order.Date),
  }));
  const sortedOrders = convertedOrders
    .slice(0, 5)
    .sort((a, b) => b.Date - a.Date);
  return sortedOrders;
};

export const countTotalOrders = (state) => {
  const ordersLength = state.orders.length;
  return ordersLength;
};

export const countUnpaidOrders = (state) => {
  const status = "False";
  const count = state.orders.filter((obj) => obj.Invoice === status).length;
  return count;
};

export const countOnDateOrders = (state) => {
  const date = "2/25/2021";
  const count = state.orders.filter((obj) => obj.Date === date).length;
  return count;
};

export const orderCountsByDate = (state) => {
  const ordersByDate = groupByField(state.orders, "Date");
  return Object.entries(ordersByDate).map(([date, orders]) => ({
    date,
    count: orders.length,
  }));
};

export const ordersByMeals = (state) => {
  const ordersByMeal = groupByField(state.orders, "Meals");
  return Object.entries(ordersByMeal).map(([meals, orders]) => ({
    meals,
    count: orders.length,
  }));
};
