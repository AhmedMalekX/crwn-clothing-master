import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import { ReactComponent as logo } from '../../assets/crown.svg';

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KKpGmJcKt0ysV6CUuOg1Q3rNaXLqV2DFSGNhuA0DYfBxbWWXOKRGigxkxZ8WUJIXz7gkBFyBIachJAeem6jzMFC00eSMuc8Mn';

  const onToken = token => {
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is ${price}`}
      amount={priceForStripe}
      pannelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
