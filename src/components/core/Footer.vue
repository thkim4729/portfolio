<template>
    <div class="footer">
        <v-footer absolute class="font-weight-medium footer" color="#132448">
            <div class="text-center" cols="12">
                <strong>KIM Taehoon Portfolio — {{ formatDate }}</strong>
            </div>
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
.footer {
    height: 80px;
}
.text-center {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    strong {
        margin-right: 16px;
    }
    .github {
        filter: brightness(80%);
    }
    .github:hover {
        filter: none;
    }
}
</style>
