import React from "react";
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import CheckoutForm from './checkoutForm'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51L3kYQAG5rO3KPKhowKFyhxKkHKQ3d2Y8ZRcPqOx0awWxXsPr3YiBoWa4FN2Q9i0TnnozRbSZ3QpuDxPPvqaP4NV00ZZwaBAx2');

function EncCart() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default EncCart