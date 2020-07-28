const app = new Vue({
  el: "#app",
  data: {
    messagemInicial: 'GERADOR DE QR CODE!',
    url: '',
    qrCode: new QRious({
      padding: 12,
      size: 300
    }),
    qrCodeImg: ''
  },
  methods: {
    gerarQrCode: function(urlDigitada){
      this.qrCode.value = urlDigitada;
      this.qrCodeImg = this.qrCode.toDataURL('image/jpeg');    
    }
  }
});