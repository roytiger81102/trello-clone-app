export default {
  props: {
    column: {
      type: Object,
      require: true
    },
    columnIndex: {
      type: Number,
      require: true
    },
    board: {
      type: Object,
      require: true
    }
  },
  methods: {
    moveTaskOrColumn (event, toTasks, toColumnIndex, toTaskIndex) {
      const type = event.dataTransfer.getData('type')
      if (type === 'task') {
        this.moveTask(event, toTasks, toTaskIndex !== undefined ? toTaskIndex : toTasks.length)
      } else {
        this.moveColumn(event, toColumnIndex)
      }
    },
    moveTask (event, toTasks) {
      const fromColumnIndex = event.dataTransfer.getData('from-column-index')
      const fromTasks = this.board.columns[fromColumnIndex].tasks
      const taskIndex = event.dataTransfer.getData('task-index')

      this.$store.commit('MOVE_TASK', {
        fromTasks,
        toTasks,
        taskIndex
      })
    },
    moveColumn (event, toColumnIndex) {
      const fromColumnIndex = event.dataTransfer.getData('from-column-index')
      this.$store.commit('MOVE_COLUMN', {
        fromColumnIndex,
        toColumnIndex
      })
    }
  }
}
