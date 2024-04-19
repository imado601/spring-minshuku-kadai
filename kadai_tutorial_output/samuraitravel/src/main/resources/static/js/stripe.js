const stripe = Stripe('pk_test_51P4dJRKaaR5WbQ5K87cCJ386CPjRwHvJfcctMhz42HomCaCOHzlBInPB2cvrJS5h88dS3a0ijkuPTtCw29YiHLBF00Gvr5ZwZ3');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });