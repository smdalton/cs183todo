

var app = $(function() { //shorthand document.ready function
    
	var ascending = 'false';
	var currentTodos = '';
	$(document).ready(function() {
       renderTodos(getTodos());
    });
	
	
	//Todo form submit handler for adding a new todo
	$('#todoForm').on('submit', function(e) { 
		e.preventDefault();
		var data = $("#todoForm :input")
		var newItems = {
			'name':data[0].value,
			'deadline':data[1].value,
			'description':data[2].value,
			'created': Date.now(),
			'updated': Date.now(),
			'checked': 'false',
		};
		persistentStoreTodo(newItems);
		return false;
    });
	
	//stores an object of the correct format into the persistent 
	//array that keeps track of all the todos
	persistentStoreTodo=(val)=>{
		var oldItems = JSON.parse(localStorage.getItem('todos'));
		//if the oldItems are null we set initialization
		if(oldItems === null){
			console.log('oldItems is null');
			localStorage.setItem('todos', JSON.stringify([]));
			oldItems = JSON.parse(localStorage.getItem('todos'));
		}
		oldItems.push(val);
		localStorage.setItem('todos', JSON.stringify(oldItems));
	}
	
	//helper method to get todos back
	getTodos=()=>{
		let result = JSON.parse(localStorage.getItem('todos'));
		return result ? result : [];
	}
	
	//deletes a todo at a specific index
	removeTodoAt=(index)=>{
		var todos = getTodos();
		if(index > -1){
			todos.splice(index,1); 
		}
		localStorage.setItem('todos', JSON.stringify(todos));
		renderTodos();
	}
		
	formatDate=(date)=> {            
        var d = date.getUTCDate().toString(),           // getUTCDate() returns 1 - 31
            m = (date.getUTCMonth() + 1).toString(),    // getUTCMonth() returns 0 - 11
            y = date.getUTCFullYear().toString(),       // getUTCFullYear() returns a 4-digit year
            formatted = '';
        if (d.length === 1) {                           // pad to two digits if needed
            d = '0' + d;
        }
        if (m.length === 1) {                           // pad to two digits if needed
            m = '0' + m;
        }
        formatted = m + '/' + d + '/' + y;              // concatenate for output
        return formatted;
    },

	
	
	
	//renders a list of todos given to it
	renderTodos=(todos)=>{
		//var todos = getTodos();
		//remove the current elements at todolist anchor
		currentTodos = todos;
		$('#todoList').empty();
		
		var todo = '';
		for(var item in todos){
			todo = todos[item];
			//console.log(item);
			var checked = todos[item].checked ? 'checked': 'notchecked';
			console.log(checked);
			$('#todoList').append(
			'<li><p class="todoTitle">'+todo.name+'</p>'+
				'<p>Description:'+todo.description+' </p>'+
				'<p>Created:'+formatDate(new Date(todo.created))+'</p>'+
				'<p>Updated: '+formatDate(new Date(todo.updated))+'</p>'+
				'<span>Completed? </span>'+
				'<input class="checkbox" id="'+ item +' "'+checked+' type="checkbox">'+'<br>'+'<br>'+
				'<a class="btn edit" id="'+ item +'">edit</a>'+
				'<a class="delete btn" id="'+ item +'">delete?</a>'+
			'</li>'
			)	
		}
	}
	
	//Register the completion of a todo task by handling the checkbox event
	
	
	$('#todoList').on('change', '.checkbox', function(e) {
		console.log('Change Status on',e.target['id']);
		let index = e.target['id']/1;
		var todos = getTodos();
		todos[index].checked = !todos[index].checked;
		localStorage.setItem('todos', JSON.stringify(todos));
        }); 
	
	$('#todoList').on('click', '.delete', function(e) {
		console.log('delete on', e.target['id']);
		const index = e.target['id'];
		removeTodoAt(index);	 
	}); 
	
	$('#todoList').on('click', '.edit', function(e) {
		console.log('edit on', e.target['id']);
		const index = e.target['id'];
		// get the index of the item to change/modify
        }); 
	
	$('#todoSorts').on('change', function(e){
		console.log('now flipping the list');
		renderTodos(currentTodos.reverse());
	});
	//reset local storage function for testing
	//I need event listeners for each of the three buttons,
	// showall showdone shownotdone
	$('#showAll').click(()=>{
		//render all of the elements of local storage here
	 renderTodos(getTodos());
	});
	
	
	$('#sortByPosted').click(()=>{
		console.log('posted');
		console.log(sortByPosted(getTodos()));
	});
	sortByPosted=(todos)=>{
		console.log('sort by posted date');
		//this is the correct todos to render
		todos.sort(postedCompare);
		if(ascending === false){
			todos.reverse();
		}
		renderTodos(todos);	
		currentTodos = todos;
	};
	postedCompare=(a,b)=>{
		console.log('comparing');
		if(a.created < b.created)
			return -1;
		if(a.created > b.created)
			return 1;
		return 0;
	}
	
	$('#sortByUpdated').click(()=>{
		console.log('updated');
		sortByUpdated(getTodos());
	});
	sortByUpdated=(todos)=>{
		console.log('sorting by updated');
		todos.sort(updatedCompare);
		renderTodos(todos);
		currentTodos = todos;
	};
	updatedCompare=(a,b)=>{
		console.log('comparing');
		if(a.updated < b.updated)
			return -1;
		if(a.updated > b.updated)
			return 1;
		return 0;
	}
	
	$('#sortByDue').click(()=>{
		console.log('due');
		sortByDue(getTodos());
	});
	sortByDue=(todos)=>{
		console.log('sorting by due date');
		todos.sort(dueCompare);
		renderTodos(todos);
		currentTodos = todos;
	};
	dueCompare=(b,a)=>{
		console.log('comparing');
		if(a.deadline < b.deadline)
			return -1;
		if(a.deadline > b.deadline)
			return 1;
		return 0;
	};
	
	
	getDone=(todos)=>{
		var array = [];
		todos.forEach((object)=>{
		if(object.checked){
			array.push(object);
		}
	})
		return array;
	}
	
	$('#showDone').click(()=>{
		console.log('showdone');
		var finishedTodos = getDone(getTodos());
		currentTodos = finishedTodos;
		renderTodos(finishedTodos);
	});
	
	$('#showNotDone').click(()=>{
		console.log('showNotDone');
	});  
	  
	$('#clear').click(()=>{
		console.log('Triggering reset');
		resetList = [];
		localStorage.setItem('todos',JSON.stringify([]));
	});
	
});


