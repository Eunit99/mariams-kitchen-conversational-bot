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
    0: {
        name: "Introduction",
        intro: true,
        question: [
            "Hello, Welcome to Mariam's Kitchen! How may I assist you?",
            "Please type either:<br />1. <b>A la carte</b><br /> 2. <b>Catering</b><br /> 3. <b>Consultation</b></li> <br /> 4. <b>Feedback</b></ol>",
        ],
        answers: {
            default: {
                replies: [
                    "I am sorry, I am not sure I understood your request. Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/order-now' title='Use our catering form to order' class='link'>catering form</a> to place your order.",
                    "Thank you.",
                ],
                ending: true,
            },
            "carte|a la carte|one|1": {
                replies: ["Great! Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/menu'>menu</a> page to choose your dishes."],
            },
            "catering|two|2": {
                replies: [
                    "Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/order-now' title='Use our catering form to order' class='link'>catering form</a> to place your catering order.",
                ],
            },
            "consultation|consult|four|3": {
                replies: [
                    "Please click this <a target='_blank' href='https://calendar.app.google/haCMbrEr1MVQFXvGA' title='Book a consultation' class='link'>link</a> to book a consultation.",
                ],
                ending: true,
            },
            "complaint|help|feedback|suggestion|suggestions|three|4": {
                replies: [
                    "I apologize for any inconvenience caused. Please send your feedback or complaints to <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us your complaints' class='link'>eat@mariamskitchen.nyc</a>, and we will address it promptly.",
                ],
            },
        },
    },

    1: {
        name: "Do other thing",
        question: [
            "Would you be interested in anything else?", "Please type <b>Yes</b> or <b>No</b>.",
        ],
        answers: {
            default: {
                replies: [
                    "I am sorry, I am not sure I understood that request. Please read our <a target='_blank' href='https://www.mariamskitchen.nyc/faqs' title='read our FAQs' class='link'>FAQs</a>.",
                ],
            },

            "please tell me": {
                replies: ["Please make use of FAQs to learn more. Please read our <a target='_blank' href='https://www.mariamskitchen.nyc/faqs' title='read our FAQs' class='link'>FAQs</a>."],
            },
            "i don't|don't|no": {
                replies: ["Thank you."],
            },
            "yes|yeah|great|sure|of|course": {
                replies: ["What would you like to know about Mariam's Kitchen?"],
            },
            "maybe|undecided": {
                replies: [
                    "Maybe 🤔",
                    "What would you like to know about Mariam's Kitchen?",
                ],
            },
            "carte|a la carte|1": {
                replies: ["Great! Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/menu'>menu</a> page to choose your dishes."],
            },
            "catering|2": {
                replies: [
                    "Please find more information about catering on our <a target='_blank' href='https://www.mariamskitchen.nyc/order-now' title='Use our catering form to order' class='link'>catering form</a> here.",
                ],
            },
            "consultation|consult|3": {
                replies: [
                    "Please click this <a target='_blank' href='https://calendar.app.google/haCMbrEr1MVQFXvGA' title='Book a consultation' class='link'>link</a> to book a consultation.",
                ],
            },
            "complaint|help|4": {
                replies: [
                    "I apologize for any inconvenience caused. Please send your feedback or complaints to <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us your complaints' class='link'>eat@mariamskitchen.nyc</a>, and we will address it promptly.",
                ],
            }
        },
    },

    2: {
        name: "FAQs",
        question: [
            "If you have any questions, please type your question and I will try my best to provide an answer",
        ],
        answers: {
            default: {
                replies: [
                    "I am sorry, I am not sure I understood that request. Please read our <a target='_blank' href='https://www.mariamskitchen.nyc/faqs' title='read our FAQs' class='link'>FAQs</a>.",
                ],
            },
            "carte|a la carte|1": {
                replies: ["Great! Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/menu'>menu</a> page to choose your dishes."],
            },
            "catering|2": {
                replies: [
                    "Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/order-now' title='Use our catering form to order' class='link'>catering form</a> to place your catering order.",
                ],
            },
            "consultation|consult|3": {
                replies: [
                    "Please click this <a target='_blank' href='https://calendar.app.google/haCMbrEr1MVQFXvGA' title='Book a consultation' class='link'>link</a> to book a consultation.",
                ],
            },
            "complaint|help|4": {
                replies: [
                    "I apologize for any inconvenience caused. Please send your feedback or complaints to <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us your complaints' class='link'>eat@mariamskitchen.nyc</a>, and we will address it promptly.",
                ],
            },
            "want menu|customized menu|menu": {
                replies: [
                    "Please click this <a target='_blank' href='https://mariamskitchen.nyc/s/Mariams-Kitchen-menu-1.pdf' title='Download our menu' class='link'>link</a> to download our menu",
                ],
            },
            "contact|reach you|phone|number": {
                replies: ["You can contact Mariam's Kitchen customer care through this number <a href='tel:475-289-6039'>475-289-6039</a>"],
            },
            "email": {
                replies: [
                    "Please send your email to to <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us' class='link'>eat@mariamskitchen.nyc</a>, and we will be in touch.",
                ],
            },
            "location|address|new york|locate|located": {
                replies: [
                    "Mariam's Kitchen is located at 598, Throop Avenue Brooklyn, NY.",
                ],
            },
            "buffet-style|buffet|plated meals|plate": {
                replies: ["Yes, we offer buffet-style", "Please find more information our <a target='_blank' href='https://www.mariamskitchen.nyc/order-now' title='Use our catering form to order' class='link'>catering form</a>."],
            },
            "i want to order|i would like to order|i am ordering|ordering": {
                replies: ["Great! Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/menu'>menu</a> page to choose your dishes.", "Also, take a look at our <a target='_blank' href='https://mariamskitchen.nyc/s/Mariams-Kitchen-menu-1.pdf' title='Download our menu' class='link'>menu</a> for other options to choose from. "],
            },
            "hours|operation hours|working hours|are you open|open": {
                replies: ["Wednesdays-Saturdays 1pm-10pm"],
            },
            "prices|price|dish price|price list": {
                replies: [
                    "Please click this <a target='_blank' href='https://mariamskitchen.nyc/s/Mariams-Kitchen-menu-1.pdf' title='Download our menu' class='link'>link</a> to download our menu which has all the prices listed.",
                ],
            },
            "payment methods|pay|cash|card": {
                replies: ["We accept cash, credit cards and Zelle payments."],
            },
            "condiments?|ingredients ": {
                replies: [
                    "Yes, requesting extra condiments will incur an additional cost.",
                ],
            },
            "opening hours|working hour|operation hour ": {
                replies: [""],
            },
            "cuisine type|specialization|dish type": {
                replies: ["We specialize in Nigerian and American cuisine."],
            },
            "pick-up|pick up service|delivery service": {
                replies: ["Yes, we do", "We offer only pick up services"],
            },
            "additional fee|hidden fee|terms & condition": {
                replies: ["Yes, there is a tax applied to all orders, which is 8.8%"],
            },
            "catering services": {
                replies: [
                    "We do catering services. We do weddings, parties, and private events. The minimum for a catering order is $250. <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us for more enquiries' class='link'>Email us</a> to place your order.",
                ],
            },
            "indoor catering|outdoor catering": {
                replies: [""],
            },
            "cancellation policy|catering orders|cancellation|cancel": {
                replies: [
                    "Cancellation of catering orders requires a non-refundable deposit to confirm the order.",
                ],
            },
            "payment|catering payment|catering service": {
                replies: [""],
            },
            "catering service equipments|plates|utensils|equipments": {
                replies: ["No, we do not provide equipment"],
            },
            "discounts|available|availability catering service": {
                replies: [
                    "No, there are no discounts available for our catering service.",
                ],
            },
            "average cost|per person|cost": {
                replies: ["The average cost per person is between $25 and $35"],
            },
            "how many guests|accommodate": {
                replies: ["We can accommodate from 20 to 1000 guests."],
            },
            "maximum notice|deadline|order deadline": {
                replies: [
                    "We require a minimum of 3 Business days' notice. Any order placed with less notice will incur a 50% late service fee.",
                ],
            },
            "order change|change order|add order|cancel order|catering order|last minute": {
                replies: [""],
            },
            "maximum guests|minimum guests|guests number": {
                replies: [""],
            },
            "vegetarian|vegan options|vegetarian option": {
                replies: [
                    " Yes, we do. We can customize your order based on your preferences. Kindly send us an <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us' class='link'>email</a> with a detailed request.",
                ],
            },
            "popular dishes|favorite dishes": {
                replies: [""],
            },
            "takeaway order|takeaway|takeaway service": {
                replies: [""],
            },
            "delivery|home delivery|delivery service": {
                replies: ["Yes, we offer delivery services."],
            },
            "how far delivery|how long delivery|delivery distance": {
                replies: [
                    "We deliver within all 5 boroughs of New York city and New Jersey.",
                ],
            },
            "feedback|experience|rating|rate": {
                replies: [
                    "You can share your feedback by leaving a review on Google or by sending us an email at <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us' class='link'>email</a> ",
                ],
            },
            "gluten-free|gluten-free options": {
                replies: [
                    "Yes, we do offer gluten-free options, although the selection is limited",
                ],
            },
            "desserts|signature desserts": {
                replies: [""],
            },
            "large groups|accommodate large groups|private events": {
                replies: [
                    "Yes, we do. Let’s schedule a consultation to discuss the logistics of your event in more detail.  <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us' class='link'>email</a>",
                ],
            },
            "ingredients|organic ingredients|local ingredients|ingredient source": {
                replies: [""],
            },
            "daily specials|daily promotions|promotions": {
                replies: [""],
            },
            "gift cards|purchase gift card": {
                replies: [""],
            },
            "food allergies|allergies": {
                replies: [
                    "Yes, we can accommodate food allergies, but please make sure to inform us of any allergies when placing your food order.",
                ],
            },
            "breakfast options|nigerian breakfast|traditional breakfast": {
                replies: ["Yes, we do"],
            },
            "news and events|updated news|upcoming events": {
                replies: [
                    "Please subscribe to our newsletter on our website to stay updated.",
                ],
            },
            "parking space|car parking|vehicle parking|restaurant parking space": {
                replies: [
                    "Mariam’s Kitchen is a pickup (takeout location). There is no parking accommodation available as we don’t have seating.",
                ],
            },
            "meal plan|meal customizations|diet plan|dietary modifications": {
                replies: [
                    "Yes, you can. However, please note that some modifications may incur an additional charge.",
                ],
            },
            "seasonal menu items|limited time menu items|limited menu items": {
                replies: [
                    "Please keep an eye out for our seasonal or limited-time menu items.",
                ],
            },
            "merchandise|branded products|purchase merchandise|purchase branded products": {
                replies: [""],
            },
            "wait for|wait time|takeaway wait time": {
                replies: [""],
            },
            "large groups|reservation for large groups|reservation required": {
                replies: [""],
            },
            "bring wine|bring alcohol|bring beverages": {
                replies: [""],
            },
            "children|children options|children menu": {
                replies: [""],
            },
            "cultural dietary requirements|religious dietary requirements|accommodate requirements": {
                replies: [
                    "Yes, we do. Please schedule a consultation to discuss this.",
                ],
            },
            "first time visitors|first time|first time dishes|first-time dishes": {
                replies: [""],
            },
            "refund|refund policy": {
                replies: ["Mariam’s Kitchen does not offer refunds."],
            },
            "weekend order|when to order weekend special|weekend special": {
                replies: ["You can place your orders between Mondays 12pm – Wednesdays 11:59pm."],
            },
            "when can order be delivered|when can order be picked up|pick up|order delivery|order delivery|order pickup": {
                replies: [
                    "Orders are available for delivery/pick up on Saturday between 4pm-8pm",
                ],
            },
            "no question|no questions| i don\'t have question|thank you": {
                replies: ["No worries if you do not have any questions at the moment."],
            },
        },
    },

    //! Copy-paste FAQs `answers` here !//
    3: {
        name: "Anything Else",
        question: [
            "Is there anything else I would help you with?",
            "Please type <b>Yes</b> or <b>No</b>.",
        ],
        //! FAQs `answers` should go below !//


        answers: {
            default: {
                replies: [
                    "I am sorry, I am not sure I understood that request. Please read our <a target='_blank' href='https://www.mariamskitchen.nyc/faqs' title='read our FAQs' class='link'>FAQs</a>.",
                ],
            },
            "carte|a la carte|1": {
                replies: ["Great! Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/menu'>menu</a> page to choose your dishes."],
            },
            "catering|2": {
                replies: [
                    "Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/order-now' title='Use our catering form to order' class='link'>catering form</a> to place your catering order.",
                ],
            },
            "complaint|help|4": {
                replies: [
                    "I apologize for any inconvenience caused. Please send your feedback or complaints to <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us your complaints' class='link'>eat@mariamskitchen.nyc</a>, and we will address it promptly.",
                ],
            },
            "consultation|consult|3": {
                replies: [
                    "Please click this <a target='_blank' href='https://calendar.app.google/haCMbrEr1MVQFXvGA' title='Book a consultation' class='link'>link</a> to book a consultation.",
                ],
            },
            "want menu|customized menu|menu": {
                replies: [
                    "Please click this <a target='_blank' href='https://mariamskitchen.nyc/s/Mariams-Kitchen-menu-1.pdf' title='Download our menu' class='link'>link</a> to download our menu",
                ],
            },
            "contact|reach you|phone|number": {
                replies: ["You can contact Mariam's Kitchen customer care through this number <a href='tel:475-289-6039'>475-289-6039</a>"],
            },
            "email": {
                replies: [
                    "Please send your email to to <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us' class='link'>eat@mariamskitchen.nyc</a>, and we will be in touch.",
                ],
            },
            "location|address|new york|locate|located": {
                replies: [
                    "Mariam's Kitchen is located at 598, Throop Avenue Brooklyn, NY.",
                ],
            },
            "buffet-style|buffet|plated meals|plate": {
                replies: ["Yes, we offer buffet-style", "Please find more information our <a target='_blank' href='https://www.mariamskitchen.nyc/order-now' title='Use our catering form to order' class='link'>catering form</a>."],
            },
            "i want to order|i would like to order|i am ordering|ordering": {
                replies: ["Great! Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/menu'>menu</a> page to choose your dishes.", "Also, take a look at our <a target='_blank' href='https://mariamskitchen.nyc/s/Mariams-Kitchen-menu-1.pdf' title='Download our menu' class='link'>menu</a> for other options to choose from. "],
            },
            "hours|operation hours|working hours|are you open|open": {
                replies: ["Wednesdays-Saturdays 1pm-10pm"],
            },
            "prices|price|dish price|price list": {
                replies: [
                    "Please click this <a target='_blank' href='https://mariamskitchen.nyc/s/Mariams-Kitchen-menu-1.pdf' title='Download our menu' class='link'>link</a> to download our menu which has all the prices listed.",
                ],
            },
            "payment methods|pay|cash|card": {
                replies: ["We accept cash, credit cards and Zelle payments."],
            },
            "condiments?|ingredients ": {
                replies: [
                    "Yes, requesting extra condiments will incur an additional cost.",
                ],
            },
            "opening hours|working hour|operation hour ": {
                replies: [""],
            },
            "cuisine type|specialization|dish type": {
                replies: ["We specialize in Nigerian and American cuisine."],
            },
            "pick-up|pick up service|delivery service": {
                replies: ["Yes, we do", "We offer only pick up services"],
            },
            "additional fee|hidden fee|terms & condition": {
                replies: ["Yes, there is a tax applied to all orders, which is 8.8%"],
            },
            "catering services": {
                replies: [
                    "We do catering services. We do weddings, parties, and private events. The minimum for a catering order is $250. <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us for more enquiries' class='link'>Email us</a> to place your order.",
                ],
            },
            "indoor catering|outdoor catering": {
                replies: [""],
            },
            "cancellation policy|catering orders|cancellation|cancel": {
                replies: [
                    "Cancellation of catering orders requires a non-refundable deposit to confirm the order.",
                ],
            },
            "payment|catering payment|catering service": {
                replies: [""],
            },
            "catering service equipments|plates|utensils|equipments": {
                replies: ["No, we do not provide equipment"],
            },
            "discounts|available|availability catering service": {
                replies: [
                    "No, there are no discounts available for our catering service.",
                ],
            },
            "average cost|per person|cost": {
                replies: ["The average cost per person is between $25 and $35"],
            },
            "how many guests|accommodate": {
                replies: ["We can accommodate from 20 to 1000 guests."],
            },
            "maximum notice|deadline|order deadline": {
                replies: [
                    "We require a minimum of 3 Business days' notice. Any order placed with less notice will incur a 50% late service fee.",
                ],
            },
            "order change|change order|add order|cancel order|catering order|last minute": {
                replies: [""],
            },
            "maximum guests|minimum guests|guests number": {
                replies: [""],
            },
            "vegetarian|vegan options|vegetarian option": {
                replies: [
                    " Yes, we do. We can customize your order based on your preferences. Kindly send us an <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us' class='link'>email</a> with a detailed request.",
                ],
            },
            "popular dishes|favorite dishes": {
                replies: [""],
            },
            "takeaway order|takeaway|takeaway service": {
                replies: [""],
            },
            "delivery|home delivery|delivery service": {
                replies: ["Yes, we offer delivery services."],
            },
            "how far delivery|how long delivery|delivery distance": {
                replies: [
                    "We deliver within all 5 boroughs of New York city and New Jersey.",
                ],
            },
            "feedback|experience|rating|rate": {
                replies: [
                    "You can share your feedback by leaving a review on Google or by sending us an email at <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us' class='link'>email</a> ",
                ],
            },
            "gluten-free|gluten-free options": {
                replies: [
                    "Yes, we do offer gluten-free options, although the selection is limited",
                ],
            },
            "desserts|signature desserts": {
                replies: [""],
            },
            "large groups|accommodate large groups|private events": {
                replies: [
                    "Yes, we do. Let’s schedule a consultation to discuss the logistics of your event in more detail.  <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us' class='link'>email</a>",
                ],
            },
            "ingredients|organic ingredients|local ingredients|ingredient source": {
                replies: [""],
            },
            "daily specials|daily promotions|promotions": {
                replies: [""],
            },
            "gift cards|purchase gift card": {
                replies: [""],
            },
            "food allergies|allergies": {
                replies: [
                    "Yes, we can accommodate food allergies, but please make sure to inform us of any allergies when placing your food order.",
                ],
            },
            "breakfast options|nigerian breakfast|traditional breakfast": {
                replies: ["Yes, we do"],
            },
            "news and events|updated news|upcoming events": {
                replies: [
                    "Please subscribe to our newsletter on our website to stay updated.",
                ],
            },
            "parking space|car parking|vehicle parking|restaurant parking space": {
                replies: [
                    "Mariam’s Kitchen is a pickup (takeout location). There is no parking accommodation available as we don’t have seating.",
                ],
            },
            "meal plan|meal customizations|diet plan|dietary modifications": {
                replies: [
                    "Yes, you can. However, please note that some modifications may incur an additional charge.",
                ],
            },
            "seasonal menu items|limited time menu items|limited menu items": {
                replies: [
                    "Please keep an eye out for our seasonal or limited-time menu items.",
                ],
            },
            "merchandise|branded products|purchase merchandise|purchase branded products": {
                replies: [""],
            },
            "wait for|wait time|takeaway wait time": {
                replies: [""],
            },
            "large groups|reservation for large groups|reservation required": {
                replies: [""],
            },
            "bring wine|bring alcohol|bring beverages": {
                replies: [""],
            },
            "children|children options|children menu": {
                replies: [""],
            },
            "cultural dietary requirements|religious dietary requirements|accommodate requirements": {
                replies: [
                    "Yes, we do. Please schedule a consultation to discuss this.",
                ],
            },
            "first time visitors|first time|first time dishes|first-time dishes": {
                replies: [""],
            },
            "refund|refund policy": {
                replies: ["Mariam’s Kitchen does not offer refunds."],
            },
            "weekend order|when to order weekend special|weekend special": {
                replies: ["You can place your orders between Mondays 12pm – Wednesdays 11:59pm."],
            },
            "when can order be delivered|when can order be picked up|pick up|order delivery|order delivery|order pickup": {
                replies: [
                    "Orders are available for delivery/pick up on Saturday between 4pm-8pm",
                ],
            },
            "no question|no questions| i don\'t have question|thank you": {
                replies: ["No worries if you do not have any questions at the moment."],
            },
        },
    },

    4: {
        name: "User feedback",
        question: [
            "How would you describe Mariam's Kitchen Bot?",
            "Like  <b>Awesome</b>?  <b>Great</b>?  <b>Better</b>?  <b>Good</b>? <b>Bad</b>? ",
        ],
        answers: {
            default: {
                replies: [
                    "I don't think I got that, but for me, this conversation is <b>Great</b> 👌",
                ],
            },
            "carte|a la carte|1": {
                replies: ["Great! Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/menu'>menu</a> page to choose your dishes."],
            },
            "catering|2": {
                replies: [
                    "Please make use of our <a target='_blank' href='https://www.mariamskitchen.nyc/order-now' title='Use our catering form to order' class='link'>catering form</a> to place your catering order.",
                ],
            },
            "complaint|help|4": {
                replies: [
                    "I apologize for any inconvenience caused. Please send your feedback or complaints to <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us your complaints' class='link'>eat@mariamskitchen.nyc</a>, and we will address it promptly.",
                ],
            },
            "consultation|consult|3": {
                replies: [
                    "Please click this <a target='_blank' href='https://calendar.app.google/haCMbrEr1MVQFXvGA' title='Book a consultation' class='link'>link</a> to book a consultation.",
                ],
            },
            "i don't|don't|no": {
                replies: ["...", "For me, this conversation is <b>Great</b> 👌"],
            },
            awesome: {
                replies: ["<b>Awesome</b>! Nice to hear 👌"],
            },
            great: {
                replies: ["<b>Great</b>! Nice to hear 👌"],
            },
            "better|best": {
                replies: ["<b>Better</b>! Nice to hear 👌"],
            },
            good: {
                replies: ["<b>Good</b>! Nice to hear 👌"],
            },
            bad: {
                replies: ["We are sorry to hear about your experience, we at Mariam's kitchen are constantly working to ensure our customers have a positive experience. Please email us at <a target='_blank' href='mailto:eat@mariamskitchen.nyc' title='Mail us your complaints' class='link'>eat@mariamskitchen.nyc</a> with a detailed description of your experience and we would be in contact."],
            },
        },
    },

    5: {
        name: "ending",
        question: ["See ya! 👋", "<a onclick='location.reload()' class='link'>Restart conversation</a>", "-- CONVERSATION END --"],
        ending: true,
    },
};

console.info("Eunit")
