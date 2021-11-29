import React, { Component } from 'react'
import Header from './components/Header'
import AllBills from './components/AllBills'
import FloatingMenu from './components/FloatingMenu'
import AddBill from './components/AddBill'
import update from 'immutability-helper'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      addBillOpen: false,
      allBills: JSON.parse(localStorage.getItem('allBills')) || [],
    }
  }

  clickedAddBillBtn = () =>
    this.setState({
      addBillOpen: !this.state.addBillOpen,
    })

  saveBill = (bill) => {
    const newBills = update(this.state.allBills, {
      $push: [bill],
    })

    this.setState({ allBills: newBills, addBillOpen: false }, () =>
      localStorage.setItem('allBills', JSON.stringify(this.state.allBills))
    )
  }

  changeBillStatus = (billIndex) => {
    const newState = update(this.state, {
      allBills: {
        [billIndex]: {
          $toggle: ['status'],
        },
      },
    })
    this.setState(newState, () =>
      localStorage.setItem('allBills', JSON.stringify(this.state.allBills))
    )
  }

  deleteBill = (billIndex) => {
    const newState = update(this.state, {
      allBills: {
        $splice: [[billIndex, 1]],
      },
    })
    this.setState(newState, () =>
      localStorage.setItem('allBills', JSON.stringify(this.state.allBills))
    )
  }

  render() {
    return (
      <div className="container">
        <div id="BillsApp">
          <Header />
          <AllBills
            allBills={this.state.allBills}
            changeBillStatus={this.changeBillStatus}
            deleteBill={this.deleteBill}
          />
          <AddBill
            addBillOpen={this.state.addBillOpen}
            saveBill={this.saveBill}
          />
          <div className="content-background"></div>
          <FloatingMenu clickedAddBillBtn={this.clickedAddBillBtn} />
        </div>
      </div>
    )
  }
}
