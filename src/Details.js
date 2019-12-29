import React from "react";
import ReactDOM from 'react-dom'
import Form from './Form';

class Details extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = { savedData: [] }
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
    ReactDOM.render(<Form addData={this.props.addData}/>, document.getElementById('form'))
  }


  render() {
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
            onClick={this.getForm.bind(this)}
          />
        </nav>
        <div id="form"></div>
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
