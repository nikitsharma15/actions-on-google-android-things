# Actions on Google: Android Things ( Droid world ) using Node.js and Cloud Functions for Firebase

This is a knowledgable Assistant app that shares interesting things about Android.
The sample introduces advanced features like custom entities, contexts, deep links, carousel, basicCard, list and more. You can learn more about android and other development stuffs like Github and StackOverflow!

## Setup Instructions

See the developer guide and release notes at [https://developers.google.com/actions/](https://developers.google.com/actions/) for more details.

### Steps
1. Use the [Actions on Google Console](https://console.actions.google.com) to add a new project with a name of your choosing.
1. Click *Use API.AI* and then *Create Actions on API.AI* to open the API.AI console.
1. Click *Save* to save the project.
1. Click on the gear icon to see the project settings.
1. Select *Export and Import*.
1. Select *Restore from zip*. Follow the directions to restore from the `agent.zip` file in this repo.
1. Deploy the fulfillment webhook provided in the `functions` folder using [Google Cloud Functions for Firebase]
(https://firebase.google.com/docs/functions/):
  1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com) if you don't have one already.
  1. Follow the instructions to [set up and initialize Firebase SDK for Cloud Functions](https://firebase.google.com/docs/functions/get-started#set_up_and_initialize_functions_sdk). Make sure to reply "N" when asked to overwrite existing files by the Firebase CLI.
  1.Run `firebase deploy --only functions` and take note of the endpoint where the fulfillment webhook has been published. It should look like `Function URL (AndroidThings): https://us-central1-YOUR_PROJECT.cloudfunctions.net/AndroidThings`
1. Go back to the API.AI console and select *Fulfillment* from the left navigation menu. Enable *Webhook*, set the value of *URL* to the `Function URL` from the preiovus step, then click *Save*.
1. Select *Integrations* from the left navigation menu and open the *Settings* menu for Actions on Google.
1. Click *Test*.
1. Click *View* to open the Actions on Google simulator.
1. Type `Talk to droid world` in the simulator, or say `OK Google, talk to droid world` to any Actions on Google enabled device signed into your developer account.

For more detailed information on deployment, see the [documentation](https://developers.google.com/actions/samples/).

## License
See [LICENSE](LICENSE).

## Google+
Actions on Google Developers Community on Google+ [https://g.co/actionsdev](https://g.co/actionsdev).

