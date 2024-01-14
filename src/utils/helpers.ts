const huwaits = async (time = 300) => {
  await new Promise((resolve) => setTimeout(resolve, time));
};


export default {
  huwaits,
};
