// To-Do-List Wep App - Developed by Riccardo Laurenti Web Developer

const writeIn = document.getElementById("input-write");
const buttonAdd = document.getElementById("add-task-button");
const domPrint = document.getElementById("print-task");
const noTaskMessage = document.getElementById("message-alert");

let vector = [];


const stringNoTask = `<p class="not-task">There are no tasks to show</p>`;
noTaskMessage.innerHTML = stringNoTask;

function createTask () {
    
            const inputWrite = writeIn.value.trim();            

            if (inputWrite == '') {
                alert("Error! You must enter a task")
                return;
            } else {

                vector.push(inputWrite);

                

                console.log(vector)

                const createTask = document.createElement("div");

                createTask.innerHTML = 
                `
                <div id="todo-view">
                    <div class="contain">
                        <p>${inputWrite}</p>
                        <div class="cest delete">
                            <i class="fa-solid fa-trash" ></i>
                        </div>
                    </div> 
                </div>
                `
                domPrint.appendChild(createTask)

                

                writeIn.value = "";

                noTaskMessage.innerText = '';

                const removeTask = createTask.querySelector(".delete");

                removeTask.addEventListener("click", function() {
                    createTask.remove();
                    const index = vector.indexOf(inputWrite); 
                    if (index !== -1) {
                        vector.splice(index, 1);                 
                    }  
                    
                    if (!vector.length) {
                        noTaskMessage.innerHTML= stringNoTask;                      
                    } 
                    
                })
                }
}




buttonAdd.addEventListener("click", function() {
        createTask();   
})

writeIn.addEventListener("keydown", function() {
    if (event.keyCode === 13) {
        createTask()
    }
})

