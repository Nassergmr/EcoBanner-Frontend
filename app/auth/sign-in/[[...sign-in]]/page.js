import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-[full] mt-6 items-center">
      <Image
        src={"/Images/undraw_forgot_password_re_hxwm.svg"}
        width={600}
        height={500}
        alt=""
        className="lg:block hidden"
      />
      <div className="lg:ml-[10%] mx-auto mt-[10%] lg:mt-0">
        <SignIn routing="path" path="/auth/sign-in" signUpUrl="/auth/sign-up"/>
      </div>
    </div>
  );
}
