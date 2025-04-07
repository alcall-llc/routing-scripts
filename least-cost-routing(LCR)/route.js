const ranges = smppConnections.sort((a,b) =>  a.price - b.price);
  return {
    smppConnections: [ranges[0]], 
    passToNextSmtpIfFail: false,
    sendViaWhatsappIfFail: true
  }
