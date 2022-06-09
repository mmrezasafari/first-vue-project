<script>
export default {
    name: 'todo',

    data() {
        return {
            todoList: [],
            todoText: '',
            task: document.getElementsByClassName('list-li')
        }
    },

    methods: {
        handleOnclick() {
            if (this.todoText) {
                this.todoList = [...this.todoList, {
                    text: this.todoText,
                    id: this.todoList.length + 1,
                    done: true
                }]
            }
            this.todoText = ''
            console.log(this.todoList);
        },
        toggleTodo(todo) {
            todo.done = !todo.done;
        }
    }
}
</script>

<template>
<<<<<<< HEAD
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row todo-template">
            <article class="col-12 todo d-flex flex-column justify-content-center align-items-center">
                <section class="header w-100 d-flex flex-row my-4 justify-content-center">
                    <h1 class="header-h1 align-self-center m-0">My Todo</h1>
                    <img class="header-logo" src="https://freesvg.org/img/fttodo.png" alt="todo" />
                </section>
                <section class="add-todo w-100 d-flex flex-column align-items-center justify-content-center">
                    <p class="add-p m-0 text-bolder">Add item</p>
                    <input type="text" v-model="todoText" class="add-input my-3" placeholder="title" />
                    <button @click="handleOnclick" class="add-button bg-primary">ADD</button>
                </section>
                <section class="list-todo w-100 d-flex flex-column justify-content-center my-4">
                    <p class="list-p align-self-center m-0">My items</p>
                    <ul class="list-ul">
                        <li class="list-li d-flex flex-row justify-content-between align-items-center"
                            v-for="(item, index) in todoList" @click="toggleTodo(item)">
                            <span>{{ `${index + 1} - ${item.text}` }}</span>
                            <img :class="`done-tick ${item.done && 'disable'}`" alt="done"
                                src="https://img.icons8.com/color/344/double-tick.png" />
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    </div>
</template> 

<style>

.todo-template {
    width: 50vh;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
=======
    <article class="todo d-flex flex-column justify-content-center align-items-center">
        <div class="todo-div">
            <section class="header w-75 d-flex flex-row my-4 justify-content-center">
                <h1 class="header-h1 align-self-center m-0">My Todo</h1>
                <img class="header-logo" src="https://freesvg.org/img/fttodo.png" alt="todo" />
            </section>
            <section class="add-todo w-75 d-flex flex-column align-items-center justify-content-center">
                <p class="add-p m-0 text-bolder">Add item</p>
                <input type="text" v-model="todoText" class="add-input my-3" placeholder="title" />
                <button @click="handleOnclick" class="add-button bg-primary">ADD</button>
            </section>
            <section class="list-todo w-75 d-flex flex-column justify-content-center my-4">
                <p class="list-p align-self-center m-0">My items</p>
                <ul class="list-ul">
                    <li class="list-li d-flex flex-row justify-content-between align-items-center"
                        v-for="(item, index) in todoList" @click="toggleTodo(item)">
                        <span>{{ `${index + 1} - ${item.text}` }}</span>
                        <img :class="`done-tick ${item.done && 'disable'}`" alt="done"
                            src="https://img.icons8.com/color/344/double-tick.png" />
                    </li>
                </ul>
            </section>
        </div>
    </article>
</template> 

<style>
.todo {
    width: 100%;
    height: 100%;
}

.todo-div{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 32px;
>>>>>>> 3ec17c9439095178631e03622e2d4b050618eb66
}

.header {
    border-bottom: 3px solid black;
    padding-bottom: 5px;
}

.header-logo {
    width: 50px;
    height: 50px;
}

.add-todo {
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 10px
}

.add-input {
    height: 50px;
    padding: 10px;
}

.add-button {
    height: 40px;
    border: 2px solid rgb(146, 146, 146);
    color: white;
}

.list-todo {
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 10px;
}

.list-ul {
    list-style-type: none;
    word-wrap: break-word;
    padding: 0 20px 20px 20px !important;
    margin: 10px 0 0 0 !important;
}

li {
    background-color: rgba(170, 169, 169, 0.475);
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 10px;
}

.done-tick {
    width: 30px;
    height: 30px;
}

.disable {
    display: none;
}
</style>