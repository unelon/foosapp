import * as Facebook from "expo-facebook";

type FaceBookFoosResult = {
  name: string;
  id: string;
};

export async function login(): Promise<FaceBookFoosResult | undefined> {
  try {
    await Facebook.initializeAsync({
      appId: "1057512601500254",
    });
    const { type, ...result } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });
    const hasToken = "token" in result;

    if (hasToken) {
      const { token } = result;

      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );

      const jsonResult = await response.json();
      console.log("just before login", {
        name: jsonResult.name,
        id: jsonResult.id,
      });
      return {
        name: jsonResult.name,
        id: jsonResult.id,
      };
    }
  } catch (error) {
    console.log(error);
  }
}
