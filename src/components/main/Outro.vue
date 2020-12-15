<template>
    <v-row class="outro" id="outro" justify="center" align="center">
        <v-col
            class="outro-title"
            data-aos="flip-left"
            data-aos-delay="200"
            data-aos-offset="0"
            cols="12"
            sm="6"
        >
            THANK YOU FOR WATCHING
        </v-col>
        <v-col
            class="outro-info"
            data-aos="flip-right"
            data-aos-delay="200"
            data-aos-offset="0"
            cols="12"
            sm="6"
        >
            <div class="info-item" v-for="(item, i) in items" :key="i">
                <v-icon large>{{ item.icon }}</v-icon>
                <p>{{ item.text }}</p>
            </div>
        </v-col>
    </v-row>
</template>

<script>
// import sendGrid from '@/config/sendGrid.json';
export default {
    name: 'Outro',
    data() {
        return {
            items: [
                {
                    icon: 'mdi-account',
                    text: '010-7115-4729',
                },
                {
                    icon: 'mdi-email-outline',
                    text: 'thkim4729@naver.com',
                },
                {
                    icon: 'mdi-github',
                    text: 'https://github.com/thkim4729',
                },
            ],
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
#outro {
    // height: 100vh;
    border: 1px solid transparent;
    padding: 10vh 0;
    // background: url('https://miro.medium.com/max/10494/1*zMQQf10DS-hQIB6p07_kag.jpeg');
    background-position: center;
    background-size: cover;
    position: relative;
}
.outro-title {
    text-align: center;
    font-size: 3em;
    font-weight: bold;
    color: #132448;
    padding: 50px;
}
.outro-info {
    padding: 20px;
}

.info-item {
    margin-bottom: 20px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-items: center;
    p {
        color: black;
        margin-bottom: 0;
        margin-left: 24px;
    }
}
.info-item:last-child {
    margin-bottom: 0;
}
</style>
