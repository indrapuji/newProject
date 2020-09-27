const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  // apiKey: "a0ebe7c1",
  // apiSecret: "4NE8DYlLKGhx2Itc",
  apiKey: "41be85e5",
  apiSecret: "4VxXV57PTay7yBUX",
});

module.exports = {
  sendSMS({ name, noTLP, noRek }) {
    function convertnumber(noTLP) {
      var newNumber = "62";
      if (noTLP[0] === "0") {
        for (let i = 0; i < noTLP.length - 1; i++) {
          newNumber += noTLP[i + 1];
        }
      } else {
        newNumber = noTLP;
      }
      return newNumber;
    }

    const from = "Jati Sejahtera";
    const to = `${convertnumber(noTLP)}`;
    const text = `Bapak / Ibu ${name} Pencairan Telah berhasil Berhasil dikirimkan ke ${noRek}`;

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
