import { useState } from "react";
import { Button, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { addNote } from "../api/Notes";

const CreateNote = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDetail, setNoteDetail] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const addNoteSubmitHandler = () => {
    if (!noteTitle) {
      setTitleError(true);
    }
    if (!noteDetail) {
      setDetailError(true);
    }
    if (noteTitle && noteDetail) {
      addNote({ title: noteTitle, detail: noteDetail, category: "reminders" });
    }
  };
  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={addNoteSubmitHandler}>
        <TextField
          variant="outlined"
          label="Note Title"
          color="secondary"
          fullWidth
          required
          onChange={(e) => {
            setNoteTitle(e.target.value);
          }}
          error={titleError}
        />
        <TextField
          variant="outlined"
          label="Details"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          onChange={(e) => {
            setNoteDetail(e.target.value);
          }}
          error={detailError}
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
        >
          Add Note
        </Button>
      </form>
    </div>
  );
};

export default CreateNote;
