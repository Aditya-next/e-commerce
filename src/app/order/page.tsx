import { redirect } from "next/navigation";
import { verifySession } from "../lib/dal";
import PlaceOrder from "../components/ui/PlaceOrder";

export default async function Page() {
  const session = await verifySession();
  const auth = session.isAuth;

  if (!auth) {
    redirect("/login");
  }
  return (
    <PlaceOrder/>
  )
}
