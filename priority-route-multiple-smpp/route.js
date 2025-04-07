const ranges = smppConnections.sort((a,b) => b.priority - b.priority);
  return {
    smppConnections: ranges,
    passToNextSmtpIfFail: true,
    sendViaWhatsappIfFail: true
  }
