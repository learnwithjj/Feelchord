import  ChatBot  from "react-simple-chatbot";
import Require from "./Require"
import React from "react"
import styles from "../assets/scss/modal.module.css";
import { ThemeProvider } from "styled-components";
function Chat()
    {

      const theme=
      {
        background:'#c8e6c9',
        headerBgColor: '#66bb6a',
        headerfontFamily:'monospace',
        botBubbleColor:  '#399393', 
        userBubbleColor: '#4dd0e1',
      };
      const steps=[{
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
        trigger: 'senti',
      },
      {
          id:'senti',
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
        component: <Require/>,
        // asMessage: true,
        end:true,
      },
      
      
      // {
      //   id: 'end-message',
      //   message: 'Thanks for your data',
      //   end: true,
      // },

      ]
        return(
          
            <div >
              <ThemeProvider theme={theme}>
                <ChatBot headerTitle="Your mood finder" recognitionEnable={true} steps={steps}/>
                </ThemeProvider>
    </div>
        )
    }


export default Chat;  