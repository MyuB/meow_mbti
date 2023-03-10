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
        title: "๐ผ์๋น์ง์ฌ ํ๋ณ๊ธฐ ๊ฒฐ๊ณผ๐ผ",
        description: `์๋น ์ง์ฌ๋์ด ๊ณ ์์ด๋ฅผ ํค์ด๋ค๋ฉด ๊ฐ์ฅ ์๋ง๋ ๊ณ ์์ด๋ ${data.name}์๋๋ค.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "๋๋ ํ์คํธํ๋ฌ๊ฐ๊ธฐ",
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
      ์นด์นด์คํก ๊ณต์ ํ๊ธฐ
    </Button>
  );
};

export default KakaoShareButton;
