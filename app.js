
var statusTypes = {
    'queued': {
        text: 'Queued',
        type: 'queued',
        icon: 'clock-o',
        class: 'queued'
    },
    'processing': {
        text: 'Processing',
        type: 'processing',
        icon: 'cog fa-spin',
        class: 'processing'
    },
    'success': {
        text: 'Success',
        type: 'success',
        icon: 'check',
        class: 'success'
    },
    'error': {
        text: 'Error',
        type: 'error',
        icon: 'exclamation-circle',
        class: 'danger'
    },
    'warning': {
        text: 'Warning',
        type: 'warning',
        icon: 'warning',
        class: 'warning'
    },
};
var tasksApiUrl = 'api/tasks.json';
var App = new Vue({
    el: '#app',
    data: {
        tasks: null,
        statusTypes: statusTypes
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        fetchData: function () {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', tasksApiUrl)
            xhr.onload = function () {
                self.tasks = JSON.parse(xhr.responseText)
            }
            xhr.send()
        },
        addTodo: function () {
            var text = this.newTodo.trim()
            if (text) {
                this.todos.push({ text: text })
                this.newTodo = ''
            }
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1)
        },
        getStatusClass: function(status) {
            return this.statusTypes[status].class;
        },
        getStatusIcon: function(status) {
            return 'fa-' + this.statusTypes[status].icon;
        }
    }
})


// $watch is an instance method
App.$watch('tasks', function (tasks, oldTasks) {

    console.log(oldTasks, 'oldTasks!');
    console.log(tasks, 'newTasks!');
})