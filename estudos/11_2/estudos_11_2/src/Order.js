import React from 'react';

export default  props => (
  <div className="order">
    <p> {props.order.user} bought {props.order.product} for {props.order.price.value} {props.order.price.currency} </p>
  </div>
);


// class Order extends React.Component {
//   render() {
//     const { user, product, price } = this.props.order;

//     return (
//       <div className="order">
//         <p> {user} bought {product} for {price.value} {price.currency} </p>
//       </div>
//     );
//   }
// }
// export default Order;
