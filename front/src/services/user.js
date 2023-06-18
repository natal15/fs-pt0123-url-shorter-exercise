export const info = (client) => async () => {
    try {
      const { data: response } = await client.get("/users");
      console.info("> info data: ", response);
      return response.data;
    } catch (error) {
      console.info("> info error: ", error.message);
      return null;
    }
  };