var button = document.getElementById("changeBackground");
var todoList = document.getElementById("myList");


var ids = {
    'todo1':{
        name:'todo1',
        isDone: false,
        title: 'Get a job',
        desc: 'gain employment to avoid living under bridge',
        deadline: 'Before Death'
    },
    'todo2':{
        name:'todo2',
        isDone: false,
        title: 'Go grocery Shopping',
        desc: 'Spend money to feed body',
        deadline: 'Before Starvation'
    },
    'todo3':{
        name:'todo3',
        isDone: false,
        title: 'Feed the cats',
        desc:'there are 5',
        deadline: 'tonight'
    },
    'todo4':{
        name:'todo4',
        isDone:true,
        title: 'Do laundry',
        desc: ' put clothes in magical spinning bucket to cleanse all filth',
        deadline:'yesterday'
    }
};

function test () {
    showAll();
};

//For each of these methods we will nuke the old DOM value for list
//and re-render a filtered version
toggleDone = (id) => {
    console.log(ids[id]['isDone']);
    ids[id]['isDone']= !ids[id]['isDone'];
    console.log(ids[id]['isDone']);
}


function showAll() {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML='';
    for(var item in ids){
        var listItem = document.createElement('LI');
        //create the text blobs
        const nameText = document.createTextNode(ids[item]['name']);
        const titleText= document.createTextNode(ids[item]['title']);
        const descText = document.createTextNode(ids[item]['desc']);
        const deadText = document.createTextNode(ids[item]['deadline']);
        const doneText = document.createTextNode('completed');
        //create the new elements to attach to the todlist anchor
        const title= document.createElement('h3');
        const desc = document.createElement('p');
        const dead = document.createElement('p');
        const checkDiv= document.createElement('div');
        //checkbox, needs a listener
        const box = document.createElement('input');
        box.type ='checkbox';
        box.addEventListener('change', () =>{
            alert('will change my todo state');
        })
        box.name=ids[item]['name'];
        
        
        checkDiv.append(doneText, box);
        
        //add the textNode to each Parent node
        title.append(titleText);
        desc.append(descText);
        dead.append(deadText);
        console.log(title);
        
        listItem.append(title, desc, dead, checkDiv);
        todoList.appendChild(listItem);
        
    };
};

function showComplete() {
    
};

function showToDo() {
    
};

function toggle(id) {
    var todo = document.getElementById(id);
    if (todo.style.display === "none") {
        todo.style.display = "block";
    } else {
        todo.style.display = "none";
    }
    console.log(document.getElementById(id));
    
};
