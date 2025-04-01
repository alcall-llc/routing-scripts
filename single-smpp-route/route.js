const smppConnection = smppConnections[0];
  return {
    smppConnections: [smppConnection],
    passToNextSmtpIfFail: false,
    sendViaWhatsappIfFail: true
  }
