export async function getMesssages(uid){
    try {
        const response = await fetch("http://localhost:5000/getmessage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({uid}), // Replace this with your data
        });
      } catch (error) {
        console.error("Error:", error);
      }
}