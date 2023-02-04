import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function LinkTree() {
  const [userLinkTree, setuserLinkTree] = useState({});
  let { name } = useParams();

  const getUserLinkTree = async () => {
    try {
      const response = await fetch(`/api/users/linkTree/${name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setuserLinkTree(data);
    } catch (error) {}
  };

  useEffect(() => {
    getUserLinkTree();
  }, []);

  return (
    <>
      <div id="link-tree-bg" />
      <div id="link-tree-container">
        {userLinkTree.icon ? <img src={userLinkTree.icon} alt="icon" /> : ""}
        {userLinkTree.linkTree?.length
          ? userLinkTree.linkTree?.map((link, i) => {
              const { shortUrl, url, title } = link;
              return (
                <a
                  class="lib-link"
                  href={`http://shrl.io/${shortUrl}`}
                  target="_blank"
                  key={i}
                >
                  {title ? title : url}
                </a>
              );
            })
          : "Add links to your Link Tree from your dashboard."}
        <div>
          Page provided by <a href="https://shrl.io">Shorty</a>.
        </div>
      </div>
    </>
  );
}
