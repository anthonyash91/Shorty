import { useState } from "react";
import Header from "../../components/HomePage/Header/Header";
import Features from "../../components/HomePage/Features/Features";
import Faqs from "../../components/HomePage/Faqs/Faqs";
import SubFooter from "../../components/HomePage/SubFooter/SubFooter";
import Footer from "../../components/Footer/Footer";

export default function HomePage({
  user,
  domainName,
  setUser,
  globalLink,
  createGlobalLink,
  newGlobalLink,
  handleChange,
  showShortenedUrl,
  setShowShortenedUrl,
  createUserLink,
  userLink,
  newUserLink,
  setNewUserLink,
  handleUserLinkChange,
  setNewGlobalLink,
}) {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Header
        user={user}
        domainName={domainName}
        setUser={setUser}
        globalLink={globalLink}
        createGlobalLink={createGlobalLink}
        newGlobalLink={newGlobalLink}
        handleChange={handleChange}
        showShortenedUrl={showShortenedUrl}
        setShowShortenedUrl={setShowShortenedUrl}
        createUserLink={createUserLink}
        userLink={userLink}
        newUserLink={newUserLink}
        setNewUserLink={setNewUserLink}
        handleUserLinkChange={handleUserLinkChange}
        setNewGlobalLink={setNewGlobalLink}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
      />

      <main>
        <Features user={user} setShowRegister={setShowRegister} />
        <Faqs user={user} />
        <SubFooter user={user} setShowRegister={setShowRegister} />
      </main>

      <Footer />
    </>
  );
}
