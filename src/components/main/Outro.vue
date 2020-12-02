<template>
    <div id="outro">
        <h1
            class="outro-title"
            data-aos="fade-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
        >
            부족한 신입이지만 늘 최선을 다하겠습니다.
        </h1>
        <v-row
            class="outro-info"
            justify="center"
            align="flex-start"
            data-aos="flip-left"
            data-aos-easing="ease-in-ease"
            data-aos-delay="500"
            data-aos-offset="0"
        >
            <div class="info-outro"></div>
            <div class="info-item" v-for="(item, i) in items" :key="i">
                <v-icon large>{{ item.icon }}</v-icon>
            </div>
        </v-row>
    </div>
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
#outro {
    height: 100vh;
    border: 1px solid transparent;
    padding: 0 20px;
    // background: url('https://miro.medium.com/max/10494/1*zMQQf10DS-hQIB6p07_kag.jpeg');
    background-position: center;
    background-size: cover;
    position: relative;
}
.outro-title {
    text-align: center;
    font-size: 2em;
    font-weight: lighter;
    margin: 160px 0 400px;
    color: #132448;
}

.outro-info {
    width: 50%;
    margin: 0 auto;
    flex-flow: column;
    // .left,
    // .right {
    //     width: 50%;
    // }
}
.info-item {
    margin-bottom: 20px;
}
.info-item:last-child {
    margin-bottom: 0;
}
</style>
