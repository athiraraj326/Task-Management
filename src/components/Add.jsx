import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { addTaskAPI } from '../services/allAPI';

const Add = ({setAddTaskResponse}) => {

    const [taskDetails, setTaskDetails] = useState({
        title: "", description: "", startDate: "", endDate: "", status: "", percentage: ""
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddTask = async () => {
        const { title, description, startDate, endDate, status, percentage } = taskDetails
        if (title && description && startDate && endDate && status && percentage) {
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                try{
                    const result = await addTaskAPI(taskDetails,reqHeader)
                    if(result.status==200){
                        alert("Task added successfully!!!")
                        setAddTaskResponse(result.data)
                        setTaskDetails({title: "", description: "", startDate: "", endDate: "", status: "", percentage: ""})
                        handleClose()
                    }
                }catch(err){
                    console.log(err);
                }
            }
        } else {
            alert("Please fill the form completely!!!")
        }
    }

    return (
        <>
            <div className="container d-flex">
                <h2>Add Tasks</h2>
                <button onClick={handleShow} className='btn btn-success rounded fs-5 ms-3'>+</button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Tasks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-2">
                        <label className='fw-bold'>Title:</label>
                        <input onChange={e => setTaskDetails({ ...taskDetails, title: e.target.value })} placeholder='Task Heading' type="text" className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label className='fw-bold'>Description:</label>
                        <input onChange={e => setTaskDetails({ ...taskDetails, description: e.target.value })} placeholder='Task Description' type="text" className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label className='fw-bold'>Start Date:</label>
                        <input onChange={e => setTaskDetails({ ...taskDetails, startDate: e.target.value })} placeholder='Start Date' type="date" className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label className='fw-bold'>End Date:</label>
                        <input onChange={e => setTaskDetails({ ...taskDetails, endDate: e.target.value })} placeholder='End Date' type="date" className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label className='fw-bold'>Status:</label>
                        <Form.Select aria-label="Default select example" onChange={e => setTaskDetails({ ...taskDetails, status: e.target.value })}>
                            <option >Select</option>
                            <option value="Completed">Completed</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Pending">Pending</option>
                        </Form.Select>
                    </div>
                    <div className="mb-2">
                        <label className='fw-bold'>Percentage:</label>
                        <Form.Select aria-label="Default select example" onChange={e => setTaskDetails({ ...taskDetails, percentage: e.target.value })}>
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
                    <Button onClick={handleAddTask} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add