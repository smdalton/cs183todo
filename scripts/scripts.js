var button = document.getElementById("changeBackground");
var todoList = document.getElementById("myList");
var sentinel = true;

var ids = {
    'todo1':{
        name:'todo1',
        done: false,
        title: 'Get a job',
        desc: 'gain employment to avoid living under bridge',
        deadline: 'Before Death'
    },
    'todo2':{
        name:'todo2',
        done: false,
        title: 'Go grocery Shopping',
        desc: 'Spend money to feed body',
        deadline: 'Before Starvation'
    },
    'todo3':{
        name:'todo3',
        done: false,
        title: 'Feed the cats',
        desc:'there are 5',
        deadline: 'tonight'
    },
    'todo4':{
        name:'todo4',
        done:false,
        title: 'Do laundry',
        desc: ' put clothes in magical spinning bucket to cleanse all filth',
        deadline:'yesterday'
    }
};

function test () {
    show();
    //showDown();
    //showNotDone();
};

//For each of these methods we will nuke the old DOM value for list
//and re-render a filtered version

function showAll() {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML='';
    if(sentinel){
        todoList.addEventListener('change', function(e){
        let id = e.target['id'];
        console.log('now changing', id);
        console.log(ids[id]['done']);
        ids[id]['done']= !ids[id]['done'];
        console.log(ids[id]['done']);
        sentinel = false;
    });
    }
    
    var num =0;
    for(var item in ids){
        num +=1;
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
        var box = document.createElement('input');
        box.type ='checkbox';
        box.id = ids[item]['name'];

        
        box.name=ids[item]['name'];
        
        checkDiv.append(doneText, box);
        
        //add the textNode to each Parent node
        title.append(titleText);
        desc.append(descText);
        dead.append(deadText);
        
        
        listItem.append(title, desc, dead, checkDiv);
        todoList.appendChild(listItem);
        
    };
};


showDone  = () => {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML='';
    var num =0;
    
    for(var item in ids){
        if(ids[item]['done'] == false){
            continue;
        }
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
        var box = document.createElement('input');
        box.type ='checkbox';
        box.id = ids[item]['name'];
        box.name=ids[item]['name'];
        
        checkDiv.append(doneText, box);
        
        //add the textNode to each Parent node
        title.append(titleText);
        desc.append(descText);
        dead.append(deadText);
        
        
        listItem.append(title, desc, dead, checkDiv);
        todoList.appendChild(listItem);
        
    };
};

showNotDone = () => {
        var todoList = document.getElementById("todoList");
        todoList.innerHTML='';
        var num =0;
        for(var item in ids){
        if(!ids[item]['done'] == false){
            continue;
        }
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
        var box = document.createElement('input');
        box.type ='checkbox';
        box.id = ids[item]['name'];
        box.name=ids[item]['name'];
        
        checkDiv.append(doneText, box);
        
        //add the textNode to each Parent node
        title.append(titleText);
        desc.append(descText);
        dead.append(deadText);
        
        
        listItem.append(title, desc, dead, checkDiv);
        todoList.appendChild(listItem);
        
    };
}
