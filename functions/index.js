'use strict';

process.env.DEBUG = 'actions-on-google:*';
let ApiAiApp = require('actions-on-google').ApiAiApp;
const functions = require('firebase-functions');

// List of itents
const WELCOME_INTENT = 'input.welcome';
const GINGER_INTENT = 'ginger.intent';
const HONEY_INTENT = 'honey.intent';
const ICE_CREAM_SANDWICH_INTENT = 'ice_cream_sandwich.intent';
const JELLY_BEAN_INTENT = 'jelly_bean.intent';
const KITKAT_INTENT = 'kitkat.intent';
const LOLLIPOP_INTENT = 'lollipop.intent';
const MARSHMALLOW_INTENT = 'marshmallow.intent';
const NOUGAT_INTENT = 'nougat.intent';
const O_INTENT = 'o.intent';
const KERNEL_INTENT = 'kernel.intent';
const AOSP_INTENT = 'aosp.intent';
const CAROUSEL = 'carousel';
const ITEM_SELECTED = 'item.selected';
const INTERFACE_INTENT = 'interface.intent';
const APPLICATION_INTENT = 'application.intent';
const MEMORY_INTENT = 'memory.intent';
const VIRTUAL_INTENT = 'virtual.intent';
const VERSION_INTENT = 'version.intent';
const BYE_INTENT = 'bye.intent';
const WHAT_INTENT = 'what.intent';
const NO_INTENT = 'no.intent';
const NOTHING_INTENT = 'nothing.intent';
const GITHUB_INTENT = 'github.intent';
const STACK_INTENT = 'stack.intent';
const HISTORY_INTENT = 'history.intent';

// Constants for list and carousel selection
const SELECTION_KEY_ONE = 'title';
const SELECTION_KEY_INTERFACE = 'Android Interface';
const SELECTION_KEY_APPLICATION = 'Android Application';
const SELECTION_KEY_MEMORY = 'Android Memory management';
const SELECTION_KEY_VIRTUAL = 'Android Virtual reality';
const SELECTION_KEY_GINGERBREAD = 'Gingerbread';
const SELECTION_KEY_HONEYCOMB = 'honeycomb';
const SELECTION_KEY_ICE_CREAM = 'ice cream sandwich';
const SELECTION_KEY_JELLBEAN = 'jelly bean';
const SELECTION_KEY_KITKAT = 'kitkat';
const SELECTION_KEY_LOLLIPOP = 'lollipop';
const SELECTION_KEY_MARSHMALLOW = 'marshmallow';
const SELECTION_KEY_NOUGAT = 'nougat';
const SELECTION_KEY_O = 'o';

// Constants for images URLs 
const GIN_IMAG = 'https://2.bp.blogspot.com/-yyByBpCoXLo/V1lHv7w0j7I/AAAAAAAAAic/L0m_u0pFaTkmOuho2hwwwLShQ15dHBHVQCLcB/s1600/12557431_f520.jpg';
const HON_IMAG = 'https://i.amz.mshcdn.com/CencC65482MTabHzEy4F9EQqxrs=/356x205/2012%2F12%2F04%2Fe5%2Fintelpromis.bNW.jpg';
const ICE_IMAG = 'http://cache.gawkerassets.com/assets/images/17/2011/05/icecreamsandwich.jpg';
const JELLY_IMAG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdeTjcbZyQNNYfJodHgvpAMSFlPBFf63nne9oxdR4E1TOsazC';
const KIKAT_IMAG = 'http://d2rormqr1qwzpz.cloudfront.net/photos/2013/11/01/54929-jpeg.jpg';
const LOLLIPOP_IMAG = 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/w800h450crop/public/talkmobile_images/2014/11/lollipop-statue-2.jpg?itok=MNSFrkky&timestamp=1421276829';
const MARSHMALLOW_IMAG = 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/w400h225crop/public/article_images/2015/12/android-marshmallow-4_0.jpg?itok=GsKySY9O&timestamp=1449673415';
const NOUGAT_IMAG = 'https://9to5google.files.wordpress.com/2016/07/nougat.jpg?quality=82&strip=all&w=1000';
const O_IMAG = 'https://www1-lw.xda-cdn.com/files/2017/03/android-o-logo1.png';

// Here we go!
exports.AndroidThings = functions.https.onRequest((req, res) => {
  const app = new ApiAiApp({request: req, response: res});
  console.log('Request headers: ' + JSON.stringify(req.headers));
  console.log('Request body: ' + JSON.stringify(req.body));

// Welcome intent
function welcomeIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {   
    app.ask(app.buildRichResponse()
    .addSuggestions(['Android History', 'Android Features', 'What is Android Kernel', 'What is Github', 'What is Stack Overflow', 'What can you do?']) 
    .addSimpleResponse('Welcome to Droid world! I can tell you everything about android. Like Android history or it\'s features. Which of these do you want to hear about?')
);
} else {
      app.ask(`Welcome to Droid world! I can tell you everything about it. Like Android history or it\'s features. Which one would you like to hear about?!`);
 }
}

    // Android version history
  function historyIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['Android version history', 'Android Features', 'What is Github', 'What is Stack Overflow', 'What is Android AOSP', 'Android Kernel'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android was founded in Palo Alto, California in October 2003 by Andy Rubin, Rich Miner, Nick Sears, and Chris White. Now tell me if there\'s anything else you want to know about Android?')
    .addBasicCard(app.buildBasicCard(`Android Inc. was founded in Palo Alto, California in October 2003 by Andy Rubin, Rich Miner, Nick Sears, and Chris White`)
      .setTitle('Android History')
      .addButton('Read more')
      .setImage('https://diavoletto-tv.com/wp-content/uploads/2016/03/22d6ca1ce3b9240bc1ed1e06d35863c1_large.jpeg', 'History')
    )
  );
 } else {
      app.ask(`Android was founded in Palo Alto, California in October 2003 by Andy Rubin, Rich Miner, Nick Sears, and Chris White. Now tell me if there's anything else you want to know about Android. Maybe Android version history or Android features`);
 }
}

  function gingerIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Gingerbread\'s user interface was refined in many ways, making it easier to use, and more power-efficient. Now tell me if there\'s anything else you want to know about Android.? ')
    .addBasicCard(app.buildBasicCard(`Gingerbread's user interface was refined in many ways, making it easier to master, faster to use, and more power-efficient. A simplified color scheme with a black background gave vividness and contrast to the notification bar, menus, and other user interface components. Improvements in menus and settings resulted in easier navigation and system control.`)
      .setTitle('Gingerbread')
      .addButton('Read more')
      .setImage('https://www.technobuffalo.com/wp-content/uploads/2011/04/android-2-3-gingerbread.png', 'Gingerbread')
    )
  );
 } else {
      app.ask(`Gingerbread's user interface was refined in many ways, making it easier to master, faster to use, and more power-efficient. A simplified color scheme with a black background gave vividness and contrast to the notification bar, menus, and other user interface components. Improvements in menus and settings resulted in easier navigation and system control. Now tell me if there\'s something else that might you interested about Android?. Maybe android history or what is github`);
 }
}

  function honeyIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Honeycomb" is a codename for the Android platform that was designed for devices with larger screen sizes, particularly tablets. It is no longer supported (newer versions are). Now tell me if there\'s anything else you want to know about Android.?')
    .addBasicCard(app.buildBasicCard(`Android "Honeycomb" is a codename for the Android platform that was designed for devices with larger screen sizes, particularly tablets. It is no longer supported (newer versions are). Honeycomb debuted with the Motorola Xoom in February 2011`)
      .setTitle('Honeycomb')
      .addButton('Read more')
      .setImage('https://i.amz.mshcdn.com/CencC65482MTabHzEy4F9EQqxrs=/356x205/2012%2F12%2F04%2Fe5%2Fintelpromis.bNW.jpg', 'HoneyComb')
    )
  );
 } else {
      app.ask(`Android "Honeycomb" is a codename for the Android platform that was designed for devices with larger screen sizes, particularly tablets. It is no longer supported (newer versions are). Now tell me if there\'s something else that might you interested about Android?. Maybe android history or what is android AOSP`);
 }
}

  function ice_cream_sandwichIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Ice Cream Sandwich" is a codename for the Android mobile operating system developed by Google, that is no longer supported. Now tell me if there\'s anything else you want to know about Android.?')
    .addBasicCard(app.buildBasicCard(`The Ice Cream Sandwich release also introduced a number of other new features, including a refreshed home screen, near-field communication (NFC) support and the ability to "beam" content to another user using the technology, an updated web browser, a new contacts manager with social network integration, the ability to access the camera and control music playback from the lock screen, visual voicemail support, face recognition for device unlocking ("Face Unlock"), the ability to monitor and limit mobile data usage, and other internal improvements.`)
      .setTitle('Ice Cream Sandwich')
      .addButton('Read more')
      .setImage('https://cache.gawkerassets.com/assets/images/17/2011/05/icecreamsandwich.jpg', 'Ice Cream Sandwich')
    )
  );
 } else {
      app.ask(`Android "Ice Cream Sandwich" is a codename for the Android mobile operating system developed by Google, that is no longer supported. Now tell me if there\'s something else that might you interested about Android?. Maybe android features or what is Stack Overflow`);
 }
}

  function jelly_beanIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Jelly Bean" is the codename given to three major point releases of the Android mobile operating system developed by Google, spanning versions between 4.1 and 4.3.1, that are no longer supported. Now tell me if there\'s anything else you want to know about Android.?')
    .addBasicCard(app.buildBasicCard(`The first of these three, 4.1, was unveiled at Google's I/O developer conference in June 2012, focusing on performance improvements designed to give the operating system a smoother and more responsive feel, improvements to the notification system allowing for "expandable" notifications with action buttons, and other internal changes. Two more releases were made under the Jelly Bean name in October 2012 and July 2013 respectively, including 4.2—which included further optimizations, multi-user support for tablets, lock screen widgets, quick settings, and screen savers, and 4.3—contained further improvements and updates to the underlying Android platform.`)
      .setTitle('JellyBean')
      .addButton('Read more')
      .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdeTjcbZyQNNYfJodHgvpAMSFlPBFf63nne9oxdR4E1TOsazC', 'JellyBean')
    )
  );
 } else {
      app.ask(`Android "Jelly Bean" is the codename given to three major point releases of the Android mobile operating system developed by Google, spanning versions between 4.1 and 4.3.1, that are no longer supported.Now tell me if there\'s something else that might you interested about Android?. Maybe android history or what is android AOSP`);
 }
}

  function kitkatIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "KitKat" is a codename for the Android mobile operating system developed by Google, spanning versions between 4.4 and 4.4.4, that are no longer actively developed. Now tell me if there\'s anything else you want to know about Android.?')
    .addBasicCard(app.buildBasicCard(`Android "KitKat" is a codename for the Android mobile operating system developed by Google, spanning versions between 4.4 and 4.4.4, that are no longer actively developed. Unveiled on September 3, 2013, KitKat focused primarily on optimizing the operating system for improved performance on entry-level devices with limited resources. Each Android OS has a title referring to a sweet treat.`)
      .setTitle('Kitkat')
      .addButton('Read more')
      .setImage('https://d2rormqr1qwzpz.cloudfront.net/photos/2013/11/01/54929-jpeg.jpg', 'Kitkat')
    )
  );
 } else {
      app.ask(`Android "KitKat" is a codename for the Android mobile operating system developed by Google, spanning versions between 4.4 and 4.4.4, that are no longer actively developed. Now tell me if there\'s something else that might you interested about Android?. Maybe android history or what is android AOSP`);
 }
}

  function lollipopIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Lollipop" is a codename for the Android mobile operating system developed by Google, spanning versions between 5.0 and 5.1.1, that is supported with security patches only. Now tell me if there\'s anything else you want to know about Android.?')
    .addBasicCard(app.buildBasicCard(`One of the most prominent changes in the Lollipop release is a redesigned user built around a design language known as Material Design, which was made to retain a paper-like feel to the . Other changes include improvements to the notifications, which can be accessed from the lockscreen and displayed within applications as top-of-the-screen banners. Google also made internal changes to the platform, with the Android Runtime (ART) officially replacing Dalvik for improved application performance, and with changes intended to improve and optimize battery usage.`)
      .setTitle('Lollipop')
      .addButton('Read more')
      .setImage('https://www.androidcentral.com/sites/androidcentral.com/files/styles/w800h450crop/public/talkmobile_images/2014/11/lollipop-statue-2.jpg?itok=MNSFrkky&timestamp=1421276829', 'Lollipop')
    )
  );
 } else {
      app.ask(`Android "Lollipop" is a codename for the Android mobile operating system developed by Google, spanning versions between 5.0 and 5.1.1, that is supported with security patches only. Now tell me if there\'s something else that might you interested about Android?. Maybe android history or what is android AOSP`);
 }
}

  function marshmallowIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What Android is Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Marshmallow" (codenamed Android M during development) is the sixth major version of the Android operating system. First released as a beta build on May 28, 2015, it was officially released on October 5, 2015, with Nexus devices being the first to receive the update. Now tell me if there\'s anything else you want to know about Android.?')
    .addBasicCard(app.buildBasicCard(`Marshmallow primarily focuses on improving the overall user experience of its predecessor, Lollipop. It introduced a new permissions architecture, new APIs for contextual assistants (first used by a new feature "Now on Tap" to provide context-sensitive search results), a new power management system that reduces background activity when a device is not being physically handled, native support for fingerprint recognition and USB Type-C connectors, the ability to migrate data and applications to a microSD card, and other internal changes.`)
      .setTitle('Marshmallow')
      .addButton('Read more')
      .setImage('https://www.androidcentral.com/sites/androidcentral.com/files/styles/w400h225crop/public/article_images/2015/12/android-marshmallow-4_0.jpg?itok=GsKySY9O&timestamp=1449673415', 'Marshmallow')
    )
  );
 } else {
      app.ask(`Android "Marshmallow" (codenamed Android M during development) is the sixth major version of the Android operating system. First released as a beta build on May 28, 2015, it was officially released on October 5, 2015, with Nexus devices being the first to receive the update. Now tell me if there\'s something else that might you interested about Android?. Maybe android history or what is android AOSP`);
 }
}

  function nougatIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Nougat" (codenamed Android N during development) is the seventh major version of the Android operating system. First released as an alpha test version on March 9, 2016, it was officially released on August 22, 2016, with Nexus devices being the first to receive the update. Now tell me if there\'s anything else you want to know about Android.?')
    .addBasicCard(app.buildBasicCard(`Nougat introduces notable changes to the operating system and its development platform, including the ability to display multiple apps on-screen at once in a split-screen view, support for inline replies to notifications, and an expanded "Doze" power-saving mode that restricts device functionality once the screen has been off for a period of time. Additionally, the platform switched to an OpenJDK-based Java environment and received support for the Vulkan graphics rendering API, and "seamless" system updates on supported devices.`)
      .setTitle('Nougat')
      .addButton('Read more')
      .setImage('https://9to5google.files.wordpress.com/2016/07/nougat.jpg?quality=82&strip=all&w=1000', 'Nougat')
    )
  );
 } else {
      app.ask(`Android "Nougat" (codenamed Android N during development) is the seventh major version of the Android operating system. First released as an alpha test version on March 9, 2016, it was officially released on August 22, 2016, with Nexus devices being the first to receive the update. Now tell me if there\'s something else that might you interested about Android?. Maybe android history or what is android AOSP`);
 }
}

  function oIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "O" is the codename of an upcoming release of the Android mobile operating system. It was first released as an alpha quality developer preview on March 21, 2017. The second developer preview was released on May 17, 2017, and it is considered beta quality. The third developer preview was released on June 8, 2017 and finalizes the API. Now tell me if there\'s something else that might you interested about Android?.')
    .addBasicCard(app.buildBasicCard(`Android "O" is the codename of an upcoming release of the Android mobile operating system. It was first released as an alpha quality developer preview on March 21, 2017. The second developer preview was released on May 17, 2017, and it is considered beta quality. The third developer preview was released on June 8, 2017 and finalizes the API`)
      .setTitle('AndroidO')
      .addButton('Read more')
      .setImage('https://www1-lw.xda-cdn.com/files/2017/03/android-o-logo1.png', 'Android O')
    )
  );
 } else {
      app.ask(`Android "O" is the codename of an upcoming release of the Android mobile operating system. It was first released as an alpha quality developer preview on March 21, 2017. The second developer preview was released on May 17, 2017, and it is considered beta quality. The third developer preview was released on June 8, 2017 and finalizes the API. Now tell me if there\'s something else that might you interested about Android?. Maybe you should need to know about Android kernel or it\'s features`);
 }
}

  function kernelIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is AOSP', 'What can you do?'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android\'s kernel is based on one of the Linux kernel\'s long-term support (LTS) branches. As of 2017, Android devices mainly use versions 3.18 or 4.4 of the Linux kernel. The actual kernel depends on the individual device. Now which one do you want to hear about next? Android history or it\'s features?')
    .addBasicCard(app.buildBasicCard(`Android's kernel is based on one of the Linux kernel's long-term support (LTS) branches. As of 2017, Android devices mainly use versions 3.18 or 4.4 of the Linux kernel. The actual kernel depends on the individual device.`)
      .setTitle('Android Kernel')
      .addButton('Read more')
      .setImage('https://www.gadgetsnow.com/photo/33774603.cms', 'Android Kernel')
    )
  );
 } else {
      app.ask(`Android's kernel is based on one of the Linux kernel's long-term support (LTS) branches. As of 2017, Android devices mainly use versions 3.18 or 4.4 of the Linux kernel. The actual kernel depends on the individual device. Now which one do you want to hear about next? Android history or it\'s features?`);
 }
}

  function aospIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'Android features' , 'What can you do?'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android has an active community of developers and enthusiasts who use the Android Open Source Project (AOSP) source code to develop and distribute their own modified versions of the operating system. Now tell me if there\'s anything else you want to know about Android.')
    .addBasicCard(app.buildBasicCard(`Android has an active community of developers and enthusiasts who use the Android Open Source Project (AOSP) source code to develop and distribute their own modified versions of the operating system.`)
      .setTitle('Android Open Source Project')
      .addButton('Read more')
      .setImage('https://cdn.teamandroid.com/wp-content/uploads/2013/03/aosp_0.jpg', 'Android Open Source Project')
    )
  );
 } else {
      app.ask(`Android has an active community of developers and enthusiasts who use the Android Open Source Project (AOSP) source code to develop and distribute their own modified versions of the operating system. Now tell me if there\'s anything else you want to know about Android. Maybe android version history or What is stack overflow`);
 }
}

    // Android version intent 
  function versionIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
    app.askWithList(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
      .addSimpleResponse('Here\'s android version history')
      .addSuggestions(
        ['What is Android kernel', 'What is AOSP']),
      app.buildList('Android version history')
        .addItems(app.buildOptionItem(SELECTION_KEY_GINGERBREAD,
          ['Gingerbread', 'gingerbread', 'Gingerbread'])
          .setTitle('Gingerbread')
          .setDescription('On December 6, 2010, the Android 2.3 (Gingerbread) SDK was released, based on Linux kernel 2.6.35')
          .setImage(GIN_IMAG, 'Gingerbread'))
        .addItems(app.buildOptionItem(SELECTION_KEY_HONEYCOMB,
          ['HoneyComb', 'honeycomb'])
          .setTitle('HoneyComb')
          .setDescription('Android "Honeycomb" is a codename for the Android platform that was designed for devices with larger screen sizes, particularly tablets. It is no longer supported (newer versions are).')
          .setImage(HON_IMAG, 'HoneyComb')
        )
        .addItems(app.buildOptionItem(SELECTION_KEY_ICE_CREAM,
          ['ICE Cream Sandwich', 'Ice Cream Sandwich', 'Ice cream sandwich'])
          .setTitle('Ice Cream Sandwich')
          .setDescription('Android "Ice Cream Sandwich" is a codename for the Android mobile operating system developed by Google, that is no longer supported.')
          .setImage(ICE_IMAG, 'Ice Cream Sandwich')
        )
        .addItems(app.buildOptionItem(SELECTION_KEY_JELLBEAN,
          ['JellyBean', 'Jelly bean', 'Jelly Bean'])
          .setTitle('Jelly Bean')
          .setDescription('Android "Jelly Bean" is the codename given to three major point releases of the Android mobile operating system developed by Google, spanning versions between 4.1 and 4.3.1, that are no longer supported.')
          .setImage(JELLY_IMAG, 'Jelly Bean')
        )
        .addItems(app.buildOptionItem(SELECTION_KEY_KITKAT,
          ['Kitkat', 'kitkat'])
          .setTitle('Kitkat')
          .setDescription('Android "KitKat" is a codename for the Android mobile operating system developed by Google, spanning versions between 4.4 and 4.4.4, that are no longer actively developed.')
          .setImage(KIKAT_IMAG, 'Kitkat')
        )
        .addItems(app.buildOptionItem(SELECTION_KEY_LOLLIPOP,
          ['Lollipop', 'lollipop', 'lp'])
          .setTitle('Lollipop')
          .setDescription('Android "Lollipop" is a codename for the Android mobile operating system developed by Google, spanning versions between 5.0 and 5.1.1, that is supported with security patches only.')
          .setImage(LOLLIPOP_IMAG, 'Lollipop')
        )   
        .addItems(app.buildOptionItem(SELECTION_KEY_MARSHMALLOW,
          ['Marshmallow', 'MARSHMALLOW', 'MM'])
          .setTitle('Marshmallow')
          .setDescription('Android "Marshmallow" (codenamed Android M during development) is the sixth major version of the Android operating system. First released as a beta build on May 28, 2015, it was officially released on October 5, 2015, with Nexus devices being the first to receive the update.')
          .setImage(MARSHMALLOW_IMAG, 'Marshmallow')
        )  
         .addItems(app.buildOptionItem(SELECTION_KEY_NOUGAT,
          ['Nougat', 'nougat', 'NOUGAT'])
          .setTitle('Nougat')
          .setDescription('Android "Nougat" (codenamed Android N during development) is the seventh major version of the Android operating system. First released as an alpha test version on March 9, 2016, it was officially released on August 22, 2016, with Nexus devices being the first to receive the update.')
          .setImage(NOUGAT_IMAG, 'Nougat')
        )     
        .addItems(app.buildOptionItem(SELECTION_KEY_O, [])
          .setTitle('Android O')
          .setDescription('Android "O" is the codename of an upcoming release of the Android mobile operating system. It was first released as an alpha quality developer preview on March 21, 2017. The second developer preview was released on May 17, 2017, and it is considered beta quality. The third developer preview was released on June 8, 2017 and finalizes the API.')
          .setImage(O_IMAG, 'Android O')
        )
    );

} else {
      app.ask(`Here\'s the history of Android versions. First was. Android GingerBread. Second. Android HoneyComb. Third. Android Ice Cream Sandwich. Fourth. Android JellyBean. Fifth. Android Kitkat. Sixth. Android Lollipop. Seventh. Android Marshmallow. Eighth. Android Nougat. and last Android O. Now Tell me which of those you want to hear about?`);
 }
}

  // Carousel
  function carousel (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
  app.askWithCarousel(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright! Here are the features of Android. Which sounds interesting?')
    .addSuggestions(
      ['What is Android Kernel', 'What is AOSP', 'Android version history']),
    app.buildCarousel()
       .addItems(app.buildOptionItem(SELECTION_KEY_INTERFACE,
      ['Android Interface', 'Android interface', 'android interface'])
      .setTitle('Android Interface')
      .setDescription('Android\'s default user interface is mainly based on direct manipulation, using touch inputs that loosely correspond to real-world actions..')
      .setImage('http://www.conceptdraw.com/solution-park/resource/images/solutions/android-user-interface/Software-development-Android-User-Interface-Design-Elements-Android-Tabs61.png', 'Android Interface'))
       .addItems(app.buildOptionItem(SELECTION_KEY_VIRTUAL,
      ['Android Virtual reality', 'Android Virtual Reality', 'android virtual reality'])
      .setTitle('Android Virtual reality')
      .setDescription('At Google I/O on May 2016, Google announced Daydream, a virtual reality platform that relies on a smartphone and provides VR capabilities through a virtual reality headset and controller designed by Google itself…')
      .setImage('http://www.androidos.in/wp-content/uploads/2015/03/google-cardboard-1.jpg', 'Virtual Reality')
    )
    .addItems(app.buildOptionItem(SELECTION_KEY_APPLICATION,
      ['Android Application', 'Android application', 'android application'])
      .setTitle('Android Application')
      .setDescription('Applications ("apps"), which extend the functionality of devices, are written using the Android software development kit (SDK)[76] and, often, the Java programming language…')
      .setImage('http://cdn2.ubergizmo.com/wp-content/uploads/2015/03/Android-Applications.jpg', 'Application')
    )
    .addItems(app.buildOptionItem(SELECTION_KEY_MEMORY,
      ['Android Memory Management', 'Android Memory management', 'android memory management'])
      .setTitle('Android Memory management')
      .setDescription('Since Android devices are usually battery-powered, Android is designed to manage processes to keep power consumption at a minimum.…')
      .setImage('https://mobworld.files.wordpress.com/2010/07/processimage.jpg?w=500', 'Memory management')
    )
  );
} else {
      app.ask('Here\'s the features of Android. First. Android Interface. Second. Android VR ( Virtual Reality ). Third. Android Application. And fourth. Android memory management. Now tell me which of those you want to hear about?');
 }
}

  // This will react to list or carousel selection 
  function itemSelected (app) {
    const param = app.getSelectedOption();
    console.log('USER SELECTED: ' + param);
    if (!param) {
    app.ask('Sorry, was that?');
  } else if (param === SELECTION_KEY_INTERFACE) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here\'s android interface')
    .addSimpleResponse('Android\'s default user interface is mainly based on direct manipulation, using touch inputs that loosely correspond to real-world actions, like swiping, tapping, pinching, and reverse pinching to manipulate on-screen objects, along with a virtual keyboard. Now tell me if there\'s anything else you want to hear about Android?')
    .addBasicCard(app.buildBasicCard(`Android\'s default user interface is mainly based on direct manipulation, using touch inputs that loosely correspond to real-world actions, like swiping, tapping, pinching, and reverse pinching to manipulate on-screen objects, along with a virtual keyboard..`)
      .setTitle('Android Interface')
      .addButton('Read more')
      .setImage('http://www.conceptdraw.com/solution-park/resource/images/solutions/android-user-interface/Software-development-Android-User-Interface-Design-Elements-Android-Tabs61.png', 'Android Interface')
)
);
 } else {
    app.ask('Android\'s default user interface is mainly based on direct manipulation, using touch inputs that loosely correspond to real-world actions, like swiping, tapping, pinching, and reverse pinching to manipulate on-screen objects, along with a virtual keyboard. Now tell me if there\'s anything else you want to know about Android. Maybe android version history or What is stack overflow.');
}
  } else if (param === SELECTION_KEY_VIRTUAL) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('At Google I/O on May 2016, Google announced Daydream, a virtual reality platform that relies on a smartphone and provides VR capabilities through a virtual reality headset and controller designed by Google itself. Now tell me if there\'s anything else you want to hear about Android?')
    .addBasicCard(app.buildBasicCard(`At Google I/O on May 2016, Google announced Daydream, a virtual reality platform that relies on a smartphone and provides VR capabilities through a virtual reality headset and controller designed by Google itself. The platform is built into Android starting with Android Nougat, differentiating from standalone support for VR capabilities. The software is available for developers, and was released in 2016..`)
      .setTitle('Virtual reality')
      .addButton('Read more')
      .setImage('http://www.androidos.in/wp-content/uploads/2015/03/google-cardboard-1.jpg', 'Memory')
)
);
 } else {
    app.ask('At Google I/O on May 2016, Google announced Daydream, a virtual reality platform that relies on a smartphone and provides VR capabilities through a virtual reality headset and controller designed by Google itself. Now tell me if there\'s anything else you want to know about Android. Maybe android history or Android Memory management');
}
  } else if (param === SELECTION_KEY_APPLICATION) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Applications ("apps"), which extend the functionality of devices, are written using the Android software development kit (SDK) and, often, the Java programming language. Now tell me if there\'s anything else you want to hear about Android?')
    .addBasicCard(app.buildBasicCard(`Applications ("apps"), which extend the functionality of devices, are written using the Android software development kit (SDK) and, often, the Java programming language. Java may be combined with C/C++, together with a choice of non-default runtimes that allow better C++ support. The Go programming language is also supported, although with a limited set of application programming interfaces (API). In May 2017, Google announced support for Android app development in the Kotlin programming language..`)
      .setTitle('Android Application')
      .addButton('Read more')
      .setImage('http://cdn2.ubergizmo.com/wp-content/uploads/2015/03/Android-Applications.jpg', 'Application')
)
);
 } else {
    app.ask('Applications ("apps"), which extend the functionality of devices, are written using the Android software development kit (SDK) and, often, the Java programming language. Now tell me if there\'s anything else you want to know about Android. Maybe should need to know about Android kernel or What is stack overflow.');
}
  } else if (param === SELECTION_KEY_MEMORY) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Since Android devices are usually battery-powered, Android is designed to manage processes to keep power consumption at a minimum. Now tell me if there\'s something else that might you interested about Android?. Maybe android version history or what is android AOSP')
    .addBasicCard(app.buildBasicCard(`When an application is not in use the system suspends its operation so that, while available for immediate use rather than closed, it does not use battery power or CPU resources.[94][95] Android manages the applications stored in memory automatically: when memory is low, the system will begin invisibly and automatically closing inactive processes, starting with those that have been inactive for longest...`)
      .setTitle('Memory management')
      .addButton('Read more')
      .setImage('https://mobworld.files.wordpress.com/2010/07/processimage.jpg?w=500', 'Memory management')
)
);
 } else {
    app.ask('Applications ("apps"), which extend the functionality of devices, are written using the Android software development kit (SDK) and, often, the Java programming language. Now tell me if there\'s something else that might you interested about Android?. Maybe android version history or what is android AOSP');
}
  } else if (param === SELECTION_KEY_GINGERBREAD) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Gingerbread\'s user interface was refined in many ways, making it easier use, and more power-efficient. Now tell me if there\'s anything else you want to know about Android.? ')
    .addBasicCard(app.buildBasicCard(`Gingerbread'\s user interface was refined in many ways, making it easier to master, faster to use, and more power-efficient. A simplified color scheme with a black background gave vividness and contrast to the notification bar, menus, and other user interface components. Improvements in menus and settings resulted in easier navigation and system control.`)
      .setTitle('Gingerbread')
      .addButton('Read more')
      .setImage('https://www.technobuffalo.com/wp-content/uploads/2011/04/android-2-3-gingerbread.png', 'Gingerbread')
)
);
  } else {
    app.ask('Gingerbread\'s user interface was refined in many ways, making it easier to use, and more power-efficient. Now tell me if there\'s anything else you want to know about Android?. Maybe android history or what is Github ');
}
  } else if (param === SELECTION_KEY_HONEYCOMB) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Honeycomb" is a codename for the Android platform that was designed for devices with larger screen sizes, particularly tablets. It is no longer supported (newer versions are). Now tell me if there\'s anything else you want to know about Android.? ')
    .addBasicCard(app.buildBasicCard(`Android "Honeycomb" is a codename for the Android platform that was designed for devices with larger screen sizes, particularly tablets. It is no longer supported (newer versions are). Honeycomb debuted with the Motorola Xoom in February 2011`)
      .setTitle('HoneyComb')
      .addButton('Read more')
      .setImage('https://i.amz.mshcdn.com/CencC65482MTabHzEy4F9EQqxrs=/356x205/2012%2F12%2F04%2Fe5%2Fintelpromis.bNW.jpg', 'HoneyComb')
)
);
  } else {
    app.ask('Android "Honeycomb" is a codename for the Android platform that was designed for devices with larger screen sizes, particularly tablets. It is no longer supported (newer versions are). Now tell me if there\'s anything else you want to know about Android?. Maybe android history or what is android AOSP ');
}
  } else if (param === SELECTION_KEY_ICE_CREAM) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Ice Cream Sandwich" is a codename for the Android mobile operating system developed by Google, that is no longer supported. Now tell me if there\'s anything else you want to know about Android.? ')
    .addBasicCard(app.buildBasicCard(`The Ice Cream Sandwich release also introduced a number of other new features, including a refreshed home screen, near-field communication (NFC) support and the ability to "beam" content to another user using the technology, an updated web browser, a new contacts manager with social network integration, the ability to access the camera and control music playback from the lock screen, visual voicemail support, face recognition for device unlocking ("Face Unlock"), the ability to monitor and limit mobile data usage, and other internal improvements.`)
      .setTitle('Ice Cream Sandwich')
      .addButton('Read more')
      .setImage('http://cache.gawkerassets.com/assets/images/17/2011/05/icecreamsandwich.jpg', 'Ice Cream Sandwich')
)
);
  } else {
    app.ask('Android "Ice Cream Sandwich" is a codename for the Android mobile operating system developed by Google, that is no longer supported. Now tell me if there\'s anything else you want to know about Android?. Maybe android history or what is android features');
}
  } else if (param === SELECTION_KEY_JELLBEAN) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Jelly Bean" is the codename given to three major point releases of the Android mobile operating system developed by Google, spanning versions between 4.1 and 4.3.1, that are no longer supported. Now tell me if there\'s anything else you want to know about Android.? ')
    .addBasicCard(app.buildBasicCard('The first of these three, 4.1, was unveiled at Google\'s I/O developer conference in June 2012, focusing on performance improvements designed to give the operating system a smoother and more responsive feel, improvements to the notification system allowing for "expandable" notifications with action buttons, and other internal changes. Two more releases were made under the Jelly Bean name in October 2012 and July 2013 respectively, including 4.2—which included further optimizations, multi-user support for tablets, lock screen widgets, quick settings, and screen savers, and 4.3—contained further improvements and updates to the underlying Android platform.')
      .setTitle('Jelly Bean')
      .addButton('Read more')
      .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdeTjcbZyQNNYfJodHgvpAMSFlPBFf63nne9oxdR4E1TOsazC', 'JellyBean')
)
);
  } else {
    app.ask('Android "Jelly Bean" is the codename given to three major point releases of the Android mobile operating system developed by Google, spanning versions between 4.1 and 4.3.1, that are no longer supported. Now tell me if there\'s anything else you want to know about Android?. Maybe android history or what is android Kernel ');
}
  } else if (param === SELECTION_KEY_KITKAT) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "KitKat" is a codename for the Android mobile operating system developed by Google, spanning versions between 4.4 and 4.4.4, that are no longer actively developed. Now tell me if there\'s anything else you want to know about Android.? ')
    .addBasicCard(app.buildBasicCard('Android "KitKat" is a codename for the Android mobile operating system developed by Google, spanning versions between 4.4 and 4.4.4, that are no longer actively developed. Unveiled on September 3, 2013, KitKat focused primarily on optimizing the operating system for improved performance on entry-level devices with limited resources. Each Android OS has a title referring to a sweet treat.')
      .setTitle('Kitkat')
      .addButton('Read more')
      .setImage('http://d2rormqr1qwzpz.cloudfront.net/photos/2013/11/01/54929-jpeg.jpg', 'Kitkat')
)
);
  } else {
    app.ask('Android "KitKat" is a codename for the Android mobile operating system developed by Google, spanning versions between 4.4 and 4.4.4, that are no longer actively developed. Now tell me if there\'s anything else you want to know about Android?. Maybe android history or what is android AOSP');
}
  } else if (param === SELECTION_KEY_LOLLIPOP) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Lollipop" is a codename for the Android mobile operating system developed by Google, spanning versions between 5.0 and 5.1.1, that is supported with security patches only. Now tell me if there\'s anything else you want to know about Android.? ')
    .addBasicCard(app.buildBasicCard('Gingerbread\'s user interface was refined in many ways, making it easier to master, faster to use, and more power-efficient. A simplified color scheme with a black background gave vividness and contrast to the notification bar, menus, and other user interface components. Improvements in menus and settings resulted in easier navigation and system control.')
      .setTitle('Lollipop')
      .addButton('Read more')
      .setImage('https://www.technobuffalo.com/wp-content/uploads/2011/04/android-2-3-gingerbread.png', 'Lollipop')
)
);
  } else {
    app.ask('Android "Lollipop" is a codename for the Android mobile operating system developed by Google, spanning versions between 5.0 and 5.1.1, that is supported with security patches only. Now tell me if there\'s anything else you want to know about Android?. Maybe android history or what is android AOSP');
}
  } else if (param === SELECTION_KEY_MARSHMALLOW) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Marshmallow" (codenamed Android M during development) is the sixth major version of the Android operating system. First released as a beta build on May 28, 2015, it was officially released on October 5, 2015, with Nexus devices being the first to receive the update. Now tell me if there\'s anything else you want to know about Android.?')
    .addBasicCard(app.buildBasicCard('Marshmallow primarily focuses on improving the overall user experience of its predecessor, Lollipop. It introduced a new permissions architecture, new APIs for contextual assistants (first used by a new feature "Now on Tap" to provide context-sensitive search results), a new power management system that reduces background activity when a device is not being physically handled, native support for fingerprint recognition and USB Type-C connectors, the ability to migrate data and applications to a microSD card, and other internal changes.')
      .setTitle('Marshmallow')
      .addButton('Read more')
      .setImage('https://www.androidcentral.com/sites/androidcentral.com/files/styles/w400h225crop/public/article_images/2015/12/android-marshmallow-4_0.jpg?itok=GsKySY9O&timestamp=1449673415', 'Marshmallow')
)
);
  } else {
    app.ask('Android "Marshmallow" (codenamed Android M during development) is the sixth major version of the Android operating system. First released as a beta build on May 28, 2015, it was officially released on October 5, 2015, with Nexus devices being the first to receive the update. Now tell me if there\'s anything else you want to know about Android?. Maybe android history or what is android AOSP');
}
  } else if (param === SELECTION_KEY_NOUGAT) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "Nougat" (codenamed Android N during development) is the seventh major version of the Android operating system. First released as an alpha test version on March 9, 2016, it was officially released on August 22, 2016, with Nexus devices being the first to receive the update. Now tell me if there\'s anything else you want to know about Android.? ')
    .addBasicCard(app.buildBasicCard('Nougat introduces notable changes to the operating system and its development platform, including the ability to display multiple apps on-screen at once in a split-screen view, support for inline replies to notifications, and an expanded "Doze" power-saving mode that restricts device functionality once the screen has been off for a period of time. Additionally, the platform switched to an OpenJDK-based Java environment and received support for the Vulkan graphics rendering API, and "seamless" system updates on supported devices.')
      .setTitle('Nougat')
      .addButton('Read more')
      .setImage('https://9to5google.files.wordpress.com/2016/07/nougat.jpg?quality=82&strip=all&w=1000', 'Nougat')
)
);
  } else {
    app.ask('Android "Nougat" (codenamed Android N during development) is the seventh major version of the Android operating system. First released as an alpha test version on March 9, 2016, it was officially released on August 22, 2016, with Nexus devices being the first to receive the update. Now tell me if there\'s anything else you want to know about Android?. Maybe android history or what is android AOSP');
}
  } else if (param === SELECTION_KEY_O) {
if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android features'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android "O" is the codename of an upcoming release of the Android mobile operating system. It was first released as an alpha quality developer preview on March 21, 2017. The second developer preview was released on May 17, 2017, and it is considered beta quality. The third developer preview was released on June 8, 2017 and finalizes the API. Now tell me if there\'s something else that might you interested about Android?.')
    .addBasicCard(app.buildBasicCard('Android "O" is the codename of an upcoming release of the Android mobile operating system. It was first released as an alpha quality developer preview on March 21, 2017. The second developer preview was released on May 17, 2017, and it is considered beta quality. The third developer preview was released on June 8, 2017 and finalizes the API')
      .setTitle('Android O')
      .addButton('Read more')
      .setImage('https://www1-lw.xda-cdn.com/files/2017/03/android-o-logo1.png', 'Android O')
)
);
  } else {
    app.ask('Android "O" is the codename of an upcoming release of the Android mobile operating system. It was first released as an alpha quality developer preview on March 21, 2017. The second developer preview was released on May 17, 2017, and it is considered beta quality. The third developer preview was released on June 8, 2017 and finalizes the API. Now tell me if there\'s something else that might you interested about Android?. Maybe android history or what is android AOSP');
}
  } else {
    app.ask('Sorry but You selected an unknown item');
  } 
}

    // Android interface intent
  function interfaceIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android history'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Android\'s default user interface is mainly based on direct manipulation, using touch inputs that loosely correspond to real-world actions, like swiping, tapping, pinching, and reverse pinching to manipulate on-screen objects, along with a virtual keyboard. Now tell me if there\'s something else that might you interested about Android?.')
    .addBasicCard(app.buildBasicCard(`Android\'s default user interface is mainly based on direct manipulation, using touch inputs that loosely correspond to real-world actions, like swiping, tapping, pinching, and reverse pinching to manipulate on-screen objects, along with a virtual keyboard.`)
      .setTitle('Android Interface')
      .addButton('Read more')
      .setImage('http://www.conceptdraw.com/solution-park/resource/images/solutions/android-user-interface/Software-development-Android-User-Interface-Design-Elements-Android-Tabs61.png', 'Interface')
    )
  );
 } else {
      app.ask(`Android\'s default user interface is mainly based on direct manipulation, using touch inputs that loosely correspond to real-world actions, like swiping, tapping, pinching, and reverse pinching to manipulate on-screen objects, along with a virtual keyboard. Now tell me if there\'s something else that might you interested about Android?. Maybe android history or what is android AOSP`);
 }
}

    // Android application intent
  function applicationIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Applications ("apps"), which extend the functionality of devices, are written using the Android software development kit (SDK) and, often, the Java programming language. Now tell me if there\'s something else that might you interested about Android?.')
    .addBasicCard(app.buildBasicCard(`Applications ("apps"), which extend the functionality of devices, are written using the Android software development kit (SDK) and, often, the Java programming language. Java may be combined with C/C++, together with a choice of non-default runtimes that allow better C++ support. The Go programming language is also supported, although with a limited set of application programming interfaces (API). In May 2017, Google announced support for Android app development in the Kotlin programming language..`)
      .setTitle('Android Application')
      .addButton('Read more')
      .setImage('http://cdn2.ubergizmo.com/wp-content/uploads/2015/03/Android-Applications.jpg', 'Application')
    )
  );
 } else {
      app.ask(`Applications ("apps"), which extend the functionality of devices, are written using the Android software development kit (SDK) and, often, the Java programming language. Now tell me if there\'s something else that might you interested about Android?. Maybe android history or what is android Kernel`);
 }
}

    // Memory Intent
  function memoryIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Since Android devices are usually battery-powered, Android is designed to manage processes to keep power consumption at a minimum. Now tell me if there\'s something else that might you interested about Android?.')
    .addBasicCard(app.buildBasicCard(`When an application is not in use the system suspends its operation so that, while available for immediate use rather than closed, it does not use battery power or CPU resources.[94][95] Android manages the applications stored in memory automatically: when memory is low, the system will begin invisibly and automatically closing inactive processes, starting with those that have been inactive for longest..`)
      .setTitle('Memory management')
      .addButton('Read more')
      .setImage('http://cdn2.ubergizmo.com/wp-content/uploads/2015/03/Android-Applications.jpg', 'Application')
    )
  );
 } else {
      app.ask(`Since Android devices are usually battery-powered, Android is designed to manage processes to keep power consumption at a minimum. Now tell me if there\'s something else that might you interested about Android?. Maybe android history or what is Github`);
 }
}

    // Virtual intent
  function virtualIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP'])    
    .addSuggestionLink('What is CAF', 'https://assistant.google.com/')  
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('At Google I/O on May 2016, Google announced Daydream, a virtual reality platform that relies on a smartphone and provides VR capabilities through a virtual reality headset and controller designed by Google itself. Now tell me if there\'s anything else you want to know about Android.')
    .addBasicCard(app.buildBasicCard(`At Google I/O on May 2016, Google announced Daydream, a virtual reality platform that relies on a smartphone and provides VR capabilities through a virtual reality headset and controller designed by Google itself. The platform is built into Android starting with Android Nougat, differentiating from standalone support for VR capabilities. The software is available for developers, and was released in 2016.`)
      .setTitle('Virtual reality')
      .addButton('Read more')
      .setImage('http://www.androidos.in/wp-content/uploads/2015/03/google-cardboard-1.jpg', 'Memory')
    )
  );
 } else {
      app.ask(`At Google I/O on May 2016, Google announced Daydream, a virtual reality platform that relies on a smartphone and provides VR capabilities through a virtual reality headset and controller designed by Google itself. Now tell me if there\'s anything else you want to know about Android. Maybe Android history or what is AOSP`);
 }
}

  // Leave conversation 
  function byeIntent (app) {
    app.tell({speech: 'Okay see you later',
      displayText: 'OK see you later!'});
  }

  // Help intent
function whatIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
    app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'What is Github', 'What is Stack Overflow', 'Android history', 'Android version history'])    
    .addSimpleResponse('There\'s a lot you might want to know about Android, and i can help you figure it out. Like Android history or it\'s features. You can ask me more about it. Just trying say Android version history or What is android kernel.')
);
} else {
      app.ask(`There\'s a lot you might want to know about Android, and i can help you figure it out. Like Android history or it\'s features. You can ask me more about it. Just trying say Android version history or What is android kernel`);
 }
}

  // What will happen if user say no? This will handle the situation 
function noIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
    app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android Version history', 'Android features'])    
    .addSimpleResponse('Okay then! What would you like to know about?.')
);
} else {
      app.ask(`Okay then! What would you like to know about?.`);
 }
}

    // Leave the conservation with some text
function nothingIntent (app) {
    app.tell({speech: 'Oh! Alright! let me know when you want more info about Android. Talk to you later!',
      displayText: 'Oh! Alright! let me know when you want more info about Android. Talk to you later!'});
}

    // Github intent
  function githubIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android history', 'Android version history'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('GitHub is a web-based Git or version control repository and Internet hosting service. It is mostly used for code. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project')
    .addBasicCard(app.buildBasicCard(`GitHub is a web-based Git or version control repository and Internet hosting service. It is mostly used for code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project. Now tell me if there\'s anything else you want to know about Android. Maybe Android history or Android features`)
      .setTitle('Github')
      .addButton('Read more')
      .setImage('http://culturecodes.co/wp-content/logos/github.png', 'Github')
    )
  );
 } else {
      app.ask(`GitHub is a web-based Git or version control repository and Internet hosting service. It is mostly used for code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project. Now tell me if there\'s anything else you want to know about Android. Maybe Android history or Android features`);
 }
}

    // Stackoverflow intent
  function stackIntent (app) {
  if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
     app.ask(app.buildRichResponse()
    .addSuggestions(['What is Android Kernel', 'What is AOSP', 'Android history', 'Android version history', 'What is Github'])    
    .addSimpleResponse('Alright here you go!')
    .addSimpleResponse('Stack Overflow is a question and answer site for professional and enthusiast programmers. It\'s built and run by you as part of the Stack Exchange network of Q&A sites. With your help, we\'re working together to build a library of detailed answers to every question about programming.')
    .addBasicCard(app.buildBasicCard(`Stack Overflow is a question and answer site for professional and enthusiast programmers. It\'s built and run by you as part of the Stack Exchange network of Q&A sites. With your help, we\'re working together to build a library of detailed answers to every question about programming.`)
      .setTitle('Stack Overflow')
      .addButton('Read more')
      .setImage('http://lmsotfy.com/so.png', 'Stack')
    )
  );
 } else {
      app.ask(`Stack Overflow is a question and answer site for professional and enthusiast programmers. It\'s built and run by you as part of the Stack Exchange network of Q&A sites. With your help, we\'re working together to build a library of detailed answers to every question about programming. Now tell me if there\'s anything else you want to know about Android. Maybe Android history or Android Kernel`);
 }
}

   // Const
  const actionMap = new Map();
  actionMap.set(WELCOME_INTENT, welcomeIntent);
  actionMap.set(GINGER_INTENT, gingerIntent);
  actionMap.set(HONEY_INTENT, honeyIntent);
  actionMap.set(ICE_CREAM_SANDWICH_INTENT, ice_cream_sandwichIntent);
  actionMap.set(JELLY_BEAN_INTENT, jelly_beanIntent);
  actionMap.set(KITKAT_INTENT, kitkatIntent);
  actionMap.set(LOLLIPOP_INTENT, lollipopIntent);
  actionMap.set(MARSHMALLOW_INTENT, marshmallowIntent);
  actionMap.set(NOUGAT_INTENT, nougatIntent);
  actionMap.set(O_INTENT, oIntent);
  actionMap.set(KERNEL_INTENT, kernelIntent);
  actionMap.set(AOSP_INTENT, aospIntent);
  actionMap.set(ITEM_SELECTED, itemSelected);
  actionMap.set(CAROUSEL, carousel);
  actionMap.set(INTERFACE_INTENT, interfaceIntent);
  actionMap.set(APPLICATION_INTENT, applicationIntent);
  actionMap.set(MEMORY_INTENT, memoryIntent);
  actionMap.set(VIRTUAL_INTENT, virtualIntent);
  actionMap.set(VERSION_INTENT, versionIntent);
  actionMap.set(BYE_INTENT, byeIntent);
  actionMap.set(WHAT_INTENT, whatIntent);
  actionMap.set(NO_INTENT, noIntent);
  actionMap.set(NOTHING_INTENT, nothingIntent);
  actionMap.set(GITHUB_INTENT, githubIntent);
  actionMap.set(STACK_INTENT, stackIntent);
  actionMap.set(HISTORY_INTENT, historyIntent);
  app.handleRequest(actionMap);
});
