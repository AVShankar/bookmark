import React from "react";
import ReactDOM from 'react-dom'
import Form from './Form';

class Details extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = { savedData: [], isFormActive: false }
  }

  componentDidMount()
  {
    setInterval(()=>{
      this.setState({
        savedData: this.props.savedData
      });
      clearInterval()
    }, 500)
  }

  getForm()
  {
    const { isFormActive } = this.state
    this.setState({ isFormActive: !isFormActive })
  }

  render() {
    const { isFormActive } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light">
          <a className="navbar-brand" style={{ float: "left" }}>
          Here's your bookmarks
          </a>
          <input
            type="submit"
            value="Add New"
            style={{ alignContent: "center" }}
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={this.getForm}
          />
        </nav>
        {isFormActive ? <Form addData={this.props.addData}/> : null}
        <br></br>
        <div className="row">
          {
        this.state.savedData.map(individualValue =>{
        return (
        <div className="card col-sm-3" style={{width: "18rem"}} key={individualValue.name}>
          <a href={individualValue.url} >
            <img src={individualValue.image} className="card-img-top" alt="logo" />
          </a>
          <div className="card-body">
          <h5 className="card-title">{individualValue.title}</h5>
            <p className="card-text">{individualValue.description}</p>
          </div>
          <footer><button className="btn btn-danger" id={individualValue.id} onClick={this.props.handleDelete.bind(this, individualValue)} >Delete</button></footer>
        </div>
        )
        })
        }
        </div>
      </div>
    );
  }
}

export default Details;
