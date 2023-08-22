import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    // redirect('/sign-in');
    return;
  }

  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center ">
            <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
              <p className="text-xl font-bold">STORE</p>
            </Link>
            <MainNav data={categories} />
          </div>
          <div className="flex items-center space-x-4">
            <NavbarActions />
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
