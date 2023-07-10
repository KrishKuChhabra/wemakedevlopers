"use client";

import { ChangeEvent, FC, FormEvent, useState } from "react";

interface Datas {
  Name: string;
  text: string;
  email: string;
  textarea: string;
}

const ContactUs: FC<Datas> = () => {
  const [userData, setUserData] = useState<Datas>({
    Name: "",
    text: "",
    email: "",
    textarea: "",
  });

  const postUser = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };


  const HandelSubmit=async(e:FormEvent)=>{
      e.preventDefault();
         
      const{  Name,text, email,textarea}=userData;
      if(Name && text && email &&textarea){

      
      const response= await fetch(
        'https://developerwebsite-a5be8-default-rtdb.firebaseio.com/userDataRecords.json',
        {
        method:"POST",
        headers:{
           "content-Type":"application/json",
        },
        body:JSON.stringify({
          Name,
          text,
          email,
          textarea,
        }),
      }
          
        );
        if(response){
          setUserData({
            Name: "",
            text: "",
            email: "",
            textarea: "",
          })
          alert("data stored")
        }else{
          alert("plz filll the data")
        }
      }else{
        alert("plz filll the data")
      }
  };




  return (
    <div
      className="bg-gradient-blur flex flex-row"
      style={{
        backgroundImage: "linear-gradient(to top left, #000000, #141425)",
      }}
    >
      <div className="flex flex-1 justify-center items-center p-28">
        <div className="bg-slate-500 p-4 rounded-lg w-96">
          <h3 className="text-Black py-2 text-4xl font-extrabold mb-4 text-center">
            Contact Us
          </h3>
          <form method="POST">
            <div className="flex flex-col gap-4">
              <label className="text-white">Name:</label>
              <input
                placeholder="write your name"
                name="Name"
                value={userData.Name}
                onChange={postUser}
                type="text"
                className=" w-full px-4 py-2 rounded-md"
              />

              <label className="text-white">Your Skill:</label>
              <input
                placeholder="write your Skills"
                name="text"
                value={userData.text}
                onChange={postUser}
                type="text"
                className=" w-full px-4 py-2 rounded-md"
              />

              <label className="text-white">Email:</label>
              <input
                placeholder="write your email"
                name="email"
                value={userData.email}
                onChange={postUser}
                type="email"
                className="w-full px-4 py-2 rounded-md"
              />

              <label className="text-white">Message:</label>
              <textarea
                name="textarea"
                value={userData.textarea}
                onChange={postUser}
                placeholder="write your thought about this web page.."
                className="w-full px-4 py-2 rounded-md"
                rows={4}
              ></textarea>

              <button
                type="submit"
                onClick={HandelSubmit}
                className="bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
