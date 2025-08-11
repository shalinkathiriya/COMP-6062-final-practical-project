console.log('JS loaded!');

// This initalizes Vue App
const app = Vue.createApp({
    data() {
        return {
            name: ' ',
            age: ' ',
            avatar: '',
            profileData:[],

            city: 'London',
            province: 'Ontatio',
            country: 'Canada',
            weather: [],

            dictionary: [],
            defineWord: ' '
        };
    },
    created() {
       // created
       this.fetchUserData();
       this.fetchWeatherData();
    },
    computed: {
        // not used
    },
    methods: {
        fetchUserData() {
            fetch('https://comp6062.liamstewart.ca/random-user-data')
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                else {
                    console.log('An error occured, Please try again');
                }
            })
            .then(data => {
                this.profileData = data;
            })    
            .catch(error => {
                console.log('Total failure');
            })
        },

        fetchWeatherData() {
            fetch(`https://comp6062.liamstewart.ca/weather-data?city=${this.city}&province=${this.province}&country=${this.country}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                else {
                    console.log('An error occured, Please try again');
                }
            })
            .then(data => {
                    return this.weather = data;
            })
            .catch(error => {
                console.log('Total failure');
            })
        },

        fetchWord() {
            fetch(`https://comp6062.liamstewart.ca/api/define?word=${this.defineWord}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                else {
                    console.log('An error occcured, Please try again..')
                }
            })
            .then(data => {
                this.dictionary = data;
            })
            .catch(error => {
                console.log('Total failure');
            })
        }
    }
});

// connects to the div with the id of app
app.mount('#app');
