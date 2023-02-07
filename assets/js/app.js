// Vue.component("task", {
//     template:
//         `<div>
//             <input type="checkbox">
//             <p>{{ title }}</p>
//             <p>{{ desc }}</p>
//             <button class="btn btn-danger" @click="remove_task">Supprimer</button>
//         <div>`,
//         props: ['title', 'desc'],

//     methods: {
//         myMethod() {
//             this.$emit("add_task")
//         },

//         remove_task: {

//         }
//     }
// })

var vm = new Vue ({
    el: "#app",
    data: {
        title: '',
        desc: '',
        tasks: [],
        statut: false
    },

    methods: {
        noRefresh: function() {
            // console.log(this.task_title, this.task_desc)
        },

        add_task: function(){
            this.todoList = true
            let array = [{
                title : this.title,
                desc : this.desc,
                statut: false
            },
            ...this.tasks]
            this.tasks = array
        },

        remove_task(index) {
            this.tasks.splice(index,1)
        },

        remove_all_tasks: function() {
            this.tasks = []
        },

        remove_done_tasks: function() {
            for (i=0; i < this.tasks.length; i++) {
                console.log(this.tasks[i])
                if (this.tasks[i].statut === true) {
                    this.tasks.splice(i,1)
                }
            }
        },

        task_state: function(e) {
            let index = e.target.closest("li").id
            this.tasks[index].statut = !this.tasks[index].statut
            console.log(this.tasks);
        }
    }
})