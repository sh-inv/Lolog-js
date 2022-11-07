import { useState, useEffect } from 'react';
import EditButton from '../EditButton';
import ConfirmModal from '../ConfirmModal';
import styled from 'styled-components';
import { text1, text2, text3, border3 } from '../../styles/color';

const SavesList = () => {
  const [list, setList] = useState([]);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const savesData = [
      {
        title: '[JavaSrcipt] 15. 객체 리터럴',
        contents:
          '객체 리처럴 마지막으로 배열이나 함수가 아닌 객체를 살펴보자. 객체는 여러 개의 변수를 하나의 변수로 묶을 때 사용한다. 여기서 멈출 것이라면 상관없지만 다른 사람의 정보를 추가로 표현하고 싶을 때 문제가 될 수 있다. 이미 상수로 name, month, date, gender 변수를 선언했기에 다른 사람을 표현할 때 이 변수들을 재사용 할 수 없게 된다.',
        created_at: '2022년 10월 3일',
      },
      {
        title: '[JavaScript] 8. undefined, null',
        contents:
          ' Undefined undefined는 보통 반환할 결과가 없을때 돌려주는 값이다. console.log 명령어는 콘솔에 무언가를 출력하지만, 그 자체로는 결과 값이 없기 때문에 undefined 가 반환됩니다. undefined도 자료형이다. 단, undefined랑 false가 같지 않다. 다른 거짓 값도 마찬가지다. Null 다른 자료형으로는 엊적우젖적욱아있다',
        created_at: '2022년 10월 3일',
      },
      {
        title: '[TIL] Git & GitHub',
        contents:
          'Git 깃은 분산 버전 관리 시스템 Version Control System(VCS)이다. 코드 버전을 관리하는 이유 수정할때마다 파일을 새로만들면 관리가 힘들기 때문에 언제든 이전버전의 코드로 돌아갈수있기때문에 이력을 남기기 위해 하나의 프로젝트를 두고 여러명의 개발자들이 협업할 수 있기 때문에 GitHub Github는 Git을 사용한 프로젝트들의',
        created_at: '2022년 9월 13일',
      },
      {
        title: '[TIL] 컴퓨터사고',
        contents:
          '학습 목표 컴퓨터처럼 사고하는 것이 무엇인지 설명할 수 있다. 복잡한 문제를 해결하기 위한 방법은 무엇인지 설명할 수 있다. 프로그래밍의 논리 작성 단계를 알 수 있다. 프로그래밍에서 사용되는 기본적인 데이터 타입을 알 수 있다. 컴퓨터 사고 컴퓨터 사고 = 문제 해결 능력 함수 엊저고젖저곶짤려라 젭알 학습 목표 컴퓨터처럼 사고하는 것이 무엇인지 설명할 수 있다. 복잡한 문제를 해결하기 위한 방법은 무엇인지 설명할 수 있다. 프로그래밍의 논리 작성 단계를 알 수 있다. 프로그래밍에서 사용되는 기본적인 데이터 타입을 알 수 있다. 컴퓨터 사고 컴퓨터 사고 = 문제 해결 능력 함수 엊저고젖저곶짤려라 젭알 학습 목표 컴퓨터처럼 사고하는 것이 무엇인지 설명할 수 있다. 복잡한 문제를 해결하기 위한 방법은 무엇인지 설명할 수 있다. 프로그래밍의 논리 작성 단계를 알 수 있다. 프로그래밍에서 사용되는 기본적인 데이터 타입을 알 수 있다. 컴퓨터 사고 컴퓨터 사고 = 문제 해결 능력 함수 엊저고젖저곶짤려라 젭알 학습 목표 컴퓨터처럼 사고하는 것이 무엇인지 설명할 수 있다. 복잡한 문제를 해결하기 위한 방법은 무엇인지 설명할 수 있다. 프로그래밍의 논리 작성 단계를 알 수 있다. 프로그래밍에서 사용되는 기본적인 데이터 타입을 알 수 있다. 컴퓨터 사고 컴퓨터 사고 = 문제 해결 능력 함수 엊저고젖저곶짤려라 젭알 ',
        created_at: '2022년 5월 28일',
      },
    ];

    setList(savesData);
  }, []);

  const onModal = () => {
    setIsModal(true);
  };

  return (
    <>
      <SavesListContainer>
        {list.map(saves => {
          return (
            <div className='article' key={saves.title}>
              <h3>{saves.title}</h3>
              <p>{saves.contents}</p>
              <section>
                <div className='time'>{saves.created_at}</div>
                <EditButton text='삭제' onClick={onModal} />
              </section>
            </div>
          );
        })}
      </SavesListContainer>
      {isModal && (
        <ConfirmModal
          title='임시 글 삭제'
          message={`임시 저장한 글을 삭제하시겠습니까?\n삭제한 글은 복구할 수 없습니다.`}
          onClose={() => {
            setIsModal(false);
          }}
        />
      )}
    </>
  );
};

const SavesListContainer = styled.div`
  .article {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    line-height: 1.5;

    border-bottom: 1px solid ${border3};

    h3 {
      margin-top: 0px;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      color: ${text1};
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      white-space: normal;
      margin-top: 0px;
      margin-bottom: 1rem;
      font-size: 1rem;
      color: ${text2};
    }

    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .time {
        color: ${text3};
      }

      button {
        color: ${text1};
      }
    }
  }
`;

export default SavesList;
