<template>
    <div class="skill">
        <p><span>Skill</span></p>
        <v-row class="skill-list" justify="center" align="center" no-gutters>
            <div class="skill-item">
                <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="5"
                    :value="value"
                    color="#132448"
                >
                    {{ value }}
                </v-progress-circular>
                <div class="skill-title">HTML</div>
            </div>
            <div class="skill-item">
                <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="5"
                    :value="value"
                    color="#132448"
                >
                    {{ value }}
                </v-progress-circular>
                <div class="skill-title">CSS</div>
            </div>
            <div class="skill-item">
                <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="5"
                    :value="value"
                    color="#132448"
                >
                    {{ value }}
                </v-progress-circular>
                <div class="skill-title">Javascript</div>
            </div>
            <div class="skill-item">
                <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="5"
                    :value="value"
                    color="#132448"
                >
                    {{ value }}
                </v-progress-circular>
                <div class="skill-title">Vue.js</div>
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Skill',
    components: {},
    data() {
        return {
            interval: {},
            value: 0,
        };
    },
    computed: {},
    beforeDestroy() {
        clearInterval(this.interval);
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.value === 100) {
                return (this.value = 0);
            }
            this.value += 10;
        }, 1000);
    },
};
</script>

<style lang="scss">
.skill {
    font-weight: bold;
    margin-bottom: 30px;
    color: black;
    font-size: 20px;
    p {
        margin-bottom: 30px;
        span {
            border-bottom: 2px solid #132448;
        }
    }
    ul {
        li {
            font-size: 14px;
            font-weight: normal;
            margin-bottom: 10px;
            span {
                margin-left: 20px;
                letter-spacing: -1px;
            }
        }
    }
    .skill-list {
        .skill-item {
            margin-right: 50px;
            .skill-title {
                color: black;
                text-align: center;
            }
        }
    }
    .v-progress-circular__info {
        color: black;
    }
}
</style>
