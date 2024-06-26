import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuth } from '../hooks/useAuth'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const {user}=useAuth();
  const handleClick = async () => {
    if(!user){
      console.log("you cant delete without auth")
    }
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers:{
        "Authorization":`Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails