<template>
    <div id="contact">
        <!-- https://rapidapi.com/ -->
        <h1
            class="contact-title"
            data-aos="fade-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
        >
            CONTACT
        </h1>
        <v-row
            class="contact-wrap"
            justify="center"
            align="center"
            data-aos="flip-left"
            data-aos-easing="ease-in-ease"
            data-aos-delay="500"
            data-aos-offset="0"
        >
            <v-row class="contact-container" justify="center" align="center">
                <div class="contact-item" v-for="(item, i) in items" :key="i">
                    <v-icon large>{{ item.icon }}</v-icon>
                </div>
            </v-row>
        </v-row>
    </div>
</template>

<script>
// import sendGrid from '@/config/sendGrid.json';
export default {
    name: 'Contact',
    data() {
        return {
            items: [
                {
                    icon: 'mdi-account',
                },
                {
                    icon: 'mdi-email-outline',
                },
                {
                    icon: 'mdi-github',
                },
            ],
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
#contact {
    height: 100vh;
    border: 1px solid transparent;
    padding: 0 20px;
    // background: url('https://miro.medium.com/max/10494/1*zMQQf10DS-hQIB6p07_kag.jpeg');
    background-position: center;
    background-size: cover;
    position: relative;
}
.contact-title {
    text-align: center;
    font-size: 4em;
    font-weight: lighter;
    margin: 160px 0 80px;
    color: #132448;
}

.contact-wrap {
    width: 60%;
    margin: 0 auto;
    flex-flow: column;
    align-content: center;
    // .left,
    // .right {
    //     width: 50%;
    // }
}
.contact-wrap > div {
    padding: 0 0 16px 0;
}
.contact-wrap > div:last-child {
    padding: 0;
}
.contact-container {
    flex-flow: column;
}
.contact-item {
    margin-bottom: 24px;
}
</style>
