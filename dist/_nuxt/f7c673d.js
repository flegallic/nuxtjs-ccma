(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{441:function(t,e,n){"use strict";n.r(e);n(26);var r={data:function(){return{valid:!0,show1:!1,snackbar:!1,snackbarText:"No error message",auth:{email:"",password:""},passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=8||"Password must minimums 8 characters"}],emailRules:[function(t){return!!t||"Email is required"},function(t){return/.+@.+\..+/.test(t)||"Email must be valid"}]}},methods:{reset:function(){this.$refs.form.reset()},login:function(){var t=this;this.$fire.auth.signInWithEmailAndPassword(this.auth.email,this.auth.password).catch((function(e){t.snackbarText=e.message,t.snackbar=!0})).then((function(t){$nuxt.$router.push("/")}))},forgotPassword:function(){var t=this;this.$fire.auth.sendPasswordResetEmail(this.auth.email).then((function(){t.snackbarText="reset link sent to "+t.auth.email,t.snackbar=!0})).catch((function(e){t.snackbarText=e.message,t.snackbar=!0}))}}},l=n(73),o=n(81),c=n.n(o),d=n(432),h=n(368),m=n(434),f=n(435),v=n(436),w=n(439),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"pt-16",attrs:{align:"center",justify:"center"}},[n("v-card-title",{staticClass:"pb-12"},[n("h3",[t._v("Already registered ? Sign-in")])]),t._v(" "),n("v-card-text",[n("v-form",{ref:"form",attrs:{align:"center","lazy-validation":""},on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{rules:t.emailRules,label:"Email",required:""},model:{value:t.auth.email,callback:function(e){t.$set(t.auth,"email",e)},expression:"auth.email"}}),t._v(" "),n("v-text-field",{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",rules:t.passwordRules,type:t.show1?"text":"password",label:"Password",hint:"At least 8 characters",required:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.auth.password,callback:function(e){t.$set(t.auth,"password",e)},expression:"auth.password"}}),t._v(" "),n("v-btn",{staticClass:"mr-2 white--text",attrs:{disabled:!t.valid,color:"blue darken-3",elevation:"0"},on:{click:t.login}},[t._v("sign in\n      ")]),t._v(" "),n("v-btn",{staticClass:"mr-2",attrs:{color:"#CFD8DC",elevation:"0"},on:{click:t.reset}},[t._v("Reset Form\n      ")])],1),t._v(" "),n("v-snackbar",{attrs:{color:"error"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.snackbarText)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCardText:h.a,VCardTitle:h.b,VForm:m.a,VRow:f.a,VSnackbar:v.a,VTextField:w.a})}}]);