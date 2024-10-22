import Prompt from "prompt-sync";
const prompt = Prompt();
import * as time from "timers";

function seedRandom() {
  const seed = Date.now();
  return seed % 100;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

const windowSize: number = parseInt(prompt("Enter window size: "));
const totalFrames: number = parseInt(prompt("Enter total number of frames: "));

// Initialize variables
let ackRecv: boolean[] = new Array(totalFrames + 5).fill(false);
let framesToSend: number[] = [];

for (let i = 0; i < Math.min(windowSize, totalFrames); i++) {
  framesToSend.push(i);
}

while (framesToSend.length > 0) {
  let sentFrames: string[] = [];
  let ackResp: string[] = [];

  // Send frames and receive ACK/NAK
  for (let frame of framesToSend) {
    sentFrames.push(`Sending frame ${frame} to receiver`);
    let isSuccess = 1 - Math.floor(getRandomInt(4) / 3);
    if (isSuccess) {
      ackResp.push(`ACK for frame ${frame}`);
      ackRecv[frame] = true;
    } else {
      ackResp.push(`NAK for frame ${frame}`);
    }
  }

  let sentIndex = 0;
  let ackIndex = 0;

  for (let i = 0; i < 2 * windowSize; i++) {
    if (
      (getRandomInt(2) === 1 ||
        ackIndex === windowSize ||
        sentIndex === ackIndex) &&
      sentIndex < sentFrames.length
    ) {
      console.log(sentFrames[sentIndex]);
      sentIndex++;
    } else if (ackIndex < ackResp.length) {
      console.log(ackResp[ackIndex]);
      ackIndex++;
      ``;
    } else {
      break;
    }
    time.setTimeout(() => {}, 1000);
  }

  let nextFramesToSend: number[] = [];

  for (let frame of framesToSend) {
    if (!ackRecv[frame]) {
      nextFramesToSend.push(frame);
    }
  }

  let nextFrameIndex = framesToSend[framesToSend.length - 1] + 1;

  while (nextFramesToSend.length < windowSize && nextFrameIndex < totalFrames) {
    if (!ackRecv[nextFrameIndex]) {
      nextFramesToSend.push(nextFrameIndex);
    }
    nextFrameIndex++;
  }

  framesToSend = [...nextFramesToSend];
}

console.log("All frames are sent.");
