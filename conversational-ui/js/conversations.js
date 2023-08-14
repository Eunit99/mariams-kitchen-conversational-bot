/**!
 ** Conversations.js
 ** Default Helene UI Conversations
 ** Terminologies:
 ** Message = Generic message
 ** Question = Messages that end with a question
 ** Answer = What the visitor types in response to a question
 ** Response = How the system responds to the answer, usually followed by the next question
 ** Copyright (c) Eunit 2019 - 2020
 ** Licensed under MIT License (https://github.com/Eunit99/Helene-UI/blob/master/LICENSE)
 */

//var FOO = (function() {
var questions = {
  "0": {
    "name": "Introduction",
    "intro": true,
    "question": ["Hello, Welcome to Mariam's Kitchen! How may I assist you?", "Please type either: \<br \/> 1. \<b\>A la carte\<\/b\> \<br \/> 2.<b\>Catering\<\/b\>\<br \/> 3.\<b\>Complaint\<\/b\>\<br \/> 4.\<b\>Consultation\<\/b\></li></ol>"],
    "answers": {
      "default": {
        "replies": ["I am sorry, I am not sure I understood your request. Please make use of the catering form to place your order.", "Thank you."]
      },
      "carte|a la carte|1": {
        "replies": ["carte"]
      },
      "catering|2": {
        "replies": ["catering"]
      },
      "complaint|3": {
        "replies": ["complaint"]
      },
      "consultation|4": {
        "replies": ["consultation"]
      }
    }
  },

  "1": {
    "name": "Fill Catering Form",
    "question": ["You can also embed media such as \<b\>image\<\/b\>, \<b\>video\<\/b\>, and even \<b\>song\<\/b\> using regular HTML5 tags.", "Should I show you an example?"],
    "answers": {
      "default": {
        "replies": ["I will show you an example of an embedded image 👌", "<img src='img/embedded-image.png' alt='Embedded image' class='embedded-image' />"]
      },
      "i don't|don't|no": {
        "replies": ["Why did you visit then 😡", "I will show you an example of an embedded image 👌", "<img src='img/embedded-image.png' alt='Embedded image' class='embedded-image' />"]
      },
      "yes|yeah|great|sure|of|course": {
        "replies": ["Sure", "This is an example of an embedded image 👌", "<img src='img/embedded-image.png' alt='Embedded image' class='embedded-image' />"]
      },
      "maybe|undecided": {
        "replies": ["Why did you visit then 😡", "I will show you an example of an embedded image 👌", "<img src='img/embedded-image.png' alt='Embedded image' class='embedded-image' />"]
      },
    }
  },

  "2": {
    "name": "User feedback",
    "question": ["How would you describe Helene UI?", "Like  \<b\>Awesome\<\/b\>?  \<b\>Great\<\/b\>?  \<b\>Better\<\/b\>?  \<b\>Good\<\/b\>? \<b\>Bad\<\/b\>? "],
    "answers": {
      "default": {
        "replies": ["I don't think I got that, but for me, this UI is <b\>Great\<\/b\> 👌", "Helene UI is still in development stage and needs contributors, check out the <a href='https://github.com/eunit99/helene-ui' target='_blank' title='Helene UI on Github' class='link'>Github repo<\/a> to contribute."]
      },
      "i don't|don't|no": {
        "replies": ["...", "For me, this UI is <b\>Great\<\/b\> 👌", "Helene UI is still in development stage and needs contributors, check out the <a href='https://github.com/eunit99/helene-ui' target='_blank' title='Helene UI on Github' class='link'>Github repo<\/a> to contribute."]
      },
      "awesome": {
        "replies": [" \<b\>Awesome\<\/b\>! Nice to hear 👌", "Helene UI is still in development stage and needs contributors, check out the <a href='https://github.com/eunit99/helene-ui' target='_blank' title='Helene UI on Github' class='link'>Github repo<\/a> to contribute."]
      },
      "great": {
        "replies": [" \<b\>Great\<\/b\>! Nice to hear 👌", "Helene UI is still in development stage and needs contributors, check out the <a href='https://github.com/eunit99/helene-ui' target='_blank' title='Helene UI on Github' class='link'>Github repo<\/a> to contribute."]
      },
      "better|best": {
        "replies": [" \<b\>Better\<\/b\>! Nice to hear 👌", "Helene UI is still in development stage and needs contributors, check out the <a href='https://github.com/eunit99/helene-ui' target='_blank' title='Helene UI on Github' class='link'>Github repo<\/a> to contribute."]
      },
      "good": {
        "replies": [" \<b\>Good\<\/b\>! Nice to hear 👌", "Helene UI is still in development stage and needs contributors, check out the <a href='https://github.com/eunit99/helene-ui' target='_blank' title='Helene UI on Github' class='link'>Github repo<\/a> to contribute."]
      },
      "bad": {
        "replies": [" \<b\>Bad\<\/b\>! We are working to make it better 👌"]
      }
    }
  },

  "3": {
    "name": "ending",
    "question": ["This was just a demo of Helene UI, be sure to check out the <a href='https://github.com/eunit99/helene-ui' target='_blank' title='Helene UI Docs' class='link'>Docs<\/a> to configure your own conversational user interface right away 😉", "Helene UI is licensed under the <b\>MIT License\<\/b\> and developed by <a  target='_blank' href='https://github.com/eunit99/' title='Helene UI is developed by Eunit' class='link'>Eunit<\/a>", "See ya! 👋"],
    "ending": true
  }
}