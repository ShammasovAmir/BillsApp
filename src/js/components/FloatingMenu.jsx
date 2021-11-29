import React, { Component } from 'react'

export default class FloatingMenu extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <nav id="FloatingMenu">
        <div className="link">
          <div className="icon">
            <i className="fas fa-credit-card"></i>
          </div>
          <div className="text">Spend</div>
        </div>
        <div className="link">
          <div className="icon">
            <i className="fas fa-piggy-bank"></i>
          </div>
          <div className="text">Save</div>
        </div>
        <div className="link">
          <div className="icon">
            <i className="fas fa-exchange-alt"></i>
          </div>
          <div className="text">Transfer</div>
        </div>
        <div className="link">
          <div className="icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="text">Settings</div>
        </div>
        <div className="link">
          <div className="add-button" onClick={this.props.clickedAddBillBtn}>
            <div className="icon">
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
