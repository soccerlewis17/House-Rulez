import { set } from "mongoose";
import { useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

function AddCommentForm({handleAddComment}) {

  const [comment, setComment] = useState('');

  function handleChange(e){
	setComment(e.target.value)
  }

  function handleSubmit(e){
	e.preventDefault();
    handleAddComment(comment)
    setComment('')
  }

  return (
    <Segment>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Form.Input
          className="form-control"
          name="content"
          placeholder="Add Your House Rulez Here!"
          onChange={handleChange}
          value={comment}
          required
        />
        <Button type="submit" className="btn">
          Add Comment
        </Button>
      </Form>
    </Segment>
  );
}

export default AddCommentForm;