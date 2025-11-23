const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  TAGS: (tagName: string) => `/tags/${tagName}`,
  PROFILE: (_id: string) => `/profile/${_id}`,
  ASK_QUESTION: (_id: string) => `/ask-question/${_id}`,
};

export default ROUTES;
