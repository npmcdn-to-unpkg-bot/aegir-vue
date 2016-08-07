
var tasks = {
    1: {
        id: 1,
        type: 'verify',
        status: 'queued',
        created: 123456789,
        ref: {
            type: 'site',
            title: 'aegir.local.site',
            url: '/hosting/c/aegir.local.site'
        }
    },
    2: {
        id: 2,
        type: 'install',
        status: 'processing',
        created: 123456789,
        ref: {
            type: 'site',
            title: 'aegir.local.site',
            url: '/hosting/c/aegir.local.site'
        }
    },
    3: {
        id: 3,
        type: 'backup',
        status: 'success',
        created: 123456789,
        ref: {
            type: 'site',
            title: 'aegir.local.site',
            url: '/hosting/c/aegir.local.site'
        }
    }
};

var statusTypes = {
    queued: {
        text: 'Queued',
        type: 'queued',
        icon: 'clock-o',
        class: 'queued'
    },
    processing: {
        text: 'Processing',
        type: 'processing',
        icon: 'cog fa-spin',
        class: 'processing'
    },
    success: {
        text: 'Success',
        type: 'success',
        icon: 'check',
        class: 'success'
    },
    error: {
        text: 'Error',
        type: 'error',
        icon: 'exclamation-circle',
        class: 'danger'
    },
    warning: {
        text: 'Warning',
        type: 'warning',
        icon: 'warning',
        class: 'warning'
    },
};

var App = new Vue({
    el: '#app',
    data: {
        tasks: tasks,
        statusTypes: statusTypes
    },
    methods: {
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
    }
})


// $watch is an instance method
App.$watch('tasks', function (tasks, oldTasks) {

    console.log(oldTasks, 'oldTasks!');
    console.log(tasks, 'newTasks!');
})