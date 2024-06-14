export function Card({ userName, msg }) {
  return (
    <article className="card-container">
      <header className="card-header">
        <img
          alt="Avatar"
          src="https://scontent.cdninstagram.com/v/t51.2885-19/440895678_2208609036158501_568395853570770473_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=g2Rz4lNld-0Q7kNvgH8BW7o&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCyw0xtJBJotZ63O3kO3dwxJJHRBDm9QlvcHKvkwsZ6hw&oe=66338179"
        />
        <div className="status"></div>
        <div>
          <strong className="card-username">{userName}</strong>
          <span className="card-msg">{msg}</span>
          <span className="card-seen">Visto ahora (nove)</span>
        </div>
      </header>
    </article>
  );
}
