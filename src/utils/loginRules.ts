const validatePassword = () => {
  return (_rule: string, value: string, callback: (error?: Error) => void) => {
    if (value.length < 6) {
      callback(new Error("密码不能少于 6 位"));
    } else {
      callback();
    }
  };
};

export { validatePassword };
