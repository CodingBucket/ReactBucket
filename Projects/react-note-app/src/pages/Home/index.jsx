import React from 'react';
import NoteService from '../../services/NoteService';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
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

  render() {
    const { notes } = this.state;

    return (
      <div className="container">
        <div className="flex-container">
          <h1>Noted</h1>
        </div>
        <ul className="list-group">
          {notes.map(note =>
            <li key={note.id} className="list-group-item">
              <div className="d-flex w-100">
                <h5>{note.title}</h5>
                <button className="btn btn-outline-danger btn-sm">Delete</button>
              </div>
              <div>
                {note.description}
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Home;
