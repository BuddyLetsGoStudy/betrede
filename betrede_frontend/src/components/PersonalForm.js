import React, { Component } from 'react'
import axios from 'axios'

class PersonalForm extends Component{

  constructor(props){
    super(props)
    this.state = {
      whatForm: null,
      artobjects: [],
      artobjects_chosen: [],
    }
    this.imgClick = this.imgClick.bind(this)
    this.artobjects_arr = []
  }

  pushArray(a, e){
    a.push(e)
    return a
  }

  sliceArray(a, e){
    return a.filter(i => i !== e)
  }

  imgClick = (e) => {
    let id = e.target.alt
    if (!this.artobjects_arr.includes(id)){
      this.pushArray(this.artobjects_arr, id)
      e.target.className = 'spaceCreation__img_selected'
    } else {
      this.artobjects_arr = this.sliceArray(this.artobjects_arr, id)
      e.target.className = 'spaceCreation__img'
    }
    console.log(this.artobjects_arr)
  }

  handleSubmit = (e) => {
    if (this.props.type === 'artobject'){
      e.preventDefault()
      const formData = new FormData();

      formData.append("name", e.target.elements.name.value)
      formData.append('category', 1)
      formData.append("description", e.target.elements.description.value)
      formData.append("width", e.target.elements.width.value)
      formData.append("height", e.target.elements.height.value)
      formData.append("upload", e.target.elements.upload.files[0])

      return axios.post("https://betredeapi.logachev.top/api/artobject/", formData, {})
      .then(res => console.log(res))
      .catch(error => console.log(error.response.data));
    } else {
      e.preventDefault()

      axios.post('https://betredeapi.logachev.top/api/space/', {
         name: e.target.elements.name.value,
         description: e.target.elements.description.value,
         artobjects: this.artobjects_arr,
         author: [this.props.author],
     })
     .then(res => console.log(res))
     .catch(error => console.log(error.response.data))

    }
  }

  componentDidMount(){
    if (this.props.type === 'artobject'){
      axios.get("https://betredeapi.logachev.top/api/artobject/")
          .then(res => {
            this.setState({
              artobjects: res.data
            })
          })
      this.setState({
        whatForm: (
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type='text' name='name' className="form-control" placeholder="Name of your artwork"/>
              </div>
              <div className="form-group">
                <label>Description</label>
                <input type='text' name='description' className="form-control" placeholder="Description"/>
              </div>

            <div className="form-group">
              <label>Width</label>
              <input type='number' name='width' className="form-control" placeholder="In metres"/>
            </div>
            <div className="form-group">
              <label>Height</label>
              <input type='number' name='height' className="form-control" placeholder="In metres"/>
            </div>
              <div class="form-group">
                <label>Upload your artwork</label>
                <input type="file" className="form-control-file" name='upload'/>
              </div>
              <button type="submit" className="btn btn-primary">Create</button>
            </form>
          )
        }
      )
    } else {
      this.setState({
        whatForm: (
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type='text' name='name' className="form-control" placeholder="Name of your artwork"/>
              </div>
              <div className="form-group">
                <label>Description</label>
                <input type='text' name='description' className="form-control" placeholder="Description"/>
              </div>
              <div className="spaceCreation__img_cont">
                {
                  this.props.artobjects.map(artobject =>
                    <div className="spaceCreation__div">
                      <img class="spaceCreation__img" src={artobject.upload} alt={artobject.id} onClick={this.imgClick} />
                    </div>
                  )
                }
                </div>
              <button type="submit" className="btn btn-primary">Create</button>
            </form>
            )
          }
        )
    }
  }

  render(){
    const form = this.state.whatForm
    return(
      <div className='col-lg-8 col-md-6 col-sm-8 col-10'>
      {form}
      </div>
    )
  }
}

export default PersonalForm


//
// handleSubmit = (e) => {
//   e.preventDefault()
//   const formData = new FormData();
//
//   formData.append("name", e.target.elements.name.value)
//   formData.append("description", e.target.elements.description.value)
//   formData.append("upload", {uri: e.target.elements.upload.value, name: 'myfoto.jpg'})
//   console.log(formData)
//
//   return axios.post("https://betredeapi.logachev.top/api/artobject/", formData, {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'multipart/form-data',
//     }
//   })
//   .then(res => console.log(res))
//   .catch(error => console.log(error.response.data));
// }
