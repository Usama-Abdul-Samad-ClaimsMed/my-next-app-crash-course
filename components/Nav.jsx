"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut, getProviders, signIn } from "next-auth/react";

const Nav = () => {
  ///
  const [providers, setProviders] = useState(null);

  const isUserLoggedIn = true;

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);

  ////

  return (
    <nav className="w-full flex justify-between py-2 border-2">
      <Link href="/" className="flex gap-2">
        <Image src="/assets/images/logo.svg" width="30" height={30} />
        <p className="logo_text"> Propmtopia</p>
      </Link>

      {/* Mobile Naviagation */}
      <div className=" hidden md:flex">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={30}
                height={30}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
