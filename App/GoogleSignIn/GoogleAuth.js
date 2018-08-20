import { AndroidClientID, iOSClientID } from "./ClientID";
import Expo from "expo";

async function signInWithGoogleAuthAsync() {
    try {
        const result = await Expo.Google.logInAsync({
            androidClientId: AndroidClientID,
            iosClientId: iOSClientID,
        })

        if (result.type === 'success') {
            return result.accessToken
        }

    } catch (e) {
        console.log(e)
    }
}