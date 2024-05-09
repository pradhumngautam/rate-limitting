import axios from "axios";

async function sendRequest(otp: number) {

  var options = {
    method: "POST",
    url: "http://localhost:3000/reset-password",
    headers: {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    },
    data: {
      email: "pradhumngautam2@gmail.com",
      otp: "1233444",
      newPassword: "12333444",
    },
  };

  try {
    await axios.request(options);
    console.log("done for " + otp);
  } catch (e) {}
}

async function main() {
  for (let i = 0; i < 1000000; i += 100) {
    const promises = [];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(sendRequest(i + j));
    }
    await Promise.all(promises);
  }
}

main();
