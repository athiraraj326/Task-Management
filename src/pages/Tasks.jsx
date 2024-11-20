import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'

const Tasks = () => {

  const [addTaskResponse,setAddTaskResponse] = useState("")

  return (
    <div style={{paddingTop:'100px'}}>
        <Add setAddTaskResponse={setAddTaskResponse}/>
        <View addTaskResponse={addTaskResponse}/>
    </div>
  )
}

export default Tasks