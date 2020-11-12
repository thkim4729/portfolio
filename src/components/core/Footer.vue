<template>
    <div class="footer">
        <v-footer absolute class="font-weight-medium" color="#0a2a43" dark>
            <v-col class="text-center" cols="12">
                <strong>KIM Taehoon Portfolio — {{ formatDate }}</strong>
                <p>
                    <a href="https://github.com/thkim4729" target="_blank">
                        <v-icon>mdi-github</v-icon>
                    </a>
                </p>
            </v-col>
        </v-footer>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'Footer',
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
.text-center {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}
</style>
