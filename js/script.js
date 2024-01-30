const app = new Vue({
  el: "#app",
  data: {
    messagemInicial: 'GERADOR DE QR CODE',
    url: '',
    qrCode: new QRious({
      padding: 12,
      size: 300
    }),
    qrCodeImg: ''
  },
  methods: {
    gerarQrCode() {
      this.qrCode.value = this.url;
      this.qrCodeImg = this.qrCode.toDataURL('image/jpeg');    
    }
  }
});