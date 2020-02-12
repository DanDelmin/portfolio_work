<template lang="pug">
    section.works
        .container
            .title-row
                h2.title Блок «Работы»
            .works__addCardsForm.editing-cards
                .addCardsForm__header Редактирование работы
                .addCardsForm__body
                    .addCardsForm__body-left
                        .addCardsForm__uploadImgField
                            .uploadImgField__descr
                                .uploadImgField__title Перетащите или загрузите<br>для загрузки изображения
                                button.gradient-button Загрузить
                    .addCardsForm__body-right
                        .editingCards-form
                            label(class="editingCards-form__label" for='name') Название
                                input(class="editingCards-form__input cards__input" type="text" id="name" name="name")
                            label(class="editingCards-form__label" for="link") Ссылка
                                input(class="editingCards-form__input cards__input" type="text" id="link" name="link")
                            label(class="editingCards-form__label" for="descr") Описание
                                textarea(class="editingCards-form__textarea" rows="2" cols="50" id="descr" name="descr" maxlength="300")
                            label(class="editingCards-form__label" for="tagsAdd") Добавление тэга
                                input(class="editingCards-form__input cards__input" type="text" id="tagsAdd" name="tagsAdd")
                            .addCardsForm__buttons
                                button.transp-button Отмена
                                button.gradient-button Сохранить

            .cards-wrapper.works__cards-wrapper
                .editing-cards.addCard
                    button.addCard__cardButton
                        span.cardButton__plus +
                    .addCard__descr Добавить<br> работу

                .editing-cards.editing-cards__workCard
                    .workCard__previewImg-wrapper
                        img(src='../../images/content/slider-5.jpg', class='workCard__img')
                    .workCard__descr
                        h2.workCard__title Сайт школы образования
                        p.workCard__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        a(href='#', class='link workCard__link') loftschool.ru
                    .workCard__buttons
                        button.editCards-button Править
                        button.deleteCards-button Удалить
</template>
<style lang="postcss">
    /*start cards-works component styles*/

    .works {
    &__addCardsForm {
         margin: 0 0 30px;
         min-height: 100%;
     }
    }

    .addCardsForm {
        min-height: 100%;

    &__header {
         padding: 0 0 20px;
         border-bottom: 1px solid rgba(#1f232d, .14);
         font-size: 18px;
         line-height: 34px;
         font-weight: 700;
         color: #414c63;
     }

    &__body {
         display: grid;
         grid-template-rows: 1fr;
         grid-template-columns: 1fr 1fr;
         grid-gap: 30px;
         padding: 45px 0;

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
    &__uploadImgField {
         width: 100%;
         border: 1px dashed #a1a1a1;
         background: #dee4ed;
         max-height: 270px;
         height: 100%;
         display: flex;
         flex-flow: column;
         justify-content: center;
         align-items: center;
         text-align: center;

    @media screen and (max-width: 920px) {
    {
        min-height: 300px;
    }
    }
    }
    }

    .uploadImgField__title {
        font-size: 16px;
        line-height: 33px;
        font-weight: 600;
        color: rgba(#414c63, .5);
        margin: 0 0 25px;
    }

    .editingCards-form {
        display: flex;
        flex-flow: column;
        width: 100%;
        height: 100%;

    &__label {
         display: flex;
         flex-flow: column;
         font-size: 16px;
         line-height: 30px;
         font-weight: 600;
         color: rgba(#414c63, .5);
         margin-bottom: 30px;
     }

    &__textarea {
         padding: 10px 20px;
         border: 1px solid rgba(#414c63, .2);
         min-height: 146px;
         resize: vertical;
         font-size: 16px;
         line-height: 30px;
         font-weight: 600;
         color: #414c63;
         margin-top: 15px;
     }
    }



    .cardButton {
    &__plus {
         font-size: 72px;
         line-height: 30px;
         font-weight: 300;
         transform: translateY(-6px);
     }
    }

    .workCard {
    &__previewImg-wrapper {
         height: 190px;
         overflow: hidden;
         background: #383bcf;
         margin: -20px -20px 40px;
         display: flex;
         align-items: center;
         justify-content: center;
         position: relative;
     }

    &__img {
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
     }

    &__descr {
         display: flex;
         flex-flow: column;
         padding: 0 10px;
         margin-bottom: 45px;
     }

    &__title {
         font-size: 18px;
         line-height: 30px;
         font-weight: 700;
         color: #414c63;
         margin-bottom: 25px;
     }

    &__text {
         font-size: 16px;
         line-height: 30px;
         font-weight: 600;
         color: rgba(#414c63, .7);
         margin-bottom: 30px;
     }

    &__buttons {
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding: 0 10px 10px;
     }

    }

    /*end cards-works component styles*/
</style>