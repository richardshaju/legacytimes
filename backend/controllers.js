import messages from "./models/messages.js";
import user from "./models/user.js";
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from "@google/generative-ai";
export async function sigin(userData, res) {
  try {
    const id = userData.uid;
    const email = userData.email;
    const name = userData.displayName;
    const image = userData.photoURL;

    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      await user.create({ id, email, name, image });
      await messages.create({
        id,
        userMessages: [],
        aiMessages: [],
      });
      res.status(200).json({ message: "success" });
    }else{
        res.status(400).json({message: "user alerady exist"})
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getmessage(userid, res) {
  try {
    console.log("Fetching mesage...");
    const result = await messages.find({ id: userid });
    
    const {userMessages, aiMessages} = result[0]
    console.log({userMessages, aiMessages});
    res.status(200).json({userMessages, aiMessages});   
  } catch (error) {
    res.status(400).json({message: "not found"})
  }
}

async function storeUserMessage(user) {
  try {
      console.log("Storing User message...");
      const result =  await messages.findOne({ id: user.uid });
      if (result) {
        await result.userMessages.push(user.Text);
        result.save();
        console.log("User message stored successfully.");
      } else {
        console.log("Document not found for user ID:", user.uid);
      }
  } catch (error) {
    console.log(error);
  }
}
async function storeAiMessage(user, output) {
  try {
      console.log("Storing Ai message...");
      const result =  await messages.findOne({ id: user.uid });
      if (result) {
        await result.aiMessages.push(output);
        result.save();
        console.log("Ai message stored successfully.");
      } else {
        console.log("Document not found for user ID:", user.uid);
      }
  } catch (error) {
    console.log(error);
  }
}


export async function generate(user, res) {
  storeUserMessage(user)
  try {
    console.log("Genertaing...");
    console.log(user.Text);
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = 
    `If you get any input write an article the exact same format given here the aligment should be strictly follow and the article should be 100% legit if you don't know about just pass it DON'T WRITE IMAGINARY ARTICLE also add emojis in the points as bullets if nesscary:

*LEGACY TIMES*
_Something_ *Unknown*, _Something_ *New*, _But Always_ *Useful!*

*Issue No: 035*
    
*VASA:* Convert Static image it into a talking clip

Imagine bringing a picture to life! Microsoft's VASA (Visual Affective Skills Animation) is a groundbreaking AI model that can generate realistic talking faces from a single image and a short audio clip.
VASA goes beyond simple lip-syncing. It captures a wide range of facial expressions and natural head movements, creating a truly believable experience.

*What VASA Can Do:*

- *Talk with Emotion:* VASA synchronizes lip movements and facial expressions to the tone of the audio, making the generated speech feel natural and engaging.

- *Bring Pictures Alive:*  Imagine using a family photo to create a personalized greeting video message. VASA opens doors to new forms of creative expression.

*VASA:* https://www.microsoft.com/en-us/research/project/vasa-1/

(the given below lines should show exactly as same)

Feel free to ask doubts here or whenever you see us! 😉

See you next Wednesday!
*CREATE. SUSTAIN. THRIVE.*

    input: ${user.Text}`
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const output = response.text();
    console.log(output);
    res.status(200).json({output});
    storeAiMessage(user, output)
    
  } catch (error) {
    res.status(400).json({message: "not found"})
  }
}
