import Vue from "vue";

const tags = {
    template: "#tags",
    props: ["tags"]
};

const info = {
    template: "#info",
    components: {
        tags
    },
    props: ['currentWork'],

    computed: {
        makeTagsArray() {
            return this.currentWork.skills.split(', ');
        }
    }
};

const buttons = {
    template: "#buttons",
};

const thumbs = {
    template: "#thumbs",
    props: ['works', 'currentWork']
};

const display = {
    template: "#display",
    components: {
        thumbs,
        buttons
    },
    props: ['works', 'currentWork', 'currentIndex'],
    computed: {
        reserveWorks() {
            return [...this.works].reverse();
        }
    }

};

new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: {
        display,
        info
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        };
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex]
        }
    },
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;

                return item;
            });
        },
        handleSLide(direction) {
            switch (direction) {
                case "next":
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
            }
        },
        makeLoop(value) {
            const worksLength = this.works.length - 1;

            if (value > worksLength) this.currentIndex = 0;
            if (value < 0) this.currentIndex = worksLength;
        }
    },
    watch: {
        currentIndex(value) {
            this.makeLoop(value)
        }
    },
    created() {
        const data = require('../data/works.json');
        this.works = this.makeArrWithRequiredImages(data);
    }
});