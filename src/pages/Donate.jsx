import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import heroImage from "../assets/images/donation-hero.jpg";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

function StripeCheckout({ amount, donorName }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !amount || !donorName) return;

    setLoading(true);
    // TODO: Replace with backend Stripe PaymentIntent
    alert(`Stripe payment of $${amount} by ${donorName}`);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-3 border rounded" />
      <button
        type="submit"
        disabled={loading || !amount || !donorName}
        className="w-full bg-[#FF6700] text-white py-3 rounded hover:bg-[#e65c00] transition"
      >
        {loading ? "Processing..." : `Pay $${amount} with Card`}
      </button>
    </form>
  );
}

export default function Donation() {
  const [amount, setAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const presetAmounts = [10, 25, 50, 100];

  const handleMobilePayment = (provider) => {
    if (!mobileNumber || !amount) {
      alert("Please enter both mobile number and amount.");
      return;
    }

    alert(`You chose ${provider} with $${amount} for number ${mobileNumber}`);
    setMobileNumber("");
  };

  return (
    <section className="bg-gray-50">
      {/* Hero */}
      <div className="relative h-64 md:h-96 w-full">
        <img
          src={heroImage}
          alt="Donate"
          className="w-full h-full object-cover rounded-b-3xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black-500 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center px-4">
            Make a Difference Today
          </h1>
        </div>
      </div>

      {/* Donation Card */}
      <div className="max-w-3xl mx-auto px-6 mt-[-50px] bg-white p-10 rounded-xl shadow-lg relative z-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#B11226]">
          Donate Now
        </h2>

        {/* Donor Info */}
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            placeholder="Your Name"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-[#B11226]"
          />

          {/* Preset Amounts */}
          <div className="flex gap-2 mb-2">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setAmount(amt)}
                className={`px-4 py-2 rounded border ${
                  amount === amt ? "bg-[#B11226] text-white" : "bg-white text-gray-700"
                } hover:bg-[#B11226] hover:text-white transition`}
              >
                ${amt}
              </button>
            ))}
          </div>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Custom Amount"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-[#B11226]"
          />
        </div>

        {/* Stripe Checkout */}
        <div className="mb-8">
          <h3 className="font-semibold mb-2 text-[#FF6700]">Pay with Card (Stripe)</h3>
          <Elements stripe={stripePromise}>
            <StripeCheckout amount={amount} donorName={donorName} />
          </Elements>
        </div>

        {/* PayPal */}
        <div className="mb-8">
          <h3 className="font-semibold mb-2 text-[#003087]">Pay with PayPal</h3>
          <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              disabled={!amount || !donorName}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: amount,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(() => {
                  alert(`Thank you ${donorName}! Your PayPal donation was successful.`);
                });
              }}
            />
          </PayPalScriptProvider>
        </div>

        {/* Mobile Money */}
        <div>
          <h3 className="font-semibold mb-2 text-[#FF6700]">Mobile Money</h3>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter Mobile Number"
            className="w-full border p-2 rounded mb-2 focus:ring-2 focus:ring-[#B11226]"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleMobilePayment("Orange Money")}
              className="flex-1 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              Orange Money
            </button>
            <button
              type="button"
              onClick={() => handleMobilePayment("Lonestar Money")}
              className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
            >
              Lonestar Money
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
