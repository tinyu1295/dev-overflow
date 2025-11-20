"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import { success } from "zod";

function page() {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", username: "", name: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
}

export default page;
