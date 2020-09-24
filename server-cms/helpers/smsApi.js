const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: `a0ebe7c1`,
  apiSecret: `4NE8DYlLKGhx2Itc`,
});

module.exports = {
  sendSMS({ name, noTLP, noRek }) {
    // const newSMS = {
    const from = "Jati Sejahtera";
    const to = `${noTLP}`;
    const text = `Bapak / Ibu ${name} Pencairan Telah berhasil Berhasil dikirimkan ke ${noRek}`;
    // };
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
