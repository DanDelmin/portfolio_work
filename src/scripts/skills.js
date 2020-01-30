import Vue from "vue";

const chartCircle = {
   template: "#progress",
   props: ['skillPercent'],
   methods: {
      drawColoredCircle() {
         const circle = this.$refs["colored"];
         const dashArray = parseInt(
             getComputedStyle(circle).getPropertyValue("stroke-dasharray")
         );
         const percent = (dashArray / 100) * (100 - this.skillPercent);

         circle.style.strokeDashoffset = percent;
      }
   },
   mounted() {
      this.drawColoredCircle()
   }
};

const boardCircle = {
   template: '#board-circle',
   components: {
      chartCircle
   },
   props: ['chart'],
};

new Vue({
   el: '#circlesChart-component',
   template:  '#board-list',
   data() {
      return {
         charts: []
      };
   },
   components: {
      boardCircle
   },
   created() {
     const data = require('../data/skills');
     this.charts = data;
   }
});