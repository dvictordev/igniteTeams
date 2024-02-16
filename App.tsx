import { Groups } from "@screens/Groups";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ActivityIndicator, View } from "react-native";
import { Container } from "@screens/Groups/styles";
import { Loading } from "@components/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" animated translucent />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
