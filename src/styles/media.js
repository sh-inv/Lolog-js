// postlist & 헤더 반응형
export const maxWidth1920px = `@media screen and (max-width: 1920px) {
  width: 1376px;
}`;
export const maxWidth1440px = `@media screen and (max-width: 1440px) {
  width: 1024px;
}`;
export const maxWidth1056px = `@media screen and (max-width: 1056px) {
  width: calc(100% - 2rem);
  margin: 0 auto;
}`;
export const minWidth250px = `@media screen and (max-width: 250px) {
  width: 250px;
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
  padding: 2rem 3rem 0 3rem;

  .editor-container {
    width: 50%;
    height: 100%;
  }
  .preview-container {
    width: 50%;
    height: 100%;
  }
}`;
export const writeMaxWidth1440px = `@media screen and (max-width: 1440px) {
  width: 1024px;
}`;
export const writeMaxWidth1056px = `@media screen and (max-width: 1056px) {
  width: calc(100% - 2rem);
  margin: 0 auto;
}`;
export const writeMinWidth250px = `@media screen and (max-width: 250px) {
  width: 250px;
}`;
