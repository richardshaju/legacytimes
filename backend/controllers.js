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
    
Roobadge VW  : Transforming the Volkswagen Badge into a protective audio shield


-🚀 *Goal :* Reduce kangaroo-vehicle accidents, a major concern in Australia accounting for 90% of wildlife collisions.
-🚀 *Function :* Act as an audio deterrent by emitting sounds tailored to specific kangaroo species based on location.
-🚀 *Technology :* RooBadge replaces the Volkswagen badge and integrates a speaker.
Connects to an in-car app that utilizes GPS and kangaroo distribution data.
Emits a "focused beam" of high-frequency sounds combining natural and artificial noises to alert kangaroos.

*⚒ Development :* Collaborations with University of Melbourne and wildlife rescue organization WIRES.
Initial testing focused on Eastern Grey Kangaroos, with plans to expand to other species.
Tested sounds on kangaroos in controlled environments and later on vehicles in high-risk areas.

*⚠ Species-optimisation :* With multiple species of kangaroo found across Australia, all of which react differently to different sounds, producing a single sound to deter them all is nearly impossible. So, in a world-first innovation, RooBadge uses machine learning to compare its GPS coordinates against kangaroo distribution data to optimise its sound, deterring the kangaroo species that inhabit that location.

*🌟 Features :* Real-time collision data collection
Geo Activation
Plug-and-play installation

*🔮 Future Potential :* Potential adaptation for deterring other wildlife in different regions, with deer being a possibility.


*Learn more through :*  https://youtu.be/W9klRlKoEQk?si=EursIN6qJN8G12gP


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
