
//Populate with consistent state data
var todos = {
	
};

$(function() { //shorthand document.ready function
    
	//Todo form submit handler for adding a new todo
	$('#todoForm').on('submit', function(e) { 
		e.preventDefault();
		var oldItems = JSON.parse(localStorage.getItem('todos'));
		//if the oldItems are null we set initialization
		if(oldItems === null){
			console.log('oldItems is null');
			localStorage.setItem('todos', JSON.stringify([]));
			oldItems = JSON.parse(localStorage.getItem('todos'));
		}
		var data = $("#todoForm :input")
		var newItems = {
			'name':data[0].value,
			'deadline':data[1].value,
			'description':data[2].value,
			'created': Date.now(),
			'updated': Date.now(),
			'checked': 'true',
		};
		oldItems.push(newItems);
		localStorage.setItem('todos', JSON.stringify(oldItems));
		return false;
    });
	
	renderTodos=()=>{
		var todos = JSON.parse(localStorage.getItem('todos'));
		$('#todoList').empty();
		var todo = '';
		for(var item in todos){
			todo = todos[item];
			console.log(item);
			var checked = todos[item].checked ? 'checked': '';
			console.log(checked);

			$('#todoList').prepend(
			'<li><p class="todoTitle">'+todo.name+'</p>'+
				'<p>Description:'+todo.description+' </p>'+
				'<p>Created:'+todo.created+'</p>'+
				'<p>Updated: '+todo.updated+'</p>'+
				'<p>Completed:'+todo.checked+'</p>'+
				'<span>Completed? </span>'+
				'<input class="checkbox" id="'+ item +' "'+checked+' type="checkbox">'+'<br>'+
				'<input class="delete" id="'+ item +' "'+checked+' type="checkbox">'+
			'</li>'
			)	
		}
	}
	
	$('#todoList').on('change', '.checkbox', function(e) {
		console.log(e.target['id']);
		e.target['id'];
		// get the index of the item to change/modify
        }); 
	
	//reset local storage function for testing
	//I need event listeners for each of the three buttons,
	// showall showdone shownotdone
	$('#showAll').click(()=>{
		//render all of the elements of local storage here
	 renderTodos();
	});
	
	$('#clear').click(()=>{
		console.log('Triggering reset');
		resetList = [];
		localStorage.setItem('todos',JSON.stringify([]));
	});
	
	
//	
//	$('#todoList').addEventListener('change', (e)=>{
//		let id = e.target['id'];
//		$.
//		console.log('now changing', id);
//		
//	})
//	
	
	
	
});




init=()=>{
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
};
