import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';
import Thumbnail from '../../../../components/Thumbnail';
import GetPostDate from '../../../../components/GetPostDate';

const EditPost = ({ index, id, contents, src, title, date, movePost }) => {
  const postRef = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'Post',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!postRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = postRef.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      movePost(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'Post',
    item: () => {
      return { id, index };
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(postRef));

  return (
    <PostContainer ref={postRef} style={{ opacity }} data-handler-id={handlerId}>
      <h2>
        <span className='number'>{index + 1}. </span>
        <div className='title'>{title}</div>
      </h2>
      <section>
        <div className='thumbnail-wrapper'>
          <Thumbnail src={src} className={'no-thumbnail'} />
        </div>
        <div className='post-info'>
          <p className='summary'>{contents}</p>
          <GetPostDate postDate={date} />
        </div>
      </section>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  user-select: none;
  margin-bottom: 1rem;
  padding: 1rem;
  background: var(--bg-element1);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 2px;
  cursor: grab;

  :active {
    cursor: grabbing;
  }

  h2 {
    display: flex;
    margin: 0px;
    color: var(--text2);
    line-height: 1.5;
    font-size: 1.325rem;

    .number {
      margin-right: 0.25rem;
      color: var(--text3);
      font-style: italic;
    }

    .title {
      color: inherit;
      text-decoration: none;
      word-break: break-all;
      transition: color 0.125s ease-in 0s;
    }
  }

  section {
    display: flex;
    align-items: flex-start;
    flex: 1 1 0%;
    min-width: 0px;
    height: 6.25rem;
    margin-top: 1rem;
    letter-spacing: -0.004em;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }

    .thumbnail-wrapper {
      img {
        position: inherit;
        margin-right: 1rem;
        width: 12rem;
        height: 6.25rem;
        object-fit: cover;
        box-shadow: rgb(0 0 0 / 15%) 0px 0px 1px 0px;

        @media screen and (max-width: 768px) {
          width: 100%;
          height: 100%;
        }
      }

      .no-thumbnail {
        @media screen and (max-width: 768px) {
          width: 100%;
          height: auto;
        }
      }
    }

    .post-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      -webkit-box-pack: justify;
      height: 100%;
      min-width: 0px;

      .summary {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 0px;
        color: var(--text2);
        font-size: 1rem;
        line-height: 1.5rem;
        overflow: hidden;

        @media screen and (max-width: 768px) {
          margin-top: 0.5rem;
        }
      }

      span {
        color: var(--text3);
        font-size: 0.875rem;

        @media screen and (max-width: 768px) {
          margin-top: 1rem;
        }
      }
    }
  }
`;

export default EditPost;
