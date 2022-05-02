import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customPropterties: true,
        },
        themes: {
            light: {
                primary: '#1630C9',
                secondary: '#56586D',
                accent: '#F7F7F7',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                background: '#F2FBFE'
                            }
        }
    }
});
