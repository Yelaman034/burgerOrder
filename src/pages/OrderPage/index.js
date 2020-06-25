import React from "react";

import axios from "../../axios.orders";

import "./style.module.css";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
class OrderPage extends React.Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        this.setState({ orders: Object.entries(response.data).reverse() });
        // console.log(arr);
        // arr.forEach((el) => {
        //   console.log(el[1].hayag.name + " ===> " + el[1].dun);
        // });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

export default OrderPage;
