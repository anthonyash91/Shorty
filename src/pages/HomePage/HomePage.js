import { useState } from "react";
import Header from "../../components/Header/Header";
import Features from "../../components/Features/Features";
import Faqs from "../../components/Faqs/Faqs";
import SubFooter from "../../components/SubFooter/SubFooter";
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
        <Faqs />
        <SubFooter user={user} setShowRegister={setShowRegister} />
      </main>

      <Footer />
    </>
  );
}
