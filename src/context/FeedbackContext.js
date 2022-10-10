import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 3,
      text: 'Today at chick fil a my biscuit took over 10 minutes. I am furious and would like to speak to a director immediately. Who trains these useless workers??',
    },
    {
      id: 2,
      rating: 8,
      text: "My experience at Chick Fil A Azusa today was satisfactory. To be honest the fries were cold, but a pretty girl once told me it's a hassle to make well done fries.",
    },
    {
      id: 3,
      rating: 10,
      text: "God damnit if this isn't the most delicious god damn sandwhich I've ever had. God bless you and your Christian chicken",
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map(item => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
