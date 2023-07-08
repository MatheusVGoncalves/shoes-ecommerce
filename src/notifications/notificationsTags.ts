import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate(){
    OneSignal.sendTags({
        'user_name': 'Érika',
        'user_email': 'eerikasato@gmail.com'
    })
}

export function tagCartUpdate(itemsCount: string) {
    OneSignal.sendTag('cart_items_count', itemsCount)
}

