const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: `a0ebe7c1`,
  apiSecret: `4NE8DYlLKGhx2Itc`,
});

module.exports = {
  sendSMS(noTLP) {
    const newSMS = {
      from: "Jati Sejahtera",
      to: `${noTLP}`,
      text: "Pencairan Berhasil",
    };
    nexmo.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if (responseData.messages[0]["status"] === "0") {
          console.log("Message sent successfully.");
        } else {
          console.log(`Message failed with error: ${responseData.messages[0]["error-text"]}`);
        }
      }
    });
  },
};
