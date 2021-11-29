import React, { Component } from 'react'

export default class AllBills extends Component {
  constructor() {
    super()
    this.state = {}
  }

  billsTotalAmount = () => {
    const bills = this.props.allBills
    let total = 0

    for (let i = 0; i < bills.length; i++) {
      total += parseInt(bills[i].price)
    }

    if (bills.length > 0) return total
    else return 0
  }

  showAllBills = () => {
    const bills = this.props.allBills
    if (bills.length > 0)
      return bills.map((bill, i) => (
        <li className={`bill ${bill.status === true ? 'active' : ''}`} key={i}>
          <div className="company">
            <div className="logo">
              {/* {bill.img_src ? (
                <img src={`${bill.img_src}`} alt="" />
              ) : (
                <img src="../src/img/receipt.png" alt="" />
              )} */}
              <img
                src={`${bill.img_src || './receipt.png'}`}
                alt=""
                crossOrigin="anonymous"
              />
            </div>
            <div className="title">{bill.business_name}</div>
          </div>
          <div className="price">-${bill.price}</div>
          <div className="buttons">
            <div
              className="paid"
              onClick={this.props.changeBillStatus.bind(null, i)}
            >
              <i className="fas fa-check"></i>
            </div>
            <div
              className="delete"
              onClick={this.props.deleteBill.bind(null, i)}
            >
              <i className="fas fa-trash-alt"></i>
            </div>
          </div>
        </li>
      ))
    else
      return (
        <li className="bill">
          <div className="no-bills">No bills. Please add a bill.</div>
        </li>
      )
  }

  render() {
    return (
      <section id="AllBills">
        <div className="container">
          <div className="total-bills">
            <div className="text">Total Amount: </div>
            <div className="number">${this.billsTotalAmount()}</div>
          </div>

          <ul className="bills-list">{this.showAllBills()}</ul>
        </div>
      </section>
    )
  }
}
