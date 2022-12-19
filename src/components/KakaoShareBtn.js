import React from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  const url = "https://super-arithmetic-9054ae.netlify.app/";
  const resultUrl = window.location.href;

  console.log(resultUrl);

  React.useEffect(() => {
    Kakao.cleanup();
    Kakao.init("0894ed00d06dabc740077263d19ae40e");
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "😼예비집사 판별기 결과😼",
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${data.name}입니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button
      onClick={shareKakao}
      className="btn-warning"
      style={{
        width: 170,
        fontFamily: "BMHANNA",
        fontSize: 25,
        marginTop: 20,
        marginLeft: 20,
        color: "white",
      }}
    >
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
