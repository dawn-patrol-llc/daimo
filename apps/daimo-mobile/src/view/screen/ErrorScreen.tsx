import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ScrollPellet from "../shared/ScrollPellet";
import Spacer from "../shared/Spacer";
import { ErrorBanner } from "../shared/error";
import { ParamListMain } from "../shared/nav";

type Props = NativeStackScreenProps<ParamListMain, "LinkErrorModal">;

export function ErrorScreen(props: Props) {
  const { displayTitle, displayMessage, showDownloadButton } =
    props.route.params;
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.contentContainer,
          {
            paddingBottom: 32 + bottom,
          },
        ]}
      >
        <ScrollPellet />
        <Spacer h={20} />
        <ErrorBanner
          displayTitle={displayTitle}
          displayMessage={displayMessage}
          showDownloadButton={showDownloadButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  contentContainer: {
    backgroundColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
