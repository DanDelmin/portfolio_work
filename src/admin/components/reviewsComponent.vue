<template lang="pug">
    section.reviews
        .container
            .title-row
                h2.title Блок &laquo;Отзывы&raquo;
            .reviews__addReviewForm.editing-cards
                .addCardsForm__header.addreview__header Новый отзыв
                .addReviewForm__body
                    .addReviewForm__reviewAuthAvatar
                        .reviewAuthAvatar__area
                        .reviewAuthAvatar__descr Добавить фото
                    .addReviewForm__form
                        .addReviewForm__fieldGroup
                            label(class="addReviewForm__label editingCards-form__label" for='fio') Имя автора
                                input(class="addReviewForm__input cards__input" type="text" id="fio" name="name")
                            label(class="addReviewForm__label editingCards-form__label" for='title') Титул автора
                                input(class="addReviewForm__input cards__input" type="text" id="title" name="title")
                        label(class="addReviewForm__label editingCards-form__label" for="review") Отзыв
                            textarea(class="addReviewForm__textarea editingCards-form__textarea" rows="2" cols="50" id="review" name="review" maxlength="300")
                        .addReviewForm__buttons
                            button.transp-button Отмена
                            button.gradient-button Сохранить

            .cards-wrapper.reviews__cards-wrapper
                .editing-cards.addCard
                    button.addCard__cardButton
                        span.cardButton__plus +
                    .addCard__descr Добавить<br> работу

                .editing-cards.editing-cards__reviewCard
                    .reviewCard__header
                        .reviewCard__avatar
                            img(src='../../images/content/user.jpg', class='reviewCard__avatar-img')
                        .reviewCard__author Владимир Сабанцев
                            span.reviewCard__author-title Преподаватель
                    .reviewCard__descr Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    .workCard__buttons
                        button.editCards-button Править
                        button.deleteCards-button Удалить
</template>
<style lang="postcss">
    /*start cards-reviews component styles*/

    .reviews__addReviewForm {
        margin-bottom: 30px;
    }
    .addReviewForm {
    &__body {
         display: grid;
         grid-template-rows: 1fr;
         grid-template-columns: 225px minmax(auto, 620px);
         column-gap: 20px;
         padding: 45px 0 25px;

    @media screen and (max-width: 920px) {
    {
        grid-template-columns: 100%;
    }
    }
    }

    &__buttons {
         display: flex;
         align-items: center;
         justify-content: flex-end;

    button:first-child {
        margin-right: 55px;
    }
    }

    &__fieldGroup {
         display: flex;
         align-items: center;
         justify-content: space-between;

    @media screen and (max-width: 767px) {
    {
        flex-flow: column;
        align-items: flex-start;
    }
    }
    }

    &__label:not([for="review"]) {
         max-width: calc(50% - 15px);
         width: 100%;
    @media screen and (max-width: 767px) {
    {
        max-width: none;
    }
    }
    }

    &__reviewAuthAvatar {
         display: flex;
         flex-flow: column;
         align-items: center;
         justify-content: center;
     }
    }

    .reviewAuthAvatar {

    &__area {
         width: 200px;
         height: 200px;
         background: svg-load("user.svg", fill=#fff, width=85px, height=113px) no-repeat center center #dee4ed;
         border-radius: 50%;
         margin-bottom: 25px;
         cursor: pointer;
     }

    &__descr {
         font-size: 16px;
         line-height: 33px;
         font-weight: 600;
         color: #383bcf;
    @media screen and (max-width: 920px) {
    {
        margin-bottom: 30px;
    }
    }
    }
    }

    .reviewCard {
    &__header{
         display: flex;
         align-items: center;
         justify-content: flex-start;
         padding: 10px 0 30px;
         margin-bottom: 30px;
         border-bottom: 1px solid rgba(#1f232d, .14);
     }

    &__avatar {
         min-width: 50px;
         min-height: 50px;
         width: 50px;
         height: 50px;
         position: relative;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 50%;
         overflow: hidden;
         margin-right: 20px;
    &-img {
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
     }
    }

    &__author {
         display: flex;
         align-items: flex-start;
         flex-flow: column;
         font-size: 18px;
         line-height: 30px;
         font-weight: 700;
         color: #414c63;

    &-title {
         font-size: 16px;
         line-height: 30px;
         font-weight: 600;
         color: rgba(#414c63, .5);
     }
    }

    &__descr {
         font-size: 16px;
         line-height: 30px;
         font-weight: 600;
         color: rgba(#414c63, .7);
         padding: 0 10px;
         min-height: 180px;
         margin-bottom: 45px;
     }

    &__buttons {
         padding: 0 10px;
         display: flex;
         align-items: center;
         justify-content: space-between;
     }
    }


    /*end cards-reviews component styles*/
</style>