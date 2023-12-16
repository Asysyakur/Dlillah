import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import HeaderPage from "../components/HeaderPage";

function RiwayatPesan({ navigation }) {

  const [kategori, setKategori] = useState([
    {
      keterangan: "Dalam Proses",
    },
    {
      keterangan: "Sudah Bayar",
    },
  ]);

  const [seleksiKategori, setSeleksiKategori] = useState({
    keterangan: "Dalam Proses",
  });

  const [dataBarang, setDataBarang] = useState([
    {
      name: "Pure Centella Acne Calming Toner",
      price: "Rp.116.000",
      date: "1 Nov 2023",
      image: "https://i.ibb.co/8x4Mk6n/pure.png",
    },
    {
      name: "Skintific Ceramide",
      price: "Rp.115.000",
      date: "14 Nov 2023",
      image: "https://i.ibb.co/12sC6fK/cera.png",
    },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View>
        <FlatList
          /*yg kategori keterangan riwayat pesanan*/
          data={kategori}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ fontSize: 1 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor:
                  seleksiKategori.keterangan == item.keterangan
                    ? "#3DB4A8"
                    : "#FFFFFF",
                elevation: 3,
                marginBottom: 10,
                marginVertical: 16,
                paddingHorizontal: 50,
                paddingVertical: 20,
              }}
            >
              <Text
                style={{
                  color:
                    seleksiKategori.keterangan == item.keterangan
                      ? "#FFFFFF"
                      : "#3DB4A8",
                }}
              >
                {item.keterangan}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          /*yg list riwayat pesanan*/
          data={dataBarang}
          showsVerticalScrollIndicator={false}
          style={{ fontSize: 1 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                elevation: 3,
                marginBottom: 10,
                marginVertical: 16,
                paddingHorizontal: 50,
                paddingVertical: 20,
              }}
            >
              <Image
                source={{ url: item.image }}
                style={{ width: 50, height: 50, justifyContent: "left" }}
                resizeMode={"cover"}
              />
              <Text
                style={{
                  color: "#212121",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "#212121",
                  fontSize: 14,
                  fontWeight: "normal",
                }}
              >
                {item.date}
              </Text>
              <Text
                style={{
                  color: "#528BF9",
                  fontSize: 18,
                  fontWeight: "bold",
                  alignItems: "right",
                }}
              >
                {item.price}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  // ... tambahkan gaya lain yang diperlukan di sini
});

export default RiwayatPesan;
