import  ChatBot  from "react-simple-chatbot";
import Review from "./Review"
import React from "react"

function Chat()
    {
        return(
            <div>
                <ChatBot  
      steps={[
        {
          id: '1',
          message: 'What is your name?',
          trigger: 'name',
        },
        {
          id: 'name',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}! How are you feeling today?',
          trigger: 'data',
        },
        {
            id:'data',
            user:true,
            trigger:'suggest'
        },
        {
          id: 'suggest',
          message: 'Let me suggest some songs for you',
          trigger: 'review',
        },
        
        {
          id: 'review',
          component: <Review />,
          asMessage: true,
          trigger: 'end-message',
        },
        
        
        {
          id: 'end-message',
          message: 'Thanks for your data',
          end: true,
        },
      ]}
    />
    </div>
        )
    }


export default Chat;    