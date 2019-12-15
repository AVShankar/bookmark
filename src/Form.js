import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component
{
    constructor()
    {
        super()
        this.state = {tag: "", url: ""}
    }

    updateData()
    {
        this.setState({
            url: this.refs.url.value,
            tag: this.refs.tag.value
        })
    }

    sendData = () =>
    {
        this.props.addData(this.state.url, this.state.tag)
        this.setState({
            url: "",
            tag: ""
        })
        this.unMount()
    }

    unMount()
    {
        ReactDOM.unmountComponentAtNode(document.getElementById('form'))
    }

    render()
    {
        return(
            <div className="table-bordered">
                <br></br>
                <div className='container'>
                <h4>Feed me more!</h4>
                <form>
                    <label>URL: </label>
                    <input type="text" ref="url" className="form-control"placeholder="Paste the url here..." onChange={this.updateData.bind(this)} autoFocus/>
                    <br></br>
                    <label>Tag(s): </label>
                    <input type="text" ref="tag" className="form-control" placeholder="Tag1, Tag2, ..." onChange={this.updateData.bind(this)}/>
                    <br></br>
                    <input type="button" value="Save" className="btn btn-success" onClick={this.sendData.bind(this)} /> &nbsp;&nbsp;
                    <input type="button" value="Cancel" className="btn btn-danger" onClick={this.unMount.bind(this)} />
                </form>
                </div>
                <br></br>
            </div>
        )
    }
}

export default Form;