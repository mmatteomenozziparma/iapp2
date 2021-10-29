import { useRef}  from "react"; 
import react from "react";
import{Nome ,Cognomen, email} from "/componenti/Signin.js"
import emailjs from "emailjs-com";

const serviceId = "";
const templateId = "";
const userId = "";
constructor()



const sendEmail = async (Nome,email, message) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      { Nome ,email, message },
      userId
    );

    if (response.status === 200) {
      console.log("Successfully sent message.");
    }
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
  }
};

export default sendEmail;
