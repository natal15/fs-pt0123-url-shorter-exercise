export const login = {
  email: {
    props: {
      id: "email",
      placeholder: "user@user.com",
    },
    validation: {
      required: true,
    },
  },
  username: {
    props: {
      id: "username",
      placeholder: "user",
    },
    validation: {
      required: true,
    },
  },
  password: {
    props: {
      id: "password",
      type: "password",
      placeholder: "******",
    },
    validation: {
      required: true,
      minLength: 4,
    },
  },
  errors: {
    required: "This field is mandatory",
    minLength: "4 length at least is required",
  },
};
