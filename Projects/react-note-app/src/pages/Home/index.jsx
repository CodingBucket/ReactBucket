import React from 'react';
import NoteService from '../../services/NoteService';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };

    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    NoteService.list().then(data => {
      this.setState({ notes: this.formatNotes(data) })
    });
  }

  formatNotes(notes) {
    const formatedNotes = []
    for (const [key, value] of Object.entries(notes)) {
      value.id = key;
      formatedNotes.push(value);
    }
    return formatedNotes;
  }

  onDelete(event, id) {
    event.preventDefault();
    event.stopPropagation();

    NoteService.remove(id).then(() => {
      this.setState(prevState => ({
        notes: prevState.notes.filter(note => note.id !== id)
      }))
    })
  }

  render() {
    const { notes } = this.state;

    return (
      <div className="container">
        <div className="d-flex w-100 justify-content-between">
          <h1>Noted</h1>
          <Link className="btn btn-outline-primary add-btn" to="/create">+ Add</Link>
        </div>
        <ul className="list-group">
          {notes.map(note =>
            <li key={note.id} className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <Link to={`update/${note.id}`}>
                  <h5>{note.title}</h5>
                </Link>
                <button onClick={(event) => this.onDelete(event, note.id)} className="btn btn-outline-danger btn-sm">Delete</button>
              </div>
              <div>{note.description}</div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Home;
