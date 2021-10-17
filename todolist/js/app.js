// UI
const form = document.getElementById('task-form');
const taskinput = document.getElementById('task');
const filter = document.getElementById('filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');

function addtask(e){
	 if(taskinput.value === ''){
        window.alert("Add a task");
        return;
    }
    // console.log(taskinput.value);

    // create li element
    const li = document.createElement('li');

    // add class
    // li.classList.add('collection-item');
    li.className = "collection-item";

    // create text node append to li
    li.appendChild(document.createTextNode(taskinput.value));
    
    // create link
    const link = document.createElement('a');

    // add class
    link.className = "delete-item secondary-content";

    // add icon
    link.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    // console.log(link);

    // console.log(li);
    li.appendChild(link);

    
    tasklist.appendChild(li);

    // store in localstorage
    storetaskinlocalstorage(taskinput.value);

    taskinput.value = "";

    e.preventDefault();
}

// Remove Task
function removetask(e){
	// console.log("hay");

	if(e.target.parentElement.classList.contains('delete-item')){
         


		if(confirm('Are you sure')){

			e.target.parentElement.parentElement.remove();

		}

	}

	// Remove task from localStorage
	removetaskfromlocalstroage(e.target.parentElement.parentElement);

}

// Clear Tasks
function cleartasks(){
	// console.log("hay");
	// Method 1
	// tasklist.innerHTML = "";

	// Method 2
	// console.log(tasklist);
	// console.log(tasklist.childElementCount);

	// let x=0;
	// while(x < tasklist.childElementCount){
	// 	tasklist.removeChild(tasklist.firstChild);
	// }

	// Method 3
	while(tasklist.firstChild){
		tasklist.removeChild(tasklist.firstChild);
	}

	// clear all data from localStorage
	cleartasksfromlocalstorage();

}

// store task
function storetaskinlocalstorage(task){

	// console.log(task);
	let tasks;

	if(localStorage.getItem('tasks') === null){
		tasks = [];
	}else{
		// tasks = localStorage.getItem('tasks');
		tasks = JSON.parse(localStorage.getItem('tasks'));



	}

	// console.log(tasks);
	tasks.push(task);

	localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Get tasks from localStorage
function gettasks(){

	// console.log("hay");
	let tasks;

	if(localStorage.getItem('tasks') === null){
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach((task)=>{

		// console.log(task);

		// create li element
		const li = document.createElement('li');

		// console.log("hay");

		// add className
		li.className = "collection-item";

		// create text node and append to li
		li.appendChild(document.createTextNode(task));

		// create new link element
		const link = document.createElement('a');

		// add class
		link.className = "delete-item secondary-content";

		// add  icon
		link.innerHTML =  `<i class="fas fa-trash-alt"></i>`;

		// append link to li
		li.appendChild(link);

		// append li to ul
		tasklist.appendChild(li);


	});
}

// Remove task from localStorage
function removetaskfromlocalstroage(taskitem){
	// console.log("hay");
	// console.log(taskitem);
	// console.log(taskitem.textContent);
	
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach((task,index)=>{

		console.log(task);
		if(taskitem.textContent === task){

			 // where we want to start(index) ,end(index)
			tasks.splice(index,1);
		}

	});

	localStorage.setItem('tasks',JSON.stringify(tasks));

}

// clear all data from localStorage
function cleartasksfromlocalstorage(){
	localStorage.clear();
}


// filter tasks
function filtertasks(e){
	// console.log(e.target.value);
	const inputfilter = e.target.value.toLowerCase();
	// console.log(inputfilter);

	const tasks = document.querySelectorAll('.collection-item');

	// console.log(tasks);
	tasks.forEach((task)=>{
		// console.log(task);
		const item = task.firstChild.textContent.toLowerCase();
		// console.log(item);

		if(item.indexOf(inputfilter) !== -1 ){

			task.style.display = "block";

		}else{

			task.style.display = "none";
		}
	});
}



// Event Listener
// Add Task
form.addEventListener('submit',addtask);


// Remove task
tasklist.addEventListener('click',removetask);


// Clear tasks
clearbtn.addEventListener('click',cleartasks);

// DOM task
document.addEventListener('DOMContentLoaded',gettasks);

// Filter task event
filter.addEventListener('keyup',filtertasks);

