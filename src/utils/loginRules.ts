import i18n from "@/i18n";

const validatePassword = () => {
  return (_rule: string, value: string, callback: (error?: Error) => void) => {
    if (value.length < 6) {
      callback(new Error(i18n.global.t("msg.login.passwordRule")));
    } else {
      callback();
    }
  };
};

export { validatePassword };
