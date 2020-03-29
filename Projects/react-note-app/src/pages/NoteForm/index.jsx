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
    this.onCancel = this.onCancel.bind(this);
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const noteId = params.id;
    if (noteId) {
      NoteService.get(noteId).then( ({title, description}) => 
        this.setState({ title, description })
      );
    }
  }

  onChange(event) {
    const { name, value} = event.target;
    this.setState({ [name]: value });
  }

  onCancel() {
    this.props.history.push('/');
  }

  onSubmit() {
    const { match: { params } } = this.props;
    const noteId = params.id;

    const { title, description} = this.state;
    if (!title || !description) {
      return
    }

    if (noteId) {
      NoteService.update(noteId, { title, description }).then(() => {
        this.props.history.push('/');
      })
    } else {
      NoteService.create({ title, description }).then(() => {
        this.props.history.push('/');
      })
    }
  }

  render() {
    const { title, description } = this.state;
    const { match: { params } } = this.props;
    const noteId = params.id;

    return (
      <div className="container">
        <h2>{noteId ? 'Update' : 'Add'} Note</h2>
        <hr/>
        <div>
          <div className="form-group">
            <label>Title</label>
            <input name="title" onChange={this.onChange} value={title} type="text" className="form-control" placeholder="Enter Title"/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input name="description" onChange={this.onChange} value={description} type="text" className="form-control" placeholder="Enter Description"/>
          </div>
          <button type="button" onClick={this.onCancel} className="btn btn-light">Cancel</button>
          <button type="button" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
        </div>
      </div>
    );
  }
}

export default NoteForm;
