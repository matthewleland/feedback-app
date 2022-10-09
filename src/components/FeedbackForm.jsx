import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleInput = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least ten characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }
      handleAdd(newFeedback)
      setText('')
    }
  }

  return <Card>
    <form onSubmit={handleSubmit}>
      <h3>How would you rate your service?</h3>
      <RatingSelect select={(rating) => setRating(rating)} />
      <div className='input-group'>
        <input
          onChange={handleInput}
          type='text'
          placeholder='write your review . . .'
          value={text}
        />
        <Button type='submit' version='primary' isDisabled={btnDisabled}>Submit</Button>
      </div>
      {message && <div className='message'>{message}</div>}
    </form>
  </Card>
}

export default FeedbackForm