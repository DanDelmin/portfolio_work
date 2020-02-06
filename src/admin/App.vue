<template lang="pug">
    .admin-wrapper
        header.header
            .container.header__container
                .header__user-side
                    .user-group
                        .user__avatar
                            img(src='../images/userfiles/user3.jpg', class='user-pic')
                        .user__name Дельмин Даниелов
                    .user__title Панель администрирования
                a(href='#').header__logout Выход
        .tabs-wrapper
            .container
                nav.tabs
                    ul.tabs__list
                        each tab in ['Обо мне', 'Работы', 'Отзывы']
                            li.tabs__item
                                a(href='#').tabs__link=tab
        section.about
            .container
                .title-row
                    h2.title Блок «Обо мне»
                    button.add-button Добавить группу

                .cards-wrapper.about__cards-wrapper
                    .editing-cards
                        .editing-cards__about
                            .about__header
                                input(type="text" class="cards__input header__titleInput" placeholder="Название новой группы")
                                .header__titleButtons
                                    button.accept-button
                                    button.cancel-button
                            .about__list

                            .about__footer
                                .about__addfield
                                    input(class='cards__input footer__addfieldTitle', type='text', placeholder='Новый навык')
                                    input(class='cards__input footer__addfieldPercent' min='0' max='100' step='1' type='number', placeholder='100 %')
                                    button(type="button").add-circleButton
                                        span.add-circleButton__text +



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
                            img(src='../images/content/slider-5.jpg', class='workCard__img')
                        .workCard__descr
                            h2.workCard__title Сайт школы образования
                            p.workCard__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                            a(href='#', class='link workCard__link') loftschool.ru
                        .workCard__buttons
                            button.editCards-button Править
                            button.deleteCards-button Удалить


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
                                img(src='../images/content/user.jpg', class='reviewCard__avatar-img')
                            .reviewCard__author Владимир Сабанцев
                                span.reviewCard__author-title Преподаватель
                        .reviewCard__descr Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        .workCard__buttons
                            button.editCards-button Править
                            button.deleteCards-button Удалить



                //button.add-circleButton
                //    span.add-circleButton__text +
                //button.accept-button
                //button.cancel-button
                //button.edit-button
                //button.delete-button
            //    button.editCards-button Править
             //   button.deleteCards-button Удалить
               // button.gradient-button Загрузить
               // button.gradient-button Сохранить
               // button.transp-button Отменить
               // a(href='#', class='link') loftschool.ru


</template>
<style lang="postcss">
    body,
    html {
        height: 100%;
    }

    body {
        font-family: 'Open Sans', Helvetica, sans-serif;
        font-size: 16px;
        line-height: 1.42;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $text-color;
        max-width: 2000px;
        margin: auto;
    }

    .container {
        margin: 0 auto;
        max-width: 1200px;
        width: 100%;
        height: 100%;
        padding: 0 60px;

        @media screen and (max-width: 920px) {
            {
                padding: 0 10px;
            }
        }
    }

    button {
        border: 0;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }

    * {
        box-sizing: border-box;
    }

    ul, li {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: normal;
        margin: 0;
    }

    p {
        margin: 0;
        padding: 0;
    }

    button[type="button"] {
        cursor: pointer;
        background-color: transparent;
    }

    a {
        color: inherit;
        cursor: pointer;
        text-decoration: none;
    }

    a, button, input, label, textarea {
        -webkit-tap-highlight-color: transparent;
        outline: none;
    }

    img {
        display: block;
        max-width: 100%;
    }

    /*start common component styles*/

    .wraper, .admin-wrapper, .maincontent {
        min-height: 100%;
        height: 100%;
    }

    .wrapper {
        background: url("../images/parallax/mountain.jpg") no-repeat 0 0 /cover transparent;
    }

    .maincontent {
        background: rgba(#fff, .9);
    }

    /*end common component styles*/

    /*start buttons and inputs components styles*/


    .add-button {
        position: relative;
        padding-left: 33px;
        font-size: 16px;
        line-height: 33px;
        font-weight: 600;
        color: #383bcf;
        display: flex;
        align-items: center;
        margin: 0 45px;
        background: transparent;
        &::before {
             content: '+';
             color: #fff;
             display: flex;
             align-items: center;
             justify-content: center;
             background: linear-gradient(90.0deg, #006aed 0%, #3f35cb 100%);
             width: 21px;
             height: 21px;
             border-radius: 50%;
             position: absolute;
             left: 0;
             font-size: 15.2px;
             line-height: 15px;
             transform: rotate(0);
             transition: transform .3s linear;
         }

         &:hover {
            &::before {
                transform: rotate(360deg);
             }

          }

        @media screen and (max-width: 767px) {
            {
                margin: 15px 0;
            }
        }
    }

    .add-circleButton {
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;
        background: linear-gradient(90.0deg, #006aed 0%, #3f35cb 100%);
        display: flex;
        align-items: center;
        justify-content: center;

        &__text {
             font-size: 30px;
             line-height: 30px;
             font-weight: 600;
             color: #fff;
            transform: translateY(-2px);
         }
    }

    .accept-button {
        min-width: 15px;
        min-height: 15px;
        background: svg-load("tick.svg", fill=#00d70a, width=80%, height=12px) no-repeat center center / contain;
        margin: 0 8px 0 0;
    }
    .cancel-button {
        min-width: 15px;
        min-height: 15px;
        background: svg-load("cancel.svg", fill=#bf2929, width=14px, height=12px) no-repeat center center / contain;
        margin: 0;
    }
    .edit-button {
        width: 20px;
        height: 20px;
        background: svg-load("pencil.svg", fill=#414c63, width=14px, height=12px) no-repeat center center / contain;
        margin: 0 10px;
    }
    .delete-button {
        width: 20px;
        height: 20px;
        background: svg-load("trash.svg", fill=#414c63, width=14px, height=12px) no-repeat center center / contain;
        margin: 0 10px;
    }

    .editCards-button {
        display: flex;
        align-items: center;
        padding-right: 25px;
        background: svg-load("pencil.svg", fill=#383bcf, width=17px, height=17px) no-repeat center right transparent;

        font-size: 16px;
        line-height: 30px;
        font-weight: 600;
        color: rgba(#414c63, .5);
    }

    .deleteCards-button {
        display: flex;
        align-items: center;
        padding-right: 25px;
        background: svg-load("cancel.svg", fill=#bf2929, width=15px, height=15px) no-repeat center right transparent;

        font-size: 16px;
        line-height: 30px;
        font-weight: 600;
        color: rgba(#414c63, .5);
    }

    .gradient-button {
        width: 181px;
        height: 50px;
        background-image: linear-gradient(90.0deg, #006aed 0%, #3f35cb 100%);
        border-radius: 25px;

        font-size: 16px;
        line-height: 48px;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
    }

    .transp-button {
        font-size: 16px;
        line-height: 33px;
        font-weight: 600;
        color: #383bcf;
        background: transparent;
    }

    .link {
        font-size: 16px;
        line-height: 30px;
        font-weight: 600;
        color: #383bcf;
    }

    .cards__input {
        border: none;
        border-bottom: 1px solid #000;
        font-size: 18px;
        line-height: 34px;
        font-weight: 600;
        color: #414c63;
            &::placeholder {
            font-size: 16px;
            line-height: 34px;
            font-weight: 600;
            color: rgba(#414c63, .5);
             }
    }

    /*start buttons and inputs components styles*/

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


    /*start title component styles*/

        .title-row {
            padding: 40px 0;
            text-align: left;
            display: flex;

            @media screen and (max-width: 767px) {
                {
                 flex-flow: column;
                }
            }
        }

        .title {
            font-size: 21px;
            line-height: 34px;
            font-weight: 700;
            color: #414c63;
        }
    /*end title component styles*/


    /*start cards component styles*/

    .cards-wrapper {
        display: grid;
    }

    .about__cards-wrapper {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-gap: 30px;

        @media screen and (max-width: 767px) {
            grid-template-columns: 100%;
        }
    }

    .works__cards-wrapper, .reviews__cards-wrapper {
        grid-template-columns: 340px 340px 340px;
        grid-template-rows: 1fr;
        grid-gap: 30px;

        @media screen and (max-width: 920px) {
            {
             grid-template-columns: 1fr 1fr;
            }
        }

        @media screen and (max-width: 767px) {
            grid-template-columns: 100%;
        }
    }

    .editing-cards {
        background: #fff;
        box-shadow: 4px 3px 20px 0 rgba(#000, .07);
        padding: 20px;
    }

    /*end cards component styles*/

    /*start cards-about component styles*/

    .editing-cards__about {
        display: flex;
        flex-flow: column;
    }
    .header__titleButtons {
        display: flex;
    }
    .about {
        &__header {
             width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 0 15px;
            border-bottom: 1px solid rgba(#1f232d, .14);
         }
         &__footer {
              width: 100%;
          }

        &__addfield {
            display: flex;
            align-items: center;
            justify-content: flex-end;
         }

         &__list {
            flex: 1 0 100%;
            padding: 30px 0 75px;
          }
    }

    .header__titleInput {
        max-width: 275px;
        width: 100%;
        margin-right: 20px;
    }

    .footer {
        &__addfieldTitle{
            max-width: 218px;
            width: 100%;
            margin-right: 10px;
            font-size: 16px;
            line-height: 32px;
            font-weight: 400;
            color: #414c63;

            &::placeholder {
                 font-size: 16px;
                 line-height: 99px;
                 font-weight: 400;
                 color: rgba(#373e42, .5);
             }
         }
        &__addfieldPercent {
             max-width: 74px;
             width: 100%;
             margin-right: 25px;
             font-size: 16px;
             line-height: 32px;
             font-weight: 400;
             color: #414c63;

            &::placeholder {
                 font-size: 16px;
                 line-height: 99px;
                 font-weight: 400;
                 color: rgba(#373e42, .5);
             }
        }
    }
    /*end cards-about component styles*/

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

    .addCard {
        background-image: linear-gradient(90deg, #006aed 0%, #3f35cb 100%);
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 30px 0;

        &__cardButton {
            width: 150px;
            height: 150px;
            border: 2px solid #fff;
            background: transparent;
            border-radius: 50%;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            color: #fff;
            margin-bottom: 30px;
         }

         &__descr {
              font-size: 18px;
              line-height: 30px;
              font-weight: 700;
              color: #fff;

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