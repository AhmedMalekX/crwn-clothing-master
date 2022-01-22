import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

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
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      pannelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
