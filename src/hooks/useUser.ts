import { atom, useAtom } from "jotai";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../../vendor/facebook";
import { useEffect } from "react";
import {
  useAddFacebookUserLazyQuery,
  useAuthLazyQuery,
  useAuthQuery,
} from "./generated/graphql";

const STORAGE_KEY = "@user_storage_Key";

type User = {
  state: "initilizing" | "loggedIn" | "loggedOut";
  name?: string;
  token?: string;
  provider?: string;
};
type persitedUser = {
  name: string;
  token: string;
  provider: string;
};
const userAtom = atom<User | undefined>({
  state: "initilizing",
});
export const useUser = () => {
  const [user, _setUser] = useAtom(userAtom);
  const [authQuery, { loading: authLoading }] = useAuthLazyQuery();
  const [addFacebookQuery, { loading: addFacebookLoading }] =
    useAddFacebookUserLazyQuery();

  const setUser = (user: User) => {
    _setUser(user);
    AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        name: user.name,
        token: user.token,
        provider: user.provider,
      })
    );
  };

  useEffect(() => {
    if (user.state !== "initilizing") return;
    loadUser((persitedUser) => {
      if (persitedUser) {
        _setUser({
          ...persitedUser,
          state: "loggedIn",
        });
      } else {
        _setUser((state) => ({
          ...state,
          state: "loggedOut",
        }));
      }
    });
  }, [user.state]);

  return {
    user,
    loading: addFacebookLoading || authLoading,
    logout: async () => {
      await AsyncStorage.removeItem(STORAGE_KEY);
      _setUser({
        name: "",
        token: "",
        provider: "",
        state: "loggedOut",
      });
    },
    loginWidthFacebook: async () => {
      try {
        const maybeUser = await login();
        if (!maybeUser) return;
        const authQueryResult = await authQuery({
          variables: {
            id: maybeUser.id,
            provider: "facebook",
          },
        });

        const hasUser = authQueryResult.data.auth;
        if (!hasUser) {
          const addResult = await addFacebookQuery({
            variables: {
              id: maybeUser.id,
              name: maybeUser.name,
            },
          });

          if (addResult.data.addFacebookUser) {
            setUser({
              provider: "facebook",
              state: "loggedIn",
              name: addResult.data.addFacebookUser.user.name,
              token: addResult.data.addFacebookUser.token,
            });
          }
        } else {
          setUser({
            provider: "facebook",
            state: "loggedIn",
            name: authQueryResult.data.auth.user.name,
            token: authQueryResult.data.auth.token,
          });
        }
      } catch (error) {
        console.log("what");
        console.log(error);
      }
    },
  };
};

async function loadUser(userLoaded: (user: persitedUser | null) => void) {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    if (value !== null) {
      const user: persitedUser = JSON.parse(value);
      userLoaded(user);
    } else {
      userLoaded(null);
    }
  } catch (e) {
    console.log(e);
    // error reading value
  }
}
