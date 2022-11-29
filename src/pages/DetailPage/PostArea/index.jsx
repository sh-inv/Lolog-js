import styled from 'styled-components';
import UserBox from '../../../components/UserBox';

const PostArea = ({ postData }) => {
  console.log(postData);
  return (
    <PostAreaContainer>
      <div className='post-area-header'>
        <h1>title</h1>
        <div className='info-wrapper'>
          <div className='information'>
            <span className='user-name'>userid</span>
            <span className='separator'>&#183;</span>
            <span>6일 전</span>
          </div>
        </div>
        <div className='tags-wrapper'>
          <a href=''>백엔드</a>
        </div>
        <div className='snb-standard-positioner'>
          <div className='left-snb'>
            <div className='left-snb-content'>
              <div className='like-icon'>heart</div>
              <div className='like-count'>98</div>
              <div className='share-icon'>share</div>
            </div>
          </div>
          <div className='right-snb'>
            <div className='right-snb-content'>
              <div style={{ marginLeft: '0px' }}>
                <a href=''>10월</a>
              </div>
              <div style={{ marginLeft: '12px' }}>
                <a href=''>많은 면접을 보며 느낀 점</a>
              </div>
              <div style={{ marginLeft: '24px' }}>
                <a href=''>두둥탁</a>
              </div>
            </div>
          </div>
        </div>
        <div className='series-wrapper'>
          <h2>
            <a href=''>series-title</a>
          </h2>
          <div className='bookmark-icon'>bookmark</div>
          <div className='series-list-wrapper'>
            <div className='list-route-toggle'>
              <div className='arrow-icon'>arrow</div>
              목록 보기
            </div>
            <div className='list-route-btn'>
              <div className='series-number'>6/6</div>
              <div className='btn-wrapper'>
                <button className='pre'></button>
                <button className='next'></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className='post-area-thumbnail' src='' alt='post-area-thumbnail' />
      <div className='post-area-content'>
        <div className='content'>content</div>
      </div>
      <UserBox className='post-area-user-info' />
    </PostAreaContainer>
  );
};

const PostAreaContainer = styled.div`
  margin-top: 5.5rem;

  .post-area-header {
    h1 {
      font-size: 3rem;
      line-height: 1.5;
      letter-spacing: -0.004em;
      margin-top: 0px;
      font-weight: 800;
      color: var(--text1);
      margin-bottom: 2rem;
      word-break: keep-all;
      transition: color 0.125s ease-in 0s;
    }

    .info-wrapper {
      -webkit-box-align: center;
      align-items: center;
      font-size: 1rem;
      color: var(--text2);
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      .information {
        .user-name {
          color: var(--text1);
          font-weight: bold;
        }
        .separator {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
      }
    }

    .tags-wrapper {
      margin-top: 0.875rem;
      margin-bottom: -0.875rem;
      min-height: 0.875rem;
      a {
        margin-bottom: 0.875rem;
        background: var(--bg-tag);
        padding-left: 1rem;
        padding-right: 1rem;
        height: 2rem;
        border-radius: 1rem;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        margin-right: 0.875rem;
        color: var(--primary1);
        text-decoration: none;
        font-weight: 500;
        font-size: 1rem;
      }
    }
    .snb-standard-positioner {
      position: relative;
      margin-top: 2rem;
      .left-snb {
        position: absolute;
        left: -7rem;
        .left-snb-content {
          position: fixed;
          top: 112px;
          width: 4rem;
          background: var(--bg-element2);
          border: 1px solid var(--border4);
          border-radius: 2rem;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          -webkit-box-align: center;
          align-items: center;
          .like-icon,
          .share-icon {
            height: 3rem;
            width: 3rem;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            background: var(--bg-element1);
            border: 1px solid var(--border3);
            border-radius: 1.5rem;
            color: var(--text3);
            cursor: pointer;
            z-index: 5;
            svg {
              width: 24px;
              height: 24px;
            }
          }
          .like-count {
            margin-top: 0.5rem;
            color: var(--text2);
            line-height: 1;
            font-size: 0.75rem;
            margin-bottom: 1rem;
            font-weight: bold;
          }
        }
      }
      .right-snb {
        position: absolute;
        left: 100%;
        .right-snb-content {
          position: fixed;
          top: 112px;
          width: 240px;
          margin-left: 5rem;
          border-left: 2px solid var(--border4);
          padding: 0.25rem 0.75rem;
          color: var(--text3);
          line-height: 1.5;
          font-size: 0.875rem;
          max-height: calc(100vh - 128px);
          overflow: hidden auto;
          a {
            color: inherit;
          }
        }
      }
    }

    .series-wrapper {
      margin-top: 2rem;
      padding: 2rem 1.5rem;
      background: var(--bg-element2);
      border-radius: 8px;
      box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
      position: relative;
      .bookmark-icon {
        position: absolute;
        right: 1.5rem;
        top: 0px;
      }
      .series-list-wrapper {
        margin-top: 3rem;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        .list-route-toggle {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          margin-left: -5px;
          color: var(--text2);
          line-height: 1;
          cursor: pointer;
          .arrow-icon {
            margin-right: 0.25rem;
            color: var(--text1);
            font-size: 1.5rem;
          }
        }
        .list-route-btn {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          .series-number {
            font-size: 0.875rem;
            color: var(--text3);
          }
          .btn-wrapper {
            display: flex;
            margin-left: 1.125rem;
            button {
              width: 1.5rem;
              height: 1.5rem;
              border-radius: 50%;
              outline: none;
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              -webkit-box-pack: center;
              justify-content: center;
              font-size: 1.25rem;
              color: var(--primary1);
              background: var(--bg-element1);
              border: 1px solid var(--border4);
              padding: 0px;
              cursor: pointer;
              svg {
                color: var(--primary1);
              }
            }
          }
        }
      }
    }
  }

  .post-area-thumbnail {
    max-height: 100vh;
    max-width: 100%;
    width: auto;
    margin: 2rem auto 0px;
    height: auto;
    object-fit: contain;
    display: block;
  }

  .post-area-content {
    width: 768px;
    margin: 5rem auto 0px;
    .content {
      font-size: 1.125rem;
      color: var(--text1);
      transition: color 0.125s ease-in 0s;
      line-height: 1.7;
      letter-spacing: -0.004em;
      word-break: keep-all;
      overflow-wrap: break-word;
    }
  }

  .user-box-container {
    margin-top: 16rem;
    margin-bottom: 6rem;
    .user-container {
      .user {
        a {
          img {
            width: 8rem;
            height: 8rem;
          }
        }
      }
    }
  }
`;

export default PostArea;
