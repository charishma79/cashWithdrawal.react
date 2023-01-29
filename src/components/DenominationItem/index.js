// Write your code here
import './index.css'

const DenominationItem = props => {
  const {cashDetails, onPrice} = props
  const {value} = cashDetails

  const onCash = () => {
    onPrice(value)
  }
  return (
    <li className="cash-list-container">
      <button className="btn" type="button" onClick={onCash}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
