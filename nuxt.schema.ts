export default defineNuxtSchema({
    appConfig: {
        /** Default OG image path */
        cover: '',
        /**
         * Social media icons displayed in the navbar
         */
        socials: {
            /**
             * Twitter handle
             * 
             * @example 'Atinux'
             * @studioIcon simple-icons:twitter
             * */
            twitter: '',
            /**
             * Github repository name
             * @example 'nuxt/framework'
             * @studioIcon simple-icons:github
             * */
            github: ''
        }
    }
})