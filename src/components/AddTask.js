import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CheckIcon from '@material-ui/icons/Check';
import Fab from '@material-ui/core/Fab';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
//import $ from "jquery";
import Axios from 'axios';



export default class AddTask extends React.Component{

    options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    state = {
        "id":"",
        "text":"",
        "status":"",
        "dueDate":new Date(),
        "responsible":""
    }

    handleText = (e) =>{
        this.setState({
            "text": e.target.value
        });
    }

    handleDatePicker = (date) =>{
        this.setState({
            ...this,
            "dueDate":date
        });

    }

    handleResponsible = (e) =>{
        this.setState({
            "responsible": e.target.value
        });
    }

    handleId = (e)=>{
        this.setState({
            "id": e.target.value
        });
    }

    handleState = (e) =>{
        this.setState({
            "status":e.target.value
        })
    }

    handleSubmit = (e) => {
        const {text,responsible,id,dueDate} = this.state;
        if(!text || !responsible || !id || !dueDate){
            alert("Debes rellenar todos los datos")
        } else {

            const newTask = {
                "text":text,
                "status":"Ready",
                "dueDate":dueDate.toString(),
                "responsible":responsible
            }
            /*
            $.ajax({
                url: 'https://taskplanner-cesar.azurewebsites.net/api/add-task?code=YO0kvyMA9C0gIdt0oXlXnsFs/aoFsUJsm0wnOO7rm/btQkyFSlm8oA==',
                data:newTask,
                type: 'POST',
                success: function() {
                    console.log("Post Correcto");
                },
            });
             */
            Axios.post('https://taskplanner-cesar.azurewebsites.net/api/add-task?code=YO0kvyMA9C0gIdt0oXlXnsFs/aoFsUJsm0wnOO7rm/btQkyFSlm8oA==', newTask)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }


    render(){
        return(
            <Container className='Box' variant="contained">
                <Typography component="h1" variant="h5">
                    New Task
                </Typography>
                <form>
                    <TextField name="description" label="Description" id="description" autoComplete="description" onChange={this.handleText}/>
                    <br/>
                    <TextField name="responsible" label="Responsible" id="responsible" autoComplete="responsible" onChange={this.handleResponsible}/>
                    <br/>
                    <TextField name="id" label="Id" id="id" autoComplete="id" onChange={this.handleId}/>
                    <br/>
                    <br/>
                    <InputLabel htmlFor="due-date">Date</InputLabel>
                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due Date"
                        onChange={this.handleDatePicker}>
                    </DatePicker>
                    <br/>
                    <br/>
                    <Fab color="primary" aria-label="add" onClick={this.handleSubmit}>
                        <CheckIcon />
                    </Fab>

                </form>
            </Container>
        )
    }
}