<template lang="pug">
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
</template>
<style lang="postcss">
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
</style>