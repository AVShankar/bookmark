import React from "react";
import Details from './Details'
import axios from 'axios'

class Home extends React.Component {
    constructor()
    {
        super()
        this.state = { urlData: [ { url:"", title: "", description: "", image: "", tag: "" }] }
    }

    componentDidMount()
    {
        axios.get("http://localhost:8080/urlData").then(success => {
            this.setState({
                urlData: success.data
            })
        }).catch(e => {
            console.log(e.message)
        })
    }

    addData(...data){
      axios.post("http://localhost:4200/getMdata", 
      {
        "url": data[0]
      }).then(success => {
        let url = data[0];
        let tag = data[1].split(",");
        let title = success.data.title;
        let description, image;
        if(success.data.description){
          description = success.data.description
        }else{
          description = success.data.title
        }
        if(success.data.ogImage){
          image = success.data.ogImage
        }else if(success.data.images){
          image = success.data.images[0]
        }
      axios.post("http://localhost:8080/urlData", 
        {
          "url": url, 
          "title": title, 
          "description": description,
          "image": image,
          "tag": tag
        }).then(resolved => {
          console.log(resolved)
    }).catch(e => console.log(e)
    )}
      )}

      handleDelete = remove => {
        console.log(remove.id)
        axios.delete("http://localhost:8080/urlData/"+remove.id).then(response => {
            this.setState({
              urlData: this.state.urlData.filter(i => i !== remove)
            })
        }).catch(error => {
            console.log(error)
        })
    }

  render() 
  {
    return (
      <div>
        <Details savedData = {this.state.urlData} addData = {this.addData} handleDelete = {this.handleDelete} />
      </div>
    );
  }
}

export default Home;