<template lang="pug">
    .tabs-wrapper
        .container
            nav.tabs
                ul.tabs__list
                    each tab in ['Обо мне', 'Работы', 'Отзывы']
                        li.tabs__item
                            a(href='#').tabs__link=tab
</template>
<style lang="postcss">
    /*start tabs component styles*/

    .tabs-wrapper {
        background: #fff;
    }

    .tabs {
        padding: 20px 0;

    &__list {
         display: flex;
         align-items: center;

    @media screen and (max-width: 767px) {
    {
        justify-content: center;
    }
    }
    }
    &__item {
         margin-right: 30px;
         font-size: 16px;
         line-height: 36px;
         font-weight: 400;
         color: #414c63;
    &:last-child {
         margin-right: 0;
     }
    }
    }

    /*end tabs component styles*/
</style>