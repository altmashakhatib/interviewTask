<template>
    <v-card class="footer-outer">
      <div class="footer-inner">
        <div class="footer-about">
          <div>About us</div>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
          <div>Contact Us</div>
        </div>
        <div class="footer-social">
          <v-icon size="24">mdi-linkedin</v-icon>
          <v-icon>mdi-facebook</v-icon>
          <v-icon size="24">mdi-youtube</v-icon>
        </div>
      </div>
    </v-card>
  </template>
  
  <style scoped>
  .footer-outer {
    position: relative;
    bottom: 0;
    background-color: #2675aa;
    color: #fff;
    width: 100%;
    border-radius: 0;
  }
  .footer-inner {
    display: flex;
    margin: 16px 32px;
    justify-content: space-between;
  }
  .footer-about {
    display: flex;
    width: 35%;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 767px) {
      display: block;
    }
    @media(min-width: 768px) and (max-width: 1024px) {
      width: 65%;
    }
  }
  .footer-social {
      display: flex;
      justify-content: space-between;
      width: 10%;
      @media(max-width: 767px) {
        width: 40%;
      }
      @media(min-width: 768px) and (max-width: 1024px) {
      width: 15%;
    }
  }
  </style>
  