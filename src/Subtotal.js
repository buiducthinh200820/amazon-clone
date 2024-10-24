import React from 'react'
import "./Subtotal"
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    function formatCurrency(value) {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).replace('$', ''); // Loại bỏ ký hiệu đô la, nếu bạn muốn tự thêm vào trong JSX
    }
    
  return (
    <div className="subtotal">
    <p>
        Subtotal ({basket.length} items): <strong>${formatCurrency(getBasketTotal(basket))}</strong>
    </p>
    <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
    </small>
    <button>Proceed to Checkout</button>
</div>

  )
}

export default Subtotal
