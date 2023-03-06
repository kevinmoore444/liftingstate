import React from 'react'

const MessageHistory = (props) => {
  return (
    <div>
        <h1>History</h1>
        {
            props.messageHistory.map((message, i) => {

                return(
                    <pre key={i}>{message}</pre>
            )})
        }
    </div>
  )
}

export default MessageHistory