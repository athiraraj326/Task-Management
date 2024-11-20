import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { userTaskAPI, userTaskDeleteAPI } from '../services/allAPI'
import Edit from './Edit'

const View = ({addTaskResponse}) => {
  const [editTaskResponse,setEditTaskResponse] = useState("")

  const [userTasks, setUserTasks] = useState([])
  useEffect(() => {
    getUserTasks()
  }, [addTaskResponse,editTaskResponse])
  console.log(userTasks);

  const getUserTasks = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await userTaskAPI(reqHeader)
        if (result.status == 200) {
          setUserTasks(result.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  const deleteTask = async (id)=>{
    const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Authorization":`Bearer ${token}`
        }
        try{
          await userTaskDeleteAPI(id,reqHeader)
          getUserTasks()
        }catch(err){
          console.log(err);
        }
      }
  }

  return (
    <div style={{ paddingTop: "30px" }}>
      <h1 className='text-warning text-center mb-3'>All Tasks</h1>
      <Container>
        <Row className='gap-3'>
          {
            userTasks?.length > 0 ?
              userTasks?.map(task => (
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title className='text-center fs-3 fw-bold mb-3'>{task?.title}</Card.Title>
                      <Card.Text>
                        <p>Description: {task?.description}</p>
                        <p>Start Date: {task?.startDate}</p>
                        <p>End Date: {task?.endDate}</p>
                        <p>Status: {task?.status}</p>
                        <p>Percentage of completion: {task?.percentage}</p>
                        <div className="d-flex justify-content-center gap-3 pt-3">
                          <Edit setEditTaskResponse={setEditTaskResponse} task={task}/>
                          <button onClick={()=>deleteTask(task?._id)} className='btn btn-danger rounded'>Delete</button>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
              :
              <div className="text-danger fw-bolder">No tasks are uploaded yet!!!</div>

          }
        </Row>
      </Container>

    </div>
  )
}

export default View