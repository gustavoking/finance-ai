import NavBar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SubscritionPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/login");
  }

  return <NavBar />;
};

export default SubscritionPage;
