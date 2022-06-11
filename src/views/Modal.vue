<script>
export default{
    data(){ 
        return{
            isShow: false,
            modalText: ''
        }
    },
    methods: {
        handleOnClick(e) {
            this.isShow = true
            this.modalText = e.target.innerText
        }
    }
}
</script>

<template>
    <article class="container modal-parent">
        <section class="modals row d-flex flex-column">
            <div class="modal-pop col-8" @click="handleOnClick">Modal-1</div>
            <div class="modal-pop col-8" @click="handleOnClick">Modal-2</div>
            <div class="modal-pop col-8" @click="handleOnClick">Modal-3</div>
            <div class="modal-pop col-8" @click="handleOnClick">Modal-4</div>
        </section>
        <section v-if="isShow" class="row">
        <div class="global-close" @click="isShow = false"></div>
            <div class="popup d-flex flex-column align-items-center justify-content-between p-4">
                <div class="content">
                    <h1>{{modalText}}</h1>
                </div>
                <button class="btn btn-danger w-50" @click="isShow = false">close</button>
            </div>
        </section>
    </article>
</template>



<style>
.modal-parent {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.modal-pop{
    width: 10vh;
    height: 7vh;
    display: flex;
    background-color: white;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 12px;
    transition: 1s;
}

.modal-pop:hover{
    width: 25vh;
    background-color: rgba(128, 128, 128, 0.464);
    color: white;
}

.popup{
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fefefe;
	color: #000;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	direction: ltr;
	width: 40%;
	z-index: 99999;
}

.global-close {
	position: fixed;
	display: block;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 99999;
}
</style>