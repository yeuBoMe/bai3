import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePress = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if(phoneRegex.test(phoneNumber)) {
        Alert.alert("Thành công", "Số điện thoại hợp lệ!");
    } else Alert.alert("Lỗi", "Số điện thoại không hợp lệ. Vui lòng nhập lại!");
  };

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.textDangNhap}>Đăng nhập</Text>
        </View>
        
        <View style={styles.containerGiua}>
            <View>
                <Text style={styles.textNhapSdt}>Nhập số điện thoại</Text>
                <Text style={styles.textDoanVan}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
                <TextInput style={styles.textInput} 
                           placeholder="Nhập số điện thoại của bạn" 
                           keyboardType="phone-pad"
                           value={phoneNumber} 
                           onChangeText={setPhoneNumber}
                />
            </View>
        </View>

        <View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText} >Tiếp tục</Text>
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
  },
  containerGiua: {
    borderWidth: 1,
    borderColor: "#f3f3f3",
  },
  textDangNhap: {
    marginTop: 50,
    marginBottom: 20,
    fontWeight: "bold",
    justifyContent: "flex-start",
    fontSize: 25,
  },
  textNhapSdt: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: "semibold",
    color: "#023b06",
    marginBottom: 20,
  },
  textDoanVan: {
    fontSize: 18,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 20,
    padding: 10, 
    borderWidth: 0,
    borderColor: "#FFFFFF"

  },
  button: {
    backgroundColor: "#e4e4e4", 
    padding: 15, 
    borderRadius: 5, 
    width: "85%", 
    alignItems: "center",
    marginLeft: 30,
    marginTop: 100,
  },
  buttonText: {
    fontSize: 22,
    color: "#b5b5b5"
  }
});
