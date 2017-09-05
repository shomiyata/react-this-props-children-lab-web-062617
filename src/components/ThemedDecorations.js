// Code ThemedDecoration Component Here
import React from 'react'

class ThemedDecorations extends React.Component {

  render(){
    return(
      <div>
       {React.Children.map(this.props.children, child => <child className={this.props.theme} />)}
      </div>
    )
  }
}

export default ThemedDecorations
