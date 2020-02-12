<template lang="pug">
    header.header
        .container.header__container
            .header__user-side
                .user-group
                    .user__avatar
                        img(src='../../images/userfiles/user3.jpg', class='user-pic')
                    .user__name Дельмин Даниелов
                .user__title Панель администрирования
            a(href='#').header__logout Выход
</template>
<style lang="postcss">
    /*start header component styles*/

    .header {
        height: 80px;
        background: linear-gradient(90.0deg, #3e3e59 0%, #454573 100%);
        color: #fff;

    &__container {
         display: grid;
         grid-template-columns: 2fr 1fr;
         grid-auto-rows: minmax(50px, 80px);
     }


    &__user-side {
         display: flex;
         align-items: center;
         justify-content: space-between;
     }


    &__logout {
         display: flex;
         align-items: center;
         justify-content: flex-end;
     }


    .user__avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 44Px;
        height: 44Px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 20px;

    @media screen and (max-width: 767px) {
    {
        width: 55Px;
        height: 55Px;
        min-width: 55px;
        margin-right: 15px;
    }
    }
    }

    }

    .user__title {
        display: flex;
    @media screen and (max-width: 767px) {
    {
        display: none;
    }
    }
    }
    .user-group {
        display: flex;
        align-items: center;
    }
    /*end header component styles*/
</style>