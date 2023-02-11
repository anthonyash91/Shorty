export default function NoShorties({ user }) {
  return (
    <>
      {user?.links.length === 0 ? (
        <>
          <div className="link-container flex">
            <div className="link-container-inside flex">
              <div className="link-container-section jc">
                Hmm... it looks like you haven't saved any Shorties yet.
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
