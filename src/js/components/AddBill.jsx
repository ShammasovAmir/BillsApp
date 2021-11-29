import React, { Component } from 'react'

export default class AddBill extends Component {
  constructor() {
    super()
    this.state = {
      business_name: '',
      img_src: '',
      price: '',
      status: false,
    }
  }

  inputChange = () => {
    const name = event.target.name
    let value

    if (event.target.type === 'file') {
      value = ''
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        value = reader.result
        this.setState({ [name]: value })
      }
    } else if (event.target.type === 'text') {
      value = event.target.value
      this.setState({ [name]: value })
    }
  }

  handleSubmit = () => {
    event.preventDefault()
    this.props.saveBill(this.state)
    this.setState({
      business_name: '',
      img_src: '',
      price: '',
    })
  }

  render() {
    return (
      <section
        id="AddBill"
        className={`${this.props.addBillOpen === true ? 'active' : ''}`}
      >
        <div className="container">
          <h2>Add Bill</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="business_name">Business Name*</label>
              <input
                type="text"
                id="business_name"
                name="business_name"
                onChange={this.inputChange}
                value={this.state.business_name}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price*</label>
              <input
                type="text"
                id="price"
                name="price"
                onChange={this.inputChange}
                value={this.state.price}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="img_src">Business Logo</label>
              <input
                type="file"
                name="img_src"
                id="img_src"
                onChange={this.inputChange}
                accept=".jpg, .jpeg, .png"
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    )
  }
}
