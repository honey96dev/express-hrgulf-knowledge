export default {
  sleep: async (ms) => {
    return new Promise((resolve, reject) => {
      const handle = setTimeout(() => {
        clearTimeout(handle);
        resolve();
      }, ms);
    });
  },
};
