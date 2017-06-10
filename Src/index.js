/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;

//quotes for alexa and basic skill information
const languageStrings = {    
    'en-US': {
        translation: {
            FACTS: [
                'The Way Get Started Is To Quit Talking And Begin Doing.  - Walt Disney',
                'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty. - Winston Churchill',
                'Logic will get you form A to Z; Imagination will get you anywhere. - Albert Einstein',
                'Quality is not and act, it is a habit-  Aristotle',
                'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You - Steve Jobs',
                'The art of being wise is the art of knowing what ot overlook. - William James',
                'Today a reader, tomorrow a leader. - Margaret fuller',
                'Don’t Let Yesterday Take Up Too Much Of Today. -Will Rogers',
                'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.- Unknown',
                'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.– By Vince Lombardi',
                'take risks: if you win you will be happy; if you lose you will be wise- Junkown',
                'The difference between ordinary and extraoridinary is that little extra- Anonymous',
                'If someone is going down the wrong road, he doesn’t need motivation to speed him up. What he needs is education to turn him around. - Jim Rohn',
                'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. - Rob Siltanen',
                'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.- Og Mandino',
                'We May Encounter Many Defeats But We Must Not Be Defeated. - Maya Angelou',
                'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. - Johann Wolfgang Von Goethe',
                'Imagine Your Life Is Perfect In Every Respect; What Would It Look Like? - Brian Tracy',
                'We Generate Fears While We Sit. We Overcome Them By Action. - Dr. Henry Link',
                'The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.- Franklin D. Roosevelt',
                'The quickest way to double your money is to fold it over and put it back in your pocket.– Will Rogers.',
                'If there is no Struggle, there is no progress. - Frederick Douglass',
                'Most folks are as happy as they make up their minds to be. - Abraham Lincoln',
                'We tend to forget that happiness doesn’t come as a result of getting something we don’t have, but rather of recognizing and appreciating what we do have.- Frederick Keonig.',
                'The struggle you are in today is developing the strength you need for tomorrow. Do not give up. - Robert Tew',
                'The struggle alone pleases us, not the victory. - Blaise Pascal',
                'Do not compare your struggles to anyone else. Do not get discouraged by the success of others. Make your own path and never give up. MJ Korvan',
            ],
                
            
            SKILL_NAME: 'Quote of the Day',
            GET_FACT_MESSAGE: "Here's your quote of the day: ",
            HELP_MESSAGE: 'You can say tell me a quote, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
};

//entry point for registering the handlers
exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

//all needed handlers
const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetInspiringQuoteEveryday': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};
