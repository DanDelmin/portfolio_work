<template lang="pug">
.admin-wrapper
    header-component
    tabs-component
    about-component
    works-component
    reviews-component
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

    /*end cards component styles*/

</style>

<script>
    import headerComponent from './components/headerComponent'
    import tabsComponent from './components/tabsComponent'
    import aboutComponent from './components/aboutComponent'
    import worksComponent from './components/worksComponent'
    import reviewsComponent from './components/reviewsComponent'

    export default {
        components: {
            headerComponent,
            tabsComponent,
            aboutComponent,
            worksComponent,
            reviewsComponent,
        }
    }
</script>