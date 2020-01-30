import Vue from 'vue';


const reviewUnit = {
    template: '#review-unit',
    props: ['item', 'currentSlide', 'reviews', 'currentIndex']
};

const reviewsSlide = {
    template: '#reviews-slide',
    components: {
        reviewUnit
    },
    props: ['reviews', 'currentIndex', 'currentSlide']
};

const reviewsRow = {
    template: '#reviews-row',
    components: {
        reviewsSlide
    },
    props: ['reviews', 'currentSlide', 'currentIndex']
};

const reviewsNav = {
    template: '#reviews-nav',
    props: ['currentIndex', 'currentSlide']
};


new Vue({
    el: '#reviews',
    template: '#reviews-container',
    components: {
        reviewsNav,
        reviewsRow
    },
    data() {
        return {
            reviews: [],
            currentIndex: 0,
        }
    },
    methods: {
        toSlideReviews(direction) {
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
            const reviewsLength = this.reviews.length - 1;

            if (value > reviewsLength) this.currentIndex = reviewsLength;
            if (value < 0) this.currentIndex = 0;
        },
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item['author-pic']}`);
                item['author-pic'] = requiredPic;

                return item;
            });
        },
        makeNewData(data) {
            let newData = [];
            for (let i = 0; i < data.length; i += 2) {
                newData.push([data[i], data[i + 1]]);
            }
            return newData;
        },
    },
    watch: {
        currentIndex(value) {
            this.makeLoop(value)
        }
    },
    computed: {
        currentSlide() {
            return this.reviews[this.currentIndex];
        },
    },
    created() {
        const data = require('../data/reviews');
        this.reviews = this.makeArrWithRequiredImages(data);
        this.reviews = this.makeNewData(data);
    }
});