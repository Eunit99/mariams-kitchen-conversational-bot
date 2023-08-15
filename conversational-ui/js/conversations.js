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
      "Location|Address|Kitchen|": {
        "replies": ["Mariam's Kitchen is located at 598, Throop Avenue Brooklyn, NY."]
      },
      "New York|Locate|Located": {
        "replies": ["Yes, we are located in New York, specifically at Throop Avenue Brooklyn, NY."]
      },
      "Buffet-style|Buffet|Plated Meals|Plate": {
        "replies": ["Yes, we offer/ Yes, we do"]
      },
      "Restaurant’s hours|Operation Hours|Working Hours": {
        "replies": [""]
      },
      "Prices|Price|Dish Price|Price List": {
        "replies": [""]
      },
      "Payment methods|Pay|Cash|Card": {
        "replies": [""]
      },
      "Condiments?|Ingredients ": {
        "replies": [""]
      },
      "Opening hours|Working Hour|Operation Hour ": {
        "replies": [""]
      },
      "Cuisine Type|Specialization|Dish Type": {
        "replies": [""]
      },
      "Pick-up|Pick up service|Delivery service": {
        "replies": ["Yes, we do/ we offer only pick up services"]
      },
      "Additional fee|Hidden fee|Terms & Condition": {
        "replies": [""]
      },
      "Catering services|Catering": {
        "replies": ["Yes! We do weddings, parties, and private events. The minimum for a catering order is $250. Email us at eat@mariamskitchen.nyc to place your order."]
      },
      "Indoor Catering|Outdoor Catering": {
        "replies": [""]
      },
      "Cancellation policy|Catering orders|Cancellation|Cancel": {
        "replies": [""]
      },
      "Payment|Catering Payment|Catering Service": {
        "replies": [""]
      },
      "Catering service equipments|Plates|Utensils|Equipments": {
        "replies": ["Yes, we do "]
      },
      "Discounts|Available|Availability catering service": {
        "replies": [""]
      },
      "Average cost|Per person|Cost": {
        "replies": [""]
      },
      "How many guests|Accommodate": {
        "replies": [""]
      },
      "Maximum notice|Deadline|Order Deadline": {
        "replies": [""]
      },
      "Order Change|Change Order|Add Order|Cancel Order|Catering Order|Last minute": {
        "replies": [""]
      },
      "Maximum Guests|Minimum Guests|Guests Number": {
        "replies": [""]
      },
      "Vegetarian|Vegan options|Vegetarian Option": {
        "replies": [" Yes, we do. We can customize your order based on your preferences. Kindly send us an email (eat@mariamskitchen.nyc) with a detailed request."]
      },
      "Popular Dishes|Favorite Dishes": {
        "replies": [""]
      },
      "Takeaway order|Takeaway|Takeaway Service": {
        "replies": [""]
      },
      "Delivery|Home Delivery|Delivery Service": {
        "replies": [""]
      },
      "How far delivery|How long delivery|Delivery distance": {
        "replies": ["No more than a 20-mile radius of the Barclays Center"]
      },
      "Feedback|Experience|Rating|Rate": {
        "replies": [""]
      },
      "Gluten-free|Gluten-free options": {
        "replies": [""]
      },
      "Desserts|Signature Desserts": {
        "replies": [""]
      },
      "Large Groups|Accommodate Large Groups|Private events": {
        "replies": [""]
      },
      "Ingredients|Organic Ingredients|Local Ingredients|Ingredient Source": {
        "replies": [""]
      },
      "Daily Specials|Daily Promotions|Promotions": {
        "replies": [""]
      },
      "Gift Cards|Purchase Gift Card": {
        "replies": [""]
      },
      "Food allergies|Allergies": {
        "replies": [""]
      },
      "Breakfast Options|Nigerian Breakfast|Traditional Breakfast": {
        "replies": [""]
      },
      "News and events|Updated News|Upcoming Events": {
        "replies": [""]
      },
      "Parking Space|Car Parking| Vehicle Parking| Restaurant Parking Space": {
        "replies": [""]
      },
      "Meal Plan|Meal customizations|diet plan| Dietary modifications": {
        "replies": [""]
      },
      "Seasonal Menu Items|Limited Time Menu Items|Limited Menu Items": {
        "replies": [""]
      },
      "Merchandise|Branded Products|Purchase Merchandise|Purchase Branded Products": {
        "replies": [""]
      },
      "Wait for|Wait time|Takeaway Wait Time": {
        "replies": [""]
      },
      "Large groups| reservation for large groups|reservation required": {
        "replies": [""]
      },
      "Bring Wine|Bring Alcohol|Bring Beverages": {
        "replies": [""]
      },
      "Children|Children Options|Children Menu": {
        "replies": [""]
      },
      "Cultural Dietary Requirements|Religious dietary requirements| Accommodate Requirements": {
        "replies": [""]
      },
      "First Time Visitors|First Time|First Time dishes|first-time dishes": {
        "replies": [""]
      },
      "Refund|Refund policy": {
        "replies": ["Mariam’s Kitchen does not offer refunds."]
      },
      "Weekend Order| When to order weekend special| weekend special": {
        "replies": ["Mondays 12pm – Wednesdays 11:59pm. "]
      },
      "When can order be delivered|When can order be picked up|pick up|order delivery|order delivery|order pickup": {
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