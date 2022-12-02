import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails

  const initial = name ? name[0].toUpperCase() : ''

  const likeTextClassName = isLiked ? 'button active' : 'button'

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          //   testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem

/*
import './index.css'

const CommentItem = props => {
  const {arrayList, deleteComment, toggleFavorite} = props
  const {
    id,
    firstNames,
    names,
    comments,
    newClass,
    dates,
    isFavorite,
  } = arrayList
  const imgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const addClass = isFavorite ? 'sky-blue' : ''
  const favButton = () => {
    toggleFavorite(id)
  }
  const delButton = () => {
    deleteComment(id)
  }
  return (
    <li className="comment-item" key={id}>
      <div className="content-holder">
        <p className={`user-icon ${newClass}`}>{firstNames}</p>
        <div className="sub-holder">
          <div className="name-holder">
            <h1 className="username">{names}</h1>
            <p className="time-now">{dates}</p>
          </div>
          <p className="comment-line">{comments}</p>
        </div>
      </div>
      <div className="icons-holder">
        <button type="button" className="like-btn" onClick={favButton}>
          <img src={imgUrl} className="image2" alt="like" />
        </button>
        <p className={`icon-name ${addClass}`}>Like</p>
        <button
          type="button"
          className="del-btn"
          onClick={delButton}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="del-image"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
 */
