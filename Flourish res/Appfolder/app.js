//const inputfield = document.getElementById("inputfield");
//const containers = document.getElementById("containers");
//function additem () {
//    if(inputfield.value === ""){
//        alert ("Empty Input")
//    }else{
//        let li = document.createElement("li");
//        li.innerHTML = inputfield.value;
//        containers.appendChild(li);
//        localStorage.setItem('additem', JSON.stringify(additem));
//    }
    
//}

// local storage.setItem ('name' 'name')
window.onload = function() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks(tasks);
  }

  function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    input.value = "";

    if (task.trim() !== "") {
      var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks(tasks);
    }
  }

  function renderTasks(tasks) {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(function(task) {
      var li = document.createElement("li");
      li.className = "task-item";
      li.appendChild(document.createTextNode(task));
      taskList.appendChild(li);
      
    });
  }

  function clearTasks() {
    localStorage.removeItem("tasks");
    renderTasks([]);
  }
  // Quetions from what is github
  // text decoration
  // How to call a class name in javascript
  // font: width, size
  //Elements, tags attributen source, Understand Html tags 
  // listing in html, how to 
  // Data storage in web dev. page list 