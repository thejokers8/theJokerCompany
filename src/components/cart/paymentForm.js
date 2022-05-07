import { nanoid } from "nanoid";

function PaymentButton({ amount, cartItemsToBuy }) {
  const date = new Date();
  const referenceCode = `Order-${nanoid()} | ${date.getMonth()}-${date.getDay()}-${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const md5 = require("md5");

  const description = `Items => [${cartItemsToBuy.map(
    (item) => ` ${item.name} `
  )}] | Amount => [${cartItemsToBuy.map(
    (item) => ` ${item.amount} `
  )}] | Unit price => [${cartItemsToBuy.map(
    (item) => ` ${item.price} `
  )}] | Total per item => [${cartItemsToBuy.map(
    (item) => ` ${item.price * item.amount} `
  )}]`;

  return (
    <form
      method="post"
      action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
    >
      <input name="merchantId" type="hidden" value="508029" />
      <input name="accountId" type="hidden" value="512321" />
      <input name="description" type="hidden" value={description} />
      <input name="referenceCode" type="hidden" value={referenceCode} />
      <input name="amount" type="hidden" value={amount} />
      <input name="tax" type="hidden" value="0" />
      <input name="taxReturnBase" type="hidden" value="0" />
      <input name="currency" type="hidden" value="COP" />
      <input
        name="signature"
        type="hidden"
        value={md5(
          `4Vj8eK4rloUd272L48hsrarnUA~508029~${referenceCode}~${amount}~COP`
        )}
      />
      <input name="test" type="hidden" value="1" />
      <input
        name="responseUrl"
        type="hidden"
        value="http://localhost:3000/theJokerCompany/paymentResponse"
      />
      <input
        name="Submit"
        type="submit"
        value="Place order"
        className="cursor-pointer inline-block mt-8 mb-8 px-6 py-2.5 bg-gray-800 text-white font-medium text-md leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg hover:text-green-600 hover:scale-105 transition duration-150 ease-in-out w-fit opacity-50 hover:opacity-90"
      />
    </form>
  );
}

export default PaymentButton;
