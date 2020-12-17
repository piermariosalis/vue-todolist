

// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

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
            this.tasks.push({
                task: this.newTask
            });
        },
        // Cliccando sulla "X" l'utente puó cancellare una task
        deleteTask(index) {
            this.tasks.splice(index,1);
        },
    },
    
    });