export default function FilmGrid({ results, watchlist, onAdd }) {
  if (results.length === 0) return null

  return (
    <section style={styles.wrapper}>
      {results.map((movie) => {
        const isAdded = watchlist.some((m) => m.id === movie.id)

        return (
          <div key={movie.id} style={styles.card}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                style={styles.poster}
              />
            ) : (
              <div style={styles.noPoster}>No Image</div>
            )}
            <div style={styles.info}>
              <h2 style={styles.title}>{movie.title}</h2>
              <p style={styles.year}>
                {movie.release_date ? movie.release_date.slice(0, 4) : 'Unknown'}
              </p>
              <p style={styles.overview}>{movie.overview}</p>
              <button
                style={{
                  ...styles.button,
                  backgroundColor: isAdded ? '#333333' : '#cc0000',
                  cursor: isAdded ? 'default' : 'pointer',
                }}
                onClick={() => !isAdded && onAdd(movie)}
              >
                {isAdded ? '✓ Added' : '+ Add to Watchlist'}
              </button>
            </div>
          </div>
        )
      })}
    </section>
  )
}

const styles = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#1a1a1a',
    border: '1px solid #2a2a2a',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  poster: {
    width: '100%',
    display: 'block',
  },
  noPoster: {
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',
    color: '#444444',
  },
  info: {
    padding: '16px',
  },
  title: {
    fontSize: '1.1rem',
    color: '#e8e8e8',
    marginBottom: '6px',
  },
  year: {
    fontSize: '0.85rem',
    color: '#cc0000',
    marginBottom: '10px',
  },
  overview: {
    fontSize: '0.85rem',
    color: '#888888',
    lineHeight: '1.5',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    marginBottom: '12px',
  },
  button: {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    color: '#e8e8e8',
    fontFamily: 'Georgia, serif',
    fontSize: '0.9rem',
  },
}