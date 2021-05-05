import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const NewTask = ({addTask})=>{
    
    const [value,newWork] = useState("");



const handleSubmit=(e)=>{
e.preventDefault();
if(value !=="")
 {
     
    addTask(value)
    newWork("");
 }
};

return(
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter new work" value={value} onChange={(e)=>newWork(e.target.value)} />
        <button type="submit" id="remove"><i class="material-icons">add</i></button>
        </form>
    </div>
        );
    }; 

const TotalTasks = ()=>{

    const addTask = (text)=>  {
        alert("iam "+text)
       updateTasks([...tasks, {text}]);        
   }
  
    const [tasks,updateTasks] = useState([
        {
            work:"eating",
            
            finished:false
        },
        {
            work:"walking",
            
            finished:false
        },
        {
            work:"job",
            
            finished:false
        }
    ]);
   

const Toggle =(index)=>{
    const select = [...tasks];
   
    if(select[index].finished){
        select[index].finished = false;
    }else{
       
        select[index].finished = true;
    }
updateTasks(select);

}
const removeWork =(index)=>{
    const select = [...tasks];
   select.splice(index,1);
   
updateTasks(select);

}

    return(
          <div className="task-list">
              {tasks.map((task,index)=>
                  <div className="each-task">
                      <span onClick={()=>Toggle(index)} className={task.finished?"task-name completed-task":"task-name"}>                     
                      {task.work}
                      </span>
                      <button id="remove" onClick={()=>removeWork(index)}><i class="material-icons">delete</i></button>
                </div>
              )}
              <NewTask addTask={addTask}/>
          </div>
    );
}

ReactDOM.render(<TotalTasks/> , document.getElementById('root'));

















































// const numbers = ["elavarasan", "vishali", "devi", "shirley", "setia"];

// ReactDOM.render(<Mount numbers ={numbers}/> , document.getElementById('root'));
//ReactDOM.render(<Vanakam /> , document.getElementById('sub'));

// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];
//   ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById('root')
//   );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
