const App = (function(){

    let _todos = [];
  
    let _elem = null;
    let _addBtn = null;
    let _addInput = null;
  
    const getTodos = () => {
      return _todos;
    };
  
    const _initElems = () => {
      _elem = document.querySelector('#todos');
      _addBtn = document.querySelector('#addBtn');
      _addInput = document.querySelector('#addInput');
  
      _addBtn.addEventListener('click', _addTodo, false);
    };
  
    const _renderTodo = () => {
      if (_elem) {
        let _items = '';
  
        for (let item of _todos) {
          _items += `<li>${item.todo}</li>`;
        }
  
        _elem.innerHTML = _items;
      }
    };
  
    const _addTodo = () => {
      if (_addBtn && _addInput && _addInput.value) {
        _todos.push({todo: _addInput.value, complete: false});
        _addInput.value = '';
        _renderTodo();
      }
    };
  
    const init = () => {
      _todos.push({todo: 'olá mundo!', complete: false});
      _initElems();
      _renderTodo();
    };
  
    return {
      init: init,
      getTodos: getTodos
    };
  
  })();
  
  document.addEventListener("DOMContentLoaded", function() {
      App.init();
  });