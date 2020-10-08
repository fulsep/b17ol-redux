// import React, {useEffect} from 'react'
// import {useSelector, useDispatch} from 'react-redux'

// import profileAction from '../redux/actions/profile'

// export default function Profile(props) {
//   const token = useSelector(state=>state.auth.token)
//   const user = useSelector(state=>state.profile)
//   const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(profileAction.getProfile(token))
//   },[dispatch, token])
//   return (
//     <div>
//       {Object.keys(user.data).length&&(
//         <>
//         <div>{user.data.full_name}</div>
//         <div>{user.data.email}</div>
//         <div>{user.data.phone}</div>
//         <div>{user.data.gender}</div>
//         <div>{user.data.birthdate}</div>
//         </>
//       )}
//     </div>
//   )
// }

import React from 'react'
import {connect} from 'react-redux'

import profileAction from '../redux/actions/profile'

class Profile extends React.Component{
  componentDidMount(){
    this.props.getProfile(this.props.auth.token)
  }
  render(){
    const {data: user} = this.props.profile
    return(
          <div>
            {Object.keys(user).length&&(
              <>
              <div>{user.full_name}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
              <div>{user.gender}</div>
              <div>{user.birthdate}</div>
              </>
            )}
          </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

const mapDispatchToProps = {
  getProfile: profileAction.getProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)