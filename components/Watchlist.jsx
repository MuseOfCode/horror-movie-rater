export default function Watchlist({ watchlist, onRemove, onRate }) {
  if (watchlist.length === 0) return null

  return (
    <section style={styles.wrapper}>
      <h2 style={styles.heading}>Your Watchlist</h2>
      {watchlist.map((movie) => (
        <div key={movie.id} style={styles.item}>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
              alt={movie.title}
              style={styles.poster}
            />
          )}
          <div style={styles.info}>
            <h3 style={styles.title}>{movie.title}</h3>
            <p style={styles.year}>
              {movie.release_date ? movie.release_date.slice(0, 4) : 'Unknown'}
            </p>
            <div style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    ...styles.star,
                    color: star <= movie.userRating ? '#cc0000' : '#333333',
                  }}
                  onClick={() => onRate(movie.id, star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <button
            style={styles.remove}
            onClick={() => onRemove(movie.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </section>
  )
}

const styles = {
  wrapper: {
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '0 20px',
    borderTop: '1px solid #2a2a2a',
    paddingTop: '40px',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#cc0000',
    fontFamily: 'Georgia, serif',
    marginBottom: '24px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 0',
    borderBottom: '1px solid #1a1a1a',
  },
  poster: {
    width: '46px',
    height: '69px',
    objectFit: 'cover',
    borderRadius: '2px',
    flexShrink: 0,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: '1rem',
    color: '#e8e8e8',
    marginBottom: '4px',
  },
  year: {
    fontSize: '0.8rem',
    color: '#888888',
    marginBottom: '8px',
  },
  stars: {
    display: 'flex',
    gap: '4px',
  },
  star: {
    fontSize: '1.4rem',
    cursor: 'pointer',
  },
  remove: {
    background: 'none',
    border: 'none',
    color: '#444444',
    fontSize: '1.2rem',
    cursor: 'pointer',
    flexShrink: 0,
    padding: '4px 8px',
  },
}