import React from 'react';
import NoteService from '../../services/NoteService';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { name, value} = event.target;
    this.setState({ [name]: value });
  }

  onSubmit() {
    const { title, description} = this.state;
    if (!title || !description) {
      return
    }
    NoteService.create({ title, description }).then(response => {
      this.props.history.push('/');
    })
  }

  render() {
    return (
      <div className="container">
        <h2>Add Note</h2>
        <hr/>
        <div>
          <div className="form-group">
            <label>Title</label>
            <input name="title" onChange={this.onChange} type="text" className="form-control" placeholder="Enter Title"/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input name="description" onChange={this.onChange} type="text" className="form-control" placeholder="Enter Description"/>
          </div>
          <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
        </div>
      </div>
    );
  }
}

export default NoteForm;
