import React, { useState, useEffect } from 'react'

const ChatAPI = 'api goes here'

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  })

  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}

export default FriendStatus

////
// useEffect(() => {
//   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
//   return () => {
//     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
//   }
// }, [props.friend.id])
