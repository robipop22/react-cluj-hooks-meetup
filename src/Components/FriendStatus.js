import React from 'react'

const ChatAPI = 'api goes here'

export default class FriendStatus extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOnline: null }
    this.handleStatusChange = this.handleStatusChange.bind(this)
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    )
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    )
  }

  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    })
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...'
    }
    return this.state.isOnline ? 'Online' : 'Offline'
  }
}

// componentDidUpdate(prevProps) {
//   // Unsubscribe from the previous friend.id
//   ChatAPI.unsubscribeFromFriendStatus(
//     prevProps.friend.id,
//     this.handleStatusChange
//   );
//   // Subscribe to the next friend.id
//   ChatAPI.subscribeToFriendStatus(
//     this.props.friend.id,
//     this.handleStatusChange
//   );
// }
