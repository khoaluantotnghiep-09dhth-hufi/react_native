//Genymotion
//export const API_URL = 'http://10.0.3.2:8000';

//ADV
 export const API_URL = 'http://10.0.2.2:8000';

//export const API_URL = 'http://localhost:8000';
//export const API_URL = 'http://10.0.2.2:3000';
//export const API_URL = 'http://localhost:3000';
//export const API_URL = 'http://127.0.0.1:3000';	
//export const API_URL = 'http://127.0.0.1:8000';

//Ngrok
// export const API_URL = 'http://d2ac-123-20-84-168.ngrok.io';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'pink' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400'
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17
        }}
        text2Style={{
          fontSize: 15
        }}
      />
    ),
    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    tomatoToast: ({ text1, props }) => (
      <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    )
  };
