import React from 'react';
 class Task extends React.Component{

    render(){
        const {taskList} = this.props;
        const value = taskList.map((t)=>{

            return(<div key={t.id}>
                <h2>Text: {t.text}</h2>
                <h3>Status: Ready </h3>
                <h3>Due Date: {t.dueDate}</h3>
                <h3>Due Date: {t.responsible}</h3>
                <br/>
            </div>)});
        return(
            <div>
                {value}
            </div>
        )

    }
}
export default Task;
