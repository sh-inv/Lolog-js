// postlist & 헤더 반응형
export const maxWidth1920px = `@media screen and (max-width: 1920px) {
  width: 1376px;
  .header-fixed {
    .header-content {
      width: 1376px;
    }
    .post-list-nav-bar-container {
      width: 1376px;
    }
  }
}`;
export const maxWidth1440px = `@media screen and (max-width: 1440px) {
  width: 1024px;
  .header-fixed {
    .header-content {
      width: 1024px;
    }
    .post-list-nav-bar-container {
      width: 1024px;
    }
  }
}`;
export const maxWidth1056px = `@media screen and (max-width: 1056px) {
  width: calc(100% - 2rem);
  margin: 0 auto;
  .header-fixed {
    margin: 0 auto;
    .header-content {
      width: calc(100% - 2rem);
    }
    .post-list-nav-bar-container {
      width: calc(100% - 2rem);
    }
  }
}`;
export const maxWidth1024px = `@media screen and (max-width: 1024px) {
  .logo {
    font-size: 1.25rem;
  }
  .right-icons-container {
    .new-post {
       display: none;
    }
  }
}`;
export const minWidth250px = `@media screen and (max-width: 250px) {
  width: 250px;
  .header-fixed {
    .header-content {
      width: 250px;
    }
    .post-list-nav-bar-container {
      width: 250px;
    }
  }
}`;

// search 반응형
export const searchMaxWidth768px = `@media screen and (max-width: 768px) {
  top: 20%;
  .search-box-container {
    width: 90%;
    padding: 0.125rem 1.5rem;
    .search-box-icon {
      width: 1.125rem;
      height: 1.125rem;
      margin-right: 0.5rem;
    }
    .search-box-input {
      font-size: 1.125rem;
    }
  }
}`;

// post 반응형
export const postMaxWidth1056px = `@media screen and (max-width: 1056px) {
  width: calc(50% - 2rem);
  margin: 1rem;
}`;
export const postMaxWidth767px = `@media screen and (max-width: 767px) {
  width: calc(100% - 2rem);
  margin: 1rem;
}`;

//setting 반응형
export const settingMaxWidth1024px = `@media screen and (max-width: 1024px) {
  padding-left: 1rem;
  padding-right: 1rem;
}`;
export const settingMaxWidth768px = `@media screen and (max-width: 768px) {
  width: 100%;
  margin-top: 1.5rem;
}`;
export const settingUserMaxWidth768px = `@media (max-width: 768px) {
  height: auto;
  flex-direction: column;
}`;

export const settingProfileMaxWidth768px = `@media (max-width: 768px) {
  -webkit-box-align: center;
  align-items: center;
  padding-bottom: 1.5rem;
  padding-right: 0px;
}`;
export const settingProfileButtonMaxWidth768px = `@media screen and (max-width: 768px) {
  width: 10rem;
}`;
export const UserProfileImageMaxWidth768px = `@media screen and (max-width: 768px) {
  width: 6rem;
  height: 6rem;
  margin-bottom: 1rem;
}`;
export const UserIntroMaxWidth768px = `@media screen and (max-width: 768px) {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-top: 1px solid var(--border4);
  border-bottom: 1px solid var(--border4);
  border-left: none;
  padding-left: 0px;
}`;
export const UserIntroTitleMaxWidth768px = `@media screen and (max-width: 768px) {
  font-size: 1.25rem;
}`;
export const UserContentsMaxWidth768px = `@media screen and (max-width: 768px) {
  margin-top: 0rem;
}`;
export const UserContentsBoxMaxWidth768px = `@media screen and (max-width: 768px) {
  flex-direction: column;
}`;
export const UserContentsTitleMaxWidth768px = `@media screen and (max-width: 768px) {
  margin-bottom: 0.5rem;
}`;

//write 반응형
export const writeMaxWidth1920px = `@media screen and (max-width: 1920px) {
  width: 100%;
  height: 100%;

  .editor-container,
  .preview-container {
    width: 50%;
    padding: 6rem 3rem 4rem 3rem;
  }
}`;
export const writeMaxWidth1024px = `@media screen and (max-width: 1024px) {
  .reverse-position-btn-container {
    display: none;
  }
  .editor-container {
    width: 100%;
    height: 100%;
    padding: 2rem 3rem 4rem 3rem;
    .editor-footer-positioner,
    .ql-toolbar.ql-snow {
      left: 0;
      width: 100%;
    }
  }
  .preview-container {
    display: none;
  }
  .upload-modal-container {
    align-items: flex-start;
    padding-top: 2rem;
    padding-bottom: 2rem;
    overflow: auto;
    .upload-modal-content {
      width: 704px;
    }
  }
}`;
export const writeMaxWidth768px = `@media screen and (max-width: 768px) {
  .editor-container {
    padding: 1rem;
    .editor-title {
      height: 43px;
      font-size: 1.8rem;
    }
    .dividing-line {
      margin-top: 1rem;
      margin-bottom: 0.66rem;
    }
    .tag-input {
      padding-bottom: 1rem;
      line-height: 1.5rem;
      font-size: 0.75rem;
    }
    .toolbar-container {
      flex-wrap: unset;
      overflow-x: auto;
      button {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    .write-zone {
      textarea {
        font-size: 0.875rem;
      }
    }
  }
  .upload-modal-container {
    align-items: flex-start;
    padding: 2rem 1rem;
    overflow: auto;
    .upload-modal-content {
      flex-direction: column;
      .upload-modal-dividing-line {
        display: none;
      }
      .modal-btns-container {
        margin-top: 2rem;
      }
    }
  }
}`;

//post viewer 반응형
export const postViewerMaxWidth1024px = `@media screen and (max-width: 1024px) {
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 1.25rem;
  }
}`;
export const postViewerMaxWidth768px = `@media screen and (max-width: 768px) {
  width: 100%;
  font-size: 1rem;
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.25rem;
  }
  h1, h2, h3, h4 {
    margin-bottom: 0.75rem;
  }
}`;

// detail page 반응형
export const detailPageMaxWidth1920px = `@media screen and (max-width: 1920px) {
  width: 768px;
  margin: 0 auto;
  padding-bottom: 4rem;
  .post-area-container {
    .information-container {
      display: none;
    }
  }
  
}`;
export const detailPageMaxWidth1024px = `@media screen and (max-width: 1024px) {
  .post-area-container {
    .post-header-title {
      font-size: 2.25rem;
    }
    .authority-container {
      margin-top: -0.5rem;
      margin-bottom: 1.5rem;
    }
    .information-container {
      display: flex;
    }
    .snb-container {
      display: none;
    }
    .content-container {
      padding: 0 1rem;
      width: 768px;
    }
  }
}`;
export const detailPageMaxWidth768px = `@media screen and (max-width: 768px) {
  width: 100%;
  margin: 0;
  padding: 0 1rem;

  .information-container,
  .post-area-container {
  .series-container,
  .authority-container {
    font-size: 0.875rem;
  }
  
  .content-container {
    width: 100%;
  }
}
}`;

//series 반응형
export const SeriesMaxWidth768px = `@media screen and (max-width: 768px) {
  margin: 0px;
  padding-left: 1rem;
  padding-right: 1rem;
}`;
export const SeriesPostMaxWidth768px = `@media screen and (max-width: 768px) {
  width: 100%;
  padding: 0px;
  margin-bottom: 3rem;
}`;
export const SeriesInfoMaxWidth768px = `@media screen and (max-width: 768px) {
  line-height: 1;
}`;

//about 반응형
export const AboutMaxWidth768px = `@media screen and (max-width: 768px) {
  padding-left: 1rem;
  padding-right: 1rem;
}`;
