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
    "question": ["Hello, Welcome to Mariam's Kitchen! How may I assist you?", "Please type either: \<br \/>\<br \/>1. \<b\>A la carte\<\/b\> \<br \/> 2. <b\>Catering\<\/b\>\<br \/> 3. \<b\>Complaint\<\/b\>\<br \/> 4. \<b\>Consultation\<\/b\></li></ol>"],
    "answers": {
      "default": {
        "replies": ["I am sorry, I am not sure I understood your request. Please make use of our \<a href='https://www.mariamskitchen.nyc/order-now' title='Use our catering form to order' class='link'\>catering\<\/a\> form to place your order.", "Thank you."],
        "ending": true
      },
      "carte|a la carte|1": {
        "replies": ["Alright. What would you like to order?"]
      },
      "catering|2": {
        "replies": ["Please make use of our \<a href='https://www.mariamskitchen.nyc/order-now' title='Use our catering form to order' class='link'\>catering\<\/a\> form to place your catering order."]
      },
      "complaint|help|3": {
        "replies": ["I apologize for any inconvenience caused. Please send your complaints to <a href='mailto:eat@mariamskitchen.nyc' title='Mail us your complaints' class='link'\>eat@mariamskitchen.nyc\<\/a\>, and we will address it promptly."]
      },
      "consultation|consult|4": {
        "replies": ["Please click this \<a href='https://calendar.app.google/haCMbrEr1MVQFXvGA' target='_blank' title='Book a consultation' class='link'\>link\<\/a\> to book a consultation."],
        "ending": true
      }
    }
  },

  "1": {
    "name": "Do other thing",
    "question": ["Would you be interested in engaging in any additional activities?"],
    "answers": {
      "default": {
        "replies": ["I am sorry, I am not sure I understood that request. Please click this link to read our \<a href='https://www.mariamskitchen.nyc/#faqs' target='_blank' title='read our FAQs' class='link'\>FAQs\<\/a\>."]
      },
      "i don't|don't|no": {
        "replies": ["Well...", "I insist"]
      },
      "yes|yeah|great|sure|of|course": {
        "replies": ["What would you like to know about Mariam's Kitchen?"]
      },
      "maybe|undecided": {
        "replies": ["Maybe 🤔", "What would you like to know about Mariam's Kitchen?"]
      },
    }
  },

  "2": {
    "name": "FAQs",
    "question": ["Type your question and I will try my best to provide an answer"],
    "answers": {
      "default": {
        "replies": ["I am sorry, I am not sure I understood that request. Please click this link to read our \<a href='https://www.mariamskitchen.nyc/#faqs' target='_blank' title='read our FAQs' class='link'\>FAQs\<\/a\>."]
      },
      "want menu|customized menu|menu": {
        "replies": ["Please click this \<a href='https://mariamskitchen.nyc/s/Mariams-Kitchen-menu-1.pdf' target='_blank' title='Download our menu' class='link'\>link\<\/a\> to download our menu"]
      },
      "contact|reach you| phone| number": {
        "replies": ["475-289-6039"]
      },
      "email":{
        "replies": ["Please send your email to to <a href='mailto:eat@mariamskitchen.nyc' title='Mail us' class='link'\>eat@mariamskitchen.nyc\<\/a\>, and we will be in touch."]
      },
      "location|address|kitchen|": {
        "replies": ["Mariam's Kitchen is located at 598, Throop Avenue Brooklyn, NY."]
      },
      "new york|locate|located": {
        "replies": ["Yes, we are located in New York, specifically at Throop Avenue Brooklyn, NY."]
      },
      "buffet-style|buffet|plated meals|plate": {
        "replies": ["Yes, we offer/ Yes, we do"]
      },
      "restaurant’s hours|operation hours|working hours": {
        "replies": [""]
      },
      "prices|price|dish price|price list": {
        "replies": [""]
      },
      "payment methods|pay|cash|card": {
        "replies": [""]
      },
      "condiments?|ingredients ": {
        "replies": [""]
      },
      "opening hours|working hour|operation hour ": {
        "replies": [""]
      },
      "cuisine type|specialization|dish type": {
        "replies": [""]
      },
      "pick-up|pick up service|delivery service": {
        "replies": ["Yes, we do/ we offer only pick up services"]
      },
      "additional fee|hidden fee|terms & condition": {
        "replies": [""]
      },
      "catering services|catering": {
        "replies": ["Yes! We do weddings, parties, and private events. The minimum for a catering order is $250. <a href='mailto:eat@mariamskitchen.nyc' title='Mail us for more enquiries' class='link'\>Email\<\/a\> us to place your order."]
      },
      "indoor catering|outdoor catering": {
        "replies": [""]
      },
      "cancellation policy|catering orders|cancellation|cancel": {
        "replies": [""]
      },
      "payment|catering payment|catering service": {
        "replies": [""]
      },
      "catering service equipments|plates|utensils|equipments": {
        "replies": ["Yes, we do "]
      },
      "discounts|available|availability catering service": {
        "replies": [""]
      },
      "average cost|per person|cost": {
        "replies": [""]
      },
      "how many guests|accommodate": {
        "replies": [""]
      },
      "maximum notice|deadline|order deadline": {
        "replies": [""]
      },
      "order change|change order|add order|cancel order|catering order|last minute": {
        "replies": [""]
      },
      "maximum guests|minimum guests|guests number": {
        "replies": [""]
      },
      "vegetarian|vegan options|vegetarian option": {
        "replies": [" Yes, we do. We can customize your order based on your preferences. Kindly send us an <a href='mailto:eat@mariamskitchen.nyc' title='Mail us' class='link'\>email\<\/a\> with a detailed request."]
      },
      "popular dishes|favorite dishes": {
        "replies": [""]
      },
      "takeaway order|takeaway|takeaway service": {
        "replies": [""]
      },
      "delivery|home delivery|delivery service": {
        "replies": [""]
      },
      "how far delivery|how long delivery|delivery distance": {
        "replies": ["No more than a 20-mile radius of the Barclays Center"]
      },
      "feedback|experience|rating|rate": {
        "replies": [""]
      },
      "gluten-free|gluten-free options": {
        "replies": [""]
      },
      "desserts|signature desserts": {
        "replies": [""]
      },
      "large groups|accommodate large groups|private events": {
        "replies": [""]
      },
      "ingredients|organic ingredients|local ingredients|ingredient source": {
        "replies": [""]
      },
      "daily specials|daily promotions|promotions": {
        "replies": [""]
      },
      "gift cards|purchase gift card": {
        "replies": [""]
      },
      "food allergies|allergies": {
        "replies": [""]
      },
      "breakfast options|nigerian breakfast|traditional breakfast": {
        "replies": [""]
      },
      "news and events|updated news|upcoming events": {
        "replies": [""]
      },
      "parking space|car parking| vehicle parking| restaurant parking space": {
        "replies": [""]
      },
      "meal plan|meal customizations|diet plan| dietary modifications": {
        "replies": [""]
      },
      "seasonal menu items|limited time menu items|limited menu items": {
        "replies": [""]
      },
      "merchandise|branded products|purchase merchandise|purchase branded products": {
        "replies": [""]
      },
      "wait for|wait time|takeaway wait time": {
        "replies": [""]
      },
      "large groups| reservation for large groups|reservation required": {
        "replies": [""]
      },
      "bring wine|bring alcohol|bring beverages": {
        "replies": [""]
      },
      "children|children options|children menu": {
        "replies": [""]
      },
      "cultural dietary requirements|religious dietary requirements| accommodate requirements": {
        "replies": [""]
      },
      "first time visitors|first time|first time dishes|first-time dishes": {
        "replies": [""]
      },
      "refund|refund policy": {
        "replies": ["Mariam’s Kitchen does not offer refunds."]
      },
      "weekend order| when to order weekend special| weekend special": {
        "replies": ["Mondays 12pm – Wednesdays 11:59pm. "]
      },
      "when can order be delivered|when can order be picked up|pick up|order delivery|order delivery|order pickup": {
        "replies": ["Orders are available for delivery/pick up on Saturday between 4pm-8pm"]
      }

      // Other FAQs here, see the PDF I shared
    }
  },

  "3": {
    "name": "User feedback",
    "question": ["How would you describe Mariam's Bot?", "Like  \<b\>Awesome\<\/b\>?  \<b\>Great\<\/b\>?  \<b\>Better\<\/b\>?  \<b\>Good\<\/b\>? \<b\>Bad\<\/b\>? "],
    "answers": {
      "default": {
        "replies": ["I don't think I got that, but for me, this conversation is <b\>Great\<\/b\> 👌"]
      },
      "i don't|don't|no": {
        "replies": ["...", "For me, this conversation is <b\>Great\<\/b\> 👌"]
      },
      "awesome": {
        "replies": [" \<b\>Awesome\<\/b\>! Nice to hear 👌"]
      },
      "great": {
        "replies": [" \<b\>Great\<\/b\>! Nice to hear 👌"]
      },
      "better|best": {
        "replies": [" \<b\>Better\<\/b\>! Nice to hear 👌"]
      },
      "good": {
        "replies": [" \<b\>Good\<\/b\>! Nice to hear 👌"]
      },
      "bad": {
        "replies": [" \<b\>Bad\<\/b\>! We are working to make it better 👌"]
      }
    }
  },

  "4": {
    "name": "ending",
    "question": ["See ya! 👋"],
    "ending": true
  }
}