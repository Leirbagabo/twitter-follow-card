export function Card({ formatUsername,userName, name, isFollowing }) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Avatar"
          src={`https://unavatar.io/twitter/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{formatUsername(userName)}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button ">seguir</button>
      </aside>
    </article>
  );
}
