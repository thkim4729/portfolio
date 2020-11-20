<template>
    <div class="contact">
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
            <v-col cols="12">
                <v-text-field v-model="name" placeholder="Name" solo hide-details></v-text-field
                ><!--v-model : 데이터를 저장할 변수를 선정, 하단 data에 넣는 것-->
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="email" placeholder="Email" solo hide-details></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    v-model="subject"
                    placeholder="Subject"
                    solo
                    hide-details
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <div class="scroll-view">
                    <v-textarea
                        v-model="message"
                        placeholder="Message"
                        solo
                        hide-details
                        height="200"
                    ></v-textarea>
                </div>
            </v-col>
            <v-row class="contactme_button" justify="center">
                <v-btn large color="primary" dark @click="requestSendEmail">SUBMIT</v-btn>
            </v-row>
        </v-row>
    </div>
</template>

<script defer>
import sendGrid from '@/config/sendGrid.json';
export default {
    name: 'Contact',
    data() {
        return { name: '', email: '', subject: '', message: '' };
    },
    methods: {
        requestSendEmail() {
            let reConfirm = confirm('보내시겠습니까?');
            if (reConfirm == true) {
                let body = {
                    personalizations: [
                        {
                            to: [
                                {
                                    email: 'thkim4729@naver.com',
                                },
                            ],
                            subject: this.subject,
                        },
                    ],
                    from: {
                        email: this.email,
                    },
                    content: [
                        {
                            type: 'text/plain',
                            value: this.message,
                        },
                    ],
                };
                this.$http
                    .post('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', body, {
                        headers: {
                            'content-type': 'application/json',
                            'x-rapidapi-host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
                            'x-rapidapi-key': sendGrid.key,
                            accept: 'application/json',
                            useQueryString: true,
                        },
                    })
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            } else {
                undefined;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.contact {
    height: 100vh;
    border: 1px solid transparent;
    padding: 0 20px;
    background: #0a2a43;
}
.contact-wrap {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    flex-flow: column;
    align-content: center;
}
.contact-wrap > div {
    padding: 0 0 16px 0;
}
.contact-wrap > div:last-child {
    padding: 0;
}
.contact-title {
    text-align: center;
    font-size: 4em;
    font-weight: lighter;
    margin: 80px 0;
    color: #eee;
}
.scroll-view {
    max-height: 200px;
    overflow-y: auto;
}
</style>
