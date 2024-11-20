import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { updateTaskAPI } from '../services/allAPI';

const Edit = ({task,setEditTaskResponse}) => {
    const [taskDetails, setTaskDetails] = useState({
        id:task._id,title: task.title, description: task.description, startDate: task.startDate, endDate: task.endDate, status: task.status, percentage: task.percentage
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdateTask = async ()=>{
        const { id,title, description, startDate, endDate, status, percentage } = taskDetails
        if (title && description && startDate && endDate && status && percentage){
            const token = sessionStorage.getItem("token")
            if(token){
                const reqHeader = {
                    "Authorization":`Bearer ${token}`
                  }
                  try{
                    const result = await updateTaskAPI(id,taskDetails,reqHeader)
                    if(result.status==200){
                        alert("Task updated successfully!!!")
                        setEditTaskResponse(result.data)
                        handleClose()
                    } 
                }catch(err){
                    console.log(err);
                }
            }
        }else{
            alert("Please fill the form completely!!!")
        }
    }

    return (
        <>
            <button onClick={handleShow} className='btn btn-secondary rounded'>Edit</button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Tasks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-2">
                        <label className='fw-bold'>Title:</label>
                        <input value={taskDetails.title} onChange={e => setTaskDetails({ ...taskDetails, title: e.target.value })} placeholder='Task Heading' type="text" className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label className='fw-bold'>Description:</label>
                        <input value={taskDetails.description} onChange={e => setTaskDetails({ ...taskDetails, description: e.target.value })} placeholder='Task Description' type="text" className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label className='fw-bold'>Start Date:</label>
                        <input value={taskDetails.startDate} onChange={e => setTaskDetails({ ...taskDetails, startDate: e.target.value })} placeholder='Start Date' type="date" className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label className='fw-bold'>End Date:</label>
                        <input value={taskDetails.endDate} onChange={e => setTaskDetails({ ...taskDetails, endDate: e.target.value })} placeholder='End Date' type="date" className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label className='fw-bold'>Status:</label>
                        <Form.Select aria-label="Default select example" value={taskDetails.status} onChange={e => setTaskDetails({ ...taskDetails, status: e.target.value })}>
                            <option >Select</option>
                            <option value="Completed">Completed</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Pending">Pending</option>
                        </Form.Select>
                    </div>
                    <div className="mb-2">
                        <label className='fw-bold'>Percentage:</label>
                        <Form.Select aria-label="Default select example" value={taskDetails.percentage} onChange={e => setTaskDetails({ ...taskDetails, percentage: e.target.value })}>
                            <option >%</option>
                            <option value="0">0</option>
                            <option value="25%">25%</option>
                            <option value="50%">50%</option>
                            <option value="75%">75%</option>
                            <option value="100%">100%</option>
                        </Form.Select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleUpdateTask} variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit