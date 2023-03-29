import Empty from "../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>سبد خالی است 😕</h2>
      <p>
        احتمالا هنوز پیتزا سفارش نداده اید.
        <br />
        برای سفارش پیتزا به صفحه اصلی بروید.{" "}
      </p>
      <img src={Empty} alt="Empty cart" />
      <Link to="/">
        <span className="button button--black">
          <span>صفحه اصلی</span>
        </span>
      </Link>
    </div>
  );
};

export default EmptyCart;
