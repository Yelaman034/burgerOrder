import React from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import ContactData from "../../components/ContactData";
import { Route } from "react-router-dom";

export class ShippingPage extends React.Component {
  state = {
    ingredients: null,
    price: 0,
  };
  //componetDidMount ашиглавал state = {ingtegredients:{},} болгоно.
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const orts = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] !== "dun") orts[param[0]] = param[1];
      else price = param[1];
    }
    console.log(orts);
    this.setState({ ingredients: orts, price: price });
  }
  goBack = () => {
    this.props.history.goBack();
  };
  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };
  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "28px" }}>
          <strong>Таны захиалга </strong>
        </p>
        <p style={{ fontSize: "28px" }}>
          <strong>ДҮН:{this.state.price}₮</strong>
        </p>
        <Burger orts={this.state.ingredients} />
        <Button
          daragdsan={this.goBack}
          btnType="Danger"
          text={"ЦУЦЛАХ"}
        ></Button>
        <Button
          daragdsan={this.showContactData}
          btnType="Success"
          text={"ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"}
        ></Button>
        {/* 2 арга */}
        {/* <Route
          path="/ship/contact"
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
            />
          )}
        /> */}
        <Route path="/ship/contact">
          <ContactData
            ingredients={this.state.ingredients}
            price={this.state.price}
          />
        </Route>
      </div>
    );
  }
}
