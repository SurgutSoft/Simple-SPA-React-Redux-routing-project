import React from "react";
import { connect } from "react-redux";
import { addNote, deleteNote } from "../../redux/actions/notes";

import styles from "./styles.module.css";

const enhance = connect(
  ({ notes }) => ({ notes }),
  { addNote, deleteNote }
);

class NotesList extends React.Component {
  render() {
    if (!this.props.notes.length) {
      return this.renderAddButton();
    }
    return (
      <ul className={styles["note-list"]}>
        {this.props.notes.map((note, index) => {
          return (
            <li key={index}>
              {this.renderNote(note)}
              {this.renderAddButton(index)}
            </li>
          );
        })}
      </ul>
    );
  }

  renderNote = note => <div className={styles["note-list-item"]}>{note}</div>;

  renderAddButton = (index) => (
    <div >
      <button
        data-index={index}
        className={styles["add-note"]}
        onClick={this.onAddButtonClick}
      >
        + add note
    </button>
      <button
        data-index={index}
        className={styles["add-note"]}
        onClick={this.onDeleteButtonClick}
      >
        - delete note
    </button>
    </div>
  );

  onAddButtonClick = e => {
    const text = window.prompt("Note text:");
    this.props.addNote(text, e.target.dataset.index);
  };

  onDeleteButtonClick = e => {
    //const text = window.prompt("Note text:");
    this.props.deleteNote(e.target.dataset.index);
  };
}

export default enhance(NotesList);
