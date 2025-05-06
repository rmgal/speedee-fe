import StripeCheckout from "react-stripe-checkout";

const Checkout = () => {
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey="YOUR_PUBLIC_KEY"
    />
  );
};

export default Checkout;

