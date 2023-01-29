// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  onPrice = value => {
    this.setState(prevState => ({cash: prevState.cash - value}))
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="cash-container">
          <div className="name-container">
            <button className="button" type="button">
              S
            </button>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="text">Your Balance</p>
            <div className="rupees-container">
              <p className="rupees">{cash}</p>
              <p className="cash">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="rupees-list-container">
            {denominationsList.map(eachCash => (
              <DenominationItem
                cashDetails={eachCash}
                key={eachCash.id}
                onPrice={this.onPrice}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
