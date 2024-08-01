import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-[full]  items-center">
      <Image
        src={"/Images/undraw_team_up_re_84ok (1).svg"}
        width={600}
        height={500}
        alt=""
        className="lg:block hidden mt-6"
      />
      <div className="lg:ml-[10%] mx-auto mt-2">
        <SignUp routing="path" path="/auth/sign-up" signInUrl="/auth/sign-in" />
      </div>
    </div>
  );
}
