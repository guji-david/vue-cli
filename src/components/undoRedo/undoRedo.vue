<template>
    <div class="undoRedo">
      <h1>Click around the square</h1>
      <div id="app" >
        <canvas-component ref="canvas"></canvas-component>
        <div class="buttons">
          <button v-if="canUndo" @click="undoDraw">Undo</button>
          <button v-else disabled>Undo</button>
          <button v-if="canRedo" @click="redoDraw">Redo</button>
          <button v-else disabled>Redo</button>
        </div>
      </div>
    </div>
</template>

<script>
  import CanvasComponent from './canvas-component.vue'
    export default {
        data(){
            return {}
        },
        components: {
          CanvasComponent
        },
        computed: {},
        mounted () {

        },
        methods: {
          undoDraw() {
            this.undo();
            this.$refs.canvas.draw();
          },
          redoDraw() {
            this.redo();
            this.$refs.canvas.draw();
          }
        }
    }
</script>

<style scoped="">
@import "./undoRedo.less";
</style>
