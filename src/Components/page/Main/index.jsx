import { BrowserView, MobileView } from 'react-device-detect';
import * as S from './styled'
import BackGroundImg from '../../organisms/BackGround';
import Button from '../../atoms/Button';




const Main = () => {
  return (
    <BrowserView>
      <BackGroundImg>
        <S.Wrap>
          <S.Title>UI테스트 문제</S.Title>
          <S.Text>이 웹사이트는 정보처리기능사 공부를 위해 제작되었습니다.</S.Text>
          <S.MainBtn>
            <Button type={'button'} value={"시작하기"} />
          </S.MainBtn>
        </S.Wrap>
      </BackGroundImg>
    </BrowserView>
  );
}

export default Main;