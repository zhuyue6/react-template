import React, {Component} from "react"
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux'
import {IHomeModel, update} from '@/models/home'

type HomeState = {
  home: IHomeModel
}

const mapStateToProps: MapStateToProps<HomeState, any, any> = ({home}) => {
  return {
    home
  }
}

class Home extends Component<HomeState & MapDispatchToProps<any, any>> {
  dispatch = () => {
    const action = update({user: 'zy2'});
    this.props.dispatch(action)
  }
  render(): React.ReactNode {
    return <div>
      {
       this.props.home.user
      }
      <button onClick={this.dispatch}>按鈕</button>
    </div>
  }
}

export default connect(mapStateToProps)(Home)