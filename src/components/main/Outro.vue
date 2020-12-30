<template>
    <v-row class="outro" id="outro" justify="center" align="center">
        <v-col class="outro-info" cols="12">
            <!-- <div class="info-item" v-for="(item, i) in items" :key="i">
                <v-icon large>{{ item.icon }}</v-icon>
                <p>{{ item.text }}</p>
            </div> -->
            <div class="info-item">
                <h3>Thank you for watching</h3>
                <p>by KIM TAEHOON</p>
                <p>{{ formatDate }}</p>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import moment from 'moment';
// import sendGrid from '@/config/sendGrid.json';
export default {
    name: 'Outro',
    data() {
        return {};
    },
    methods: {},
    computed: {
        formatDate() {
            let created = moment(this.date);
            // console.log(moment().unix());
            return created.format('YYYY.MM.D ddd');
        },
    },
};
</script>

<style lang="scss" scoped>
#outro {
    // height: 100vh;
    border: 1px solid transparent;
    padding: 8vh 0;
    // background: url('https://miro.medium.com/max/10494/1*zMQQf10DS-hQIB6p07_kag.jpeg');
    background-position: center;
    background-size: cover;
    background-color: #eee;
    position: relative;
}
.outro-info {
    padding: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

.info-item {
    margin-bottom: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-items: center;
    h3 {
        color: #132448;
        margin-bottom: 12px;
        font-size: 36px;
        font-weight: bold;
        text-align: center;
    }
    p {
        font-size: 16px;
        font-weight: bold;
    }
}
.info-item:last-child {
    margin-bottom: 0;
}
</style>
