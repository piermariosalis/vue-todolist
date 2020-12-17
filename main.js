// La nostra todo list avrá alcune tasks di default predefinite
let startToDo = new Vue ({
    el: "#start",
    data:{
        tasks: [
            {
                task: "Do something"

            },
            {
                task: "Do else"

            },
            {
                task: "Do else"

            }
        ],
            newTask: "",
    },
    // L'utente puó inserire nuove tasks
    methods: {
        AddNewTask: function(){
            // Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
            if (this.newTask.length >= 6) {
            this.tasks.push({
                task: this.newTask
            });
        }
        },
        // Cliccando sulla "X" l'utente puó cancellare una task
        deleteTask(index) {
            this.tasks.splice(index,1);
        },
    },
    
    });