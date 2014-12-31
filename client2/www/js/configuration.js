/**
 * Application configuration file:
 *
 * - REGISTRATION_ENPOINT: if you are using GCM REST service (https://github.com/marlandy/gcm-rest)
 *              as 3rd party server put your app base URL here.
 *              Something like this: http://192.168.1.30:8080/gcm-rest
 *              Considerations: Dont put final slash!!
 *                              "localhost" is not allowed for Android!!!
 * - SENDER_ID: Your Google Developers Console Project Number. Something like this: 231477958021
 */
angular.module('configuration', [])
       .constant('API_BASE_END_POINT','http://10.100.81.233:3010')
       .constant('SENDER_ID','438591146618');
